<template>
  <div class="hello">
    <p v-scroll="handleScroll2">kkkk</p>
    <div class="test" v-scroll="handleScroll">kkk</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0); transition-duration: 0.5s"
        );
      }
      return window.scrollY > 100;
    },
    handleScroll2: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute("style", "font-size: 60px; color: red;");
      }
      return window.scrollY > 100;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  height: 1000px;
}

.test {
  opacity: 0;
  margin-top: 100px;
}
</style>
