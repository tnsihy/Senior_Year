import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login.vue'
import Home from '@/components/common/Home.vue'
import Dashboard from '@/components/common/Dashboard'

import AboutAuthor from '@/components/page/AboutAuthor.vue'
import ProcessStore from '@/components/page/ProcessStore.vue'

import BaseTable from '@/components/page/BaseTable.vue'
import Tabs from '@/components/page/Tabs.vue'
import BaseForm from '@/components/page/BaseForm.vue'
import VueEditor from '@/components/page/VueEditor.vue'
import Markdown from '@/components/page/Markdown.vue'
import Upload from '@/components/page/Upload.vue'
import Icon from '@/components/page/Icon.vue'
import BaseCharts from '@/components/page/BaseCharts.vue'
import DragList from '@/components/page/DragList.vue'
import DragDialog from '@/components/page/DragDialog.vue'
import I18n from '@/components/page/I18n.vue'
import Permission from '@/components/page/Permission.vue'
import Status404 from '@/components/page/Status404.vue'
import Donate from '@/components/page/Donate.vue'

Vue.use(Router)
// 下边这段代码是为了解决跳转相同页面时报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/dashboard'
  }, {
    // 登录
    path: '/login',
    component: Login
  }, {
    // 关于作者
    path: '/aboutAuthor',
    component: AboutAuthor
  }, {
    // 项目仓库
    path: '/processStore',
    component: ProcessStore
  },
  {
    path: '/',
    component: Home,
    children: [{
      // 系统首页
      path: '/dashboard',
      component: Dashboard,
      meta: {title: '系统首页'}
    }, {
      // 基础表格
      path: '/table',
      component: BaseTable,
      meta: {title: '基础表格'}
    }, {
      // Tab选项卡
      path: '/tabs',
      component: Tabs,
      meta: {title: 'Tab选项卡'}
    }, {
      // 基本表单
      path: '/form',
      component: BaseForm,
      meta: {title: '基本表单'}
    }, {
      // 富文本编辑器
      path: '/editor',
      component: VueEditor,
      meta: {title: '富文本编辑器'}
    }, {
      // markdown编辑器
      path: '/markdown',
      component: Markdown,
      meta: {title: 'markdown编辑器'}
    }, {
      // 文件上传
      path: '/upload',
      component: Upload,
      meta: {title: '文件上传'}
    }, {
      // 自定义图标
      path: '/icon',
      component: Icon,
      meta: {title: '自定义图标'}
    }, {
      // schart图表
      path: '/charts',
      component: BaseCharts,
      meta: {title: 'schart图表'}
    }, {
      // 拖拽列表
      path: '/drag',
      component: DragList,
      meta: {title: '拖拽列表'}
    }, {
      // 推拽弹框
      path: '/dialog',
      component: DragDialog,
      meta: {title: '推拽弹框'}
    }, {
      // 国际化功能
      path: '/i18n',
      component: I18n,
      meta: {title: '国际化功能'}
    }, {
      // 权限测试
      path: '/permission',
      component: Permission,
      meta: {title: '权限测试', permission: true}
    }, {
      // 404页面
      path: '/404',
      component: Status404,
      meta: {title: '404页面'}
    }, {
      // 支持作者
      path: '/donate',
      component: Donate,
      meta: {title: '支持作者'}
    }]
  }]
})
