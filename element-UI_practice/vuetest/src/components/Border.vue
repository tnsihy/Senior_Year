<template>
  <div>
      <span>基础投影</span>
      <div class="first"></div>

      <span>浅色投影</span>
      <div class="two"></div>
  </div>
</template>

<script>
export default {
  name: 'Border'
}
</script>

<style scoped>
.first,.two{
    width:200px;
    height:100px;
    background-color: #fff;
    margin:10px;
    border-radius:5px;
}
.first:hover{
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0, 0, 0, .4);
    transition: all 1s;
}
.two:hover{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    transition: all 1s;
}
</style>
