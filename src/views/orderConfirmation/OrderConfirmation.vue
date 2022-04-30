<template>
  <div class="top">
    <div class="top__bgcor" />
    <div class="top__header">
      <div class="iconfont top__header__back">&#xe679;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__title"> 北京理工大学国防科技园2号楼10层 </div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">瑶妹（先生）</span>
        <span class="top__receiver__info__name">18911024266</span>
      </div>
      <div class="iconfont top__receiver__enter">&#xe679;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation'
}
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    padding-top: .4rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
}
</style>
