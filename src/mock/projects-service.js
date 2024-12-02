export const getMockProjects = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: '项目 A',
            catalog: '编目 A',
            customer: '客户 X',
            versionCount: 3,
            status: '售前项目',
            manager: '张三',
            teamMembers: '张三, 李四, 王五',
            riskCount: 2,
            isKeyProject: true
          },
          {
            id: 2,
            name: '项目 B',
            catalog: '编目 B',
            customer: '客户 Y',
            versionCount: 5,
            status: '项目维护',
            manager: '李四',
            teamMembers: '李四, 王五',
            riskCount: 1,
            isKeyProject: false
          },
          {
            id: 3,
            name: '项目 C',
            catalog: '编目 C',
            customer: '客户 Z',
            versionCount: 2,
            status: '初验项目',
            manager: '王五',
            teamMembers: '张三, 王五',
            riskCount: 0,
            isKeyProject: false
          }
        ]);
      }, 1000); // 模拟网络延迟
    });
  };
  