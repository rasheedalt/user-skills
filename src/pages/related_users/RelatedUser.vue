<template>
  <div class="row" >
    <div class="row mb-4">
      <div class="col-md-12 mt-5">
        <h3 class="text-center mb-2">Users with skill: '{{ skill }}'</h3>      
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3" v-for="user in users" :key="user.id">
        <UserCard :user="user" />
    </div>

  </div>

  </div>
</template>

<script src="./relatedUser.js"></script>