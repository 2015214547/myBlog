<!-- 瀑布流概念：图片容器宽度固定，高度根据图片自适应，图片一行不能排列时换行从左往右排列 -->

<template>
  <div class="imageShow" v-if="images.length">
    <div class="image-item" v-for="(item,index) in images" :key="index">
      <!-- 图片展示 -->
      <img :src="item.imgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="less" scoped>
.imageShow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  .image-item {
    width: 31%;
    display: inline-block;
    position: relative;

    img {
      width: 100%;
      margin: 10px auto;
        transition: all 0.5s;


      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>