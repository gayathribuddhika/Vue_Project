<template>
  <div>
    <div class="btn">
      <b-button squared variant="dark" to="/adminpanel">Back</b-button>
      <b-button squared variant="dark" to="/adminpanel/addrecords">Add Records</b-button>
      <b-button squared variant="dark" to="/adminpanel/summarydetails" align="right">Details Summary Report</b-button>
    </div>
    <div class="overflow-auto">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
    </div>
    <b-card no-body>
      <b-tabs pills card width="100%" content-class="mt-3" justified>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
          <h2>Current Details of Items</h2>
          <form class="form-inline">
            <input
              id="itemInput"
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            
            />
            
          </form>
        </nav>
        <!-- <div class="overflow-auto">
          <b-pagination v-model="currentPage"
              :total-rows="rowtable1"
              :per-page="perPage"
              aria-controls="my-table"></b-pagination> -->
        
        <b-tab title="CIS/LAB/01">
          <b-card-text>
            <center>
              <h3>CIS/LAB/01</h3>
            </center>
            <br />
            <div class="table-responsive-lg">
              <table :per-page="perPage">
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Main Category</th>
                    <th>Asset Description</th>
                    <th>Qty</th>
                    <th>Asset Code</th>
                    <th>Serial Num</th>
                    <th>Condition</th>
                    <th>Make</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="itemTable">
                  <tr v-for="(item, item_id) in itemsLab1" v-bind:key="item_id">
                    <td>{{item_id +1}}</td>
                    <td>{{item.Main_Category}}</td>
                    <td>{{item.Asset_Description}}</td>
                    <td>{{item.Qty}}</td>
                    <td>{{item.Asset_Code}}</td>
                    <td>{{item.Serial_Num}}</td>
                    <td>{{item.Condition}}</td>
                    <td>{{item.Make}}</td>
                    <td>{{item.Comments}}</td>
                    <td>
                      <b-button
                        :to="{name: 'UpdateRecord', params: {id:item._id }}"
                        variant="success"
                      >Edit</b-button>
                      <b-button
                        type="submit"
                        variant="danger"
                        v-on:click="deleteRecord1(item._id)"
                      >Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-tab>
        <!-- </div> -->
        <b-tab title="CIS/LAB/02">
          <b-card-text>
            <center>
              <h3>CIS/LAB/02</h3>
            </center>
            <br />
            <div class="table-responsive-lg">
              <table>
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Main Category</th>
                    <th>Asset Description</th>
                    <th>Qty</th>
                    <th>Asset Code</th>
                    <th>Serial Num</th>
                    <th>Condition</th>
                    <th>Make</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="itemTable">
                  <tr v-for="(item, item_id) in itemsLab2" v-bind:key="item_id">
                    <td>{{item_id +1}}</td>
                    <td>{{item.Main_Category}}</td>
                    <td>{{item.Asset_Description}}</td>
                    <td>{{item.Qty}}</td>
                    <td>{{item.Asset_Code}}</td>
                    <td>{{item.Serial_Num}}</td>
                    <td>{{item.Condition}}</td>
                    <td>{{item.Make}}</td>
                    <td>{{item.Comments}}</td>
                    <td>
                      <b-button
                        :to="{name: 'UpdateRecord', params: {id:item._id }}"
                        variant="success"
                      >Edit</b-button>
                      <b-button
                        type="submit"
                        variant="danger"
                        v-on:click="deleteRecord2(item._id)"
                      >Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="CIS/LAB/03">
          <b-card-text>
            <center>
              <h3>CIS/LAB/03</h3>
            </center>
            <br />
            <div class="table-responsive-lg">
              <table>
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Main Category</th>
                    <th>Asset Description</th>
                    <th>Qty</th>
                    <th>Asset Code</th>
                    <th>Serial Num</th>
                    <th>Condition</th>
                    <th>Make</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="itemTable">
                  <tr v-for="(item, item_id) in itemsLab3" v-bind:key="item_id">
                    <td>{{item_id +1}}</td>
                    <td>{{item.Main_Category}}</td>
                    <td>{{item.Asset_Description}}</td>
                    <td>{{item.Qty}}</td>
                    <td>{{item.Asset_Code}}</td>
                    <td>{{item.Serial_Num}}</td>
                    <td>{{item.Condition}}</td>
                    <td>{{item.Make}}</td>
                    <td>{{item.Comments}}</td>
                    <td>
                      <b-button
                        :to="{name: 'UpdateRecord', params: {id:item._id }}"
                        variant="success"
                      >Edit</b-button>
                      <b-button
                        type="submit"
                        variant="danger"
                        v-on:click="deleteRecord3(item._id)"
                      >Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="CIS/LAB/04">
          <b-card-text>
            <center>
              <h3>CIS/LAB/04</h3>
            </center>
            <br />
            <div class="table-responsive-lg">
              <table>
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Main Category</th>
                    <th>Asset Description</th>
                    <th>Qty</th>
                    <th>Asset Code</th>
                    <th>Serial Num</th>
                    <th>Condition</th>
                    <th>Make</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="itemTable">
                  <tr v-for="(item, item_id) in itemsLab4" v-bind:key="item_id">
                    <td>{{item_id +1}}</td>
                    <td>{{item.Main_Category}}</td>
                    <td>{{item.Asset_Description}}</td>
                    <td>{{item.Qty}}</td>
                    <td>{{item.Asset_Code}}</td>
                    <td>{{item.Serial_Num}}</td>
                    <td>{{item.Condition}}</td>
                    <td>{{item.Make}}</td>
                    <td>{{item.Comments}}</td>
                    <td>
                      <b-button
                        :to="{name: 'UpdateRecord', params: {id:item._id }}"
                        variant="success"
                      >Edit</b-button>
                      <b-button
                        type="submit"
                        variant="danger"
                        v-on:click="deleteRecord4(item._id)"
                      >Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="CIS/LAB/05">
          <b-card-text>
            <center>
              <h3>CIS/LAB/05</h3>
            </center>
            <br />
            <div class="table-responsive-lg">
              <table>
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Main Category</th>
                    <th>Asset Description</th>
                    <th>Qty</th>
                    <th>Asset Code</th>
                    <th>Serial Num</th>
                    <th>Condition</th>
                    <th>Make</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="itemTable">
                  <tr v-for="(item, item_id) in itemsLab5" v-bind:key="item_id">
                    <td>{{item_id +1}}</td>
                    <td>{{item.Main_Category}}</td>
                    <td>{{item.Asset_Description}}</td>
                    <td>{{item.Qty}}</td>
                    <td>{{item.Asset_Code}}</td>
                    <td>{{item.Serial_Num}}</td>
                    <td>{{item.Condition}}</td>
                    <td>{{item.Make}}</td>
                    <td>{{item.Comments}}</td>
                    <td>
                      <b-button
                        :to="{name: 'UpdateRecord', params: {id:item._id }}"
                        variant="success"
                      >Edit</b-button>
                      <b-button
                        type="submit"
                        variant="danger"
                        v-on:click="deleteRecord5(item._id)"
                      >Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';

export default {
  name: "Current_Status",

  data() {
    return {
      itemsLab1: {},
      itemsLab2: {},
      itemsLab3: {},
      itemsLab4: {},
      itemsLab5: {},

      serial_num: "",
      // perPage : 5,
      // currentPage :1
    };
  },
  created() {
    this.fetchRecord1();
    this.fetchRecord2();
    this.fetchRecord3();
    this.fetchRecord4();
    this.fetchRecord5();
  },
  // computed: {
  //   rowtable1() {
  //     return this.itemsLab1.length;
  //   }
  // },
  methods: {
    linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
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

<style socped>
table {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 5px 5px 5px 5px;
  
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}

table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}

h5 {
  margin-top: 10px;
  margin-left: 15px;
}
</style>
