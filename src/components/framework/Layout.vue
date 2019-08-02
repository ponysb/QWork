<template>
  <div>
    <div class="logo_cs">Pony</div>
    <div class="framework_body_cs">
      <a-tabs type="card" defaultActiveKey="1">
        <a-tab-pane tab="产品框架" key="1">
          <Product></Product>
        </a-tab-pane>
        <a-tab-pane tab="功能框架" key="2" forceRender>
          <Function></Function>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import Product from "./Product";
import Function from "./Function";

export default {
  data() {
    return {};
  },
  components: {
    Product,
    Function
  }
};
</script>
<style>
.body_cs {
  width: 1180px;
  background-color: #000;
  margin: 0 auto;
}
.framework_body_cs {
  width: 96%;
  height: 800px;
  padding-top: 20px;
  margin: 0 auto;
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
</style>

