<template>
  <header>
    <div class="photo">
      <img src="~/assets/images/long-me-2.png" alt="Me" />
    </div>
    <div class="texts">
      <div>
        <p class="name gold-text">My name is Denniel Sadian</p>
        <h1>
          I'm a Software Developer from Marinduque.
        </h1>
        <p class="w3-margin-top w3-margin-bottom w3-text-gray">
          I specialize in web development. Lorem ipsum... yes.
          console.log('what?')
        </p>
        <a
          href="https://www.linkedin.com/in/denniel-luis-sadian-266517168/"
          target="_blank"
          class="w3-button w3-round-xxlarge w3-large w3-black"
          >Linkedin</a
        >
        <a
          href="https://github.com/denniel-sadian"
          target="_blank"
          class="w3-button w3-round-xxlarge w3-large w3-black"
          ><i class="fa fa-github"></i
        ></a>
      </div>
    </div>
    <div class="three w3-white w3-border-top w3-border-black">
      <div class="w3-content">
        <div class="w3-padding">
          <i class="fa fa-code w3-text-black"></i>
          <p>
            I do web development with frameworks like Django, FastAPI, and
            Spring Boot.
          </p>
        </div>
        <div class="w3-padding">
          <i class="fa fa-server w3-text-black"></i>
          <p>
            I have knowledge with Docker, Kubernetes, and Amazon Web Services.
          </p>
        </div>
        <div class="w3-padding">
          <i class="fa fa-heart w3-text-black"></i>
          <p>
            I love to learn new things, and learn from other great software
            developers.
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
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'texts photo'
    'three three';
  background: url('../assets/images/header-bg-inverted.png') no-repeat fixed;
  background-position: bottom;
  width: 100%;
  background-size: cover;
  z-index: 0;
  overflow: hidden;
}

.dark-lilac-text {
  color: #7f5283 !important;
}

.lilac-text {
  color: #ffcefe;
}

.lilac {
  background-color: #ffcefe;
  color: black;
}

.name {
  text-transform: uppercase;
  font-size: 25px !important;
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
  color: black;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  padding-left: 20px;
}

.texts > div p,
.texts > div a,
.texts > div h1 {
  font-family: 'Montserrat', sans-serif !important;
}

.texts > div p,
.texts > div a {
  font-weight: unset !important;
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
  height: 100%;
  width: 100%;
  border-right: 1px solid lightgray;
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr;
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

.gold-text {
  font-size: 48px;
  font-weight: bold;
  color: #ffd700; /* Gold color */
  text-shadow: -1px -1px 1px #0000008e, 1px -1px 1px #0000008e,
    -1px 1px 1px #0000008e, 1px 1px 1px #000, 0px 0px 10px #ffd700,
    0px 0px 20px #ffd700, 0px 0px 30px #ffd700, 0px 0px 40px #ffd700,
    0px 0px 50px #ffd700, 0px 0px 60px #ffd700, 0px 0px 70px #ffd700; /* Final shadow */
}

@media screen and (max-width: 450px) {
  /* Small phones */

  .texts h1 {
    font-size: 30px !important;
  }
}

@media screen and (max-width: 850px) {
  header {
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
    margin: 25px 0 25px 0;
  }

  .three > div > div:last-child {
    border-bottom: none;
  }
}
</style>
