<template>
  <div v-show="visible">
    <div class="popup_cs">
      <div class="new_project_cs">
        <h3 class="new_title_top_cs">新建项目</h3>
        <div class="new_title_cs">
          <a-tooltip placement="topLeft">
            <template slot="title">
              <span>不可创建重复名称项目</span>
            </template>
            <a-input style="font-family: serif;" placeholder="项目名称（必填）"/>
          </a-tooltip>
        </div>

        <div class="new_version_cs">
          <template v-for="(tag, index) in tags">
            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
              <a-tag
                style="font-family: serif;"
                :key="tag"
                :closable="index !== 0"
                :afterClose="() => handleClose(tag)"
              >{{`${tag.slice(0, 20)}...`}}</a-tag>
            </a-tooltip>
            <a-tag
              style="font-family: serif;"
              v-else
              :key="tag"
              :closable="index !== 0"
              :afterClose="() => handleClose(tag)"
            >{{tag}}</a-tag>
          </template>
          <a-input
            v-if="inputVisible"
            ref="input"
            type="text"
            size="small"
            style="font-family: serif;"
            :style="{ width: '78px' }"
            :value="inputValue"
            @change="handleInputChange"
            @blur="handleInputConfirm"
            @keyup.enter="handleInputConfirm"
          />
          <a-tag style="background: #fff; borderStyle: dashed;" v-else @click="showInput">
            <a-icon type="plus"/>新建版本
          </a-tag>
        </div>

        <div class="new_introduce_cs">
          <a-tooltip placement="topLeft">
            <template slot="title">
              <span>项目简介120字内</span>
            </template>
            <a-textarea
              style="resize: none; font-family: serif;"
              placeholder="一句话介绍这个项目（选填）"
              :rows="4"
            />
          </a-tooltip>
        </div>
        <div class="cs_button_cs">
          <a-button style="marginRight: 10px;" @click="handleON">取消</a-button>
          <a-button type="primary" @click="handleOk">创建</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.new_project_cs {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 12%;
  box-shadow: 2px 2px 6px rgba(48, 48, 48, 0.1);
  border-radius: 5px;
  background-color: #ffffff;
}
.new_title_cs {
  width: 446px;
  margin-top: 10px;
  margin-left: 26px;
}
.new_version_cs {
  margin-left: 26px;
  margin-top: 14px;
}
.new_introduce_cs {
  width: 446px;
  margin-left: 26px;
  margin-top: 14px;
}
.new_title_top_cs {
  padding-top: 20px;
  margin-left: 26px;
  color: #303030;
  font-weight: 600;
  font-size: 18px;
  font-family: serif;
}
.cs_button_cs {
  margin-top: 14px;
  margin-right: 27px;
  float: right;
}
.popup_cs {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 99;
}
</style>
<script>
export default {
  props: {
    visible: Array
  },
  data() {
    return {
      tags: ["V1.0"],
      inputVisible: false,
      inputValue: ""
    };
  },
  components: {},

  methods: {
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: ""
      });
    },

    handleOk(e) {
      console.log(e);
      this.visible = false;

      this.$router.push("/version");
    },
    handleON(e) {
      this.visible = false;
      this.$router.go(0);
    }
  }
};
</script>