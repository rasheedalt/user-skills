import SkillList from '../../components/SkillList';

export default {
    components: { SkillList },
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
  
        this.axios.get(`https://torre.bio/api/bios/${this.username}`)
          .then( (response) => {
              this.person = response.data.person
              this.skills = response.data.strengths
          });
    }
  }