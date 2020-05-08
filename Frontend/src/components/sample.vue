<template>
  <div>
    <b-card no-body>
      <br>
      <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
          <h2>Current Details of Items</h2>
          <form class="form-inline">
            <input
              id="itemInput"
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              
            />
            <!--<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>-->
          </form>
      </nav>
      <br />
      <b-tabs pills card width="100%" content-class="mt-3" justified>
        <b-tab title="CIS/LAB/01" active>
          <center>
            <h3>CIS/LAB/01</h3>
          </center>
          <br />
          <div class="overflow-auto">
            <b-pagination
      v-model="currentPage"
      :total-rows="rowtable1"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
          <b-table
            id="my-table"
            :items="itemsLab1"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            hover
            striped
            bordered
            responsive="lg"
          ></b-table>
          </div>
        </b-tab>
        <b-tab title="CIS/LAB/02">
          <center>
            <h3>CIS/LAB/02</h3>
          </center>
          <br />
          <div class="overflow-auto">
            <b-pagination
      v-model="currentPage"
      :total-rows="rowtable2"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
          <b-table
            id="my-table"
            :items="itemsLab2"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            table-variant="primary"
            hover
            striped
            bordered
            responsive="lg"
          >
          <template>
        <b-button size="sm" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" >
          Details
        </b-button>
      </template>

          </b-table>

          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fields:["ID", "Main_Category", "Asset_Description", "Serial_Num", "Asset_Code", "Qty", "Make", "Condition", "Comments"],
      itemsLab1: [],
      itemsLab2: [],
      
      perPage: 3,
      currentPage: 1
    };
  },
  created() {
    this.fetchRecord1();
    this.fetchRecord2();
  },
  computed: {
    rowtable1() {
      return this.itemsLab1.length;
    },
    rowtable2() {
      return this.itemsLab2.length;
    }
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
    }
  }
};
</script>

<style scoped>

</style>