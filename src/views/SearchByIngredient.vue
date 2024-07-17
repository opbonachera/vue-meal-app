<template>
    <h1 class="display-5 text-center">Search Meals by Ingredients</h1>
    <form action="" class="w-100 p-3 d-flex align-items-center justify-content-center">
        <label for="meal" class="w-50 -5">
            <input type="text"
                   name="meal"
                   class="form-control w-100"
                   placeholder="Search for meals..."
                   v-model="keyword"
                   @change="searchMeals"
                   >
        </label>
    </form>
    <div>
        <Meals :meals="meals ? meals : [] " />
    </div>
</template>
<script setup>
    import { ref, computed, onMounted } from 'vue';
    import store from '../store';
    import Meals from '../components/Meals.vue'
    
    const keyword = ref('');
    const meals = computed(()=>store.state.mealsByIngredient)
    
    const searchMeals = () =>{
        store.dispatch('setMealsByIngredient', keyword.value)
    }

</script>