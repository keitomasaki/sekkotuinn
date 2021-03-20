<template>
  <div id="feature-box" v-scroll="handleScroll">
    <div class="feature-title-wrapper-box" v-if="data1">
      <div class="animation-box"></div>
      <h1 class="feature-title">Feature</h1>
    </div>
    <FeatureContent />
  </div>
</template>

<script>
import FeatureContent from "./FeatureContent";

export default {
  components: {
    FeatureContent,
  },
  data: function() {
    return {
      data1: false,
      data2: false,
      fire1: 0,
    };
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > this.fire1) {
        this.data1 = !this.data1;
      }
      return window.scrollY > this.fire1;
    },
  },
  mounted() {
    const width = window.innerWidth;
    this.fire1 = 1080 + (1000 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
#feature-box {
  width: 100%;
  height: calc(430px + 32 * (100vw - 320px) / 600);
  margin-top: 40px;
}

.feature-title-wrapper-box {
  width: 30%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.feature-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: feature-title 1.2s 1s ease forwards;
  position: relative;
  opacity: 0;
}

.feature-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes feature-title {
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
  width: 0%;
  height: inherit;
  background-color: black;
  animation: animation-box 1.2s 1s ease forwards;
  transform: translate3d(0, 0, 0);
}

@keyframes animation-box {
  0% {
    left: 0;
    width: 0;
    opacity: 0;
  }
  1% {
    left: 0;
    width: 0;
    opacity: 1;
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
</style>
