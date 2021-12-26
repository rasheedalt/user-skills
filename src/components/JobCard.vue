<template>

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ job.objective }}</h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
        <p class="card-text">{{ job.tagline }}</p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    job: Object
  }
}
</script>