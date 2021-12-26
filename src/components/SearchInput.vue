<template>
  <div class="content">
      <input type="text" id="box" placeholder="Search user by username..." class="search__box" :value="searchText">
      <!-- <i class="fas fa-search search__icon" id="icon" onclick="toggleShow()"></i> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    msg: String
  },
  data(){
      return {
          searchText: ''
      }
  },
  methods:{
      searchUser(){
          if(this.searchText.length >= 3){
              alert('yes')
          }
      },
      toggleShow(){
        var el = document.getElementById("box");
        el.classList.toggle("show");
      }
  }
  
}
</script>

<style scoped>
.content {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 50vh;
  /* background-color: #ff5e57; */
  line-height: 2;
}

.container {
  width: 350px;
  height: auto;
  background-color: #1e272e;
/*   margin: 20vh auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4rem;
  padding: 10px;
}

.search__box {
  float: left;
  width: 0;
  height: 4rem;
/*   display: inline; */
  background: none;
  color: #f7f7f7;
  font-size: 1.5rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  position: relative;
  opacity: 1;
  transition: all .75s ease-in;
  cursor: pointer;
/*   border: 2px solid tomato; */
/*   margin-top: 5px; */
}

/* .search__box:focus, .search__box:hover {
  background-color: #f1f2f6;
} */

.search__icon {
  box-sizing: border-box;
  float: right;
  font-size: 2.5rem;
  display: inline-block;
/*   justify-content: center;
  align-items: center; */
  margin-left: .8rem;
  margin-top: 0;
  cursor: pointer;
  position: absolute;
  color: #fa983a;
  transition: all .25s ease-in;
  padding: .7rem;
  border-radius: 50%;
}

</style>