<template>
    <li class="show-item">
        <div>Name: {{ show.show.name }}</div>
        <div>Rating: {{ show.show.rating.average ?? '-' }}</div>
        <div>Premiered: {{ show.show.premiered }}</div>
        <div>Genres: {{ show.show.genres.join(', ') }}</div>
        <div>Language: {{ show.show.language }}</div>
        <img
          class="show-item-image"
          :src="show.show.image ? show.show.image.medium : require('../assets/image/no_image.jpg')"
          alt="show"
        />
    </li>
</template>

<script>
export default {
  props: {
    show: Object,
  },
};
</script>

<style>
.show-item {
    display: grid;
    place-items: center;
    grid-template-rows: 22px 22px 22px 44px 22px 350px;
}
.show-item-image {
    width: auto;
    height: 100%;
}
@media only screen
  and (min-width: 360px)
  and (max-width: 1000px) {
    .show-item {
        grid-template-rows: 22px 22px 22px 44px 22px 250px;
    }
}
</style>
