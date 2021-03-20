<template>
  <div class="courses-content-box">
    <div class="courses-content-wrapper-box">
      <div class="test">
        <div class="test2">
          <div class="test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>全身の調整</p>
          </div>
        </div>
        <div class="test2">
          <div class="test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>骨盤のゆがみ</p>
          </div>
        </div>
      </div>
      <div class="test">
        <div class="test2">
          <div class="test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>慢性腰痛</p>
          </div>
        </div>
        <div class="test2">
          <div class="test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>慢性頸部痛</p>
          </div>
        </div>
      </div>
      <div class="test">
        <div class="test2">
          <div class="test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>慢性膝痛</p>
          </div>
        </div>
        <div class="test2">
          <div class="test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>リフトアップ</p>
          </div>
        </div>
      </div>
      <div class="test">
        <div class="test2 last-test2">
          <div class="test3 last-test3">
            <font-awesome-icon class="icon" :icon="['far', 'check-square']" />
            <p>ダイエットプ</p>
            <p>ログラム</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data1: false,
    };
  },
};
</script>

<style scoped>
.icon {
  margin-right: 8px;
}

.courses-content-wrapper-box {
  width: 90%;
  margin: 0 auto;
}

.test {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 40px;
  animation: test3 1.5s ease-out forwards;
}

.test2 {
  width: 50%;
  height: 30px;
  position: relative;
  /* border: black 1px solid; */
}

@keyframes test3 {
  0% {
    opacity: 0;
    margin-top: 60px;
  }
  100% {
    opacity: 1;
    margin-top: 40px;
  }
}

.test3 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 118px;
  height: auto;

  display: flex;
  align-items: center;
}

.last-test2 {
  width: 100%;
  height: 30px;
  position: relative;
}

.last-test3 {
  width: 182px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
