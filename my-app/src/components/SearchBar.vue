<template>
  <form class="form-inline">
    <input
      class="form-control form-control-sm float-right"
      type="text"
      :value="searchTerm"
      @keyup="$emit('input', $event.target.value)"
      placeholder="Search"
      aria-label="Search"
    >
    <button class="btn btn-outline-success btn-sm" type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["searchTerm"]
};
</script>

<style>
</style>
