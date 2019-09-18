<template>
  <div class="sidebar">
      <!-- :default-active刷新时仍定位在刷新后的页面 :collapse判断是否折叠-->
    <el-menu
        class="sidebar-el-menu"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        :default-active="defaultActive"
        :collapse="collapse"
        router
    >
      <!-- 循环第一级 -->
      <template v-for="item in items">
        <!-- 判断是否存在第二级：
        el-menu有下级
        el-menu-item无下级-->

        <!-- 如果存在第二级 -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>

            <!-- 循环第二级 -->
            <template v-for="subItem in item.subs">
              <!-- 判断是否存在第三级 -->
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{subItem.title}}</template>

                <!-- 循环第三级 -->
                <template v-for="(threeItem,i) in subItem.subs">
                  <el-menu-item :key="i" :index="threeItem.index">{{threeItem.title}}</el-menu-item>
                </template>
              </el-submenu>

              <!-- 不存在第三级 -->
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{subItem.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>

        <!-- 不存在第二级 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <template slot="title"></template>
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus'
export default {
  name: 'HomeSidebar',
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-s-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-s-grid',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-document-copy',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'el-icon-date',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编辑器'
                },
                {
                  index: 'markdown',
                  title: 'markdown编辑器'
                }
              ]
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'el-icon-view',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-pie-chart',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-rank',
          index: '6',
          title: '拖拽组件',
          subs: [
            {
              index: 'drag',
              title: '拖拽列表'
            },
            {
              index: 'dialog',
              title: '拖拽弹框'
            }
          ]
        },
        {
          icon: 'el-icon-location-outline',
          index: 'i18n',
          title: '国际化功能'
        },
        {
          icon: 'el-icon-warning',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        },

        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/donate',
          title: '支持作者'
        }
      ]
    }
  },
  computed: {
    defaultActive () {
      // 在菜单上的属性值default-active，它的说明内容为：当前激活菜单的 index
      return this.$route.path.replace('/', '')
    }
  },
  // 在生命周期为created的时候，通过Bus中央事件总线用$on监听组件1中发送的collapse事件，用一个带参数的回调函数
  created () {
    bus.$on('collapse', (msg) => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  background-color: rgb(83, 103, 158);
}
/* 去除滚动条 */
.sidebar::-webkit-scrollbar {
  width: 0;
}
/* 重点 */
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
