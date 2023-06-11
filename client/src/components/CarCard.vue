<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <div class="flex">
          <md-card-media>
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
              <span class="">4</span>
            </div>
            <p>Per day</p>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button>view deal</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.flex {
  display: flex;
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

<script>
export default {
  name: "CarCard",

  props: ["car"],
};
</script>
