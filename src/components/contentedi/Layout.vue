<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed-sider">
      <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, backgroundColor:'#fff', }"
      >
        <div class="logo"></div>
        <Flow></Flow>
        <a-menu mode="inline" :defaultSelectedKeys="['4']">
          <Tree></Tree>
        </a-menu>
      </a-layout-sider>

      <a-layout :style="{ marginLeft: '200px' }">
        <a-button style="width: 86px; position:absolute;  right:20px; top:16px;" type="primary">分享项目</a-button>
        <div class="content_tags_cs">
          <div
            v-for="(tags,index) in this.$store.state.tag"
            :key="index"
            :style="tags.color_"
            class="content_tag_cs"
          >
            <a :style="tags.color" :href="tags.src" target="_blank">{{tags.title}}</a>
          </div>
        </div>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
            <ContentTable></ContentTable>
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Tree from "./Tree";
import ContentTable from "./ContentTable";
import Flow from "./Flow";
export default {
  data() {
    return {
      tag: []
    };
  },
  components: {
    Tree,
    ContentTable,
    Flow
  },
  methods: {}
};
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(0, 0, 0, 0.1);
  margin: 16px;
}
.content_tags_cs {
  position: absolute;
  right: 110px;
  top: 16px;
}
.content_tag_cs {
  width: 86px;
  height: 32px;
  display: block;
  float: right;
  margin-right: 10px;
  text-align: center;
  line-height: 32px;
  border-radius: 3px;
}
</style>