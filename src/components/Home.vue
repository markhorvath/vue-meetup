<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large info router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large info router to="/meetup/new">New Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :src="meetup.imgUrl"
                    :key="meetup.id">
                    <div class="title">
                      {{ meetup.title }}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
              <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/IMG_2259_-_Washington_DC_-_US_Capitol.JPG', id: 'adkjadk123', title: 'Meetup DC'},
          {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Tokyo_%2816043023330%29.jpg', id: 'adkjadk124', title: 'Meetup Tokyo'}
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>