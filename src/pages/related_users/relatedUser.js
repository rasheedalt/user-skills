export default {
    data(){
        return {
            skill: '',
            users: [],
        };
    },
    created(){
        this.skill = this.$route.params.skill

        this.getPeopleWithSimilarSkills(this.skill)
    },
    methods:{
        getPeopleWithSimilarSkills(skill){
            this.axios.post(`/jobs/people/_search?size=10`, {and: [{'skill/role': {text: skill}} ]})
            .then( (response) => {
              console.log(response.data)
              this.users = response.data.result
          });
        }
    }
  }