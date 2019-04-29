<template>
    <div class="swiper">
        <swiper class="content-out" :options="swiperOption">
            <swiper-slide>
                <div class="content" style="background:green">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content">
                    <div class="card">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name:'selfswiper',
        data(){
          return {
              swiperOption: {
                  slidesPerView: 'auto',
                  // spaceBetween: 30,
                  // pagination: {
                  //     el: '.swiper-pagination',
                  //     clickable: true
                  // }
              }
          }
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss" scoped>
    .swiper{
        height: 60%;
        .content-out{
            height: 100%;
            width:100%;
            .swiper-slide {
                width: 85%;
                .content {
                    width: 100%;
                    height: 100%;
                    background: red;
                    .card{
                        position: absolute;
                        border:2px solid black;
                        width:90%;
                        height:90%;
                        border-radius: 10%;
                        top:0;
                        bottom: 0;
                        left:40px;
                        margin:auto;
                        z-index:1;
                    }
                }
            }

        }

    }
</style>