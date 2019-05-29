<template>
  <div class="row is-multiline">
    <div class="col-md-4 is-one-third" v-for="(book, index) in books" :key="index">
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
        <Modals :idx="index" :book="book" :allbooks="allbooks"></Modals>
      </div>
    </div>
  </div>
</template>

<script>
import Modals from "./Modals";
export default {
  name: "Books",
  props: ["books", "allbooks"],
  components: {
    Modals
  }
};
</script>

<style>
</style>
