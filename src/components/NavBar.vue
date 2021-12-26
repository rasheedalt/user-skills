<template>
    <nav class="navbar navbar-dark bg-dark">
        <router-link class="navbar-brand text-white pl-4 ml-4" to="/">Job Listing</router-link>
    </nav>
</template>

<script>
export default {
  props: {
    job: Object
  }
}
</script>

<style scoped>
.navbar-brand{
    padding-left: 50px;
}
</style>