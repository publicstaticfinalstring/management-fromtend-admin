<template>
  <div class="container">
    <div class="left-space"></div> <!-- 留空作为左侧部分 -->
    <div class="right-content">
      <h2>客户列表</h2>
      <div class="customer-table">
        <!-- 表头 -->
        <div class="customer-row customer-header">
          <span class="customer-item">客户名称</span>
          <span class="customer-item">合作开始时间</span>
          <span class="customer-item">已签订合同数量</span>
          <span class="customer-item">累计合同总额</span>
          <span class="customer-item">售前项目金额</span>
          <span class="customer-item">已完成待收款金额</span>
          <span class="customer-item">当前项目投入工时</span>
          <span class="customer-item">当前项目数量</span>
          <span class="customer-item">状态</span>
          <span class="customer-item">操作</span>
        </div>

        <!-- 客户列表项 -->
        <t-list>
          <t-list-item v-for="customer in customers" :key="customer.id">
            <div class="customer-row">
              <span class="customer-item">{{ customer.name }}</span>
              <span class="customer-item">{{ customer.cooperation_start_date }}</span>
              <span class="customer-item">{{ customer.contract_count }}</span>
              <span class="customer-item">{{ customer.total_contract_amount }}</span>
              <span class="customer-item">{{ customer.presales_project_amount }}</span>
              <span class="customer-item">{{ customer.completed_receivable_amount }}</span>
              <span class="customer-item">{{ customer.current_project_hours }}</span>
              <span class="customer-item">{{ customer.current_project_count }}</span>
              <span class="customer-item">{{ customer.status }}</span>
              <span class="customer-item customer-actions">
                <t-link theme="primary" hover="color" @click="handleEdit(customer)" style="margin-right: 8px;">编辑</t-link>
                <t-link theme="danger" hover="color" @click="handleDelete(customer)">删除</t-link>
              </span>
            </div>
          </t-list-item>
        </t-list>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCustomers } from '@/services/api'; // 获取客户数据的 API

export default {
  name: 'CustomerList',
  setup() {
    const customers = ref([]);

    onMounted(() => {
      getCustomers()
        .then(response => {
          customers.value = response.data;
        })
        .catch(error => {
          console.error('获取客户数据失败:', error);
        });
    });

    const handleEdit = (customer) => {
      console.log('编辑客户:', customer);
    };

    const handleDelete = (customer) => {
      console.log('删除客户:', customer);
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
.container {
  display: flex;
  justify-content: space-between;
  padding: 0px;
}

.left-space {
  width: 0%; /* 左侧留40%宽度 */
}

.right-content {
  width: 100%; /* 表格占60%的宽度 */
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  max-width: 500px;
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
