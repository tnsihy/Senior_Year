<template>
  <div>
    <div class="crumbs">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-grid"></i> 基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="handle-box">
        <el-button
          type="primary"
          icon="el-icon-delete"
          class="handle-del mr10"
          @click="delAllSelection"
        >批量删除</el-button>
        <el-select placeholder="地址" v-model="query.address">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="广西省" value="广西省"></el-option>
        </el-select>
        <el-input placeholder="用户名" class="handle-input mr10" v-model="query.name"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      </div>
      <el-table
        :data="computedTableData"
        class="table"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" width="100" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column label="账户余额">
          <template slot-scope="scope">￥{{scope.row.money}}</template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center" width="150">
          <template slot-scope="scope">
            <!-- :preview-src-list="[scope.row.thumb]"查看大图 -->
            <el-image
              class="table-td-thumb"
              :src="scope.row.thumb"
              :preview-src-list="[scope.row.thumb]"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center"></el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
            >{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="注册时间"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              style="font-size:10px"
              @click="handleEdit(scope.$index,scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              style="color:red;font-size:10px;"
              @click="handleDelete(scope.$index,scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" width="30%" :visible.sync="editVisible">
      <el-form label-width="70px" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span class="dialog-footer">
        <el-button size="mini" @click="editVisible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="saveEdit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BaseTabel',
  data () {
    return {
      query: {
        address: '广东省',
        name: '',
        pageIndex: 1,
        pageSize: 10
      },
      tableData: [
        {
          id: '04160502',
          name: '陈银君',
          money: 10000,
          thumb: require('@/assets/img/user.jpg'),
          address: '广东省揭阳市',
          state: '成功',
          date: '2019/09/11'
        },
        {
          id: '04160504',
          name: '刘文君',
          money: 3,
          thumb: require('@/assets/img/4.jpg'),
          address: '广东省阳江市',
          state: '失败',
          date: '2019/09/11'
        },
        {
          id: '04160526',
          name: '谢露星',
          money: 10,
          thumb: require('@/assets/img/26.jpg'),
          address: '广东省茂名市',
          state: '待审核',
          date: '2019/09/11'
        }
      ],
      // 选取的内容
      multipleSelection: [],
      // 要删除的内容
      delList: [],
      // 是否可编辑
      editVisible: false,
      form: {},
      idx: -1,
      id: -1,
      pageTotal: 0
    }
  },
  methods: {
    // 多选操作
    handleSelectionChange (value) {
      this.multipleSelection = value
    },
    delAllSelection () {
      // 获取选取的个数
      const length = this.multipleSelection.length
      let str = ''
      this.delList = this.delList.concat(this.multipleSelection)
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + ' '
      }
      this.$message.error(`删除了${str}`)
      this.multipleSelection = []
    },
    // 触发搜索按钮
    handleSearch () {
      if (this.query.address) {
        var result = []
        this.tableData.filter((item) => {
          if (item.address.indexOf(this.query.address) > -1) {
            result.push(item)
          }
          this.tableData = result
        })
      }
    },
    // 编辑 设置editVisible弹出框
    handleEdit (index, row) {
      this.idx = index
      this.form = row
      this.editVisible = true
    },
    // 删除
    handleDelete (index, row) {
      this.$confirm('确定要删除吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          this.$message.success('删除成功')
          this.tableData.splice(index, 1)
        })
        .catch(() => {})
    },
    // 保存修改
    saveEdit () {
      this.editVisible = false
      this.$message.success(`修改第${this.idx + 1}行成功`)
      // 好神奇！
      this.$set(this.tableData, this.idx, this.form)
    }
  },
  computed: {
    computedTableData () {
      return this.tableData.filter(item => item.address.indexOf(this.query.address) > -1 && item.name.indexOf(this.query.name) > -1)
    }
  }
}
</script>

<style scoped>
.crumbs {
  margin: 10px 0;
}
.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.handle-box {
  margin-bottom: 20px;
}
.mr10 {
  margin-right: 10px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.dialog-footer{
  padding:10px 20px 20px;
  text-align: right;
  display: block;
}
</style>
<style>
.handle-box .el-button {
  padding: 9px 12px;
  font-size: 10px;
}
.el-input__inner,
.el-input__icon {
  line-height: 32px;
  height: 32px;
}
.el-image__inner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.el-table td{
  padding:5px 0;
}
</style>
