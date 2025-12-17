<template>
  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div class="p-5 w-full flex flex-col items-center gap-y-6">
      <template v-if="commentData">
        <template-temp-manage-comment v-for="comment in commentData.data" :key="comment.id" :comment="comment" />
      </template>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "dashboard-admin"
})
const loginStore = useAuthStore()
if (loginStore.isAdmin == 0) {
  navigateTo('/')
}
const { token: AUTH_TOKEN } = useAuthToken()
const {
  fetchDashboardData,
  responseData: commentData,
  loading: reportCommentLoading
} = useFetchDashboardData()
const loadData = async () => {
  if (loginStore.isAdmin && loginStore.token && loginStore.isLoggedIn) {
    console.log(AUTH_TOKEN.value)
    await fetchDashboardData(AUTH_TOKEN.value, "comments")
    console.log(commentData.value)
  }
}
loadData()
</script>

<style scoped></style>
