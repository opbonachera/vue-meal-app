<template>
    <div class="m-auto d-flex align-items-center justify-content-center flex-column">
        <div>
            <h1 class="mb-5 mt-3">{{ meal.strMeal}}</h1>
        </div>
        <div>
            <img    :src="meal.strMealThumb"
                    class="rounded"
                    style="width: 18rem; height: 18rem"
            />
        </div>
        <div class="m-5">
            <h5 class="display-5">Instructions:</h5>
            <p class="fs-5">{{ meal.strInstructions }}</p>


            <small>Last updated 4 minutes ago</small>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import axiosClient from '../axiosClient';

    const route = useRoute();
    const meal = ref({});

    onMounted(() => {
                    axiosClient.get(`lookup.php?i=${route.params.id}`)
                    .then(({ data }) => {
                            meal.value = data.meals[0] || {}
                        })
                    })
</script>