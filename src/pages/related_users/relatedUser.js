import UserCard from '../../components/UserCard.vue';

export default {
    components: {UserCard},
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
            this.axios.post(`/jobs/people/_search?`, {'and': [{"skill/role": {text: skill, proficiency: 'proficient'}} ]})
            .then( (response) => {
              console.log(response.data)
              this.users = response.data.results
              console.log(this.users)
          });
        }
    }
  }