<template>
  <div id="opening-hours-box" v-scroll="handleScroll">
    <div v-if="data1">
      <div class="opening-hours-title-box">
        <div class="animation-box"></div>
        <h1 class="opening-hours-title">Opening-hours</h1>
      </div>
      <div v-scroll="handleScroll2">
        <div class="opening-hours-image-box" v-if="data2">
          <img class="image" :src="Group5" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group5 from "../../assets/Group5.png";
export default {
  data: function() {
    return {
      data1: false,
      data2: false,
      Group5: Group5,
      fire: 0,
      fire2: 0,
    };
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > this.fire) {
        this.data1 = !this.data1;
      }
      return window.scrollY > this.fire;
    },
    handleScroll2: function() {
      if (window.scrollY > this.fire2) {
        this.data2 = !this.data2;
      }
      return window.scrollY > this.fire2;
    },
  },
  mounted() {
    const width = window.innerWidth;
    this.fire = 2142 + (1320 * (width - 320)) / 680;
    this.fire2 = 2224 + (1342 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
#opening-hours-box {
  margin-top: 40px;
  height: calc(172px + 195 * (100vw - 320px) / 600);
  height: auto;
}

.opening-hours-title-box {
  width: 47%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.opening-hours-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: opening-hours-title 1.2s ease forwards;
  position: relative;
}

.opening-hours-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes opening-hours-title {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animation-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  background-color: black;
  animation: animation-box 1.2s ease forwards;
  transform: translate3d(0, 0, 0);
}

@keyframes animation-box {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    left: 0;
    width: 100%;
  }
  51% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}

.opening-hours-image-box {
  width: 100%;
  margin: 0 auto;
  animation: opening-hours-image-box 2s ease forwards;
}

@keyframes opening-hours-image-box {
  0% {
    opacity: 0;
    margin-top: 10px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
}

.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 40px;
}
</style>
