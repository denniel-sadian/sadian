<template>
  <header>
    <div class="photo w3-animate-bottom">
      <img src="~/assets/images/long-me.png" alt="Me" />
    </div>
    <div class="texts w3-animate-left">
      <div>
        <p class="w3-text-yellow name">My name is Denniel Luis Sadian</p>
        <h1>I'm a Full stack developer from Marinduque.</h1>
        <p>
          I love working with web technologies. Web development is my passion.
        </p>
        <nuxt-link to="/portfolio/" class="w3-button w3-yellow w3-round-xxlarge">
          See My Works
        </nuxt-link>
        <a href="/resume.pdf" class="w3-button w3-yellow w3-round-xxlarge">My Resume</a>
        <button
          @click="contactShow = !contactShow"
          class="w3-button w3-yellow w3-round-xxlarge"
        >
          Contact Me
        </button>
      </div>
    </div>
    <div class="three">
      <div class="w3-content">
        <div class="w3-padding">
          <i class="fa fa-code"></i>
          <p>
            I do web development with frameworks like Django and Spring Boot.
          </p>
        </div>
        <div class="w3-padding">
          <i class="fa fa-server"></i>
          <p>I have some knowledge with Docker and Amazon Web Services.</p>
        </div>
        <div class="w3-padding">
          <i class="fa fa-heart"></i>
          <p>
            I love to learn new things, and learn from other great developers.
          </p>
        </div>
      </div>
    </div>

    <Contact
      :show="contactShow"
      key="contact"
      @hide-contact-modal="contactShow = !contactShow"
    />
  </header>
</template>

<script>
import Contact from '~/components/Contact.vue'

export default {
  components: { Contact },
  data() {
    return { contactShow: false }
  },
  head() {
    return {
      title: 'Denniel Sadian',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Greetings! Welcome to my website!',
        },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: 'Denniel Luis Saway Sadian',
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: 'Greetings! Welcome to my website!',
        },
      ],
    }
  },
}
</script>

<style scoped>
header {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'texts photo'
    'three three';
  background: url('../assets/images/header-bg.jpg') no-repeat fixed;
  background-position: bottom;
  width: 100%;
  background-size: cover;
  z-index: 0;
  overflow: hidden;
}

.name {
  text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
}

.photo {
  grid-area: photo;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 500px;
  margin-right: auto;
  overflow: hidden !important;
}

.photo img {
  height: 100%;
  width: auto;
  position: relative;
}

.texts {
  grid-area: texts;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  color: white;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  padding-left: 20px;
}

.texts > div h1,
.texts > div p,
.texts > div a {
  font-family: 'Nunito';
  text-transform: capitalize;
}

.texts > div p:first-child {
  font-size: 20px;
  font-weight: 800;
}

.texts > div h1 {
  font-size: 50px;
  line-height: 1em;
  font-weight: 800;
  text-shadow: 3px 0px 7px rgba(114, 109, 92, 0.8),
    -3px 0px 7px rgba(156, 145, 110, 0.8), 0px 4px 7px rgba(177, 170, 148, 0.8);
}

.three {
  grid-area: three;
  background: white;
  padding: 16px 0px;
  display: flex;
  font-size: 16px;
}

.three > div {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
}

.three > div > div {
  border-right: 1px solid lightgray;
  text-align: center;
}

.three > div > div:last-child {
  border-right: none;
}

.three i {
  color: gray;
  font-size: 30px;
}

.three p {
  font-family: 'Nunito';
}

.w3-button {
  margin-bottom: 4px;
}

@media screen and (max-width: 450px) {
  /* Small phones */

  .texts h1 {
    font-size: 30px !important;
  }
}

@media screen and (max-width: 850px) {
  header {
    background: url('../assets/images/small-header-bg.jpg') no-repeat fixed;
    background-position: bottom;
    background-size: cover;
    overflow: unset;
    display: block;
  }

  .texts {
    height: 60vh;
    text-align: center;
    padding: 8px;
    max-width: unset;
    margin-left: unset;
    flex-direction: column;
    justify-content: flex-start;
  }

  .photo {
    height: 40vh;
    margin-right: unset;
    max-width: unset;
    margin-right: unset;
  }

  .photo img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: top;
    border-radius: 100%;
    border: 3px solid white;
    background: #ffeb3b6b;
  }

  .three > div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
  }

  .three > div > div {
    border-bottom: 1px solid lightgray;
    border-right: unset;
  }

  .three > div > div:last-child {
    border-bottom: none;
  }
}
</style>
