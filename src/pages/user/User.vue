<template>
  <div class="row mt-3" >
    <div class="col-md-12">
      <h3 class="text-center mb-4">Profile</h3>
    </div>

    <div class="row">
      <div class="col-md-5" v-if="person.name != ''">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="person.picture" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{person.name}} <small>({{ person.publicId }})</small></h5>
            <p>{{ person.professionalHeadline }}</p>
            <p class="card-text">{{ person.summaryOfBio }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <h4 class="mb-2 text-center">Skills</h4>
        <SkillList :skills="skills" />

      </div>
    </div>

  </div>
</template>

<script src="./user.js"></script>