<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g/份</h4>
          <p class="product__item__sales">月售10件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>33.6
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  top: 1.55rem;
  left: 0;
  bottom: .5rem;
  right: 0;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: #F5F5F5;
  &__item{
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    &--active {
      background: #FFF;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #f1f1f1;
    &__img {
      width: .68rem;
      height: .68rem;
    }
    &__detail {
      margin-left: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .12rem;
      color: #333333;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: .12rem;
      color: #333333;
      line-height: .12rem;
    }
    &__price {
      margin: 0;
      font-size: .14rem;
      color: #E93B3B;
      line-height: .2rem;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      font-size: .12rem;
      color: #999999;
      line-height: 20px;
      margin-left: .06rem;
      text-decoration: line-through;
    }
  }
}
</style>
