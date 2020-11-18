<template>
  <div>
    <div class="btn">
      <b-button squared variant="dark" to="/adminpanel">Back</b-button>
      <b-button squared variant="dark" to="/adminpanel/addrecords">Add Records</b-button>
      <b-button squared variant="dark" to="/adminpanel/summarydetails" align="right">Details Summary Report</b-button>
    </div>
    <b-card no-body>
      <br />
      <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <h2>Current Details of Items</h2>
        <form class="form-inline">
          <input id="itemInput" class="form-control mr-sm-2" type="text" placeholder="Search" />
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
              sticky-header
              head-variant="dark"
            >
              <b-button size="sm" class="mr-1">Delete</b-button>
            </b-table>
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
              hover
              striped
              bordered
              responsive="lg"
              sticky-header
              head-variant="dark"
            >
              
            </b-table>
          </div>
        </b-tab>
        <b-tab title="CIS/LAB/03">
          <center>
            <h3>CIS/LAB/03</h3>
          </center>
          <br />
          <div class="overflow-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="rowtable3"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
            <p class="mt-3">Current Page: {{ currentPage }}</p>
            <b-table
              id="my-table"
              :items="itemsLab3"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              hover
              striped
              bordered
              responsive="lg"
              sticky-header
              head-variant="dark"
            >
              <b-button size="sm" class="mr-1">Delete</b-button>
            </b-table>
          </div>
        </b-tab>
        <b-tab title="CIS/LAB/04">
          <center>
            <h3>CIS/LAB/04</h3>
          </center>
          <br />
          <div class="overflow-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="rowtable4"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
            <p class="mt-3">Current Page: {{ currentPage }}</p>
            <b-table
              id="my-table"
              :items="itemsLab4"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              hover
              striped
              bordered
              responsive="lg"
              sticky-header
              head-variant="dark"
            >
              <b-button size="sm" class="mr-1">Delete</b-button>
            </b-table>
          </div>
        </b-tab>
        <b-tab title="CIS/LAB/05">
          <center>
            <h3>CIS/LAB/05</h3>
          </center>
          <br />
          <div class="overflow-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="rowtable5"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
            <p class="mt-3">Current Page: {{ currentPage }}</p>
            <b-table
              id="my-table"
              :items="itemsLab5"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              hover
              striped
              bordered
              responsive="lg"
              sticky-header
              head-variant="dark"
            >
              <b-button size="sm" class="mr-1">Delete</b-button>
            </b-table>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';
export default {
  data() {
    return {
      fields: [
        "ID",
        "Main_Category",
        "Asset_Description",
        "Serial_Num",
        "Asset_Code",
        "Qty",
        "Make",
        "Condition",
        "Comments",
        "Action"
      ],
      itemsLab1: [],
      itemsLab2: [],

      perPage: 20,
      currentPage: 1
    };
  },
  created() {
    this.fetchRecord1();
    this.fetchRecord2();
    this.fetchRecord3();
    this.fetchRecord4();
    this.fetchRecord5();
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
    },
    fetchRecord3() {
      axios
        .get("http://localhost:8085/lab/lab3")
        .then(response => {
          console.log(response.data);
          this.itemsLab3 = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecord4() {
      axios
        .get("http://localhost:8085/lab/lab4")
        .then(response => {
          console.log(response.data);
          this.itemsLab4 = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecord5() {
      axios
        .get("http://localhost:8085/lab/lab5")
        .then(response => {
          console.log(response.data);
          this.itemsLab5 = response.data;
          
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
    deleteRecord3(id) {
      const response = confirm("Do you really want to delete this?");
      if (response) {
        axios
          .delete(`http://localhost:8085/lab/lab3/delete/${id}`)
          .then(response => {
            this.fetchRecord3();
          })
          .catch(error => console.log(error));
      }
      return;
    },
    deleteRecord4(id) {
      const response = confirm("Do you really want to delete this?");
      if (response) {
        axios
          .delete(`http://localhost:8085/lab/lab4/delete/${id}`)
          .then(response => {
            this.fetchRecord4();
          })
          .catch(error => console.log(error));
      }
      return;
    },
    deleteRecord5(id) {
      const response = confirm("Do you really want to delete this?");
      if (response) {
        axios
          .delete(`http://localhost:8085/lab/lab5/delete/${id}`)
          .then(response => {
            this.fetchRecord5();
          })
          .catch(error => console.log(error));
      }
      return;
    }
  }
};

$(document).ready(function(){
  $("#itemInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#itemTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>

<style scoped>
</style>