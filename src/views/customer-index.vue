<template>
  <div class="customer-index-container">

    <div class="table-container">
      <CustomerList :customers="customers" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CustomerList from '../components/customers/customer-list.vue';

export default {
  name: 'CustomerIndex',
  components: {
    CustomerList,
  },
  data() {
    return {
      customers: [], // 客户列表
    };
  },
  mounted() {
    this.fetchCustomerStatistics(); // 获取客户统计数据
  },
  methods: {
    fetchCustomerStatistics() {
      axios
        .get('http://0.0.0.0:8000/api/customers/customer-statistics/')
        .then((response) => {
          this.customers = this.mergeCustomerData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching customer data:', error);
        });
    },
    mergeCustomerData(data) {
      const mergedData = [];

      // 合并合同数据
      data.contract_data.forEach((contract) => {
        const customer = {
          name: contract.customer__name,
          contract_count: contract.contract_count,
          total_contract_amount: contract.total_contract_amount,
        };
        mergedData.push(customer);
      });

      // 合并售前项目数据
      data.presales_data.forEach((presales) => {
        const customer = mergedData.find(
          (c) => c.name === presales.customer__name
        );
        if (customer) {
          customer.presales_project_amount = presales.presales_project_amount;
        }
      });

      // 合并项目管理数据
      data.project_data.forEach((project) => {
        const customer = mergedData.find(
          (c) => c.name === project.customer__name
        );
        if (customer) {
          customer.current_project_count = project.current_project_count;
          customer.invested_hours = project.invested_hours;
        }
      });

      return mergedData;
    },
    filterCustomersByProvince(provinceName) {
      console.log('选择的省份:', provinceName);
      this.customers = this.customers.filter(
        (customer) => customer.province === provinceName
      );
    },
  },
};
</script>

<style scoped>
.customer-index-container {
  display: flex;
  justify-content: space-between;
  background-color: #f7f9fc;
}

.table-container {
  flex: 0 0 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
