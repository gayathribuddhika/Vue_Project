<template>
  <div>
    <div class="table-responsive-lg">
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Main Category</th>
            <th>Asset Description</th>
            <th>Serial Num</th>
            <th>Asset Code</th>
            <th>Qty</th>
            <th>Make</th>
            <th>Condition</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="itemTable">
          <tr v-for="item in itemsLab1" v-bind:key="item._id">
            <td></td>
            <td>{{item.Main_Category}}</td>
            <td>{{item.Asset_Description}}</td>
            <td>{{item.Serial_Num}}</td>
            <td>{{item.Asset_Code}}</td>
            <td>{{item.Qty}}</td>
            <td>{{item.Make}}</td>
            <td>{{item.Condition}}</td>
            <td>{{item.Comments}}</td>
            <td>
              <b-button :to="{name: 'UpdateRecord', params: {id:item._id }}" variant="success">Edit</b-button>
              <b-button type="submit" variant="danger" v-on:click="deleteRecord1(item._id)">Delete</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CurrentDetailsTable",
  data() {
    return {
      itemsLab1: {}
    };
  },
  created() {
      this.fetchRecord1();
      this.fetchRecord2();
  },
  methods: {
      fetchRecord1() {
      axios
        .get("http://localhost:8085/lab/lab1")
        .then(response => {
          console.log(response.data);
          this.itemsLab1 = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecord2() {
      axios
        .get("http://localhost:8085/lab/lab2")
        .then(response => {
          console.log(response.data);
          this.itemsLab2 = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    
    deleteRecord1(id) {
      const response = confirm("Do you really want to delete this?");
      if (response) {
        axios
          .delete(`http://localhost:8085/lab/lab1/delete/${id}`)
          .then(response => {
            this.fetchRecord1();
          })
          .catch(error => console.log(error));
      }
      return;
    },
    deleteRecord2(id) {
      const response = confirm("Do you really want to delete this?");
      if (response) {
        axios
          .delete(`http://localhost:8085/lab/lab2/delete/${id}`)
          .then(response => {
            this.fetchRecord2();
          })
          .catch(error => console.log(error));
      }
      return;
    },
  }
};
</script>