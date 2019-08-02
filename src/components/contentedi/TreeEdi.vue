<template>
  <div>
    <a-textarea id="edi" placeholder="Basic usage" :rows="10"/>
    <a-button type="primary" @click="enterIconLoading">Primary</a-button>
  </div>
</template>
<script>
import { construct, destruct } from "@aximario/json-tree";
export default {
  methods: {
    enterIconLoading() {
      const arr = edi.value;
      var dataNode = [];
      function edijson() {
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
      }
      edijson();
    }
  }
};
</script>


uuu
#uuu
uuu
uuu
#uuu
#uuu
#uuu
##uuu
###uuu
###uuu
##uuu
##uuu
##uuu
#uuu
#uuu
##uuu
##uu
###uuu
#uuu
##uuu
###uuu
####uuu
#####uuu
######uuu
#######uuu
########uuu
#########uuu
##########uuu
##uuu
###uuu
#uuu
#uuu
#uuu
##uu
###uu
#uuu
uuu
#uuu
#uuu
#uuu
##uuu
###uuu
#uuu