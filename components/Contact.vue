<template>
  <div id="contactModal" class="w3-modal">
    <div class="w3-modal-content" style="background-image:url(~/assests/images/header.png)">
      <div class="w3-container w3-padding w3-text-white">
        <span
          class="closebtn w3-hover-text-red"
          style="display:absolute; float:right; font-size:20px"
          @click="$emit('hide-contact-modal')"
        >
          <i class="fa fa-times-circle"></i>
        </span>
        <h2>
          <i class="fa fa-pencil"></i> Contact me!
        </h2>
      </div>
      <div class="w3-container">
        <form
          class="w3-container w3-padding w3-margin-bottom w3-white w3-center"
          style="background-image:url(~/assets/images/article)"
          onsubmit="return postComment()"
        >
          {% csrf_token %}
          <input
            class="w3-input w3-margin-bottom w3-margin-top w3-border-gray w3-hover-border-purple"
            placeholder="Full Name"
            id="name"
            required
          >
          <input
            class="w3-input w3-margin-bottom w3-border-gray w3-hover-border-purple"
            placeholder="Email"
            id="email"
            required
          >
          <textarea
            class="w3-border-gray w3-hover-border-purple"
            id="message"
            placeholder="Message..."
            required
            style="width:100%; height:100px"
          ></textarea>
          <div class="w3-right w3-margin-top w3-margin-bottom">
            <button type="reset" class="w3-button w3-round-xxlarge w3-padding w3-card-4 w3-red">
              <b>
                <i class="fa fa-trash"></i> Clear
              </b>
            </button>
            <button
              type="submit"
              class="w3-button w3-round-xxlarge w3-padding w3-card-4 w3-purple w3-margin-left"
            >
              <b>
                <i class="fa fa-send"></i> Submit
              </b>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>