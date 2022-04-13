<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
     v-for="item in nearbyList"
     class="nearby__item"
     :key="item._id"
    >
      <img class="nearby__item__img" :src="item.imgUrl">
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.name}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售: {{item.sales}}</span>
          <span class="nearby__content__tag">起送: {{item.expressLimit}}</span>
          <span class="nearby__content__tag">基础运费: {{item.expressPrice}}</span>
        </div>
        <div class="nearby__content__highlight">{{item.slogan}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { getNearbyList, nearbyList }
}

export default {
  name: 'Nearby',
  setup () {
    const { getNearbyList, nearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: 18px;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    margin-top: .12rem;
    &__img {
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__title {
      line-height: .22rem;
      font-size: 16px;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: 13px;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: 13px;
      color: #E93B3B;
    }
  }
}
</style>
