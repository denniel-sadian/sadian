<template>
  <div>
    <transition-group
      name="contact"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp"
    >
      <div key="contact" v-show="show" id="contactModal" class="w3-modal">
        <div class="w3-modal-content">
          <div class="w3-container w3-padding w3-text-white">
            <span
              class="closebtn w3-hover-text-red"
              style="display:absolute; float:right; font-size:20px"
              @click="$emit('hide-contact-modal')"
            >
              <i class="fa fa-times-circle"></i>
            </span>
            <h2><i class="fa fa-pencil"></i> Contact me!</h2>
          </div>
          <div class="w3-container">
            <form
              class="w3-container w3-padding w3-margin-bottom w3-white w3-center"
              @submit.prevent="contact"
            >
              <input
                class="w3-input w3-margin-bottom w3-margin-top w3-border-gray w3-hover-border-purple"
                placeholder="Full Name"
                v-model="name"
                required
              />
              <input
                class="w3-input w3-margin-bottom w3-border-gray w3-hover-border-purple"
                placeholder="Email"
                v-model="email"
                required
              />
              <textarea
                class="w3-border-gray w3-hover-border-purple"
                v-model="message"
                placeholder="Message..."
                required
                style="width:100%; height:100px"
              ></textarea>
              <div class="w3-right w3-margin-top w3-margin-bottom">
                <button
                  type="reset"
                  @click="clear()"
                  class="w3-button w3-round-xxlarge w3-padding w3-card-4 w3-red"
                >
                  <b> <i class="fa fa-trash"></i> Clear </b>
                </button>
                <button
                  type="submit"
                  class="w3-button w3-round-xxlarge w3-padding w3-card-4 w3-purple w3-margin-left"
                >
                  <b> <i class="fab fa-telegram-plane"></i> Submit </b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['show'],
  data() {
    return { name: '', email: '', message: '' }
  },
  methods: {
    contact() {
      this.$emit('hide-contact-modal')
      axios
        .post('https://denniel.herokuapp.com/api/contact/', {
          full_name: this.name,
          email: this.email,
          content: this.message
        })
        .then(() => {
          alert('Thank you very much for leaving me a message!')
          this.clear()
        })
    },
    clear() {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.w3-modal {
  display: block;
}
.w3-modal-content {
  background-image: url('../assets/images/header.jpg');
}
form {
  background-image: url('../assets/images/article.jpg');
}
</style>
