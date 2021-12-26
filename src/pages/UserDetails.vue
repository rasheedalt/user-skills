<template>
  <div class="row mt-3" >
      <h3 class="text-center mb-2">{{ username }}</h3>

  </div>

</template>

<script>

export default {
  data(){
      return {
          username: '',
          personal: [],
          skills: []
      };
  },
  mounted(){
      this.username = this.$route.params.username

      this.axios.get(`/user/bio/${this.username}`)
        .then( (response) => {
            console.log(response.data)
            this.personal = response.data.personal
            this.skills = response.data.skills
        });
  }
}

</script>