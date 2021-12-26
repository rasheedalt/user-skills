<template>
  <div class="row" >
    <div class="row mb-4">
      <div class="col-md-12 mt-5">
          <SearchInput @InputTyped="searchUser" />
      </div>
    </div>

    <div class="row" v-if="users.length > 0">
      <h3 class="text-center mb-2">Match Found</h3>

      <div class="col-md-6 mb-3" v-for="user in users" :key="user.id">
        <UserCard :user="user" />
    </div>

  </div>

  </div>
</template>

<script>

import SearchInput from '../components/SearchInput.vue';
import UserCard from '../components/UserCard.vue';


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
        this.axios.post(`/jobs/people/_search?size=20`, {name: {term: text}})
          .then( (response) => {
              this.users = response.data.results;
              console.log(response.data)
              // console.log(this.showModal)
          });

      }

    }
  }
}
</script>

