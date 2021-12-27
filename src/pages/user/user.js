export default {
    data(){
        return {
            username: '',
            person: {
                name: ''
            },
            skills: [],
            relatedUsers: []
        };
    },
    created(){
        this.username = this.$route.params.username
  
        this.axios.get(`/user/bios/${this.username}`)
          .then( (response) => {
              console.log(response.data)
              this.person = response.data.person
              this.skills = response.data.strengths
          });
    },
    methods:{
        getPeopleWithSimilarSkills(skill){
            this.axios.post(`/jobs/people/_search?size=10`, {and: [{'skill/role': {text: skill}} ]})
            .then( (response) => {
              console.log(response.data)
              this.person = response.data.person
              this.skills = response.data.strengths
          });
        }
    }
  }