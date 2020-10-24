# Vue Countdown

A simple countdown timer component for Vue 3 written using the composition API.

Demo [https://smithalan92.github.io/vue-countdown/](https://smithalan92.github.io/vue-countdown/)


---
## Installation
Install with npm

```
npm i --save @smithalan2/vue-countdown
```

---

## Props
| Name | Type | Required | Default | Notes |
|---------|-------|------| ------- | ----- |
| startDateTime | Date | no | new Date() on each tick | Passing a start date time will result in only 1 calc being made. |
| endDateTime | Date | yes | n/a | ---- |
| startImmediately | Boolean | false | true | If passed as false, you need to call `run` on the component ref. |
| tickDelay | Number | no | 1000 | ms to run each recalculation. |

---

## Events
| Name | Args | Notes |
|---------|-------|------|
| start | None | Emitted the first time a countdown starts |
| finished | None | Emitted when the countdown has reached the end time |
| cancelled | None | Emitted when the countdown has been cancelled |
| tick | [Countdown](#countdown-data) | The newely calculated countdown values

---

## Slot props
If the component is passed a default slot. The slot will recieve a prop with [Countdown data](#countdown-data)

---

## Exposed Properties
The component instance exposes a number of properties that can be used if required.

| Name | Notes |
|---------|-------|
| run | A function to manually start the countdown. |
| cancel | A function to cancel the countdown |
| countdown | The actual reactive [countdown data](#countdown-data)

---

## Countdown Data
The countdown data is a `reactive` object. It is passed as a slot prop and also given as a param to the `tick` event. 

The countdown prop contains the values for the countown, as well as formatted text that can be used for display. The countdown data object is structured as follows

```
{
  remainingSeconds: { value: Number, text: String },
  remainingMinutes: { value: Number, text: String },
  remainingHours: { value: Number, text: String },
  remainingDays: { value: Number, text: String },
  remainingWeeks: { value: Number, text: String },
  remainingMonths: { value: Number, text: String },
  remainingYears: { value: Number, text: String },
}
```

Sample key values may are 

```
remainingYears: { value: 0, text: '0 years' },
remainingDays: { value: 1, text: '1 day' },
remainingSeconds: { value: 54, text: '54 seconds' },
```

## Sample Usage
vue-countdown can be used in 2 ways. You can either use slots to render out the countdown, or provide no slot and listen to the `tick` event to get countdown updates and do whatever you need to.

With slots

```html
<vue-countdown
  :end-date-time="endDateTime">
  <template
    v-slot:default="{ countdown }">
    {{ countdown }}
  </template>
</vue-countdown>
```

With event

```html
<vue-countdown
  :end-date-time="endDateTime"
  @tick="onTick">
...
onTick(countdown) {
  ...
}
```

### License
See [License.md](./LICENSE.md)