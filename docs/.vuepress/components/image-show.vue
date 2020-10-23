<!-- 瀑布流概念：图片容器宽度固定，高度根据图片自适应，图片一行不能排列时换行从左往右排列 -->

<template>
    <div class="imageShow" v-if="images.length">
        <img :src="item" v-for="(item,index) in images" :key="index" />
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
    }
</script>

<style lang="less" scoped>
.imageShow {

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;


    img {
        width: 31%;
        margin: 10px auto;
    }
}
</style>