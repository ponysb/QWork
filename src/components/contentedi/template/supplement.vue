<template>
  <div class="supplement_box_cs">
    <h3 class="supplement_title_cs">其他说明</h3>
    <a-textarea :rows="26" placeholder="输入补充信息..." class="supplement_content_cs"></a-textarea>
  </div>
</template>
<script>
export default {};
</script>
<style>
.supplement_box_cs {
  width: 380px;
  height: 600px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.supplement_title_cs {
  margin-left: 10px;
  margin-top: 10px;
  font-family: serif;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
.supplement_content_cs {
  border: none;
  resize: none;
}
.supplement_content_cs:focus {
  box-shadow: none;
}
</style>