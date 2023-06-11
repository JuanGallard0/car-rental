<template>
  <div>
    <CarCard v-for="(car, index) in cars" :key="index" :car="car" />
  </div>
</template>

<style></style>

<script>
import CarCard from "@/components/CarCard.vue";

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
        const res = await fetch(`${process.env.VUE_APP_SERVER_URL}/cars`);
        const json = await res.json();
        this.cars = json;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
