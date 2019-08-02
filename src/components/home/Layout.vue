<template>
  <div>
    <NewProject :visible="visible"></NewProject>
    <div class="logo_cs">Pony</div>
    <div>
      <div class="body_cs">
        <div class="car_cs" style="boxShadow:none; border:1px dashed #d4d4d4;">
          <div
            @click="showModal"
            style="color:#158eff; fontSize: 16px; fontFamily: serif; textAlign: center; lineHeight: 110px; cursor:pointer;"
          >+ 新建项目</div>
        </div>
        <div v-for="(item,index) in indexdata">
          <div class="car_cs">
            <h3 class="car_title_top_cs">Title</h3>
            <h2 class="car_title_cs">{{item.title}}</h2>
            <h3 class="car_time_cs">{{item.times}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NewProject from "./NewProject";
export default {
  data() {
    return {
      indexdata: [
        {
          title: "这是一个标题这是一个标题这是一个标题",
          times: "2019-05-18 18:09"
        },
        {
          title: "这是一个标题这是一个标题这是一个标题",
          times: "2019-05-18 18:09"
        }
      ],
      visible: false
    };
  },
  components: { NewProject },
  methods: {
    showModal() {
      this.visible = true;
    }
  }
};
</script>
<style>
.car_cs {
  width: 280px;
  height: 120px;
  float: left;
  background-color: #fff;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}
.body_cs {
  width: 1180px;
  background-color: #000;
  margin: 0 auto;
}
.car_title_top_cs {
  margin-top: 10px;
  margin-left: 20px;
  color: #b7b7b7;
  font-size: 14px;
  font-family: serif;
}
.car_title_cs {
  width: 250px;
  margin-top: -10px;
  margin-left: 20px;
  color: #303030;
  font-size: 18px;
  font-weight: 600;
  font-family: serif;
}
.car_time_cs {
  margin-top: 10px;
  margin-left: 20px;
  color: #b7b7b7;
  font-size: 14px;
  font-family: serif;
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

