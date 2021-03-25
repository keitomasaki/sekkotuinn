<template>
  <div class="concept-image-wrapper">
    <div class="animation-box">
      <h1 class="concept-image-box-title">~ みんなが笑顔になれる場所 ~</h1>
    </div>
    <div class="concept-image-box">
      <img class="image" :src="Group2" alt="" />
    </div>
  </div>
</template>

<script>
import Group2 from "../../assets/Group2.png";
export default {
  data: function() {
    return {
      Group2: Group2,
    };
  },
  mounted() {
    // let wh = window.innerHeight;
    // let elem = document.getElementById("imgbox");
    // elem.style.height = wh + "px";
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
  min-width: 100%;
}
</style>
