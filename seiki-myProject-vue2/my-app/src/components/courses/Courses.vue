<template>
  <div id="courses-box" v-scroll="handleScroll">
    <div class="courses-title-box" v-if="data1">
      <div class="animation-box"></div>
      <h1 class="courses-title">Courses</h1>
    </div>
    <div v-scroll="handleScroll2">
      <div v-if="data2">
        <CoursesContent />
        <div>
          <CoursesImage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoursesContent from "./CoursesContent";
import CoursesImage from "./CoursesImage";
export default {
  components: {
    CoursesContent,
    CoursesImage,
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
    this.fire1 = 1600 + (1000 * (width - 320)) / 680;
    this.fire2 = 1685 + (1044 * (width - 320)) / 680;
  },
};
</script>

<style scoped>
#courses-box {
  width: 100%;
  height: calc(485.3px + 265.9 * (100vw - 320px) / 600);
  margin-top: 40px;
}

.courses-title-box {
  width: 30%;
  height: calc(50px + 28 * (100vw - 320px) / 600);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.courses-title {
  font-size: calc(22px + 18 * (100vw - 320px) / 600);
  animation: courses-title 1.2s ease forwards;
  position: relative;
  opacity: 0;
}

.courses-title::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  background-color: black;
}

@keyframes courses-title {
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
  animation: animation-box 1.2s ease forwards;
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
