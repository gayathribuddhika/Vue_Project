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
          <b-table
            id="my-table"
            :items="items1"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            hover
            bordered
            responsive="lg"
          ></b-table>
        </b-tab>
        <b-tab title="CIS/LAB/02">
          <center>
            <h3>CIS/LAB/02</h3>
          </center>
          <br />
          <b-table
            id="my-table"
            :items="items2"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            hover
            bordered
            responsive="lg"
          ></b-table>
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
      items1: [],
      items2: []
    };
  },
  created() {
    this.fetchRecord1();
    this.fetchRecord2();
  },
  computed: {
    rows() {
      return this.items.length;
    }
  },
  methods: {
    fetchRecord1() {
      axios
        .get("http://localhost:8085/lab/lab1")
        .then(response => {
          console.log(response.data);
          this.items1 = response.data;
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
          this.items2 = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>