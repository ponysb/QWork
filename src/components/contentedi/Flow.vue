<template>
  <div>
    <a-popover title="项目引导" trigger="hover">
      <template slot="content">
        <p>
          <a @click="info_product">1.产品框架</a>
        </p>
        <p>
          <a @click="info_function">2.功能框架</a>
        </p>
        <p>
          <a>3.模块细分</a>
        </p>
        <p>
          <router-link to="/demand" target="_blank">
            <a>4.需求清单</a>
          </router-link>
        </p>
        <p>
          <router-link to="/noun" target="_blank">
            <a>5.名词解释</a>
          </router-link>
        </p>
        <p>
          <router-link to="/general" target="_blank">
            <a>6.通用信息</a>
          </router-link>
        </p>
      </template>

      <div class="layout_flow_cs">指引</div>
    </a-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    info_product() {
      const { $store } = this;
      let arr = 0;
      if (this.$store.state.tag != "") {
        if (this.$store.state.tag.length == 1) {
          if (this.$store.state.tag[0].title == "产品框架") {
            arr = 0;
            this.$info({
              title: "输入产品结构链接",
              content: (
                <div>
                  <a-input
                    id="product_edi"
                    placeholder={this.$store.state.tag[arr].src}
                  />
                </div>
              ),
              onOk() {
                if (product_edi.value != "") {
                  var in_products = {
                    title: "产品框架",
                    src: product_edi.value,
                    color_:
                      "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                    color: "color:pink;"
                  };
                } else {
                  var in_products = {
                    title: "产品框架",
                    src: product_edi.placeholder,
                    color_:
                      "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                    color: "color:pink;"
                  };
                }
                console.log(in_products);
                $store.commit("in_product", {
                  in_products: in_products,
                  arr: arr
                });
              }
            });
          } else {
            this.$info({
              title: "输入产品结构链接",
              content: (
                <div>
                  <a-input id="product_edi" placeholder="输入链接" />
                </div>
              ),
              onOk() {
                const products = {
                  title: "产品框架",
                  src: product_edi.value,
                  color_:
                    "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                  color: "color:pink;"
                };
                $store.commit("to_product", products);
              }
            });
          }
        }
        if (this.$store.state.tag.length == 2) {
          if (this.$store.state.tag[0].title == "产品框架") {
            arr = 0;
            this.$info({
              title: "输入产品结构链接",
              content: (
                <div>
                  <a-input
                    id="product_edi"
                    placeholder={this.$store.state.tag[arr].src}
                  />
                </div>
              ),
              onOk() {
                if (product_edi.value != "") {
                  var in_products = {
                    title: "产品框架",
                    src: product_edi.value,
                    color_:
                      "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                    color: "color:pink;"
                  };
                } else {
                  var in_products = {
                    title: "产品框架",
                    src: product_edi.placeholder,
                    color_:
                      "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                    color: "color:pink;"
                  };
                }
                console.log(in_products);
                $store.commit("in_product", {
                  in_products: in_products,
                  arr: arr
                });
              }
            });
          } else {
            arr = 1;
            this.$info({
              title: "输入产品结构链接",
              content: (
                <div>
                  <a-input
                    id="product_edi"
                    placeholder={this.$store.state.tag[arr].src}
                  />
                </div>
              ),
              onOk() {
                if (product_edi.value != "") {
                  var in_products = {
                    title: "产品框架",
                    src: product_edi.value,
                    color_:
                      "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                    color: "color:pink;"
                  };
                } else {
                  var in_products = {
                    title: "产品框架",
                    src: product_edi.placeholder,
                    color_:
                      "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
                    color: "color:pink;"
                  };
                }
                console.log(in_products);
                $store.commit("in_product", {
                  in_products: in_products,
                  arr: arr
                });
              }
            });
          }
        }
      } else {
        this.$info({
          title: "输入产品结构链接",
          content: (
            <div>
              <a-input id="product_edi" placeholder="输入链接" />
            </div>
          ),
          onOk() {
            const products = {
              title: "产品框架",
              src: product_edi.value,
              color_:
                "background-color: rgba(255, 192, 203, 0.2); border: solid 1px pink;",
              color: "color:pink;"
            };
            $store.commit("to_product", products);
          }
        });
      }
    },

    info_function() {
      const { $store } = this;
      let brr = 0;
      if (this.$store.state.tag != "") {
        if (this.$store.state.tag.length == 1) {
          if (this.$store.state.tag[0].title == "功能框架") {
            brr = 0;
            this.$info({
              title: "输入功能结构链接",
              content: (
                <div>
                  <a-input
                    id="product_edi"
                    placeholder={this.$store.state.tag[brr].src}
                  />
                </div>
              ),
              onOk() {
                if (product_edi.value != "") {
                  var in_products = {
                    title: "功能框架",
                    src: product_edi.value,
                    color_:
                      "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                    color: "color:#1890ff;"
                  };
                } else {
                  var in_products = {
                    title: "功能框架",
                    src: product_edi.placeholder,
                    color_:
                      "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                    color: "color:#1890ff;"
                  };
                }
                console.log(in_products);
                $store.commit("in_product", {
                  in_products: in_products,
                  arr: brr
                });
              }
            });
          } else {
            this.$info({
              title: "输入功能结构链接",
              content: (
                <div>
                  <a-input id="product_edi" placeholder="输入链接" />
                </div>
              ),
              onOk() {
                const products = {
                  title: "功能框架",
                  src: product_edi.value,
                  color_:
                    "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                  color: "color:#1890ff;"
                };
                $store.commit("to_product", products);
              }
            });
          }
        }
        if (this.$store.state.tag.length == 2) {
          if (this.$store.state.tag[0].title == "功能框架") {
            brr = 0;
            this.$info({
              title: "输入功能结构链接",
              content: (
                <div>
                  <a-input
                    id="product_edi"
                    placeholder={this.$store.state.tag[brr].src}
                  />
                </div>
              ),
              onOk() {
                if (product_edi.value != "") {
                  var in_products = {
                    title: "功能框架",
                    src: product_edi.value,
                    color_:
                      "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                    color: "color:#1890ff;"
                  };
                } else {
                  var in_products = {
                    title: "功能框架",
                    src: product_edi.placeholder,
                    color_:
                      "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                    color: "color:#1890ff;"
                  };
                }

                $store.commit("in_product", {
                  in_products: in_products,
                  arr: brr
                });
              }
            });
          } else {
            brr = 1;
            this.$info({
              title: "输入功能结构链接",
              content: (
                <div>
                  <a-input
                    id="product_edi"
                    placeholder={this.$store.state.tag[brr].src}
                  />
                </div>
              ),
              onOk() {
                if (product_edi.value != "") {
                  var in_products = {
                    title: "功能框架",
                    src: product_edi.value,
                    color_:
                      "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                    color: "color:#1890ff;"
                  };
                } else {
                  var in_products = {
                    title: "功能框架",
                    src: product_edi.placeholder,
                    color_:
                      "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
                    color: "color:#1890ff;"
                  };
                }
                console.log(brr);
                $store.commit("in_product", {
                  in_products: in_products,
                  arr: brr
                });
              }
            });
          }
        }
      } else {
        this.$info({
          title: "输入功能结构链接",
          content: (
            <div>
              <a-input id="product_edi" placeholder="输入链接" />
            </div>
          ),
          onOk() {
            const products = {
              title: "功能框架",
              src: product_edi.value,
              color_:
                "background-color: rgba(24, 144, 255, 0.2); border: solid 1px #1890ff",
              color: "color:#1890ff;"
            };
            $store.commit("to_product", products);
          }
        });
      }
    }
  }
};
</script>
<style>
.layout_flow_cs {
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #1890ff;
  box-shadow: 0px 3px 15px #1890ff;
  color: aliceblue;
  text-align: center;
  line-height: 76px;
  font-family: serif;
  font-size: 20px;
  position: fixed;
  left: 80px;
  bottom: 50px;
  z-index: 999;
}
</style>