<template>
  <header>
    <div class="texts w3-animate-left">
      <div>
        <p class="w3-text-yellow">My name is Denniel Luis Sadian</p>
        <h1>I'm a full stack developer from Marinduque.</h1>
        <p>
          I love working with web technologies. Web development is my passion.
        </p>
        <nuxt-link to="/portfolio/" class="w3-button w3-yellow w3-round">
          See My Works
        </nuxt-link>
        <a href="/resume.pdf" class="w3-button w3-yellow w3-round">My Resume</a>
        <button
          @click="contactShow = !contactShow"
          class="w3-button w3-yellow w3-round"
        >
          Contact Me
        </button>
      </div>
    </div>
    <div class="photo w3-animate-bottom">
      <img src="https://denniel-sadian.github.io/img/long-me.png" alt="Me" />
    </div>
    <div class="three">
      <div class="w3-content">
        <div class="w3-padding">
          <i class="fa fa-object-group"></i>
          <p>
            I design minimalist web applications while maintaining good user
            experience.
          </p>
        </div>
        <div class="w3-padding">
          <i class="fa fa-keyboard"></i>
          <p>
            I am knowledgable of different web technologies for both front and
            back.
          </p>
        </div>
        <div class="w3-padding">
          <i class="fa fa-comments"></i>
          <p>
            I can communicate nicely and effectively using English and my mother
            tongue.
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
      title: 'Dein Sadian',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Greetings! Welcome to my website!'
        },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: 'Denniel Luis Saway Sadian'
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: 'Greetings! Welcome to my website!'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'texts photo'
    'three three';
  background: url('https://denniel-sadian.github.io/img/header-bg.jpg')
    no-repeat fixed;
  background-position: bottom;
  width: 100%;
  background-size: cover;
  z-index: 0;
  overflow: hidden !important;
}

.photo {
  grid-area: photo;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;
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
}

.texts > div {
  width: 80%;
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

@media screen and (max-width: 730px) {
  header {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    background: url('https://denniel-sadian.github.io/img/small-header-bg.jpg')
      no-repeat fixed;
    background-position: bottom;
    background-size: cover;
  }

  .texts {
    justify-content: center;
    text-align: center;
    order: 2;
  }

  .photo {
    height: unset;
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

  .three {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .texts > div {
    width: 90%;
  }
}

@media screen and (min-height: 850px) {
  header {
    grid-template-rows: 640px 1fr;
  }

  .three {
    font-size: 20px;
  }

  .three i {
    font-size: 50px;
  }
}
</style>
