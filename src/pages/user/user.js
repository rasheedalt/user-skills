export default {
    data(){
        return {
            username: '',
            personal: [],
            skills: []
        };
    },
    created(){
        this.username = this.$route.params.username
        console.log(this.username)
  
        this.axios.get(`/user/bios/${this.username}`)
          .then( (response) => {
              console.log(response.data)
              this.personal = response.data.personal
              this.skills = response.data.skills
          });
    }
  }