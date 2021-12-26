<template>
  <div class="row" >
    <div class="row mb-4">
      <div class="col-md-12">
          <SearchInput />
      </div>
    </div>

    <div class="row">
      <h3 class="text-center mb-2">Available Opportunities</h3>

      <div class="col-md-6 mb-3" v-for="job in jobs" :key="job.id">
        <JobCard :job="job" />
      </div>

  </div>

  </div>
</template>

<script>

import SearchInput from '../components/SearchInput.vue';
import JobCard from '../components/JobCard.vue';

export default {
  components: { SearchInput, JobCard },
  data(){
      return {
          user: '',
          experiences: '',
          jobs: []
      };
  },
  created(){
    //   console.log(this)
    //   this.axios.get('http://torre.bio/api/bios/rrasheedalt')
      // this.axios.get('/api/suite/opportunities/ZW20D3ld')
      this.axios.post('/opportunities/_search/')
      // this.axios.get('/api/bios/rrasheedalt')
        .then( (response) => {
            this.jobs = response.data.results;
            console.log(response.data)
            // console.log(this.showModal)
        });
  }
}
</script>

