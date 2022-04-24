import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  return { changeItemInfo }
}
