import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/home.vue'; // 确保使用小写的文件名
import CustomerIndex from '@/views/customer-index.vue';  // 引入新页面组件
import AnalyzeAssistant from '@/components/analyzeassistant.vue'; // 引入分析助手组件（改为小写）
import ProjectListPage from '@/views/project-list.vue'; // 确保文件名和路径全小写

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/customer-index',
    name: 'CustomerIndex',
    component: CustomerIndex,
  },
 
  {
    path: '/analyze-assistant',
    name: 'analyze-assistant',
    component: AnalyzeAssistant,
  },
  {
    path: '/projects',
    name: 'ProjectList',
    component: ProjectListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
