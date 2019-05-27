<template>
  <div id="app">
    <div class="row" v-for="(chunk, index) in bookChunks" :key="index">
      <div class="col-md-4" v-for="(book, index) in chunk" :key="index">
        <div class="card card-flip">
          <div class="card-inner">
            <div class="card-front">
              <img :src="book.portada" alt="cover" class="img-thumbnail">
            </div>
            <div class="card-back">
              <h3>{{book.titulo}}</h3>
              <p>{{book.descripcion}}</p>
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
      loading: false
    };
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/udbm5.json")
      .then(res => (this.books = res.data.books));
  },
  computed: {
    bookChunks() {
      return _.chunk(Object.values(this.books), 3);
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
  border: 1px solid #f1f1f1;
}

/* This container is needed to position the front and back side */
.card-inner {
  text-align: center;
  transition: transform 0.8s;
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
  border: 2px solid black;
}

/* Style the back side */
.card-back {
  position: absolute;
  top: 0;
  background-color: whitesmoke;
  color: black;
  transform: rotateY(180deg);
}
</style>
