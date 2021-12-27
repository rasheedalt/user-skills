<template>
      <div class="mt-4">
        <div class="row container justify-content-center align-items-center">
          <div class="col-8"><input type="text" v-model="searchText" class="form-control search-bar" placeholder="Search by Name" @keyup="searchUser()" /></div>
        </div>
      </div>
</template>

<script>

export default {
  data(){
      return {
          searchText: ''
      }
  },
  methods:{
      searchUser(){
        this.$emit('InputTyped', this.searchText)
      }
  }
}
</script>

<style scoped>
.search-bar{
  border-radius: 20px;
}
</style>