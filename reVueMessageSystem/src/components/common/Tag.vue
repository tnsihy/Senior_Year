<template>
  <div class="tags" v-if="showTags">
      <ul>
          <li class="tags-li" v-for="(item,index) in tagsList" :key="index" :class="{'active':isActive(item.path)}">
              <router-link :to="item.path" class="tags-li-title">
                  {{item.title}}
              </router-link>
              <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
          </li>
      </ul>
      <div class="tags-close-box">
        <el-dropdown @command="handleTags">
          <el-button size="mini" type="primary">
            标签选项<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTag',
  data () {
    return {
      tagsList: []
    }
  },
  computed: {
    showTags () {
      return this.tagsList.length > 0
    }
  },
  watch: {
    // 设置tag标签
    $route (newValue, oldValue) {
      this.setTags(newValue)
    }
  },
  created () {
    this.setTags(this.$route)
  },
  methods: {
    setTags (route) {
      // 判断tagsList是否已存在被点击的一项，如其中有，则返回true
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath
      })
      // 如果不存在则推进，如果长度>=8，则删除数组的第一项
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift()
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath
        })
      }
    },
    // 关闭单个标签
    closeTags (index) {
      const delItem = this.tagsList.splice(index, 1)
      // 有多个标签，关闭后要跳转到前一个网页
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1]
      // 如果存在前一页的话
      if (item) {
        delItem.path = this.$route.fullPath && this.$router.push(item.path)
      }
      // 当tagsList长度为0时调转到首页
      if (this.tagsList.length === 0) {
        this.$router.push('/')
      }
    },
    // 关闭其他标签 只剩下自己
    closeOther () {
      const currentItem = this.tagsList.filter((item) => {
        return item.path === this.$route.fullPath
      })
      this.tagsList = currentItem
    },
    // 关闭所有标签 包括自己
    closeAll () {
      this.tagsList = []
      // 然后跳转到首页
      this.$router.push('/')
    },
    isActive (path) {
      return path === this.$route.fullPath
    },
    handleTags (command) {
      command === 'other' ? this.closeOther() : this.closeAll()
    }
  }
}
</script>

<style scoped>
.tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
}
.tags-li{
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    /* -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in; */
}
.tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
    text-decoration: none;
}
.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  background: #409EFF;
  color: #fff;
}
.tags-li.active .tags-li-title {
    color: #fff;
}
.tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
    z-index: 10;
}
</style>
