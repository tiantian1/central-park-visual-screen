<template>
  <div>
    <div class="menu-list"
         v-for="(item,index) in menuList"
         :key="index">

      <div class="item">
        <img :src="item.icon" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [{
        icon: require('../../assets/img/add.png'),
        name: '添加'
      }, {
        icon: require('../../assets/img/full-screen.png'),
        name: '全屏'
      },
      {
        icon: require('../../assets/img/del.png'),
        name: '删除'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
  .item {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.2);
  }
}
</style>
