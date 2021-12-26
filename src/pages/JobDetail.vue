<template>
  <div class="row mt-3" >
      <h3 class="text-center mb-2">{{ job.objective}}</h3>

  </div>

</template>

<script>

export default {
  data(){
      return {
          id: '',
          job: ''
      };
  },
  created(){
      this.id = this.$route.params.id
      this.axios.get(`/single/opportunities/${this.id}`)
        .then( (response) => {
            this.jobs = response.data.results;
            console.log(response.data)
            // console.log(this.showModal)
        });
  }
}
</script>

