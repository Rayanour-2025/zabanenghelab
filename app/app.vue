<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active {
  transition: opacity 0.5s;
}

.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter-from {
  opacity: 0;
}

.page-enter-to {
  opacity: 1;
}

.page-leave-from {
  opacity: 1;
}

.page-leave-to {
  opacity: 0;
}
</style>
