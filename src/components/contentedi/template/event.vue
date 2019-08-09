<template>
  <div class="event_box_cs">
    <h3 class="event_title_cs">状态机制</h3>
    <a-textarea :rows="26" v-model="values" class="event_content_cs"></a-textarea>

    <h3 class="event_title_cs">事件处理</h3>
    <div class="event_event_cs">
      <a-select mode="tags" style="width: 100%" @change="handleChange" placeholder="选择事件...">
        <a-select-option
          :index="index"
          :key="eventlists.title"
          v-for="(eventlists,index) in eventlist"
        >{{eventlists.title}}</a-select-option>
      </a-select>
    </div>
    <a-textarea placeholder="输入描述..." :rows="26" class="event_content_cs"></a-textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: [
        "[数据获取]\r\n\r\n\r\n\r\n\r\n[数据排列]\r\n\r\n\r\n\r\n\r\n[数据分页]\r\n\r\n\r\n\r\n\r\n[数据更新]\r\n\r\n\r\n\r\n\r\n[交互规则]"
      ],
      eventlist: [
        { title: "点击" },
        { title: "双击" },
        { title: "右击" },
        { title: "滚动" },
        { title: "左划" },
        { title: "右划" },
        { title: "上划" },
        { title: "下划" },
        { title: "斜划" },
        { title: "按下" },
        { title: "抬起" },
        { title: "长按" },
        { title: "压感" },
        { title: "下拉刷新" },
        { title: "上拉刷新" },
        { title: "陀螺仪事件" },
        { title: "自定义状态" }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>
<style>
.event_box_cs {
  width: 380px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.event_title_cs {
  margin-left: 10px;
  margin-top: 10px;
  font-family: serif;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
.event_content_cs {
  border: none;
  resize: none;
}
.event_content_cs:focus {
  box-shadow: none;
}
.event_event_cs {
  float: right;
  width: 280px;
  margin-right: 10px;
  margin-top: -34px;
}
</style>