export default {
  name: 'PlayGround',
  data () {
    return {
      backgroundClassName: 'red-background',
      counter: 0,
      message: 'static message',
      anchorTag: '<a href="https://google.com">{{ message }}</a>',
      nameInput: 'No Named'
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  watch: {
    nameInput(newValue, oldValue) {
        /* eslint-disable */
      console.log('old value', oldValue);
      console.log('new value', newValue);
    }
  },
  methods: {
    /* eslint-disable */ //This get rid of the eslint error that will pop up
    handleClick() {
      this.counter++;
      // string interpolation
      this.message = `you are clicking this ${this.counter} times!`
      // ternary operator
      this.backgroundClassName = this.counter % 2 ? 'green-background' : 'red-background';
    // if (this.counter % 2 === 0) {
    //   this.backgroundClassName = 'green-background';
    // } else {
    //   this.backgroundClassName = 'red-background';
    // }
      this.message = this.nameInput
  },
  }
};
