<template>
      <div class="mt-4">
        <div class="row container justify-content-center align-items-center">
          <div class="col-8"><input type="text" class="form-control search-bar" placeholder="Search by Username"/></div>
          <div class="col-4"><button class="btn btn-dark text-center search-button">Search</button></div>
        </div>
      </div>
</template>

<script>

export default {
  props: {
    msg: String
  },
  data(){
      return {
          searchText: ''
      }
  },
  methods:{
      searchUser(){
          if(this.searchText.length >= 3){
              alert('yes')
          }
      }
  }
  
}
</script>

<style scoped>
.search-bar{
  /* border-radius: 20px; */
}
.search-button{
  border-radius: 20px;
}
</style>