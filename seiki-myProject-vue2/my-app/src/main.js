import Vue from "vue";
import App from "./App.vue";
import smoothscroll from "smoothscroll-polyfill";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee, faAlignJustify, faCheckSquare, faChevronUp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

smoothscroll.polyfill();

Vue.config.productionTip = false;

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function() {
      if (binding.value()) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
