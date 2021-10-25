<template>
  <div class="result">
    <h1>불법 주정차 지수</h1>
    <div class="page">
      결과페이지
      <div class="map">지도</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.result {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.result h1 {
  margin: 30px;
  margin-top: 90px;
  margin-bottom: 70px;
}

.result .page {
  width: 90%;
  height: 100%;
  background-color: white;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page .map {
  width: 700px;
  height: 1500px;
  background-color: aqua;
}
</style>
