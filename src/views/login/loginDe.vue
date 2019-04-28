<template>
    <div class='loginDe'>
        <transition-group name='workin' v-on:before-enter="beforeEnter"
                          v-on:enter="enter"
                          v-on:after-enter="afterEnter"
                          v-bind:css="false">
            <div class='a item' v-if='isShow' key='a' :data-index='1'>
                <van-cell-group>
                    <van-field left-icon="contact" label="用户名"/>
                </van-cell-group>
            </div>
            <div class='a item' v-if='isShow' key='b' :data-index='2'>
                <van-cell-group>
                    <van-field left-icon="contact" type="password" label="密码"/>
                </van-cell-group>
            </div>
            <div class='a btn' v-if='isShow' key='d' :data-index='4'>
                登陆
            </div>
        </transition-group>
    </div>
</template>

<script>
    import minix from './minix'
    export default {
        mixins:[minix]
    }
</script>

<style lang="scss" scoped>
    .loginDe {
        position: absolute;
        width: 100%;

        .item {
            opacity: 0.7;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 2px;
        }

        .btn {
            padding: 10px;
            border-radius: 10px;
            margin: 20px auto;
            width: 50px;
            background: #6c93a9;
            text-align: center
        }

        .workin-enter {
            -webkit-transform: translateY(30px);
            transform: translateY(30px);
        }

        .workin-enter-active {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
    }

</style>
