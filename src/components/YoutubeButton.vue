    <template>
        <a
          :href="youtubeLink"
          target="_blank"
          class="btn btn-dark mx-1"
        >
          <slot>Tutorial</slot>
        </a>
      </template>

<script setup>

const props = defineProps({
    youtubeLink:{
        required:true,
        type:String,
    }
})
</script>