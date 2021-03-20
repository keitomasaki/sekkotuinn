<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-left-box">
        <img class="header-left-box-image" :src="logoblack" alt="" />
        <h1>手と手整骨院</h1>
      </div>
      <div class="header-right-box">
        <a href="#" class="header-right-box-button">ご予約はこちらから</a>
        <HeaderHamberger />
      </div>
    </div>
    <HeaderImage />
  </div>
</template>

<script>
import logoblack from "../../assets/logoblack.png";
import HeaderHamberger from "./HeaderHamberger";
import HeaderImage from "./HeaderImage";
export default {
  components: {
    HeaderHamberger,
    HeaderImage,
  },
  data: function() {
    return {
      logoblack: logoblack,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 14px;
}

.header-wrapper {
  height: 64px;
  width: 100%;
  display: flex;
}

.header-left-box {
  height: inherit;
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header-right-box {
  height: inherit;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-left-box-image {
  width: 36px;
  height: 36px;
  margin-left: 10px;
  margin-right: 8px;
}

.header-right-box-button {
  padding: 10px;
  height: auto;
  border: none;
  outline: none;
  background-color: #71bd8c;
  border-radius: 29px;
  color: white;
  text-decoration: none;
  margin-right: 10px;
  font-size: 12px;
}
</style>
