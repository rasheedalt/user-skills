<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="skill in skills" :key="skill.id">
            <div class="row">
                <div class="col-md-6 font-weight-bold">{{skill.name}} <span class="text-right small text-danger">({{ skill.proficiency }})</span></div>
                <div class="col-md-6"> &nbsp; <router-link :to="{ name: 'related-users', params: { skill: skill.name } }" class="text-right btn btn-dark text-white">view users with related skills</router-link></div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
    props: {
        skills: Array
    }
}
</script>