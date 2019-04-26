<template>
  <div id="login">
    <div class="routerLink">
      <router-link tag="span" to="register" class="regis">注册</router-link>
      <router-link tag="span" to="loginDe" class="login">登陆</router-link>
    </div>
    <div class='routerView'>
      <transition name='login'>
        <router-view></router-view>
      </transition>
    </div>
    
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  background-image: url("../image/image.jpeg");
  background-size: cover;
  font-size: 16px;
  box-sizing: border-box;
  .routerLink {
    padding: 50px;
    .login {
      margin-left: 20px;
      &.router-link-active {
        font-size: 25px;
      }
    }

    .regis {
      &.router-link-active {
        font-size: 25px;
      }
    }
  }

  .routerView{
    position:relative
  }
  .login-enter-active, .login-leave-active {
    transition: transform 0.1s;
  }
  .login-enter, .login-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateX(100%); 
  }
}
</style>


