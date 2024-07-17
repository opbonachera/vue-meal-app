<template>
    <div class="card m-2 col-sm-12 col-lg-4 col-md-6 d-flex align-items-center justify-content-center p-3 flex-column">
        <div>
            <img :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="card-img-top">
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{{ meal.strMeal }}</h5>
          <p class="card-text">{{ $filters.truncateWords(meal.strInstructions,50) }}</p>
          <div class=" d-flex align-items-center justify-content-center">
                <YoutubeButton :youtubeLink="meal.strYoutube"/>
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } } " class="btn btn-dark mx-1">See meal details</router-link>
          </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import YoutubeButton from './YoutubeButton.vue';
const { meal } = defineProps({
    meal: {
        required:true,
        type:Object,
    }
})

</script>