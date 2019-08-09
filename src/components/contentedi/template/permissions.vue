<template>
  <div class="permissions_box_cs">
    <h3 class="permissions_title_cs">权限说明</h3>
    <a-textarea :rows="26" v-model="values" class="permissions_content_cs"></a-textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: [
        "[已登陆]\r\n\r\n\r\n\r\n\r\n[未登录]\r\n\r\n\r\n\r\n\r\n[长期未登录]\r\n\r\n\r\n\r\n\r\n[游客登陆]\r\n\r\n\r\n\r\n\r\n[自定义用户身份]"
      ]
    };
  }
};
</script>
<style>
.permissions_box_cs {
  width: 380px;
  height: 600px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.permissions_title_cs {
  margin-left: 10px;
  margin-top: 10px;
  font-family: serif;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
.permissions_content_cs {
  border: none;
  resize: none;
}
.permissions_content_cs:focus {
  box-shadow: none;
}
</style>