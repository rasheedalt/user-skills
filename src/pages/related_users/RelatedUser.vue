<template>
  <div class="row" >
    <div class="row mb-4">
      <div class="col-md-12 mt-5">
          <SearchInput @InputTyped="searchUser" />
      </div>
    </div>

    <div class="row" v-if="users.length > 0">
      <h3 class="text-center mb-2">Users with skill {{ skill }}</h3>

      <div class="col-md-6 mb-3" v-for="user in users" :key="user.id">
        <UserCard :user="user" />
    </div>

  </div>

  </div>
</template>

<script src="./home.js"></script>