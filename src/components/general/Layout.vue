<template>
  <div>
    <div class="logo_cs">Pony</div>
    <div class="general_linst_body">
      <div class="general_linst" v-for="(item,index) in $store.state.general" :key="index">
        <div class="general_linst_name" :style="{backgroundColor:item.color}">
          <input
            @blur="LinstTiteBlur($event,index)"
            type="text"
            maxlength="18"
            :value="item.title"
            :style="{backgroundColor:item.color}"
            class="general_name_input input_click"
          />
          <a-dropdown placement="bottomCenter">
            <icon-font class="numn_list_more" type="icon-gengduo" />
            <a-menu slot="overlay">
              <a-menu-item>
                <a @click="DeleteLinst(index)">删除这条</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <div class="general_linst_content" :style="{backgroundColor:item.color}">
          <textarea
            @blur="LinstContentBlur($event,index)"
            :value="item.content"
            style="resize:none; width:240px;"
            :style="{backgroundColor:item.color}"
            rows="6"
            type="text"
            maxlength="180"
            class="general_name_input input_click"
          />
        </div>
      </div>
      <a-dropdown :trigger="['click']" v-model="visible">
        <div class="general_linst">
          <div class="general_add_cs">
            添加一条名词
            <icon-font class="numn_list_more" style="color:#D6D6D6;" type="icon-jia" />
          </div>
        </div>
        <a-menu slot="overlay">
          <a-menu-item class="dropdown_cs">
            <div>
              <input
                id="edi_title"
                style="height: 32px;"
                class="general_add_title_cs input_click"
                type="text"
              />
              <textarea
                id="edi_content"
                class="general_add_title_cs input_click"
                style=";"
                cols="30"
                rows="5"
              ></textarea>
              <a-button class="general_add_create_cs" @click="AddCreate" type="primary">创建</a-button>
            </div>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1243682_1ebbjjp7ube.js"
});
const linst_color = [
  "#ffccc7",
  "#ffbb96",
  "#ffd591",
  "#ffe58f",
  "#eaff8f",
  "#b7eb8f",
  "#87e8de",
  "#91d5ff",
  "#adc6ff",
  "#d3adf7",
  "#ffadd2"
];

export default {
  data() {
    return {
      visible: false
    };
  },
  components: {
    "icon-font": IconFont
  },
  methods: {
    LinstTiteBlur(e, index) {
      this.$store.commit("general_title", {
        title: e.target.value,
        index: index
      });
    },
    LinstContentBlur(e, index) {
      this.$store.commit("general_content", {
        content: e.target.value,
        index: index
      });
    },
    AddCreate() {
      if (edi_title.value == "") {
        this.$message.error("请输入功能名称");
      } else {
        if (edi_content.value == "") {
          this.$message.error("请输入功能解释");
        } else {
          let addgeneral = {
            title: edi_title.value,
            content: edi_content.value,
            color: linst_color[Math.ceil(Math.random() * 10)]
          };
          this.$store.commit("general_add", addgeneral);
          edi_content.value = "";
          edi_title.value = "";
          this.visible = false;
        }
      }
    },
    DeleteLinst(index) {
      this.$store.commit("general_delete_linst", index);
    }
  }
};
</script>
<style>
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
.general_linst_body {
  margin-top: 8px;
  margin-left: 10px;
}
.general_linst {
  float: left;
  margin-left: 1%;
  margin-top: 16px;
}
.general_linst_name {
  width: 260px;
  height: 38px;
  border-radius: 10px;
}
.general_linst_content {
  width: 260px;
  height: 160px;
  margin-top: 6px;
  border-radius: 10px;
}
.general_name_input {
  width: 200px;
  margin-top: 5px;
  margin-left: 10px;
  border: none;
  font-family: serif;
  font-size: 16px;
  font-weight: 500;
  color: #303030;
}
.general_list_more {
  float: right;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 4px;
  margin-right: 6px;
}
.input_click:focus {
  outline: none;
}
.general_add_cs {
  width: 280px;
  height: 38px;
  background-color: #f0f0f0;
  border-radius: 10px;
  line-height: 34px;
  padding-left: 14px;
  font-family: serif;
  font-size: 16px;
  font-weight: 600;
}
.general_add_title_cs {
  width: 256px;
  display: block;
  margin-top: 6px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  font-family: serif;
  font-size: 14px;
  font-weight: 500;
  color: #303030;
}
.dropdown_cs:hover {
  background-color: #fff;
}
.general_add_create_cs {
  width: 256px;
  margin-top: 6px;
}
</style>



