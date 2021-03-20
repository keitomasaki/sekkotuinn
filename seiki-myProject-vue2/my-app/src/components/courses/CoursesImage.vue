<template>
  <div class="courses-Image">
    <img class="image" :src="Group4" alt="" />
  </div>
</template>

<script>
import Group4 from "../../assets/Group4.png";
export default {
  data: function() {
    return {
      Group4: Group4,
    };
  },
};
</script>

<style scoped>
.courses-Image {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}

.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
