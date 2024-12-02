<template>
  <div>
    <h2>客户列表 (字段分列显示)</h2>
    <div class="customer-table">
      <!-- 表头 -->
      <div class="customer-row customer-header">
        <span class="customer-item">客户名称</span>
        <span class="customer-item">联系人</span>
        <span class="customer-item">联系邮箱</span>
        <span class="customer-item">联系电话</span>
        <span class="customer-item">地址</span>
        <span class="customer-item">公司规模</span>
        <span class="customer-item">行业</span>
        <span class="customer-item">创建时间</span>
        <span class="customer-item">更新时间</span>
        <span class="customer-item">操作</span>
      </div>

      <!-- 客户列表项 -->
      <t-list>
        <t-list-item v-for="customer in customers" :key="customer.id">
          <div class="customer-row">
            <span class="customer-item">{{ customer.name }}</span>
            <span class="customer-item">{{ customer.contact_person }}</span>
            <span class="customer-item">{{ customer.contact_email }}</span>
            <span class="customer-item">{{ customer.phone }}</span>
            <span class="customer-item">{{ customer.address }}</span>
            <span class="customer-item">{{ customer.company_size ? customer.company_size : '暂无数据' }}</span>
            <span class="customer-item">{{ customer.industry ? customer.industry : '暂无数据' }}</span>
            <span class="customer-item">{{ customer.created_at }}</span>
            <span class="customer-item">{{ customer.updated_at }}</span>
            <span class="customer-item customer-actions">
              <t-link theme="primary" hover="color" @click="handleEdit(customer)" style="margin-right: 8px;">编辑</t-link>
              <t-link theme="danger" hover="color" @click="handleDelete(customer)">删除</t-link>
            </span>
          </div>
        </t-list-item>
      </t-list>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCustomers } from '@/services/api'; // 假设您有一个获取客户数据的API方法

export default {
  name: 'CustomerList',
  setup() {
    // 定义动态数据
    const customers = ref([]);

    // 获取客户数据
    onMounted(() => {
      getCustomers()
        .then(response => {
          customers.value = response.data;  // 将从API获取的数据赋值到 customers
        })
        .catch(error => {
          console.error('获取客户数据失败:', error);
        });
    });

    // 编辑客户的处理函数
    const handleEdit = (customer) => {
      console.log('编辑客户:', customer);
      // 这里可以跳转到编辑页面或者打开编辑对话框
    };

    // 删除客户的处理函数
    const handleDelete = (customer) => {
      console.log('删除客户:', customer);
      // 这里可以执行删除操作，例如调用删除 API
    };

    return {
      customers,
      handleEdit,
      handleDelete,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  text-align: center;
}

.customer-table {
  width: 100%;
}

.customer-header {
  font-weight: bold;
  background-color: #f5f5f5;
}

.customer-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.customer-item {
  flex: 1;
  text-align: left;
  padding-right: 10px;
  max-width: 200px;
  word-wrap: break-word;
  white-space: normal;
}

.customer-row:nth-child(even) {
  background-color: #f9f9f9;
}

.customer-actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
