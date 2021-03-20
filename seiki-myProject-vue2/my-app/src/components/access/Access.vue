<template>
  <div id="access-box" v-scroll="handleScroll">
    <div class="access-wrapper-box" v-if="data1">
      <div class="access-title-wrapper-box">
        <div class="animation-box"></div>
        <h1 class="access-title">Access</h1>
      </div>
    </div>
    <div class="access-content-wrapper-box" v-scroll="handleScroll2">
      <div class="access-content-box" v-if="data2">
        <h3 class="access-content-box-h2">手と手整骨院</h3>
        <p class="access-content-box-p">〒206-0802 東京都稲城市東長沼1052</p>
        <p class="access-content-box-p">
          最寄り駅：JR南武線稲城長沼駅徒 歩3分
        </p>
        <div class="access-image-box">
          <img class="image" :src="image2" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image2 from "../../assets/map.png";
export default {
  data: function() {
    return {
      image2: image2,
      data1: false,
      data2: false,
      fire1: 0,
      fire2: 0,
    };
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > this.fire1) {
        this.data1 = !this.data1;
      }
      return window.scrollY > this.fire1;
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
    this.fire1 = 2323 + (1514 * (width - 320)) / 680;
    this.fire2 = 2419 + (1479 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
#access-box {
  width: 100%;
  height: calc(385px + 385 * (100vw - 320px) / 600);
  margin-top: 40px;
}

.access-wrapper-box {
  width: 90%;
  height: auto;
  margin: 0 auto;
}

.access-title-wrapper-box {
  width: 30%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.access-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: access-title 1.2s ease forwards;
  position: relative;
}

.access-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes access-title {
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

.access-content-box {
  animation: access-content-box 2.5s ease forwards;
}

@keyframes access-content-box {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
}

.access-content-box-h2 {
  text-align: center;
  margin-top: 16px;
}

.access-content-box-p {
  text-align: center;
  margin-top: 16px;
}

.access-image-box {
  width: 100%;
  margin: 0 auto;
}

.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 40px;
}
</style>
