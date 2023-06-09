<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <div class="row">
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

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque
          ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
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

.row {
  display: flex;
}
</style>

<script>
export default {
  name: "CarCard",

  props: ["car"],
};
</script>
