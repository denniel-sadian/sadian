<template>
  <div>
    <div
      id="about-header"
      class="w3-container w3-margin-top w3-center w3-border-purple w3-bottombar"
    >
      <img
        src="~/assets/images/me.jpg"
        class="face w3-circle w3-image w3-card-4"
        width="150"
        style="border:6px solid #9c27b0; position:relative; top: 70px;"
      >
    </div>
    <div
      class="w3-container w3-border w3-border-purple w3-white"
      style="border-radius:0px 0px 4px 32px"
    >
      <br>
      <br>
      <h1 class="w3-margin-top w3-center">Denniel Luis Saway Sadian</h1>
      <div v-if="about.length">
        <p v-for="p in about" :key="p.id" v-html="p.text"></p>
      </div>
      <div v-else class="w3-center w3-text-purple" style="font-size: 80px">
        <i class="fa fa-spinner w3-text-black w3-spin"></i>
      </div>
      <h1 class="w3-center w3-text-purple">
        <i class="fa fa-calendar"></i> My Life Events
      </h1>
      <div v-if="timelines.length">
        <div v-for="t in timelines" :key="t.id" class="timeline">
          <div class="timeline-container" :class="{'left': t.left, 'right': !t.left}">
            <div class="timeline-content w3-border w3-border-purple w3-card-4">
              <div v-if="t.image" class="image-holder">
                <img :src="t.image" class="w3-image" style="border-radius: 8px 8px 0px 0px">
              </div>
              <h2 class="w3-center w3-text-purple">
                <i v-if="!t.image" class="fa fa-calendar"></i>
                <br>
                {{ new Date(t.date).getFullYear() }}
              </h2>
              <h5 class="w3-center w3-text-purple">{{ t.title }}</h5>
              <p>{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="w3-center text-purple" style="font-size: 80px">
        <i class="fa fa-spinner w3-text-black w3-spin"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'portfolio',
  data() {
    return { about: [], timelines: [] }
  },
  created() {
    axios.get('https://denniel.herokuapp.com/api/about/').then(res => {
      this.about = res.data
    })
    axios.get('https://denniel.herokuapp.com/api/timeline/').then(res => {
      this.timelines = res.data
    })
  },
  head() {
    return {
      title: 'Who is Denniel Luis Saway Sadian',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'He is a programmamer who likes to code, of course.'
        }
      ]
    }
  }
}
</script>

<style scoped>
#about-header {
  background: url('../../assets/images/binary.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 4px 32px 0px 0px;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #9c27b0;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.timeline-container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.timeline-container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: white;
  border: 6px solid #9c27b0;
  top: 18px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: ' ';
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #9c27b0;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: ' ';
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent #9c27b0 transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -13px;
}

/* The actual content */
.timeline-content {
  padding: 10px 10px;
  background-color: white;
  position: relative;
  border-radius: 8px;
  text-align: justify;
}
.timeline-content img {
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;
  width: 100%;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 700px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 28px;
  }

  /* Full-width containers */
  .timeline-container {
    width: 100%;
    padding-left: 70px;
    padding-right: 5px;
  }
  .timeline-content img {
    min-height: 150px;
    max-height: 150px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .timeline-container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent #9c27b0 transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}

.image-holder {
  background: linear-gradient(#9c27b0, #111111);
  border-radius: 8px 8px 0px 0px;
}
</style>