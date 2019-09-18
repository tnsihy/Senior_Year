<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-rank"></i> 拖拽组件
        </el-breadcrumb-item>
        <el-breadcrumb-item>拖拽列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="drag-box">
        <div class="drag-box-item">
          <div class="item-title">未完成</div>
          <draggable v-model="todo" :options="dragOptions">
            <transition-group tag="div" class="item-ul">
              <div v-for="item in todo" :key="item.id" class="drag-list">
                {{item.content}}
              </div>
            </transition-group>
          </draggable>
        </div>

        <div class="drag-box-item">
          <div class="item-title">正在做</div>
          <draggable v-model="doing" :options="dragOptions">
            <transition-group tag="div" class="item-ul">
              <div v-for="item in doing" :key="item.id" class="drag-list">
                {{item.content}}
              </div>
            </transition-group>
          </draggable>
        </div>

        <div class="drag-box-item">
          <div class="item-title">已完成</div>
          <draggable v-model="done" :options="dragOptions">
            <transition-group tag="div" class="item-ul">
              <div v-for="item in done" :key="item.id" class="drag-list">
                {{item.content}}
              </div>
            </transition-group>
          </draggable>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'DragList',
  components: {
    draggable
  },
  data () {
    return {
      dragOptions: {
        animation: 120,
        scroll: true,
        // 多个拖拽列表相互交换内容
        group: 'sortlist',
        ghostClass: 'ghost-style'
      },
      todo: [{
        id: 1,
        content: '刷牙洗洗睡啦~'
      }, {
        id: 2,
        content: '在2019/09/13前写完实习周记'
      }, {
        id: 3,
        content: '秋招投简历'
      }],
      doing: [{
        id: 4,
        content: '根据Vue-message-system写后台管理系统'
      }, {
        id: 5,
        content: '陪父母喝茶、聊天'
      }, {
        id: 6,
        content: '肚子饿了吃零食'
      }],
      done: [{
        id: 7,
        content: '与家人共享午餐'
      }, {
        id: 8,
        content: '送高三弟弟回学校'
      }, {
        id: 9,
        content: '做家务，例如扫地、拖地、洗碗等等'
      }]
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
.drag-box{
    display: flex;
    user-select: none;
}
.drag-box-item {
    flex: 1;
    max-width: 330px;
    min-width: 300px;
    background-color: #eff1f5;
    margin-right: 16px;
    border-radius: 6px;
    border: 1px #e1e4e8 solid;
}
.item-title{
    padding: 8px 8px 8px 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
    font-weight: 600;
}
.item-ul{
    padding: 0 8px 8px;
    height: 500px;
    overflow-y: scroll;
}
.item-ul::-webkit-scrollbar{
    width: 0;
}
.drag-list {
    border: 1px #e1e4e8 solid;
    padding: 10px;
    margin: 5px 0px 10px;
    list-style: none;
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
    -webkit-transition: border .3s ease-in;
    transition: border .3s ease-in;
}
.drag-list:hover {
    border: 1px solid #20a0ff;
}

.ghost-style{
    display: block;
    color: transparent;
    border-style: dashed
}
</style>
