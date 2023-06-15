<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <div class="flex">
          <md-card-media class="image">
            <img :src="car.image_url" alt="Cover" />
          </md-card-media>

          <div class="">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{ car.type }}</div>
                <div class="md-subhead">{{ car.brand }} {{ car.model }}</div>
              </md-card-header-text>
            </md-card-header>
          </div>
        </div>

        <md-card-content class="flex card-content">
          <div class="">
            <div class="">
              <md-icon>person</md-icon>
              {{ car.seats }} seats
            </div>
            <div class="">
              <md-icon>drive_eta</md-icon>
              {{ car.transmission }}
            </div>
          </div>

          <div class="price">
            <div class="flex">
              <md-icon>attach_money</md-icon>
              <span class="">{{ car.daily_price }}</span>
            </div>
            <p>Per day</p>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button @click="handleRentBtn(car.id)">Rent</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import { updateAvailability } from "@/api/cars";
import { createRental } from "@/api/rentals";
import { getAuth } from "@firebase/auth";

export default {
  name: "CarCard",

  props: ["car"],

  methods: {
    async handleRentBtn(key) {
      const user = getAuth().currentUser;
      if (user) {
        const newRental = {
          userIdToken: await user.getIdToken(),
          id_user: user.uid,
          id_car: key,
        };
        const carToEdit = {
          userIdToken: await user.getIdToken(),
          id_car: key,
          is_available: false,
        };
        createRental(newRental);
        updateAvailability(carToEdit);
        this.$router.push({ name: "CarCatalogue" });
      } else {
        this.$store.commit("setShowLoginModal", true);
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  height: 250px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  margin: 1em;
}

.flex {
  display: flex;
}

img {
  max-width: 170px;
}

.card-content {
  justify-content: space-between;
  .price {
    font-weight: 700;

    span {
      font-size: 3em;
    }
  }
}
</style>
