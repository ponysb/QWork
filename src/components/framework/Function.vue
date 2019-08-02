<template>
  <div>
    <div style="display: flex; ">
      <a-input
        @change="handlechangesrc($event)"
        class="framework_input_cs"
        placeholder="黏贴第三方链接到此处"
      />
      <h4 style="flex-direction: row; margin-left:16px; margin-top:4px; color:#52c41a;">
        <a-icon style="margin-right:6px;" type="check-circle" />已保存
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handlechangesrc(e) {
      console.log(e.target.value);
    }
  }
};
</script>
<style>
.framework_input_cs {
  width: 380px;
  height: 30px;
}
</style>