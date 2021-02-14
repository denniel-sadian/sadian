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
      <div id="networks">
        <a target="_blank" :href="shareTo('facebook')" class="w3-hover-opacity">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a target="_blank" :href="shareTo('twitter')" class="w3-hover-opacity">
          <i class="fab fa-twitter"></i>
        </a>
        <a target="_blank" href="https://github.com/denniel-sadian" class="w3-hover-opacity">
          <i class="fab fa-github-alt"></i>
        </a>
        <a target="_blank" :href="shareTo('linkedin')" class="w3-hover-opacity">
          <i class="fab fa-linkedin"></i>
        </a>
        <a target="_blank" :href="shareTo('telegram')" class="w3-hover-opacity">
          <i class="fab fa-telegram-plane"></i>
        </a>
        <a target="_blank" :href="shareTo('whatsapp')" class="w3-hover-opacity">
          <i class="fab fa-whatsapp-square"></i>
        </a>
        <a target="_blank" :href="shareTo('pinterest')" class="w3-hover-opacity">
          <i class="fab fa-pinterest"></i>
        </a>
        <a target="_blank" :href="shareTo('reddit')" class="w3-hover-opacity">
          <i class="fab fa-reddit-alien"></i>
        </a>
        <a target="_blank" :href="shareTo('mail')" class="w3-hover-opacity">
          <i class="fa fa-envelope"></i>
        </a>
      </div>
    </footer>
    <div class="last-footer w3-container w3-center w3-margin-top w3-margin-bottom">
      <form
        id="subscribe-form"
        onsubmit="return subscribe()"
        class="w3-container w3-margin-top"
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
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
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
    },
    shareLink() {
      return `https://sadian.herokuapp.com${this.$route.path}`
    }
  },
  methods: {
    shareTo(sm) {
      if (sm === 'facebook')
        return `https://web.facebook.com/sharer/sharer.php?u=${this.shareLink}`
      else if (sm === 'twitter')
        return `https://www.twitter.com/share?url=${this.shareLink}`
      else if (sm === 'linkedin')
        return `https://www.linkedin.com/shareArticle/?mini=true&url=${
          this.shareLink
        }`
      else if (sm === 'telegram')
        return `https://telegram.me/share/?url=${this.shareLink}`
      else if (sm === 'whatsapp')
        return `https://api.whatsapp.com/send?text=${this.shareLink}`
      else if (sm === 'pinterest')
        return `https://www.pinterest.ph/pin/find/?url=${this.shareLink}`
      else if (sm === 'reddit')
        return `https://reddit.com/submit?url=${this.shareLink}`
      else if (sm === 'mail')
        return `mailto:?subject=Contact&body=${this.shareLink}`
    },
    subscribe() {
      axios
        .post('https://denniel.herokuapp.com/blog/api/subscribe/', {
          email: this.email
        })
        .then(function() {
          alert('Thank you!')
        })
        .catch(function() {
          alert('That email has been registered already.')
        })
    }
  },
  async created() {
    await axios
      .get('https://denniel.herokuapp.com/extras/api/days/' + this.day)
      .then(res => {
        this.q = res.data
    })
  }
}
</script>

<style scoped>
footer {
  background: url('../assets/images/header.jpg') no-repeat fixed;
  background-size: cover;
}
.w3-spin {
  font-size: 80px !important;
}
#networks {
  font-size: 40px;
}
#networks a {
  padding-left: 5px;
  padding-right: 5px;
}
</style>