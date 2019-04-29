<template>
  <div class="home">
      <div class="avatar">
        <img src="../image/avatar.jpg" alt="">
        <div>{{username}}</div>
      </div>
      <selfswiper></selfswiper>
  </div>
</template>

<script>
// @ is an alias to /src
import selfswiper from './swiper/swiper'
export default {
  name: 'home',
  data(){
    return{
      // avatarSrc:'../image/avatar.jpg'
      username:'Sj'
    }
  },
  components:{
      selfswiper
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width:100%;
    height: 100%;
    .avatar{
      height:20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      font-size: 16px;
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
</style>
