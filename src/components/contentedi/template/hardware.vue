<template>
  <div class="hardware_box_cs">
    <h3 class="hardware_title_cs">硬件网络</h3>
    <a-textarea :rows="26" v-model="values" class="hardware_content_cs"></a-textarea>

    <h3 class="hardware_title_cs">网络</h3>
    <div class="hardware_hardware_cs">
      <a-select mode="tags" style="width: 100%" @change="handleChange" placeholder="选择事件...">
        <a-select-option
          :index="index"
          :key="hardwarelists.title"
          v-for="(hardwarelists,index) in hardwarelist"
        >{{hardwarelists.title}}</a-select-option>
      </a-select>
    </div>
    <a-textarea placeholder="输入描述..." :rows="26" class="hardware_content_cs"></a-textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: [
        "[适配问题]\r\n\r\n\r\n\r\n\r\n[物理按键差异处理]\r\n\r\n\r\n\r\n\r\n[本地缓存]\r\n\r\n\r\n\r\n\r\n[权限获取]"
      ],
      hardwarelist: [
        { title: "wifi" },
        { title: "5G" },
        { title: "4G" },
        { title: "3G" },
        { title: "2G" },
        { title: "无网络" },
        { title: "无信号" }
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
.hardware_box_cs {
  width: 380px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.hardware_title_cs {
  margin-left: 10px;
  margin-top: 10px;
  font-family: serif;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
.hardware_content_cs {
  border: none;
  resize: none;
}
.hardware_content_cs:focus {
  box-shadow: none;
}
.hardware_hardware_cs {
  float: right;
  width: 280px;
  margin-right: 10px;
  margin-top: -34px;
}
</style>