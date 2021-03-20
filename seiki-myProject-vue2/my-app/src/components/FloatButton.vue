<template>
  <div>
    <div class="box">
      <div class="button-box">
        <a href="#">ご予約はこちらから</a>
      </div>
    </div>
    <div class="Page-Btn" @click="scrollTop">
      <font-awesome-icon
        class="align-justify-btn change-gtn"
        icon="chevron-up"
        size="lg"
      />
      <div test="Page-Btn-Box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    scrollTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.box {
  width: 130px;
  height: 38px;
  outline: none;
  background-color: #71bd8c;
  position: fixed;
  top: 3%;
  right: 14px;
  /* margin: 0 0 0 100px; */
  z-index: 999;
  border-radius: 25px;
}

.button-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-box a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: white;
  font-size: 12px;
  line-height: 38px;
  text-align: center;
}

.Page-Btn {
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #71bd8c;
  z-index: 999;
  cursor: pointer;
}

/* .Page-Btn-Box {
  height: 100%;
  width: 100%;
} */

.change-gtn {
  color: #ffffff;
}
</style>
