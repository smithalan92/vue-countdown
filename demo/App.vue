<template>
  <header class="header">
    <h1>Vue Countdown</h1>
    <div class="codeblock">
      npm i --save @smithalan2/vue-countdown
    </div>
    <a
      href="https://github.com/smithalan92/vue-countdown"
      target="_blank">
      github.com/smithalan92/vue-countdown
    </a>
  </header>
  <div>
    <vue-countdown
      ref="countdown"
      :end-date-time="endDateTime"
      :start-immediately="true"
      @finished="onCountdownFinished">
      <template
        v-slot:default="{ countdown }">
        <div
          class="countdown-data"
          v-if="!hasCountdownFinished">
          <div class="countdown-progress">
            <div class="countdown-time">{{ countdown.remainingYears.text }}</div>
            <div class="countdown-time">{{ countdown.remainingMonths.text }}</div>
            <div class="countdown-time">{{ countdown.remainingWeeks.text }}</div>
            <div class="countdown-time">{{ countdown.remainingDays.text }}</div>
            <div class="countdown-time">{{ countdown.remainingHours.text }}</div>
            <div class="countdown-time">{{ countdown.remainingMinutes.text }}</div>
            <div class="countdown-time">{{ countdown.remainingSeconds.text }}</div>
          </div>
           <div class="until-date">
              until {{ formatedEndDateTime }}
            </div>
        </div>
        <div v-else>
          Countdown finished!
        </div>
      </template>
    </vue-countdown>
    <div class="row">
      <button
        class="run"
        @click="runCountdown">
        Run Countdown
      </button>
      <button
        class="cancel"
        @click="cancelCountdown">
        Cancel Countdown
      </button>
    </div>
    <div class="row">
      <input type="datetime-local" v-model="inputEndDateTime"/>
      <button
        class="cancel"
        @click="changeCountdownDate">
        Change Countdown Date
      </button>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import VueCountdown from '../src';

export default {
  name: 'App',
  components: {
    VueCountdown,
  },
  data() {
    return {
      inputEndDateTime: '',
      endDateTime: null,
      hasCountdownFinished: false,
    };
  },

  computed: {
    formatedEndDateTime() {
      return format(this.endDateTime, 'do MMMM yyyy HH:mm:ss');
    },
  },

  methods: {
    onTick(timeData) {
      console.log(timeData.remainingSeconds);
    },

    runCountdown() {
      this.$refs.countdown.run();
    },

    cancelCountdown() {
      this.$refs.countdown.cancel();
    },

    changeCountdownDate() {
      this.hasCountdownFinished = false;
      this.endDateTime = new Date(this.inputEndDateTime);
    },

    onCountdownFinished() {
      this.hasCountdownFinished = true;
    },
  },

  created() {
    this.endDateTime = addDays(new Date(), 10);
    this.inputEndDateTime = format(this.endDateTime, "yyyy-MM-dd'T'HH:mm");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header h1 {
  font-size: 36px;
}

.header a {
  font-size: 22px;
  color: #343434;
}

.codeblock {
  margin: 8px;
  padding: 12px;
  background: rgb(52, 52, 52);
  color: white;
  border-radius: 4px;
}

#vue-countdown {
  display: flex;
  justify-content: center;
}

.countdown-progress {
  display: flex;
  flex-direction: column;
}

.countdown-time {
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
}

.until-date {
  margin-top: 24px;
}

.row {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}

.row button {
  margin-left: 20px;
}
</style>
