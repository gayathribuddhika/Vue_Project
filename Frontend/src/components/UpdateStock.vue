<template>
  <div class="row justify-content-center">
    <div class="col-sm-6">
      <br />
      <div class="card">
        <div class="card-body">
          <h3 class="text-center">Update Stock Details</h3>

          <form @submit.prevent="handleUpdateForm">

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
              <button class="btn btn-primary btn-block">Update</button>
            </div>

          </form>
          
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      stock: {}
    };
  },
  created() {
    let apiURL = `http://localhost:8085/edit-store/${this.$route.params.id}`;

    axios.get(apiURL).then(res => {
      this.stock = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:8085/update-store/${this.$route.params.id}`;

      axios
        .post(apiURL, this.stock)
        .then(res => {
          console.log(res);
          this.$router.push({ name: "StockReport" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>