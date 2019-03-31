<template>
  <div id="footer">
    <footer
      class="w3-container w3-padding-64 w3-center w3-margin-top w3-purple w3-border-purple w3-topbar w3-bottombar"
    >
      <div v-if="quote">
        <h3 class="w3-opacity">{{ day }} quote</h3>
        <h2>
          <i>
            <i class="fa fa-quote-left"></i>
            <span>{{ quote }}</span>
            <i class="fa fa-quote-right"></i>
          </i>
        </h2>
        <h4 class="w3-opacity">- {{ whose }}</h4>
      </div>
      <div v-else>
        <i class="w3-large fa fa-spinner w3-spin"></i>
      </div>
    </footer>
    <div class="last-footer w3-container w3-center w3-margin-top">
      <div style="font-size:40px">
        <a
          style="color: #3b5998"
          href="https://www.facebook.com/dennielsadian"
          class="w3-hover-opacity"
        >
          <i class="fa fa-facebook-square"></i>
        </a>
        <a style="color: #1DA1F2" href="https://twitter.com/dennielsadian" class="w3-hover-opacity">
          <i class="fa fa-twitter"></i>
        </a>
        <a style="color: #333" href="https://github.com/denniel-sadian" class="w3-hover-opacity">
          <i class="fa fa-github-alt"></i>
        </a>
      </div>
      <form
        id="subscribe-form"
        onsubmit="return subscribe()"
        class="w3-container"
        style="min-width:300px"
        @submit.prevent="subscribe()"
      >
        <input
          type="email"
          id="subscriber-email"
          class="w3-hover-light-gray"
          style="padding:8px; border:3px solid #9c27b0; border-radius:32px 0px 0px 32px;"
          placeholder="Your email"
          v-model="email"
          required
        >
        <button
          class="w3-hover-opacity w3-purple"
          type="submit"
          style="padding:8px; border:3px solid #9c27b0; color:white; border-radius:0px 32px 32px 0px;"
        >
          <i class="fa fa-bell"></i>
          <b class="w3-hide-small">Subscribe</b>
        </button>
      </form>
      <p>Powered by Python's Django</p>
      <p>Styled by w3.css</p>
      <p>2017 - {{ year }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { q: {}, email: '' }
  },
  computed: {
    day() {
      var day = new Date().getDay()
      var names = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
      return names[day]
    },
    quote() {
      return this.q.quote
    },
    whose() {
      return this.q.whose
    },
    year() {
      return new Date().getFullYear()
    }
  },
  methods: {
    subscribe() {
      axios.post('http://127.0.0.1:8000/blog/api/subscribe/', {
        email: this.email
      })
    }
  },
  created() {
    var day = new Date().getDay()
    axios.get('http://127.0.0.1:8000/extras/api/days/' + this.day).then(res => {
      this.q = res.data
    })
  }
}
</script>

<style scoped>
footer {
  background: url('../assets/images/header.png') no-repeat fixed;
  background-size: cover;
}
.w3-spin {
  font-size: 80px !important;
}
</style>