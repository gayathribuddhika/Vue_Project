<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table-simple :per-page="perPage" :current-page="currentPage" large id= "my-table" responsive bordered>
      <b-thead>
        <b-tr>
          <b-th>Item ID</b-th>
          <b-th>Main Category</b-th>
          <b-th>Asset Description</b-th>
          <b-th>Serial Num</b-th>
          <b-th>Asset Code</b-th>
          <b-th>Qty</b-th>
          <b-th>Make</b-th>
          <b-th>Condition</b-th>
          <b-th>Comments</b-th>
          
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="item in itemsLab1" v-bind:key="item._id">
          <b-td>{{item.Item_id}}</b-td>
          <b-td>{{item.Main_Category}}</b-td>
          <b-td>{{item.Asset_Description}}</b-td>
          <b-td>{{item.Serial_Num}}</b-td>
          <b-td>{{item.Asset_Code}}</b-td>
          <b-td>{{item.Qty}}</b-td>
          <b-td>{{item.Make}}</b-td>
          <b-td>{{item.Condition}}</b-td>
          <b-td>{{item.Comments}}</b-td>
          
        </b-tr>
      </b-tbody>
      <b-tfoot>
      <b-tr>
        <b-td class="text-right">
          Total Rows: <b>5</b>
        </b-td>
      </b-tr>
    </b-tfoot>
    </b-table-simple>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      itemsLab1:{}
      
    };
  },
  created() {
    this.fetchRecord1();
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
    }
  }
};
</script>