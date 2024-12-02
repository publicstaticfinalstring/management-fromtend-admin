<template>
  <div class="table">
    <!-- 操作按钮 -->
    <div class="actions">
      <AddButton @click="addProject" />
      <EditButton @click="editSelectedProject" :disabled="!selectedProject" />
      <DeleteButton
        @click="deleteSelectedProject"
        :disabled="!selectedProject"
      />
    </div>
    <!-- 项目列表表格 -->
    <a-table
      :columns="columnsConfig"
      :data="projects"
      row-key="id"
      pagination
      :row-selection="rowSelection"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Table } from "@arco-design/web-vue";
import { mapState } from "vuex";

export default defineComponent({
  components: {
    "a-table": Table,
    
  },
  computed: {
    ...mapState({ projects: (state) => state.projects }),
  },
  data() {
    return {
      columnsConfig: [
        {
          title: "项目名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "所属客户",
          dataIndex: "customer",
          key: "customer",
        },
        {
          title: "版本数量",
          dataIndex: "versionCount",
          key: "versionCount",
        },
        {
          title: "项目经理",
          dataIndex: "manager",
          key: "manager",
        },
        {
          title: "项目团队成员",
          dataIndex: "teamMembers",
          key: "teamMembers",
        },
        {
          title: "当前风险数量",
          dataIndex: "riskCount",
          key: "riskCount",
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "是否为重点项目",
          dataIndex: "isKeyProject",
          key: "isKeyProject",
          render: (value) => (value ? "是" : "否"),
        },
      ],
      selectedProjects: [],
      rowSelection: {
        type: "checkbox",
        onChange: this.onSelectionChange,
      },
    };
  },
  created() {
    console.log("Component Created: Fetching projects");
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      this.$store.dispatch("fetchProjects").then(() => {
        console.log("Projects fetched:", this.projects);
      });
    },
    addProject() {
      console.log("新增项目");
      // 这里可以添加具体的新增逻辑
    },
    editSelectedProject() {
      if (this.selectedProject) {
        console.log("编辑项目", this.selectedProject);
        // 这里可以添加具体的编辑逻辑
      }
    },
    deleteSelectedProject() {
      if (this.selectedProject) {
        console.log("删除项目", this.selectedProject);
        // 这里可以添加具体的删除逻辑
      }
    },
    onSelectionChange(selectedRowKeys, selectedRows) {
      this.selectedProjects = selectedRows;
      console.log("选中的项目: ", selectedRows);
    },
  },
});
</script>

<style scoped>
.actions {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}
.table {
  padding: 20px;
}
</style>
