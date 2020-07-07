<template>
  <menubar :data="list"></menubar>
</template>

<script>
// import menubar from "../components/menuBar";
import Vue from 'vue'
import menubar from "../index"
Vue.use(menubar)

export default {
  name: "example",
  data() {
    return {
      list: [
        {
          title: "菜单A",
          id:'0',
          open:false,
          children: [{ title: "菜单A-A",id:'0-0' },{title:"菜单A-B",id:'0-1'}]
        },
        {
          title: "菜单B",
          id:'1',
          open:false,
          children: [{ title: "菜单B-A",id:'1-0'},{title:"菜单B-B",id:'1-1'}]
        }
      ]
    };
  },
  components: {
    menubar
  }
};
</script>

<style>
</style>