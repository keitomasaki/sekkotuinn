<template>
  <div id="app">
    <Opening />
    <FloatButton v-show="position > 200" />
    <div class="test">
      <Header />
      <Concept />
      <Hope />
      <Feature />
      <Courses />
      <OpeningHours />
      <Access />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Opening from "./components/opening/Opening";
import FloatButton from "./components/FloatButton";
import Header from "./components/header/Header";
import Concept from "./components/concept/Concept";
import Hope from "./components/hope/Hope";
import Feature from "./components/feature/Feature";
import Courses from "./components/courses/Courses";
import OpeningHours from "./components/openingHours/OpeningHours";
import Access from "./components/access/Access";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default {
  name: "App",
  components: {
    Opening,
    FloatButton,
    Header,
    Concept,
    Hope,
    Feature,
    Courses,
    OpeningHours,
    Access,
    Contact,
    Footer,
  },
  data: function() {
    return {
      data1: false,
      position: 0,
      box1: 0,
      box2: 0,
    };
  },
  mounted() {
    const body_element = document.body;
    setTimeout(
      function() {
        console.log("ssssssss");
        body_element.style.overflow = "visible";
      }.bind(this),
      3000
    );
    document.onscroll = () => {
      this.position =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.position);
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans JP", sans-serif;
}

body {
  overflow: hidden;
  height: auto;
  /* height: 10000px; */
}

/* safari用のcss*/
/* _::-webkit-full-page-media,
_:future,
:root body {
  overflow: hidden;
  height: auto;
  scroll-behavior: smooth;
} */

.test {
  width: 100%;
  height: auto;
  animation: test 1.2s 2s ease forwards;
  transform: translate3d(0, 0, 0);
  opacity: 0;
}

@keyframes test {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
