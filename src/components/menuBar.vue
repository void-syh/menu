<template>
  <div class="main" @contextmenu.prevent="rightShow">
    <div class="showBox" v-if="show" :style="positionStyle">
      <item
        v-for="(item,index) in data"
        :key="index"
        :model="item"
        @ifClose="ifClose"
        @ifOpen="ifOpen"
        @closeOther="closeOther"
      ></item>
    </div>
  </div>
</template>

<script>
import mouseHandle from "./mouseHandle.js";
import item from "./item.vue";
export default {
  name: "menuBar",
  props: ["data"],
  data() {
    return {
      show: false,
      X: 0,
      Y: 0,
      handle: undefined
    };
  },
  methods: {
    rightShow(e) {
      this.show = true;
      this.X = e.clientX;
      this.Y = e.clientY;
      this.handle.listener();
    },
    ifClose(length, id) {
      let res = this.handle.ifClose(length, id);
      for (let i of this.data) {
        if (i.id == res[1] && res[0] == false) {
          i.open = false;
        }
      }
    },
    ifOpen(id) {
      let index = 0;
      let now;
      for (let i of this.data) {
        if (i.open) index += 1;
        if (i.id == id) now = i;
      }
      if (index) {
        let res = this.handle.ifOpen(id);
        if (res[0] == true) {
          for (let i of this.data) {
            if (i.id == res[1]) {
              i.open = true;
            } else {
              i.open = false;
            }
          }
        }
      } else {
        now.open = true;
      }
    },
    closeOther(id) {
      for (let i of this.data) {
        if (i.id == id) {
          i.open = true;
        } else {
          i.open = false;
        }
      }
    }
  },
  computed: {
    positionStyle() {
      return {
        left: this.X + "px",
        top: this.Y + "px"
      };
    }
  },
  components: {
    item
  },
  mounted() {
    this.handle = new mouseHandle();
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 800px;
  background: aqua;
  position: relative;
}

.showBox {
  position: absolute;
}
</style>