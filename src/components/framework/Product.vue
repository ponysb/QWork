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
  data() {
    return {
      Product: [
        {
          title: "产品框架",
          src: "http://www.baidu.com",
          color_:
            "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
          color: "color:pink;"
        },
        {
          title: "功能框架",
          src: "http://www.baidu.com",
          color_:
            "background-color: rgba(64, 169, 255, 0.2); border: solid 1px #40a9ff;",
          color: "color:#40a9ff;"
        }
      ]
    };
  },
  methods: {
    handlechangesrc(e) {
      this.Product.splice(0, 1, {
        title: "产品框架",
        src: e.target.value,
        color_:
          "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
        color: "color:pink;"
      });
      const products = this.Product;
      this.$store.commit("to_product", products);
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