<template>
    <div>
        <div class="no-shows" v-if="shows.length === 0">No shows</div>
        <ul class="container">
            <ShowItem
                v-for="show in shows"
                :key="show.show.id"
                v-bind:show="show"
            />
        </ul>
    </div>
</template>

<script>
import ShowItem from '@/components/ShowItem.vue';

export default {
  props: ['shows'],
  components: {
    ShowItem,
  },
};
</script>

<style>
.container {
    margin: 30px 0;
    padding: 0;
    list-style: none;
    display: grid;
    place-items: center;
    grid-gap: 10px;
    grid-template-columns: 45vw 45vw;
    justify-content: space-around;
}
.no-shows {
  margin-top: 30px;
}

@media only screen and (min-width: 1000px) {
    .container {
       grid-template-columns: 22vw 22vw 22vw 22vw;
    }
}
</style>
