<template>
  <div>
    <div :class="treeShow" @dblclick="ediTree">
      <a-tree
        @expand="onExpand"
        @select="onSelect"
        :treeData="treeData"
        defaultExpandAll
        :defaultSelectedKeys="[0]"
      />
    </div>
    <div :class="show">
      <div @click="treeGenerate" class="tree_car_cs" style=" border:1px dashed #d4d4d4;">
        <div
          style="color:#158eff; fontSize: 14px; fontFamily: serif; textAlign: center; lineHeight: 36px; cursor:pointer;"
        >转树状结构</div>
      </div>
      <a-textarea id="edi" :rows="26" placeholder="先将项目按照树结构拆分模块" class="tree_edi_cs"/>
    </div>
  </div>
</template>
<script>
import VueEvent from "./VueEvent";
import TreeEdi from "./TreeEdi";
import { construct, destruct } from "@aximario/json-tree";

const treeData = [];
export default {
  components: {
    TreeEdi
  },
  data() {
    return {
      treeData,
      value: "# uuu",
      show: "tree_hidden",
      treeShow: "tree_show"
    };
  },

  beforeCreate() {
    this.$axios.get("http://localhost:8080/tree.json").then(res => {
      this.treeData = res.data;
      console.log(res.data);
    });
    this.$axios.get("http://localhost:8080/edi.json").then(res => {
      VueEvent.$emit("to_news", res.data);
      VueEvent.$emit("to_news1", 0);
    });
  },
  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
    },
    onSelect(selectedKeys, info) {
      console.log(info.selectedNodes[0].data.props.dataRef.key);
      this.selectedKeys = selectedKeys;
      this.$axios.get("http://localhost:8080/edi.json").then(res => {
        /*this.treeData = res.data;*/
        VueEvent.$emit("to_news", res.data);
        VueEvent.$emit(
          "to_news1",
          info.selectedNodes[0].data.props.dataRef.key
        );
      });
    },
    ediTree() {
      this.treeShow = "tree_hidden";
      this.show = "tree_show";
    },
    treeGenerate() {
      const arr = edi.value;
      var dataNode = [];
      const brr = arr.split(/[\s\n]/);

      for (let i = 0; i < brr.length; i++) {
        if (brr[i].match(/#*/)[0].length == 0) {
          dataNode.push({ title: brr[i], key: i, pid: "" });
        } else {
          let b = 1;
          while (
            brr[i].match(/#*/)[0].length <= brr[i - b].match(/#*/)[0].length
          ) {
            b = b + 1;
          }
          let ii = dataNode[i - b].key;
          dataNode.push({ title: brr[i], key: i, pid: ii });
        }
      }
      const data = dataNode;
      const result = construct(data, {
        id: "key",
        pid: "pid",
        children: "children"
      });
      console.log(JSON.stringify(result, null, "\t"));
      this.treeData = result;
      this.show = "tree_hidden";
      this.treeShow = "tree_show";
    }
  }
};
</script>
<style>
.tree_show {
  display: block;
}
.tree_hidden {
  display: none;
}
.tree_edi_cs {
  width: 100%;
  margin-top: 10px;
  border: none;
  resize: none;
}
.tree_car_cs {
  width: 94%;
  height: 38px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 3px;
}
.tree_edi_cs:focus {
  outline: none;
  box-shadow: none;
}
.tree_edi_cs:hover {
  border: none;
}
</style>


