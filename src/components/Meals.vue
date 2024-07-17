<template>
  <div class="container">
    <div class="row  d-flex justify-content-center">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <!-- <div v-if="!meals.length" class="row">
      There are no meals
    </div> -->
  </div>
</template>

<script setup>
import MealCard from './MealCard.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
})

</script>