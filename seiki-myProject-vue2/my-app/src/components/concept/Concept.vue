<template>
  <div id="concept-box">
    <div>
      <div class="concept-title-wrapper-box">
        <div class="animation-box"></div>
        <h1 class="concept-title">Concept</h1>
      </div>
    </div>
    <ConceptImage />
    <div class="concept-text-wrapper-box" v-scroll="handleScroll1" id="test">
      <div class="concept-text-box" v-if="data2">
        <p>
          身体の悩みに対しては根気よく向き合っていかないといけません。何回も通っていただくことがどうしても必要になってしまいます。
          1回の施術で悩みがなくなることはありませんが、少しでも身体の悩みが減り、気持ちもリラックスして帰っていただきたいと思っております。
          学校の保健室のように、けがをした時だけでなく、心身に悩みがあった時や気分が落ち込んだ時にちょっとでも立ち寄れる、そんな場所を目指しています。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ConceptImage from "./ConceptImage";

export default {
  components: {
    ConceptImage,
  },
  data: function() {
    return {
      data1: false,
      data2: false,
      fire1: 0,
      position: 0,
    };
  },
  methods: {
    handleScroll1: function() {
      if (window.scrollY > this.fire1) {
        this.data2 = !this.data2;
      }

      return window.scrollY > this.fire1;
    },
  },
  mounted() {
    const width = window.innerWidth;
    this.fire1 = 200 + (865 * (width - 320)) / 680;

    document.onscroll = () => {
      this.position =
        document.documentElement.scrollTop || document.body.scrollTop;
    };
  },
};
</script>

<style scoped>
#concept-box {
  width: 100%;
  height: calc(612.3px + 313.4 * (100vw - 320px) / 600);
}

.concept-title-wrapper-box {
  width: 30%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.concept-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: concept-title 1.2s 3.5s ease forwards;
  position: relative;
  opacity: 0;
}

.concept-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes concept-title {
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
  animation: animation-box 1.2s 3.5s ease forwards;
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

.concept-text-wrapper-box {
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
}

.concept-text-box {
  animation: concept-text-box 2.5s ease forwards;
}

@keyframes concept-text-box {
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
