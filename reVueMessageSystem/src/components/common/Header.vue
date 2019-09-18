<template>
  <div class="header">
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChange">
        <!-- "<" -->
          <i class="el-icon-s-fold" v-if="!collapse"></i>
          <i class="el-icon-s-unfold" v-else></i>
      </div>

      <div class="logo">后台管理系统</div>

      <div class="header-right">
          <div class="header-user-con">
              <!-- 全屏显示 -->
              <div class="btn-fullscreen" @click="handleFullScreen">
                  <!-- 文字提示tooltip -->
                  <el-tooltip effect="dark" placement="bottom" :content="fullscreen?`取消全屏`:`全屏`">
                      <i class="el-icon-rank"></i>
                  </el-tooltip>
              </div>

              <!-- 消息中心 -->
              <div class="btn-bell">
                  <el-tooltip effect="dark" placement="bottom" :content="message?`有${message}条未读消息`:`消息中心`">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                  </el-tooltip>
                  <!-- 未读消息红点 -->
                  <span class="btn-bell-badge" v-if="message"></span>
              </div>

              <!-- 用户头像 -->
              <div class="user-avator">
                  <img src="../../assets/img/user.jpg">
              </div>

              <!-- 用户名下拉菜单el-dropdown
                trigger="click"指点击时触发
                指令事件(点击菜单项后会触发事件) @command="handleCommand"-->
              <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                      <!-- 通过localStorage获取username -->
                      {{username}}
                      <i class="el-icon-caret-bottom"></i>
                  </span>
                  <el-dropdown-menu>
                      <!--  _blank 在新窗口中打开被链接文档 -->
                      <a href="/aboutAuthor" target="_blank">
                          <el-dropdown-item>关于作者</el-dropdown-item>
                      </a>
                      <a href="/processStore" target="_blank">
                          <el-dropdown-item>项目仓库</el-dropdown-item>
                      </a>
                      <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </div>
      </div>
  </div>
</template>

<script>
import bus from '../common/bus'
export default {
  name: 'HomeHeader',
  data () {
    return {
      collapse: false,
      fullscreen: false,
      message: 2,
      name: '未命名'
    }
  },
  computed: {
    username () {
      let username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  methods: {
    // 侧边栏折叠
    collapseChange () {
      this.collapse = !this.collapse
      // 兄弟间传值
      bus.$emit('collapse', this.collapse)
    },
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    // 退出登录
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.header {
    position: relative;
    width: 100%;
    height: 70px;
    font-size: 20px;
    color: #fff;
    background-color: #242f42;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    /* width: 250px; */
    line-height: 70px;
    font-size: 22px;
}
.header-right {
    float: right;
    padding-right: 50px;
    overflow: hidden;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-avator{
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right:10px;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
a{
    text-decoration: none;
}
</style>
