<template>
    <header class="d-flex align-items-center justify-content-center mb-5">
        <ul class="nav nav-pills w-50 nav-fill gap-2 p-1 small bg-dark rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <router-link :to="{ name:'byName' }"  class="nav-item" role="presentation">
              <li class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Search by name</li>
            </router-link>
            <router-link :to="{ name:'byIngredient' }" class="nav-item" role="presentation">
              <li class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Search by ingredient</li>
            </router-link>
            <router-link :to="{ name:'byLetter' }" class="nav-item" role="presentation">
              <li  class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Search by letter</li>
            </router-link>
          </ul>
    </header>
</template>
<script>

</script>