<template>
  <div>
    <countdown
      ref="countdown"
      :end-date-time="endDateTime"
      :start-immediately="true"
      @finished="onCountdownFinished">
      <template
        v-slot:default="{ countdown }">
        <div
          class="countdown-progress"
          v-if="!hasCountdownFinished">
          <span>{{ countdown.remainingYears.text }}</span>,
          <span>{{ countdown.remainingMonths.text }}</span>,
          <span>{{ countdown.remainingWeeks.text }}</span>,
          <span>{{ countdown.remainingDays.text }}</span>,
          <span>{{ countdown.remainingHours.text }}</span>,
          <span>{{ countdown.remainingMinutes.text }}</span>,
          <span>{{ countdown.remainingSeconds.text }}</span>
        </div>
        <div v-else>
          Countdown finished!
        </div>
      </template>
    </countdown>
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
import Countdown from '../src/VueCountdown';

export default {
  name: 'App',
  components: {
    Countdown,
  },
  data() {
    return {
      inputEndDateTime: '',
      endDateTime: null,
      hasCountdownFinished: false,
    };
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

.row {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}

.row button {
  margin-left: 20px;
}
</style>
