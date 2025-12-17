<template>
  <div class="loading-overlay">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0; /* top, right, bottom, left = 0 */
  background-color: rgba(0, 0, 0, 0.4); /* فیلتر تیره */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* spinner */
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid rgba(240, 241, 238, 1);
  border-right-color: rgba(127, 183, 126, 1);
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(1turn);
  }
}
</style>
