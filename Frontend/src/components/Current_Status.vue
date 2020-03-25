<template>
<div>
  
  <h6><router-link to="adminpanel">Back to Dashboard</router-link></h6>
  <center><h2>Current Details of Items</h2></center>
  <br>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Main Category</th>
      <th>Asset Description</th>
      <th>Asset Code</th>
      <th>Qty</th>
      <th>Make</th>
      <th>Condition</th>
      <th>Comments</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" v-bind:key="item._id">
      <td>{{item.Id}}</td>
      <td>{{item.Main_Category}}</td>
      <td>{{item.Asset_Description}}</td>
      <td>{{item.Asset_Code}}</td>
      <td>{{item.Qty}}</td>
      <td>{{item.Make}}</td>
      <td>{{item.Condition}}</td>
      <td>{{item.Comments}}</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>
  </tbody>
</table>
</div>   
</template>

<script>
import axios from 'axios';

export default {
  name: 'Current_Status',
  data() {
    return {
      items: []
      
      
    }
  },
  mounted () {
    axios.get('http://localhost:8085/items')
    .then((response) => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  //delete records
  }

  
}
</script>

<style>

table {
  font-family: 'Open Sans', sans-serif;
  width: 98.7%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 10px 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}

table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

h6 {
margin-top: 10px;
margin-left: 10px;
}

</style>