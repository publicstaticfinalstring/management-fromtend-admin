import axios from 'axios';

const TASK_API_URL = 'http://127.0.0.1:8000/api/tasks/';

export const getTasks = () => {
    return axios.get(TASK_API_URL);  // 向后端获取任务信息
};

// 其他任务相关的方法可以在这里添加