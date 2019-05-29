<template>
  <div class="modal" :id="'myModal' + idx" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div :id="'car'+ idx" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div
                class="carousel-item"
                :class="{'active' : allbooks[index] === book}"
                v-for="(b, index) in allbooks"
                :key="index"
              >
                <img :src="b.detalle" alt="cover" class="img-thumbnail">
              </div>
            </div>
            <a class="carousel-control-prev" :href="'#car' + idx" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#car' + idx" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modals",
  props: ["idx", "allbooks", "book"]
};
</script>

<style>
</style>
