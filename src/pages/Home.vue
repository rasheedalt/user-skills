<template>
  <div class="row container" >
    <div class="row">
      <div class="col-md-12">
          <SearchInput/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-center mb-3">
        <h5>Available Opportunities</h5>
      </div>

      <div class="col-md-6" v-for="job in jobs" :key="job.id">
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
          experiences: ''
      };
  },
  created(){
    //   console.log(this)
    //   this.axios.get('http://torre.bio/api/bios/rrasheedalt')
      this.axios.get('http://localhost:8080/api/bios/rrasheedalt')
        .then( (response) => {
            this.experiences = response.data.experiences;
            console.log(response.data)
            // console.log(this.showModal)
        });
  }
}
</script>
