<template>
<div class="position">
        <span class="iconfont position__icon">&#xe61f;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe628;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe600;</span>
      <span class="search__text">山姆会员商店优惠商品1234</span>
    </div>
    <div class="banner">
      <img
       class="banner__img"
       src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      >
    </div>
    <div class="icons">
      <div
       class="icons__item"
       v-for="item in iconsList"
       :key="item.desc"
      >
        <img
         class="icons__item__img"
         :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        />
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/virables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position__icon {
    position: relative;
    font-size: .2rem;
    top: .01rem;
  }
  .position__notice {
    position: absolute;
    font-size: .2rem;
    top: .17rem;
    right: 0;
  }
}
.search {
  height: .32rem;
  background: #F5F5F5;
  border-radius: .16rem;
  margin-bottom: .16rem;
  color: #B7B7B7;
  .iconfont {
    position: relative;
    font-size: .2rem;
    top: .04rem;
    left: .16rem;
    margin-right: .28rem;
  }
  &__text {
    position: relative;
    line-height: .16rem;
    font-size: .14rem;
    top: .02rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin: .16rem 0;
  &__item {
    width: 20%;
    &__img {
      display: block;
      height: .4rem;
      width: .4rem;
      margin: 0 auto;
    }
    &__desc {
      font-size: 12px;
      color: #333333;
      text-align: center;
      display: block;
    }
  }
}
.gap {
  height: .1rem;
  background: $content-bgColor;
  margin: 0 -.2rem;
}
</style>
