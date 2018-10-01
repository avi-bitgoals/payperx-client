const IPS = {
  data() {
    return {
      qty: 100,
      min: 10,
      max: 100000,
    };
  },
  methods: {
    incQty() {
      if (this.qty === this.max) return;
      this.qty = this.qty + 1;
    },
    decQty() {
      if (this.qty === this.min) return;
      this.qty = this.qty - 1;
    },
  },
};

export default IPS;
