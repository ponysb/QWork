<template>
  <div class="rely_box_cs">
    <h3 class="rely_title_cs">服务依赖(依赖模块)</h3>
    <a-textarea :rows="26" placeholder="输入依赖信息..." class="rely_content_cs"></a-textarea>
  </div>
</template>
<script>
export default {};
</script>
<style>
.rely_box_cs {
  width: 380px;
  height: 600px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.rely_title_cs {
  margin-left: 10px;
  margin-top: 10px;
  font-family: serif;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
.rely_content_cs {
  border: none;
  resize: none;
}
.rely_content_cs:focus {
  box-shadow: none;
}
</style>