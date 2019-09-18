<template>
  <div>
    <!-- :gutter间隔 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- shadow="hover"鼠标停留时出现阴影 -->
        <el-card shadow="hover" class="mgb20">
          <div class="user-info">
            <img src="../../assets/img/user.jpg" class="user-avator" />
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2019-09-09</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>深圳</span>
          </div>
        </el-card>

        <el-card shadow="hover">
          <div>
            <span style="color: #999;">语言详情</span>
            <div class="border-bottom"></div>
          </div>
          <span class="fontSize">Vue</span>
          <el-progress :percentage="100" status="success"></el-progress>
          <span class="fontSize">javaScript</span>
          <el-progress :percentage="75"></el-progress>
          <span class="fontSize">HTML</span>
          <el-progress :percentage="50" status="warning"></el-progress>
          <span class="fontSize">CSS</span>
          <el-progress :percentage="25" status="exception"></el-progress>
        </el-card>
      </el-col>

      <el-col :span="16" class="dashboard-col">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="hover">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card shadow="hover">
              <div class="grid-content grid-con-3">
                <i class="el-icon-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-card shadow="hover">
          <div>
            <span class="fontSize">待办事项</span>
            <el-button type="text" style="float:right;padding:3px 0;">添加</el-button>
          </div>

          <el-table
            :data="todoList"
            height="328"
            style="width:100%"
            ref="multipleTable"
            @selection-change="handleSelectionChange"
          >
            <el-table-column width="50" type="selection">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>

            <el-table-column label="标题">
              <template slot-scope="scope">
                <!-- 通过:class绑定 根据状态true或者false决定绑定的样式是否呈现 -->
                <div :class="{'todo-item-del':scope.row.status}">{{scope.row.title}}</div>
              </template>
            </el-table-column>

            <el-table-column width="120" label="操作" fixed="right">
              <template>
                <i class="el-icon-edit"></i>
                <span>编辑</span>
                <i class="el-icon-delete"></i>
                <span>删除</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="12">
        <el-card shadow="hover">
          <!-- 需要下载vue-schart 缺一不可 -->
          <schart class="schart" :data="data" canvasId="bar" type="bar" :options="options"></schart>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="hover">
          <schart class="schart" :data="data" canvasId="line" type="line" :options="options2"></schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart'
export default {
  name: 'Dashboard',
  data () {
    return {
      name: localStorage.getItem('ms_username'),
      multipleSelection: [],
      flag: 0,
      todoList: [
        {
          title: '继续阅读前端工程师校招面试题库-牛客网出品',
          status: false
        },
        {
          title: 'XX有限公司技术岗16:00-19:00笔试',
          status: false
        },
        {
          title: '准备教师资格证面试资料',
          status: false
        },
        {
          title: '学习Vue框架相关知识',
          status: true
        },
        {
          title: '今日投递简历',
          status: false
        }
      ],
      data: [{
        name: '2019/9/4',
        value: 1083
      },
      {
        name: '2019/9/5',
        value: 941
      },
      {
        name: '2019/9/6',
        value: 1139
      },
      {
        name: '2019/9/7',
        value: 816
      },
      {
        name: '2019/9/8',
        value: 327
      },
      {
        name: '2019/9/9',
        value: 228
      },
      {
        name: '2019/9/10',
        value: 1065
      }
      ],
      options: {
        title: '最近七天每天的用户访问量',
        showValue: false,
        fillColor: 'rgb(45, 140, 240)',
        bottomPadding: 30,
        topPadding: 30
      },
      options2: {
        title: '最近七天用户访问趋势',
        contentColor: '#EEEEEE',
        bottomPadding: 30,
        topPadding: 30
      }
    }
  },
  components: {
    Schart
  },
  // 监听role的变化
  computed: {
    role () {
      return this.name === 'tnsihy' ? '超级管理员' : '普通用户'
    }
  },
  methods: {
    handleSelectionChange (value) {
      this.multipleSelection = value
      if (this.flag === 0) {
        for (var i in this.multipleSelection) {
          this.multipleSelection[i].status = true
        }
        this.flag = 1
      } else if (this.flag === 1) {
        for (var j in this.todoList) {
          this.todoList[j].status = false
        }
        this.multipleSelection = []
        this.flag = 0
      }
    }
  }
}
</script>

<style scoped>
.mgb20 {
  margin-bottom: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
.user-info-list span {
  margin-left: 70px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 60px;
}
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.border-bottom {
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
}
.fontSize {
  color: #999;
  font-size: 15px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.schart {
  width: 100%;
  height: 300px;
}
</style>

<style>
.el-progress {
  color: #999;
}
</style>
