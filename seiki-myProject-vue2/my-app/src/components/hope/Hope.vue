<template>
  <div id="hope-box" v-scroll="handleScroll">
    <div class="hope-title-wrapper-box" v-if="data1">
      <div class="animation-box"></div>
      <h1 class="hope-title">Hope</h1>
    </div>
    <HopeImage />
    <div class="hope-text-wrapper-box" v-scroll="handleScroll2">
      <div class="hope-text-box" v-if="data2">
        <p>
          「整骨院」と聞くと、「けがをした人や体に悩みがある人が行くところ」と思ってはいませんか？
          女性の方であればダイエットプログラムやリフトアップといった、美容に特化した施術もございます。スポーツをしている方であれば、体の調整やメンテナンスをすることでけがを未然に防ぎ、パフォーマンスを上げることもできます。プロ女子サッカー選手の方にもご来院頂いております。
          ぜひ、なんとなく整骨院へ行くことにためらいがある方にも来ていただきたいと思っております。
          1度来院していただければ、整骨院に対してのイメージをガラリと変えることをお約束いたします。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HopeImage from "./HopeImage";
export default {
  components: {
    HopeImage,
  },
  data: function() {
    return {
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
    this.fire1 = 500 + (770 * (width - 320)) / 680;
    this.fire2 = 750 + (1100 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
#hope-box {
  width: 100%;
  height: calc(688.9px + 157.9 * (100vw - 320px) / 600);
  margin-top: 40px;
}

.hope-title-wrapper-box {
  width: 30%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hope-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: hope-title 1.2s ease forwards;
  position: relative;
}

.hope-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes hope-title {
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

.hope-text-wrapper-box {
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
}

.hope-text-box {
  animation: hope-text-box 2.5s ease forwards;
}

@keyframes hope-text-box {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
}
</style>
