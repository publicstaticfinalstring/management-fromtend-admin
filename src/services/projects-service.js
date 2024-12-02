import axios from 'axios';

const PROJECT_API_URL = 'http://127.0.0.1:8000/api/projects/';

export const getProjects = () => {
    return axios.get(PROJECT_API_URL);  // 向后端获取项目信息
};

// 其他项目相关的方法可以在这里添加，比如创建项目、更新项目等