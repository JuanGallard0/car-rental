<template>
  <div>
    <CarCard v-for="(car, index) in cars" :key="index" :car="car" />
  </div>
</template>

<script>
import CarCard from "@/components/CarCard.vue";
import { getAllCars } from "@/api/cars";

export default {
  name: "CarCatalogue",

  components: { CarCard },

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

<style></style>
