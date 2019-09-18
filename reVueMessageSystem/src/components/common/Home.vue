<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-sidebar></home-sidebar>
    <!-- 插入Dashboard.vue -->
    <div class="content-box" :class="{'content-collapse':collapse}">
      <home-tag></home-tag>
      <div class="content">
        <!-- <transition name="move" mode="out-in"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './Header.vue'
import HomeSidebar from './Sidebar.vue'
import HomeTag from './Tag.vue'
import bus from './bus'
export default {
  name: 'Home',
  data () {
    return {
      collapse: false
    }
  },
  components: {
    HomeHeader,
    HomeSidebar,
    HomeTag
  },
  created () {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}
.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}
/* 导航栏背景移动 */
.content-collapse {
    left: 65px;
}
/* .move-enter-active,
.move-leave-active {
    transition: opacity .5s;
}

.move-enter,
.move-leave {
    opacity: 0;
} */
</style>
