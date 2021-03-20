<template>
  <div class="concept-image-wrapper" v-scroll="handleScroll">
    <div class="animation-box" v-if="data1">
      <h1 class="concept-image-box-title">
        接骨院はけがを治すだけ、<br />
        ではありません！
      </h1>
      <div class="concept-image-box">
        <img class="image" :src="Group3" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Group3 from "../../assets/Group3.png";
export default {
  data: function() {
    return {
      Group3: Group3,
      data1: false,
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
    this.fire1 = 570 + (830 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
.concept-image-wrapper {
  width: 100%;
  margin-top: 20px;
}
.concept-image-box-title {
  text-align: center;
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
}

.concept-image-box {
  width: 90%;
  margin: 0 auto;
  margin-top: 24px;
}

.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.animation-box {
  animation: animation-box 4s ease forwards;
}

@keyframes animation-box {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}
</style>
