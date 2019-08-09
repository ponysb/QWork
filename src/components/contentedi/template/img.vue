<template>
  <div style="text-align: left;" class="img_template_cs">
    <div class="add_img_box">
      <a-button class="add_img" size="small">黏贴图片</a-button>
      <a-button class="add_img" type="primary" size="small">上传图片</a-button>
    </div>
    <a-tabs class="img_template_tag_cs" defaultActiveKey="1" tabPosition="left">
      <a-tab-pane style="margin-left:-15px; text-align: left;" tab="图片1" key="1">
        <div style="display:flex;">
          <h3 class="img_title">标题1111111111</h3>
          <a-icon class="img_title_edi" type="edit" />
          <a-icon class="img_title_edi" type="delete" />
        </div>
        <div>
          <img
            class="img_i"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565198574058&di=481f57dccf22f4321a6e51448519e443&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F42166d224f4a20a43aacb9159e529822730ed0b6.jpg"
            alt
          />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {};
</script>
<style>
.img_template_cs {
  width: 380px;
  height: 600px;
  margin-top: 10px;

  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(86, 86, 86, 0.1);
  flex-direction: row;
}
.img_template_tag_cs {
  margin-top: 10px;
  margin-left: -10px;
}
.add_img_box {
  margin-top: 6px;
}
.add_img {
  margin-left: 6px;
}
.img_i {
  width: 288px;
  height: 520px;
  margin-top: -4px;
  border-radius: 3px;
  object-fit: cover;
}
.img_title_edi {
  flex-direction: row;
  margin-left: 10px;
  margin-top: 4px;
  color: #bfbfbf;
}
.img_title {
  font-family: serif;
  font-weight: 600;
  color: #bfbfbf;
}
</style>