<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-location-outline"></i> {{$t('message.breadcrumb')}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <span>{{$t('message.tips')}}</span>
      <el-button
        type="primary"
        size="small"
        @click="handleChange"
      >{{$t('message.btn')}}</el-button>
      <div class="list">
        <h2>{{$t('message.title1')}}</h2>
        <p>{{$t('message.p1')}}</p>
        <p>{{$t('message.p2')}}</p>
        <p>{{$t('message.p3')}}</p>
      </div>
      <h2>{{$t('message.title2')}}</h2>
      <div>
        <span>这里报错啦????</span>
        <!-- <i18n path="message.info" tag="p">
            <a place="action" href="https://element.eleme.cn/2.0/#/zh-CN/component/i18n">{{ $t('i18n.value') }}</a>
        </i18n> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'I18n',
  methods: {
    handleChange () {
      this.$i18n.locale = this.$i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
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
.list{
    padding: 30px 0;
}
.list p{
    margin-bottom: 20px;
}
a{
    color: #409eff;
}
</style>
