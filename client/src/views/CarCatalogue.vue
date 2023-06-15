<template>
  <div class="">
    <LoginModal />
    <div class="catalogue-wrap">
      <h1>Available cars</h1>
      <div class="row">
        <CarCard
          v-for="(car, index) in carsAvailable"
          :key="index"
          :car="car"
        />
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

  computed: {
    carsAvailable: function () {
      return this.cars.filter((i) => i.is_available == true);
    },
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
  width: 75%;

  h1 {
    margin: 1em;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: $lg) {
      justify-content: flex-start;
    }
  }
}
</style>
