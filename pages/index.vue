<template>
  <div class="myroot">
    <header>
      <div class="photo w3-animate-bottom">
        <img src="long-me.png" alt="Me" />
      </div>
      <div class="texts w3-animate-left">
        <div>
          <p class="w3-text-yellow shadow">DENNIEL LUIS S. SADIAN</p>
          <h1>I'm a Web Developer from Marinduque.</h1>
          <p class="shadow">
            I strive to learn new things and apply them at work, and also learn
            from my colleagues' experiences. I believe that everyone can code,
            but not everyone writes clean code. Developing web apps is my
            passion.
          </p>
          <a href="#" class="w3-button w3-yellow w3-round-xxlarge"
            ><i class="fa fa-home"></i> Cabugao, Gasan</a
          >
          <nuxt-link to="#" class="w3-button w3-yellow w3-round-xxlarge">
            <i class="fa fa-baby"></i> November 30, 2001
          </nuxt-link>
          <button
            class="w3-button w3-red"
            style="border-radius: 100px; width: 38px; height: 38px; display: inline-flex; justify-content: center; align-items: center;">
            <i class="fa fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="three">
        <div class="w3-content">
          <div class="w3-padding">
            <i class="fa fa-school"></i>
            <p>
              Currently studying Information Technology at Marinduque State
              College.
            </p>
          </div>
          <div class="w3-padding">
            <i class="fa fa-briefcase"></i>
            <p>
              Currently working at
              <a href="http://purplme.com" class="w3-text-purple"
                >PurplMe.com</a
              >
              as a part-time Back End Developer.
            </p>
          </div>
          <div class="w3-padding">
            <i class="fa fa-code"></i>
            <p>
              Has advanced knowledge with Django, knows pure JS and some
              frameworks.
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
    <div class="root-second">
      <div class="cont">
        <div class="item">
          <div>
            <img src="/grad.jpg" />
          </div>
          <div class="text">
            <span class="w3-large">
              <h2>Achievements</h2>
              I moved up from Junior High School at Marinduque Midwest College
              with honors, and graduated from Senior High School with high
              honors at Educational Systems Technological Institute. I was also
              invited to attend at PyCon APAC 2019, and I got to learn a lot of
              things about Python. Because of my part-time job, I'm able to pay
              some of our bills, and to contribute with the development of our
              new home.
            </span>
          </div>
        </div>
        <div class="item">
          <div class="text">
            <span class="w3-large">
              <h2>Interests</h2>
              Besides from coding in Python and doing some web dev stuff, my
              interest is also music because I love music, especially the songs
              of Lady Gaga, Taylor Swift, Ariana Grande, Nicki Minaj, Doja Cat,
              and more. I love singing, even if it doesn't love me back. I also
              love watching series and movies on Netflix.
            </span>
          </div>
          <div>
            <img src="sing.jpg" />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="cont">
        <h2>
          <i class="fa fa-heart w3-text-red"></i> Made with love by Denniel Luis
          S. Sadian
        </h2>
      </div>
    </footer>
    <div class="floating">
      <p>Not responsive.</p>
    </div>
  </div>
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
.floating {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: rgb(206, 206, 206);
  padding: 10px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 8px;
}

.myroot {
  height: 100%;
}

.root-second {
  width: 100%;
}

.root-second .cont {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

footer {
  width: 100%;
  background: rgb(27, 27, 27);
}

footer .cont {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  color: white;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
}

.root-second .cont .item {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.root-second .cont .item > div {
  padding: 30px;
}

.root-second .cont .item > div > img {
  width: 440px;
  height: 440px;
  object-fit: cover;
}

.cont .item .text {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 80px !important;
  background-color: rgb(248, 253, 196);
  font-family: 'Nunito';
}

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

.shadow {
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
  border-bottom: 1px solid rgb(218, 218, 218);
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
