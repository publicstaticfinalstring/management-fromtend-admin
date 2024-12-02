import axios from 'axios';

// 定义后端 API 的基础 URL
const API_URL = 'http://192.168.0.108:8000/api/customers/customer-statistics/';

// 定义获取客户信息的方法
export const getCustomers = () => {
    return axios.get(API_URL);  // 向后端获取客户数据
};

// 其他公共信息的方法可以在这里添加