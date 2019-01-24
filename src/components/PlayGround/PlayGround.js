export default {
  name: 'PlayGround',
  data() {
    return {
      counter: 0,
      dynamicClassName: 'someDifferentName'
    }
  },
  methods: {
    handleClick() {
      /* eslint-disable */
      console.log('clicked')
    },
    increment() {
      this.counter++
    }
  }
}