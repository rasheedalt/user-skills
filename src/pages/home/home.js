
import SearchInput from '../../components/SearchInput.vue';
import UserCard from '../../components/UserCard.vue';


export default {
  components: { SearchInput, UserCard },
  data(){
      return {
          users: [],
          searchText: '',
          showCard: false,
          jobs: []
      };
  },
  methods:{
    searchUser(text){
      this.searchText = text
      if(this.searchText == ''){
        this.users = [];
      }else{
        this.axios.post(`/jobs/people/_search?size=10`, {name: {term: text}})
          .then( (response) => {
              this.users = response.data.results;
          });

      }

    }
  }
}
