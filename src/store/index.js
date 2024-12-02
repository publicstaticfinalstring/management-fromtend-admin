// src/store/index.js
import { createStore } from 'vuex';
import { getCustomers } from '@/services/api';
//import { getProjects } from '../services/projectService';
import { getRequirements } from '@/services/requirements-service';
import { getTasks } from '@/services/tasks-service';
import { getMockProjects } from '@/mock/projects-service';

// 创建一个简单的 Vuex store
export default createStore({
    state: {
      customers: [],
      projects: [],
      requirements: [],
      tasks: []
    },
    mutations: {
      setCustomers(state, customers) {
        state.customers = customers;
      },
      setProjects(state, projects) {
        state.projects = projects;
      },
      setRequirements(state, requirements) {
        state.requirements = requirements;
      },
      setTasks(state, tasks) {
        state.tasks = tasks;
      }
    },
    actions: {
      async fetchCustomers({ commit }) {
        const customers = await getCustomers();
        commit('setCustomers', customers.data);
      },
      async fetchProjects({ commit }) {
        const projects = await getMockProjects();
        commit('setProjects', projects);
      },
      async fetchRequirements({ commit }) {
        const requirements = await getRequirements();
        commit('setRequirements', requirements.data);
      },
      async fetchTasks({ commit }) {
        const tasks = await getTasks();
        commit('setTasks', tasks.data);
      }
    }
  });