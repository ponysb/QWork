<template>
  <div class="fields_box_cs">
    <h3 class="fields_title_cs">字段/输入</h3>
    <a-textarea :rows="26" v-model="values" class="fields_content_cs"></a-textarea>

    <h3 class="fields_title_cs">键盘</h3>
    <div class="fields_fields_cs">
      <a-select mode="tags" style="width: 100%" @change="handleChange" placeholder="选择事件...">
        <a-select-option
          :index="index"
          :key="fieldslists.title"
          v-for="(fieldslists,index) in fieldslist"
        >{{fieldslists.title}}</a-select-option>
      </a-select>
    </div>
    <a-textarea placeholder="输入描述..." :rows="26" class="fields_content_cs"></a-textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: [
        "[字段名称]\r\n\r\n\r\n\r\n\r\n[类型]\r\n\r\n\r\n\r\n\r\n[长度]\r\n\r\n\r\n\r\n\r\n[特殊字符]\r\n\r\n\r\n\r\n\r\n[敏感字]"
      ],
      fieldslist: [
        { title: "默认键盘" },
        { title: "密码键盘" },
        { title: "URL键盘" },
        { title: "邮箱键盘" },
        { title: "数字键盘" },
        { title: "数字符号键盘" },
        { title: "电话键盘" },
        { title: "文本数字键盘" },
        { title: "搜索键盘" }
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
.fields_box_cs {
  width: 380px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.fields_title_cs {
  margin-left: 10px;
  margin-top: 10px;
  font-family: serif;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
.fields_content_cs {
  border: none;
  resize: none;
}
.fields_content_cs:focus {
  box-shadow: none;
}
.fields_fields_cs {
  float: right;
  width: 280px;
  margin-right: 10px;
  margin-top: -34px;
}
</style>