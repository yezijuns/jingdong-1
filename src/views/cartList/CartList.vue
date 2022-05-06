<template>
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
    <div class="shops">
      <div
       class="empty"
       v-if="Object.keys(cartListWithProducts).length === 0"
      >购物车当前为空</div>
      <div
       class="shop"
       v-for="(item,index) in cartListWithProducts"
       :key="index"
      >
        <div class="shop__title">
          沃尔玛
        </div>
        <div class="products">
          <div class="products__list">
            <template
             v-for="product in item.productList"
             :key="product._id"
            >
              <div
               v-if="product.count > 0"
               class="products__item"
              >
                <img
                 class="products__item__img"
                 :src="product.imgUrl"
                />
                <div class="products__item__detail">
                  <h4 class="products__item__title">{{product.name}}</h4>
                  <p class="products__item__price">
                    <span>
                      <span class="products__item__yen">&yen;</span>
                       {{product.price}} x {{product.count}}
                    </span>
                    <span>
                      <span class="products__item__total">
                        <span class="products__item__yen">&yen;</span>
                         {{(product.price * product.count).toFixed(2)}}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Docker from '../../components/Docker'

const useCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const cartListWithProducts = computed(() => {
    const newCartList = {}
    for (const shopId in cartList) {
      let total = 0
      const products = cartList[shopId].productList
      for (const productId in products) {
        const product = products[productId]
        total += (product.count || 0)
      }
      if (total > 0) {
        newCartList[shopId] = cartList[shopId]
      }
    }
    return newCartList
  })

  return { cartListWithProducts }
}
export default {
  name: 'CartList',
  components: { Docker },
  setup () {
    const { cartListWithProducts } = useCartEffect()
    return { cartListWithProducts }
  }
}
</script>

<style lang="scss" escoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  background: rgb(248, 248, 248);
}
.title {
  line-height: .44rem;
  margin-bottom: .16rem;
  font-size: .16rem;
  text-align: center;
  background: $bgColor;
  color: $content-fontcolor;
}
.shops {
  width: 3.4rem;
  overflow-y: scroll;
  margin: .18rem .16rem .18rem .16rem;
  background: $bgColor;
  border-radius: 4px;
}
.empty {
  line-height: .44rem;
  color: $light-fontColor;
  font-size: .16rem;
  text-align: center;
}
.shop {
  &__title{
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
}
.products {
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $heightlight-fontColor;
    }
    &__total {
      margin-left: 1.0rem;
      color: $dark-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}

</style>
