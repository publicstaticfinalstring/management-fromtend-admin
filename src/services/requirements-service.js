import axios from 'axios';

const REQUIREMENT_API_URL = 'http://127.0.0.1:8000/api/requirements/';

export const getRequirements = () => {
    return axios.get(REQUIREMENT_API_URL);  // 向后端获取需求信息
};

// 其他需求相关的方法可以在这里添加