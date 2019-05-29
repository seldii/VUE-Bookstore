<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-light justify-content-between">
        <a class="navbar-brand">
          <img src="./assets/logo.jpg" class="img-thumbnail" alt="logo">
        </a>
        <SearchBar v-model="searchTerm"></SearchBar>
      </nav>
      <hr>
      <div class="row" v-if="loading">Loading....</div>
      <Books :books="filteredBooks" :allbooks="books"></Books>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";

import SearchBar from "./components/SearchBar";
import Books from "./components/Books";

export default {
  name: "app",
  props: [],
  components: {
    Books,
    SearchBar
  },

  data() {
    return {
      books: [],
      loading: false,
      searchTerm: ""
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://api.myjson.com/bins/udbm5.json")
      .then(res => {
        this.loading = false;
        this.books = res.data.books;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        let searchBookHere =
          book.titulo.replace(/\s/g, "") + book.descripcion.replace(/\s/g, "");
        let searchBook =
          this.searchTerm.length === 0 ||
          searchBookHere.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
            -1;
        return searchBook;
      });
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.card-flip {
  background-color: transparent;
  /* border: 1px solid #f1f1f1; */
}

/* This container is needed to position the front and back side */
.card-inner {
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.card-flip:hover .card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.card-front,
.card-back {
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.card-front {
  transform: rotateY(0deg);
  background-color: #bbb;
  color: black;
  /* border: 2px solid black; */
}

/* Style the back side */
.card-back {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: whitesmoke;
  color: black;
  transform: rotateY(180deg);
}
.card-back {
  padding: 10px;
}

nav {
  width: 100%;
  padding: 0;
  margin-bottom: 5px;
}

.navbar img {
  width: 100px;
}
</style>
