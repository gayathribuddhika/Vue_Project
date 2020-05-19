<template>
<div>
  <div class="btn">
      <b-button squared variant="dark" to="/adminpanel">Back</b-button>
      <b-button squared variant="dark" to="/adminpanel/stockdetails/add-details">Add Details</b-button>
    </div>
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive-sm">
        <br />
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>No</th>
              <th>Item List</th>
              <th>In Stock</th>
              <th>On Order</th>
              <th>Damaged</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stock in stocks" :key="stock._id">
              <td></td>
              <td>{{ stock.List_of_Items }}</td>
              <td>{{ stock.In_Stock }}</td>
              <td>{{ stock.On_Order }}</td>
              <td>{{ stock.Damaged }}</td>
              <td>
                <router-link
                  :to="{name: 'edit', params: { id: stock._id }}"
                  class="btn btn-success"
                >Edit</router-link>
                <button @click.prevent="deleteStock(stock._id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      stocks: []
    };
  },
  created() {
    let uri = "http://localhost:8085/stock";
    axios
      .get(uri)
      .then(res => {
        this.stocks = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteStock(id) {
      let uri = `http://localhost:8085/delete-stock/${id}`;
      let indexOfArrayItem = this.stocks.findIndex(i => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(uri)
          .then(() => {
            this.stocks.splice(indexOfArrayItem, 1);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
