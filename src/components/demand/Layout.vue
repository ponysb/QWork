<template>
  <div>
    <div class="logo_cs">Pony</div>
    <div class="demand_table_cs">
      <a-button class="demand_add_cs" @click="DemandAdd" type="primary">增加需求</a-button>
      <a-table :pagination="false" :columns="columns" :dataSource="data" bordered>
        <template
          v-for="col in ['demand_name', 'demand_describe','demand_source']"
          :slot="col"
          slot-scope="text, record, index"
        >
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template>

        <template slot="demand_state" slot-scope="text, record, index">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a-select
                id="cs"
                labelInValue
                :defaultValue="{ key: text }"
                style="width: 120px"
                @change="handleActivation($event,index)"
              >
                <a-select-option value="未激活">未激活</a-select-option>
                <a-select-option value="未开始">未开始</a-select-option>
                <a-select-option value="进行中">进行中</a-select-option>
                <a-select-option value="即将准备测试">即将准备测试</a-select-option>
                <a-select-option value="测试中">测试中</a-select-option>
                <a-select-option value="需求方核对中">需求方核对中</a-select-option>
                <a-select-option value="即将上线">即将上线</a-select-option>
                <a-select-option value="已上线">已上线</a-select-option>
                <a-select-option value="bug调整中">bug调整中</a-select-option>
              </a-select>
            </span>
            <span v-else>{{text}}</span>
          </div>
        </template>

        <template slot="priority" slot-scope="text, record, index">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a-select
                labelInValue
                :defaultValue="{ key: text }"
                style="width: 120px"
                @change="handlePriority($event,index)"
              >
                <a-select-option value="P0">P0</a-select-option>
                <a-select-option value="P1">P1</a-select-option>
                <a-select-option value="P2">P2</a-select-option>
              </a-select>
            </span>
            <span v-else>{{text}}</span>
          </div>
        </template>

        <template slot="edi" slot-scope="text, record, index">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">保存</a>
              <a-popconfirm title="是否删除这条？" okText="是" cancelText="否" @confirm="confirm(index)">
                <a>删除</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="() => edit(record.key)">编辑</a>
            </span>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "序号",
    dataIndex: "list",
    width: "5%",
    scopedSlots: { customRender: "list" }
  },
  {
    title: "需求名称",
    dataIndex: "demand_name",
    width: "15%",
    scopedSlots: { customRender: "demand_name" }
  },
  {
    title: "需求描述",
    dataIndex: "demand_describe",
    width: "40%",
    scopedSlots: { customRender: "demand_describe" }
  },
  {
    title: "需求来源",
    dataIndex: "demand_source",
    width: "8%",
    scopedSlots: { customRender: "demand_source" }
  },
  {
    title: "状态",
    dataIndex: "demand_state",
    width: "8%",
    scopedSlots: { customRender: "demand_state" }
  },
  {
    title: "优先级",
    dataIndex: "priority",
    width: "8%",
    scopedSlots: { customRender: "priority" }
  },
  {
    title: "编辑",
    dataIndex: "edi",
    width: "8%",
    scopedSlots: { customRender: "edi" }
  }
];

const data = [];

export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.data = newData;
      }
    },
    confirm(index) {
      this.data.splice(index, 1);
    },
    handleActivation(e, index) {
      this.data[index].demand_state = e.label;
    },
    handlePriority(e, index) {
      this.data[index].priority = e.label;
    },
    DemandAdd() {
      this.data.unshift({
        key: this.data.length + 1,
        list: this.data.length + 1,
        demand_name: "点后边编辑名称",
        demand_describe: "点后边编辑内容",
        demand_source: "--",
        demand_state: "即将准备测试",
        priority: "P2"
      });
    }
  }
};
</script>
<style>
.car_cs {
  width: 280px;
  height: 120px;
  float: left;
  background-color: #fff;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}
.body_cs {
  width: 1180px;
  background-color: #000;
  margin: 0 auto;
}
.car_title_top_cs {
  margin-top: 10px;
  margin-left: 20px;
  color: #b7b7b7;
  font-size: 14px;
  font-family: serif;
}
.car_title_cs {
  width: 250px;
  margin-top: -10px;
  margin-left: 20px;
  color: #303030;
  font-size: 18px;
  font-weight: 600;
  font-family: serif;
}
.car_time_cs {
  margin-top: 10px;
  margin-left: 20px;
  color: #b7b7b7;
  font-size: 14px;
  font-family: serif;
}
.logo_cs {
  width: 100%;
  height: 60px;
  color: #303030;
  text-align: center;
  font-size: 24px;
  font-family: serif;
  line-height: 60px;
  font-weight: 900;
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(48, 48, 48, 0.1);
}
.editable-row-operations a {
  margin-right: 8px;
}
.demand_table_cs {
  width: 98%;
  margin: 0 auto;
  margin-top: 16px;
}
.demand_add_cs {
  z-index: 1;

  margin-bottom: 10px;
  float: right;
}
</style>



