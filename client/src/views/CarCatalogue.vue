<template>
  <div class="">
    <LoginModal />
    <div class="catalogue-wrap">
      <h1>Available cars</h1>
      <div class="">
        <CarCard v-for="(car, index) in cars" :key="index" :car="car" />
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from "@/components/CarCard.vue";
import { getAllCars } from "@/api/cars";
import LoginModal from "@/components/LoginModal.vue";

export default {
  name: "CarCatalogue",

  components: { CarCard, LoginModal },

  data() {
    return { cars: [] };
  },

  created() {
    this.getAllCars();
  },

  methods: {
    async getAllCars() {
      try {
        this.cars = await getAllCars();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.catalogue-wrap {
  display: flex;
  flex-direction: column;
  margin: 2em auto auto auto;
  width: 70%;

  h1 {
    margin: 1em;
  }
  .row {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
