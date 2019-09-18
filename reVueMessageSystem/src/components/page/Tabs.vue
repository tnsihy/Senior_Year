<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document-copy"></i> tab选项卡
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <el-tabs v-model="message">

        <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
          <el-table :data="unread" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="primary" size="small" @click="handleReadAll()">全部标为已读</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="`已读消息(${read.length})`" name="second">
          <template v-if="message === 'second'">
            <el-table :data="read" :show-header="false">
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{scope.row.title}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="180"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button type="danger" size="mini" @click="handleDel(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="handle-row">
              <el-button type="danger" size="mini" @click="handleDelAll()">删除全部</el-button>
            </div>
          </template>
        </el-tab-pane>

        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <el-table :data="recycle" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleRestore(scope.$index)">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" size="mini" @click="handleClear()">清空回收站</el-button>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      message: 'first',
      unread: [{
        date: '2019/09/12 18:05:00',
        title: '【系统通知】中秋放假时间为9月12日-9月15日，9月16日正常上班'
      }, {
        date: '2019/09/12 19:00:00',
        title: '【系统通知】预祝大家中秋快乐，每人可领取中秋过节费200元'
      }],
      read: [{
        date: '2019/09/09 12:00:00',
        title: '【网络维修】桂园3栋504网络故障，请求上门维修'
      }],
      recycle: [{
        date: '2019/09/11 16:45:00',
        title: '【系统通知】请按时于2019年9月13日提交实习周记'
      }]
    }
  },
  methods: {
    // *单个标为已读
    handleRead (index) {
      // 从未读消息中去除
      const item = this.unread.splice(index, 1)
      // 填入到已读消息
      this.read = this.read.concat(item)
    },
    // 全部标为已读
    handleReadAll () {
      this.read = this.read.concat(this.unread)
      this.unread = []
    },
    // *单个删除
    handleDel (index) {
      const item = this.read.splice(index, 1)
      this.recycle = this.recycle.concat(item)
    },
    // 删除全部
    handleDelAll () {
      this.recycle = this.recycle.concat(this.read)
      this.read = []
    },
    // 单个还原
    handleRestore (index) {
      const item = this.recycle.splice(index, 1)
      this.read = this.read.concat(item)
    },
    // 清空回收站
    handleClear () {
      this.recycle = []
    }
  }
}
</script>

<style scoped>
.crumbs {
  margin: 10px 0;
}
.message-title{
  cursor: pointer;
  color:#409EFF;
}
.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.handle-row{
    margin-top: 30px;
}
</style>
<style>
.el-table .cell{
  font-size:10px;
}
</style>
