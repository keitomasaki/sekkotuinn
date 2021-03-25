<template>
  <div id="contact-box" v-scroll="handleScroll">
    <div class="contact-wrapper-box">
      <div class="contact-title-wrapper-box" v-if="data1">
        <div class="animation-box"></div>
        <h1 class="contact-title">Contact</h1>
      </div>

      <div
        class="contact-content-wrapper-animation-box"
        v-scroll="handleScroll2"
      >
        <h3 class="text-center" v-if="data2">お問い合わせはこちらから</h3>
        <div class="contact-content-wrapper-box" v-if="data2">
          <!-- 電話番号を押せるのはタブレットサイズ以上 -->
          <div class="contact-content-box">
            <a href="tel:042-407-5884" class="telLink">
              <img class="image" :src="photo" alt="#" />
            </a>
          </div>
          <div class="contact-content-box">
            <a href="#">
              <img class="image" :src="web" alt="#" />
            </a>
          </div>
        </div>
        <div class="contact-content-wrapper-box" v-if="data2">
          <div class="contact-content-box">
            <a href="#">
              <img class="image" :src="Instagram" alt="#" />
            </a>
          </div>
          <div class="contact-content-box">
            <a href="">
              <img class="image" :src="LINE" alt="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Instagram from "../../assets/Group6.png";
import LINE from "../../assets/LINE(1).png";
import photo from "../../assets/phone.png";
import web from "../../assets/WEB.png";
export default {
  data: function() {
    return {
      Instagram: Instagram,
      LINE: LINE,
      photo: photo,
      web: web,
      data1: false,
      data2: false,
      data3: false,
      fire1: 0,
      fire2: 0,
    };
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > this.fire1) {
        this.data1 = !this.data11;
        console.log("fire1");
        console.log("this.fire1", this.fire1);
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
    this.fire1 = 2763 + (1980 * (width - 320)) / 680;
    this.fire2 = 2860 + (1979 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
.text-center {
  margin-top: 10px;
  text-align: center;
}

#contact-box {
  width: 100%;
  height: calc(257px + 224 * (100vw - 320px) / 600);
  margin-top: 40px;
}

.contact-wrapper-box {
  width: 90%;
  height: auto;
  margin: 0 auto;
}

.contact-title-wrapper-box {
  width: 30%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.contact-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: contact-title 1.2s ease forwards;
  position: relative;
}

.contact-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes contact-title {
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

.contact-content-wrapper-box {
  animation: contact-content-wrapper-box 2s ease forwards;
}

@keyframes contact-content-wrapper-box {
  0% {
    margin-top: 20px;
    opacity: 0;
  }
  100% {
    margin-top: 0px;
    opacity: 1;
  }
}

.contact-content-wrapper-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.contact-content-box {
  width: 45%;
  max-height: 45%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

@media screen and (min-width: 751px) {
  .telLink {
    pointer-events: none;
    display: block;
  }
}
</style>
