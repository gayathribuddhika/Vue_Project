<template>
  <div>
    <div class="btn">
      <b-button squared variant="dark" to="/adminpanel/stockdetails">Back</b-button>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <br />
        <div class="card">
          <div class="card-body">
            <h3 class="text-center">Update Stock Details</h3>

            <form @submit.prevent="updateStock">
              <div class="form-group">
                <label>Item</label>
                <input type="text" class="form-control" v-model="stock.List_of_Items" required />
              </div>

              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>In Stock</label>
                  <input type="number" class="form-control" v-model="stock.In_Stock" required />
                </div>
                <div class="form-group col-md-4">
                  <label>On Order</label>
                  <input type="number" class="form-control" v-model="stock.On_Order" required />
                </div>
                <div class="form-group col-md-4">
                  <label>Damaged</label>
                  <input type="number" class="form-control" v-model="stock.Damaged" required />
                </div>
              </div>

              <div class="form-group">
                <button class="btn btn-primary btn-block" :disabled="submitted === 'pending'">Update</button>
              </div>
              <p v-if="submitted === 'ok'">Record Updated Successfully!!!</p>
              <p v-if="submitted === 'pending'">Sending...</p>
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      stock: {},
      submitted:false
    };
  },
  created() {
    let uri = `http://localhost:8085/edit-stock/${this.$route.params.id}`;

    axios.get(uri).then(res => {
      this.stock = res.data;
    });
  },
  methods: {
    updateStock() {
      let uri = `http://localhost:8085/update-stock/${this.$route.params.id}`;

      axios
        .post(uri, this.stock)
        .then(res => {
          console.log(res);
          //this.$router.push({ name: "StockDetails" });
          this.submitted = "pending";
          setTimeout(() => {
            this.submitted = "ok";
          }, 500);
        })
        
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>