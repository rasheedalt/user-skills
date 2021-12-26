<template>

    <div class="card" style="height: 200px;">
      <div class="card-body">
        <router-link :to="{ name: 'job', params: { id: job.id }}" class="title"> <h5 class="card-title">{{ job.objective }}</h5> </router-link>
        <p class="card-text">{{ getDescription }}</p>

      </div>
    </div>

</template>

<script>

import { getFewDescription } from '../helpers/utils'

export default {
  name: 'HelloWorld',
  props: {
    job: Object
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