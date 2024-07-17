<template>
    <h1 class="display-5 text-center">Search Meals by Letter</h1>
    <div class="d-flex align-items-center justify-content-center">
        <div class="w-50 flex-wrap text-center p-2 d-flex justify-content-between">
            <router-link :to="{ name: 'byLetter', params: {letter} }" 
                         v-for="letter of letters"
                         :key="letter">
                {{ letter.toUpperCase() }}
            </router-link>
        </div>
    </div>   
    <div>
        <Meals :meals=" meals ? meals  : [] " />
    </div>
</template>
<script setup>
    import store from '../store';
    import Meals from '../components/Meals.vue'
    
    import { computed, onMounted, ref } from 'vue';
    import { watch } from 'vue';
    import { useRoute } from 'vue-router';
    
    const route = useRoute();
    
    watch(
        ()=>route.params.letter,
        (newLetter)=>{
            store.dispatch('setMealsByLetter', newLetter)
        }
    )

    const meals = computed(()=>store.state.mealsByLetter)
    const letters = 'abcdeghijklmnopqrstuvwxyz'.split("");

</script>
<!-- 
<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script> -->