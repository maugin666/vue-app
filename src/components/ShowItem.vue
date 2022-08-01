<template>
    <li class="show-item">
        <div><strong>Name:</strong> {{ show.show.name }}</div>
        <div><strong>Rating:</strong> {{ show.show.rating.average || '-' }}</div>
        <div><strong>Premiered:</strong> {{ show.show.premiered || '-' }}</div>
        <div><strong>Genres:</strong> {{ show.show.genres.join(', ') || '-' }}</div>
        <div><strong>Language:</strong> {{ show.show.language || '-' }}</div>
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
    place-items: start;
    grid-template-rows: 22px 22px 22px 44px 22px 250px;
    text-align: left;
    border: 1px solid #f0f0f0;
    padding: 5px;
}
.show-item div {
  margin-bottom: 10px;
}
.show-item-image {
    width: auto;
    height: 100%;
}
@media only screen and (min-width: 1000px) {
    .show-item {
      grid-template-rows: 22px 22px 22px 44px 22px 350px;
    }
}
</style>
