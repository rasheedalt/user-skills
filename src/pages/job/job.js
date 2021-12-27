export default {
    data(){
        return {
            id: '',
            job: ''
        };
    },
    created(){
        this.id = this.$route.params.id
        axios.get(`/single/opportunities/${this.id}`)
          .then( (response) => {
              this.jobs = response.data.results;
              console.log(response.data)
          });
    }
  }