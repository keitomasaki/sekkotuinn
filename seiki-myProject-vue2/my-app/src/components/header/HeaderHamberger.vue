<template>
  <div class="hamberger">
    <div class="icon-wrapper" @click="toggle">
      <font-awesome-icon
        class="align-justify-btn"
        icon="align-justify"
        size="lg"
      />
    </div>
    <Drawer
      @close="toggle"
      align="right"
      :closeable="true"
      :maskClosable="true"
    >
      <div
        v-if="open"
        @click="toggle_And_Anchor_To_concept_box"
        class="anchor-box"
      >
        <p>Concept</p>
      </div>
      <div
        v-if="open"
        @click="toggle_And_Anchor_To_hope_box"
        class="anchor-box"
      >
        <p>Hope</p>
      </div>

      <div
        v-if="open"
        @click="toggle_And_Anchor_To_feature_box"
        class="anchor-box"
      >
        <p>Feature</p>
      </div>

      <div
        v-if="open"
        @click="toggle_And_Anchor_To_courses_box"
        class="anchor-box"
      >
        <p>Courses</p>
      </div>
      <div
        v-if="open"
        @click="toggle_And_Anchor_To_opening_hours_box"
        class="anchor-box"
      >
        <p>Opening hours</p>
      </div>
      <div
        v-if="open"
        @click="toggle_And_Anchor_To_access_box"
        class="anchor-box"
      >
        <p>Access</p>
      </div>
      <div
        v-if="open"
        @click="toggle_And_Anchor_To_contact_box"
        class="anchor-box"
      >
        <p>Contact</p>
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
export default {
  components: {
    Drawer,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },

    toggle_And_Anchor_To_hope_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#hope-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },

    toggle_And_Anchor_To_feature_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#feature-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },

    toggle_And_Anchor_To_concept_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#concept-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },

    toggle_And_Anchor_To_courses_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#courses-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },

    toggle_And_Anchor_To_opening_hours_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#opening-hours-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },

    toggle_And_Anchor_To_access_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#access-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },

    toggle_And_Anchor_To_contact_box() {
      this.open = !this.open;
      setTimeout(() => {
        document
          .querySelector("#contact-box")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.hamberger {
  margin-right: 10px;
}

.anchor-box {
  width: 200px;
  height: 40px;
  border: 1px solid white;
  text-align: center;
  line-height: 40px;
  margin-top: 24px;
}
</style>
