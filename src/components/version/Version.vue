<template>
  <div class="version_cs">
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <router-link to="/contentedi">
          <li>{{text}}</li>
        </router-link>
      </template>

      <template slot="dispose" slot-scope="text, record, index">
        <a @click="showDrawer(index)">{{text}}</a>
      </template>

      <template slot="usres" slot-scope="text">
        <li>{{text+","}}</li>
      </template>

      <template style="font-family: serif;" slot="title">
        项目名称
        <a-popconfirm placement="topRight" cancelText="确定" okText="点错了" @cancel="cancel">
          <template slot="title">
            <p>确定新增版本？</p>
          </template>
          <a-button class="version_add_cs" type="primary">增加版本</a-button>
        </a-popconfirm>
      </template>
    </a-table>
    <a-drawer
      width="680"
      title="项目名称"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <div>
        <input @input="verInput($event)" class="version_drawer_ver_cs" :value="drawer.version">
        <a-divider/>
        <h3 class="version_drawer_describe_cs">版本介绍</h3>
        <textarea
          @input="verParagraph($event)"
          style="resize:none;"
          :value="drawer.name"
          class="version_drawer_paragraph_cs"
        ></textarea>
        <a-divider/>
        <h3 class="version_drawer_describe_cs">创建人</h3>
        <div class="version_drawer_ver_cs">{{drawer.admins}}</div>
        <h3 style="margin-top:16px;" class="version_drawer_describe_cs">参与者</h3>
        <div
          v-for="(item,index) in drawer.usres"
          style="margin-right:10px;"
          class="version_drawer_ver_cs"
        >
          {{ item }}
          <a-popconfirm
            placement="bottomLeft"
            cancelText="确定"
            okText="点错了"
            @cancel="cancelusre(index)"
          >
            <template slot="title">
              <p>确定删除该用户？</p>
            </template>
            <a-icon class="version_drawer_tog_x_cs" type="close"/>
          </a-popconfirm>
        </div>
        <a-button style="height: 27px;" type="primary">邀请成员</a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
const columns = [
  {
    title: "版本介绍",
    dataIndex: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "版本号",
    dataIndex: "version"
  },
  {
    title: "创建人",
    dataIndex: "admins"
  },
  {
    title: "参与者",
    dataIndex: "usres",
    scopedSlots: { customRender: "usres" }
  },
  {
    title: "设置",
    dataIndex: "dispose",
    scopedSlots: { customRender: "dispose" }
  }
];

const data = [
  {
    key: "1",
    name: "点我进项目修改介绍",
    version: "v1.0 beta",
    admins: "New York No",
    usres: ["111", "112", "23"],
    dispose: "修改配置"
  },
  {
    key: "1",
    name: "点我进项目修改介绍",
    version: "v1.0 beta",
    admins: "New York No",
    usres: ["111", "999", "23"],
    dispose: "修改配置"
  }
];

export default {
  data() {
    return {
      input:
        "当有大量结构化的数据需要展现时；当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。当有大量结构化的数据需要展现时；当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时",
      data,
      columns,
      visible: false,
      drawer: Array,
      drawerIndex: null
    };
  },
  methods: {
    cancel() {
      let usre = "1";
      this.data.unshift({
        key: "1",
        name: "点右边编辑配置",
        version: "v1.0 ",
        admins: "New York No. 1 Lake Park",
        usres: [usre],
        states: "未定版",
        dispose: "修改设置"
      });
    },
    verInput(e) {
      this.drawer.version = e.target.value;
    },
    verParagraph(e) {
      this.drawer.name = e.target.value;
    },
    showDrawer(index) {
      this.visible = true;
      this.drawer = this.data[index];
      this.drawerIndex = index;
      console.log(this.drawer);
    },
    onClose() {
      this.visible = false;
      console.log(this.data);
      /*this.data.splice(this.drawerIndex, 1, this.drawer);*/
    },
    cancelusre(index) {
      this.drawer.usres.splice(index, 1);
      console.log(1);
    }
  }
};
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
.version_cs {
  width: 98%;
  margin: 0 auto;
  margin-top: 10px;
}
.version_add_cs {
  float: right;
  margin-top: -5px;
}
.version_drawer_ver_cs {
  display: inline;
  width: 80px;
  border: none;
  text-align: center;
  padding: 2px 8px 2px 8px;
  color: #1890ff;
  font-size: 15px;
  font-family: serif;
  font-weight: 500;
  background-color: #e6f7ff;
  box-shadow: 0 0 0 1px #91d5ff;
  border-radius: 3px;
}
.version_drawer_describe_cs {
  margin-top: -6px;
  color: #000;
  font-size: 18px;
  font-family: serif;
  font-weight: 500;
}
.version_drawer_paragraph_cs {
  width: 100%;
  height: 72px;
  color: #333333;
  font-size: 14px;
  font-family: serif;
  font-weight: 300;
  border: none;
}
.version_drawer_tog_x_cs {
  font-size: 12px;
}
.version_drawer_paragraph_cs:focus {
  outline: none;
}
.version_drawer_ver_cs:focus {
  outline: none;
}
</style>
