<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">
            <img src="./assets/logo.jpg" class="img-thumbnail float-left" alt="logo">
          </a>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2 float-right"
              type="text"
              v-model="searchTerm"
              placeholder="Search"
              aria-label="Search"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>

      <div class="row is-multiline">
        <div class="col-md-4 is-one-third" v-for="(book, index) in filteredBooks" :key="index">
          <div class="card card-flip">
            <div class="card-inner">
              <div class="card-front">
                <img :src="book.portada" alt="cover" class="img-thumbnail">
              </div>
              <div class="card-back">
                <h3>{{book.titulo}}</h3>
                <p>{{book.descripcion}}</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  :data-target="'#myModal' + index"
                >Show more</button>
              </div>
            </div>
            <div class="modal" :id="'myModal' + index" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div :id="'car'+ index" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div
                          class="carousel-item"
                          :class="{'active' : book === filteredBooks[index] }"
                          v-for="(b, index) in books"
                          :key="index"
                        >
                          <img :src="b.detalle" alt="cover" class="img-thumbnail">
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        :href="'#car' + index"
                        role="button"
                        data-slide="prev"
                      >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        :href="'#car' + index"
                        role="button"
                        data-slide="next"
                      >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
export default {
  name: "app",
  data() {
    return {
      books: [],
      loading: false,
      searchTerm: ""
    };
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/udbm5.json")
      .then(res => (this.books = res.data.books));
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
}

.navbar img {
  width: 50%;
  height: 50%;
}
</style>
