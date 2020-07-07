<template>
  <div>
    <div
      class="item"
      :style="postionStyle"
      :class="[isTopBorder?'topBorder':'']"
      @mouseover="openList"
      @mouseleave="closeList"
    >{{model.title}}</div>
    <div v-show="this.model.open">
      <item v-for="(item,index) in model.children" :key="index" :model="item"></item>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["model"],
  data() {
    return {
      timer: -1
    };
  },
  computed: {
    postionStyle() {
      let x = 0;
      let y = 0;
      for (let i of this.model.id) {
        if (i == "-") x++;
        else y += parseInt(i);
      }
      return {
        left: x * 80 + "px",
        top: y * 24 + "px"
      };
    },
    isTopBorder() {
      let arr = this.model.id.split("");
      if (arr[arr.length - 1] === "0") return true;
      return false;
    }
  },
  methods: {
    openList() {
      this.$emit("ifOpen", this.model.id);
      this.timer = setTimeout(() => {
        if (this.timer != -1) {
          this.$emit("closeOther", this.model.id);
        }
      }, 300);
    },
    closeList() {
      this.timer = -1;
      if (this.model.children) {
        this.$emit("ifClose", this.model.children.length, this.model.id);
      }
    }
  }
};
</script>

<style>
.item {
  width: 80px;
  height: 24px;
  border: black 1px solid;
  border-top: 0;
  text-align: center;
  position: absolute;
  box-sizing: border-box;
}

.topBorder {
  border-top: 1px solid black;
}
</style>