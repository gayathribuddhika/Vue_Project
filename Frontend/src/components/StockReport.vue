<template>
  <div class="row">
    <div class="col-sm-12">
        <div class="table-responsive-lg">
            <br>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th>Item List</th>
            <th>In Stock</th>
            <th>On Order</th>
            <th>Damaged</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stocks" :key="stock._id">
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
    let apiURL = "http://localhost:8085/store";
    axios
      .get(apiURL)
      .then(res => {
        this.stocks = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteStock(id) {
      let apiURL = `http://localhost:8085/delete-store/${id}`;
      let indexOfArrayItem = this.stocks.findIndex(i => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
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
