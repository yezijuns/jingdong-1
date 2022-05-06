<template>
 <div class="wrapper">
     <div class="bg"></div>
     <div class="header">
         <img
          class="header__picture"
          src="http://www.dell-lee.com/imgs/vue3/orange.png"
         >
         <div class="header__info">
             <p class="header__info__name">热心市民肖先生</p>
             <p class="header__info__id">ID：000001</p>
         </div>
         <div class="header__coupon">
             <span class="header__coupon__modular">
                <p class="header__coupon__name">红包</p>
                <p class="header__coupon__number">218</p>
             </span>
             <span class="header__coupon__modular">
                <p class="header__coupon__name">优惠卷</p>
                <p class="header__coupon__number">12张</p>
             </span>
             <span class="header__coupon__modular">
                <p class="header__coupon__name">鲜豆</p>
                <p class="header__coupon__number">88</p>
             </span>
             <span class="header__coupon__modular">
                <p class="header__coupon__name">白条</p>
                <p class="header__coupon__number">1000</p>
             </span>
         </div>
     </div>
     <!-- <div class="list">
        <div class="list__wallet">
          <div class="list__wallet__icon"></div>
          &#xe6c1; 我的钱包
          <div class="list__icon">&#xe679;</div>
        </div>
        <div class="list__address">
          <div class="list__wallet__icon"></div>
          我的地址
          <div class="list__icon"></div>
        </div>
        <div class="list__customer">
          <div class="list__wallet__icon"></div>
          客服与帮助
          <div class="list__icon"></div>
        </div>
     </div> -->
 </div>
 <Docker :currentIndex="3" />
</template>

<script>
import Docker from '../../components/Docker'
import '../../style/iconfont.css'
export default {
  name: 'PersonalInfo',
  components: { Docker }
}
</script>

<style lang="scss" escoped>
.wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(248, 248, 248);
}
.bg {
  height: 30%;
  width: 100%;
  border-radius: 0 0 20% 20%;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 50%);
}
.header {
  position: absolute;
  height: 2.03rem;
  width: 3.4rem;
  top: 1.08rem;
  right: .18rem;
  left: .18rem;
  background: #fff;
  border-radius: .08rem;
  &__picture {
    position: absolute;
    height: .94rem;
    width: .94rem;
    top: -.5rem;
    right: 1.23rem;
    border-radius: 50%;
  }
  &__info {
    &__name {
      margin: .59rem .5rem .02rem .5rem;
      font-size: .24rem;
      color: #262628;
      letter-spacing: 0.19px;
      text-align: center;
      line-height: 0.36rem;
    }
    &__id {
      font-size: .15rem;
      color: #C1C0C9;
      text-align: center;
      line-height: .02rem;
    }
  }
  &__coupon {
    display: flex;
    bottom: 0;
    width: 100%;
    height: 30%;
    border-top: 0.01rem solid #F1F1F1;
    &__modular {
      width: 1.06rem;
    }
    &__name {
      font-size: .12rem;
      color: #C1C0C9;
      text-align: center;
    }
    &__number {
      font-size: 20px;
      color: #262628;
      text-align: center;
      margin-top: .01rem;
    }
  }
}
.list {
  position: absolute;
  top: 3.27rem;
  right: .18rem;
  left: .18rem;
  width: 3.39rem;
  height: 1.47rem;
  background: #fff;
  &__wallet {
    display: flex;
    height: .32rem;
    font-size: 14px;
    color: #262626;
    margin: .17rem 0 .17rem .5rem;
  }
  &__icon {
    transform: rotate(180deg);
    position: absolute;
    right: .16rem;
    top: .5rem;
    color: #666;
    font-size: .2rem;
  }
}
</style>
