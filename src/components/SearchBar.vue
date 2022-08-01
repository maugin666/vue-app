<template>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        v-model.trim="searchValue"
        aria-label="Search"
        placeholder="Type to search"
      />
      <button type="submit">Search</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.searchValue) {
        this.$emit('search', this.searchValue);
      }
    },
  },
};
</script>
