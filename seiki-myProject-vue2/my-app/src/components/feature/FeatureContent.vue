<template>
  <div class="feature-content-box" v-scroll="handleScroll">
    <div class="feature-content-wrapper-box" v-if="data1">
      <div class="feature-content-wrapper-child-box">
        <div class="feature-content-left-box">
          <p>
            稲城長沼駅から<br />
            徒歩3分
          </p>
        </div>
        <div class="feature-content-right-box">
          <p>
            夜も20時まで<br />
            受付可能
          </p>
        </div>
      </div>
      <div class="feature-content-wrapper-child-box">
        <div class="feature-content-left-box">
          <p class="adjusted-font">
            女性の美を応援する<br />
            メニュー多数あり
          </p>
        </div>
        <div class="feature-content-right-box">
          <p class="adjusted-font">
            交通事故による治療<br />
            自己負担金０円
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
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
    this.fire1 = 1250 + (1040 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
p {
  font-size: 12px;
}

.feature-content-box {
  width: 100%;
}

.feature-content-wrapper-box {
  width: 90%;
  height: auto;
  margin: 0 auto;
  animation: feature-content-wrapper-box 4s ease forwards;
}

@keyframes feature-content-wrapper-box {
  0% {
    opacity: 0;
    margin-top: 60px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}

.feature-content-wrapper-child-box {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.feature-content-left-box {
  width: 45%;
  height: 150px;
  background-color: #d5e8d4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-content-right-box {
  width: 45%;
  height: 150px;
  background-color: #d5e8d4;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
