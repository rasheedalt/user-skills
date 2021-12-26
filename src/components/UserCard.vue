<template>

    <div class="card" style="height: 200px;">
      <div class="card-body">
          <div class="row">
              <div class="col-md-4">
                  <img :src="user.picture" :alt="user.name" height="150px" />
              </div>
              <div class="col-md-8">
                  <router-link :to="{ name: 'user', params: { username: user.username } }" class="title"> <h5>{{ user.name }}</h5> </router-link>
              </div>
          </div>

      </div>
    </div>

</template>

<script>


export default {
  props: {
    user: Object
  },
  computed:{
    getDescription: function(){
      return this.job.tagline ? getFewDescription(this.job.tagline) : ''
    }
  }
}
</script>

<style scoped>
.title{
  text-decoration: none;
  color: black;
}
</style>