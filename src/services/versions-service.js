import axios from 'axios';

const VERSION_API_URL = 'http://127.0.0.1:8000/api/versions/';

export const getVersions = () => {
    return axios.get(VERSION_API_URL);  // 向后端获取版本信息
};

// 其他版本相关的方法可以在这里添加