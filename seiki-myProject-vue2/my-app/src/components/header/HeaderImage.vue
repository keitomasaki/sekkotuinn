<template>
  <div class="header-image">
    <img class="image" :src="Group1" alt="" />
  </div>
</template>

<script>
import Group1 from "../../assets/Group1.png";
export default {
  data: function() {
    return {
      Group1: Group1,
    };
  },
};
</script>

<style scoped>
.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
