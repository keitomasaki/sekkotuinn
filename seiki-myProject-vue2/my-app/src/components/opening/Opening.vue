<template>
  <div id="openingBox"></div>
</template>

<script>
export default {
  mounted() {
    let wh = window.innerHeight;
    let elem = document.getElementById("openingBox");
    elem.style.height = wh + "px";
  },
};
</script>

<style scoped>
#openingBox {
  width: 100%;
  height: 300px;
  background-color: #71bd8c;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  animation: openingBox 1.2s 2s ease forwards;
  transform: translate3d(0, 0, 0);
  z-index: 2;
}

@keyframes openingBox {
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
    opacity: 1;
  }
}
</style>
