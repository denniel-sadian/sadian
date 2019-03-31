<template>
  <div>
    <transition-group
      name="contact"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp"
    >
      <div v-show="show" key="comment-form" id="commentForm" class="w3-modal">
        <div class="w3-modal-content">
          <form class="w3-container w3-light-grey w3-padding" @submit.prevent="comment()">
            <h4>
              <i class="fa fa-commenting"></i> Comment
            </h4>
            <input
              class="w3-input w3-margin-bottom w3-margin-top w3-border-gray w3-hover-border-purple"
              placeholder="Full Name"
              v-model="name"
              required
            >
            <input
              class="w3-input w3-margin-bottom w3-border-gray w3-hover-border-purple"
              placeholder="Email"
              v-model="email"
              type="email"
              required
            >
            <textarea
              class="w3-border w3-hover-border-purple w3-margin-bottom"
              v-model="message"
              placeholder="Comment..."
              required
            ></textarea>
            <button
              type="submit"
              class="w3-button w3-round-xxlarge w3-purple w3-right w3-margin-bottom w3-margin-left"
            >
              <b>
                <i class="fa fa-send"></i> Submit
              </b>
            </button>
            <button
              type="reset"
              class="w3-button w3-round-xxlarge w3-red w3-right w3-margin-bottom"
              @click="$emit('hide-comment')"
            >
              <b>
                <i class="fa fa-trash"></i> Cancel
              </b>
            </button>
          </form>
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
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
    id() {
      return this.$route.query.id
    }
  },
  methods: {
    comment() {
      axios
        .post(
          'http://127.0.0.1:8000/blog/api/entries/' + this.id + '/comments/',
          {
            email: this.email,
            full_name: this.name,
            content: this.message
          }
        )
        .then(res => {
          if (res.status == 200) {
            this.$emit('hide-comment')
            this.$router.push({
              name: 'blog-detail',
              query: { id: this.id, reload: this.$route.query.reload + 1 }
            })
          }
        })
    }
  }
}
</script>

<style scoped>
.w3-modal {
  display: block;
}
textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
}
</style>