<template>
  <div class="wrapper">
      <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
      <div class="wrapper__input">
          <input class="wrapper__input__content" placeholder="请输入手机号" />
      </div>
      <div class="wrapper__input">
          <input
           class="wrapper__input__content"
           placeholder="请输入密码"
           type="password"
          />
      </div>
      <div class="wrapper__input">
          <input
           class="wrapper__input__content"
           placeholder="确认密码"
           type="password"
          />
      </div>
      <div class="wrapper__login-button" @click="handleLogin">注册</div>
      <div class="wrapper__login-link" @click="handLeLoginClick">已有账号去登录</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handLeLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handLeLoginClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/virables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    height: .66rem;
    width: .66rem;
    margin: 0 auto .4rem auto;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background: #F9F9F9;
    padding: 0 .16rem;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    &__content {
      width: 100%;
      line-height: .48rem;
      border: none;
      background: none;
      outline: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    font-size: .16rem;
    color: #FFFFFF;
    text-align: center;
  }
  &__login-link {
    font-size: 14px;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
