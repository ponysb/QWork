<template>
  <div>
    <div style="display: flex;">
      <div class="contenttable_add_src">
        <a-dropdown :trigger="['click']">
          <a-menu slot="overlay">
            <a-menu-item
              v-for="(addsrcs,index) in addsrc"
              :key="index"
              :index="index"
              @click="showConfirm(index)"
            >
              <a-icon :type="addsrcs.icon" />
              {{addsrcs.title}}
            </a-menu-item>
          </a-menu>
          <div>
            <h5 style="font-weight: 700;color: #050505; padding-top: 8px; margin-left:12px;">
              引用链接
              <div style="text-align: right; margin-top: -22px; margin-right: 12px; ">
                <a-icon style="color:#2990FF; font-size: 24px;" type="plus-circle" theme="filled" />
              </div>
            </h5>
          </div>
        </a-dropdown>
      </div>

      <div
        class="contenttable_open_src"
        v-for="(opensrcs,index) in opensrc"
        :key="index"
        :index="index"
      >
        <div>
          <h5 style="font-weight: 700;color: #050505; padding-top: 8px; margin-left:12px;">
            <a :href="opensrcs.src" target="_blank">
              <a-icon style="color:#2990FF; font-size: 24px;" :type="opensrcs.icon" />
            </a>
            <div
              style="width: 1px;height: 20px; margin-top: -25px; margin-left: 42px; background-color: #ECECEC;"
            ></div>
            <div style="text-align: right; margin-top: -20px; margin-right: 12px; ">
              <a-icon @click="info(index)" style="color:#D0D0D0; font-size: 18px;" type="edit" />
            </div>
          </h5>
        </div>
      </div>
    </div>

    <div class="contenttable_img_docker">
      <div style="flex-direction: row; margin-left: 10px;">
        <div class="contenttable_img">
          <a-button>黏贴截图</a-button>
          <a-upload
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :headers="headers"
            @change="handleChange"
          >
            <a-button>上传图片</a-button>
          </a-upload>
        </div>
        <div class="contenttable_img_title">
          <h3 class="contenttable_font">Lorem ipsu</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { open } from "fs";
export default {
  data() {
    return {
      addsrc: [
        { title: "蓝湖", icon: "up-circle", wintitle: "请输入蓝湖链接" },
        { title: "axhub", icon: "login", wintitle: "请输入axhub链接" },
        {
          title: "processon",
          icon: "plus-circle",
          wintitle: "请输入processon链接"
        }
      ],
      opensrc: []
    };
  },
  methods: {
    showConfirm(index) {
      const { opensrc, addsrc } = this;
      this.$confirm({
        title: this.addsrc[index].wintitle,
        content: (
          <a-input
            id="input_src"
            class="add_input_src"
            placeholder="输入链接"
          />
        ),
        okText: "OK",
        cancelText: "取消",
        iconType: this.addsrc[index].icon,

        onOk() {
          opensrc.push({
            title: addsrc[index].title,
            src: input_src.value,
            icon: addsrc[index].icon,
            wintitle: "更改" + addsrc[index].title + "链接"
          });
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test"
      });
    },
    info(index) {
      const { opensrc, addsrc } = this;
      this.$confirm({
        title: opensrc[index].wintitle,
        content: (
          <a-input
            id="in_input_src"
            class="add_input_src"
            placeholder={opensrc[index].src}
          />
        ),
        okText: "OK",
        cancelText: "删除",
        iconType: opensrc[index].icon,
        onOk() {
          console.log(index);
          if (in_input_src.value == "") {
            opensrc.splice(index, 1, {
              title: opensrc[index].title,
              src: in_input_src.placeholder,
              icon: opensrc[index].icon,
              wintitle: "更改" + opensrc[index].title + "链接"
            });
          } else {
            opensrc.splice(index, 1, {
              title: opensrc[index].title,
              src: in_input_src.value,
              icon: opensrc[index].icon,
              wintitle: "更改" + opensrc[index].title + "链接"
            });
          }
        },
        onCancel() {
          opensrc.splice(index, 1);
        },
        class: "test"
      });
    }
  }
};
</script>
<style>
.contenttable_img {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
.contenttable_font {
  font-size: 16px;
  font-family: serif;
  font-weight: 300;

  color: #000;
}
.contenttable_img_title {
  width: 200px;
  height: 30px;
  margin-top: -1px;
  border: 1px solid #000;
}
.contenttable_img_docker {
  display: flex;
  margin-top: 16px;
}
.contenttable_add_src {
  text-align: left;
  font-size: 18px;
  font-family: serif;
  width: 130px;
  height: 40px;
  margin-left: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
  cursor: pointer;
  flex-direction: row;
}
.contenttable_open_src {
  text-align: left;
  font-size: 18px;
  font-family: serif;
  width: 100px;
  height: 40px;
  margin-left: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
  cursor: pointer;
  flex-direction: row;
}
.add_input_src {
  width: 280px;
}
.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,
.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {
  color: #2990ff;
}
</style>