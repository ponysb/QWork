<template>
  <div>
    <div>
      <div
        @click="Selected(index)"
        v-for="(item,index) in datas"
        :key="index"
        :class="{edi_background_focus_cs:index==edi_background}"
      >
        <a-range-picker
          format="YYYY-MM-DD"
          :placeholder="['Start Time', 'End Time']"
          @change="onChange"
          :index="index"
          :open="item.Picker_open"
          class="edi_picker_cs"
        />
        <div class="edi_time_back_cs">
          <h5 class="edi_time_font_cs" style="float:left;" v-html="item.edi_time"></h5>
          <a-button
            style="float:right; z-index:99;"
            :disabled="item.generate"
            @click="generateClick"
            class="edi_button_generate_cs"
            type="primary"
          >生成</a-button>
          <icon-font
            @click="Picker_click(index)"
            :index="index"
            style="float:right;  font-size:24px;color:#597ef7;"
            type="icon-rili"
          />
        </div>

        <div style="float: left;margin-left:16px;">
          <a-popconfirm placement="bottomLeft" cancelText="确定" okText="点错了" @cancel="ediDelete">
            <template slot="title">
              <p>确定删除这条编辑？</p>
            </template>
            <a-icon
              type="delete"
              style="float:left; margin-right:10px; margin-top:18px; font-size:15px;color:#2f54eb;"
            />
          </a-popconfirm>

          <a-icon
            type="pushpin"
            style="float: left; margin-top:18px; font-size:16px;color:#2f54eb;"
          />

          <input type="text" @input="titleInput($event)" :value="item.title" class="edi_title_cs" />
        </div>
        <textarea
          :class="item.ediview"
          placeholder="需求介绍..."
          style="resize:none;"
          @paste="cspastes"
          class="edi_textarea_cs"
          :rows="item.rows"
          :value="item.markdown"
          @input="descArea($event)"
        />
        <div
          @dblclick="inEdi"
          @click="inEdiClock"
          :class="item.markview"
          class="edi_cs"
          v-html="item.text"
        />
      </div>
    </div>
    <div @click="ediAdd" class="edi_add_cs" style="boxShadow:none; border:1px dashed #d4d4d4;">
      <div
        style="color:#158eff; fontSize: 16px; fontFamily: serif; textAlign: center; lineHeight: 110px; cursor:pointer;"
      >+ 添加编辑区</div>
    </div>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
import marked from "marked";
import VueEvent from "./VueEvent";

var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1243682_twtsezd1t2a.js"
});

export default {
  mounted() {
    VueEvent.$on("to_news", data => {
      this.datas = data;
    });
    VueEvent.$on("to_news1", data => {
      this.treeindex = data;
      console.log(this.treeindex);
    });
  },
  data() {
    return {
      edi_background: null,
      indexs: null,
      datas: Array,
      treeindex: null
    };
  },
  components: {
    IconFont
  },
  methods: {
    ediAdd() {
      this.datas.push({
        title: "Untitled Note",
        text: "11",
        markdown: "",
        generate: true,
        Picker_open: false,
        edi_time: "",
        rows: 2,
        markview: "yincang",
        ediview: "xianshi"
      });
    },
    Selected(index) {
      this.edi_background = index;
      if (this.indexs != null) {
        this.datas[this.indexs].generate = true;
      }
      this.datas[index].generate = false;
      this.indexs = index;
    },
    ediDelete() {
      this.datas.splice(this.indexs, 1);
      console.log(this.datas);
    },
    Picker_click(index) {
      let arrayleng = this.datas.length;
      while (0 < arrayleng) {
        arrayleng--;
        this.datas[arrayleng].Picker_open = false;
      }
      this.datas[index].Picker_open = true;
      this.indexs = index;
    },
    onChange(value, dateString) {
      console.log("Formatted Selected Time: ", dateString);
      this.datas[this.indexs].Picker_open = false;
      this.datas[this.indexs].edi_time = dateString[0] + " - " + dateString[1];
      this.indexs = null;
    },
    inEdi() {
      this.datas[this.indexs].markview = "yincang";
      this.datas[this.indexs].ediview = "xianshi";
    },
    inEdiClock() {
      this.indexs = null;
    },
    titleInput(e) {
      this.datas[this.indexs].title = e.target.value;
    },
    descArea(e) {
      this.datas[this.indexs].markdown = e.target.value;
      this.datas[this.indexs].rows = e.target.value.split("\n").length + 1;
    },

    generateClick() {
      this.datas[this.indexs].markview = "xianshi";
      this.datas[this.indexs].ediview = "yincang";
      this.datas[this.indexs].text = marked(this.datas[this.indexs].markdown);
    },
    cspastes(e) {
      if (!(e.clipboardData && e.clipboardData.items)) {
        return;
      }
      for (var i = 0, len = e.clipboardData.items.length; i < len; i++) {
        var item = e.clipboardData.items[i];

        if (item.kind === "string") {
          item.getAsString(function(str) {});
        } else if (item.kind === "file") {
          var f = item.getAsFile();
          var render = new FileReader();
          render.onload = function(evt) {
            //输出base64编码
            var base64 = evt.target.result;
            console.log(base64);
          };
          render.readAsDataURL(f);
        }
      }
    }
  }
};
</script>
<style>
.edi_cs {
  width: 100%;
  padding: 44px;
  text-align: left;
}
.edi_textarea_cs {
  width: 100%;
  padding-top: 10px;
  padding-left: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: serif;
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
.edi_textarea_cs:focus {
  outline: none;
}

.edi_title_cs {
  width: 380px;
  height: 32px;
  float: left;
  padding: 10px;
  margin-top: 10px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  font-family: serif;
  background-color: rgba(255, 255, 255, 0);
  border: none;
}

.edi_title_cs:focus {
  outline: none;
}

.edi_background_focus_cs {
  background-color: #f0f5ff;
  box-shadow: 0 0 0 1px #adc6ff;
  border-radius: 3px;
}
.edi_time_back_cs {
  float: right;
  margin: 10px 10px 0px 0px;
}
.edi_time_font_cs {
  margin-top: 2px;
  font-size: 16px;
  color: #a4a4a4;
  font-family: serif;
  font-weight: 600;
  margin-right: 10px;
}
.edi_picker_cs {
  display: none;
}
.edi_button_generate_cs {
  width: 60px;
  height: 25px;
  font-size: 14px;
  margin-left: 10px;
}
.yincang {
  display: none;
}
.xianshi {
  display: block;
}
.edi_add_cs {
  margin-top: 20px;
  width: 100%;
}
</style>