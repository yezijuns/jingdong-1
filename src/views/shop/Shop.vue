<template>
  <div class="wrapper">
    <div class="search">
      <div
       class="search__back iconfont"
       @click="handleBackClick"
      >&#xe679;</div>
      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe600;</div>
        <input
         class="search__content__input"
         placeholder="请输入商品名称"
        >
      </div>
    </div>
    <ShopInfo :item = "item" :hideBorder="true"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元运费券'
    }
    const handleBackClick = () => {
      router.back()
    }
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" ecoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  padding: .14rem 0 .04rem 0;
  &__back {
    line-height: .32rem;
    width: .3rem;
    font-size: .24rem;
    color:  #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      font-size: .2rem;
      margin: .08rem 0.04rem .08rem .1rem;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      padding-right: .2rem;
      width: 100%;
      height: .32rem;
      background: none;
      border: none;
      outline: none;
      margin-top: .03rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
