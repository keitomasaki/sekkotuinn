<template>
  <div class="footer-box" v-scroll="handleScroll">
    <div class="footer-wrapper-box" v-if="data1">
      <img class="background-img" :src="Component1" alt="" />
      <div class="footer-wrapper-box">
        <div class="footer-top-box">
          <h3 class="footer-top-box-title">
            make you good change for your beautiful days
          </h3>
        </div>
        <div class="footer-center-box">
          <div class="center-box">
            <img class="marginRight-small logo-img" :src="logoblack" alt="" />
            <p>手と手整骨院</p>
          </div>
          <div class="center-box">
            <p>TEL：042-407-5884</p>
          </div>
        </div>
        <div class="footer-bottom-box">
          <p>
            ©2021 Volcite all rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component1 from "../../assets/Component1.png";
import logoblack from "../../assets/logoblack.png";
export default {
  data: function() {
    return {
      Component1: Component1,
      logoblack: logoblack,
      data1: false,
    };
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 2900) {
        this.data1 = !this.data1;
      }
      return window.scrollY > 2900;
    },
  },
};
</script>

<style scoped>
p {
  font-size: calc(12px + 3 * (100vw - 320px) / 680);
}

.marginRight-small {
  margin-right: 8px;
}

.footer-box {
  width: 100%;
  height: calc(87px + 59 * (100vw - 320px) / 680);
  position: relative;
  margin-top: 40px;
  overflow: hidden;
}

.footer-wrapper-box {
  position: absolute;
  top: 0%;
  left: 50%;
  height: calc(87px + 59 * (100vw - 320px) / 680);
  width: 100%;
  transform: translateX(-50%);
}

.background-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.logo-img {
  height: 36px;
  width: 36px;
}

.footer-top-box {
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-top-box-title {
  font-size: calc(10px + 5 * (100vw - 320px) / 680);
  letter-spacing: calc(0px + 2 * (100vw - 320px) / 680);
}

.footer-bottom-box {
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-center-box {
  width: 100%;
  height: 33%;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center-box {
  width: 45%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.center-box:nth-child(2) {
  width: 45%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
