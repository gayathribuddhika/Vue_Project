<template>
<div>
  
  <b-card no-body >
    <b-tabs pills card width="100%" content-class="mt-3" justified >
      <b-tab title="CIS/LAB/01" active>
        <b-card-text>
          <h5><router-link to="/adminpanel">Back</router-link></h5>
          <center><h2>Current Details of Items - CIS/LAB/01</h2></center>
          <br>
          <table>
            <thead>
              <tr>
                
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
            <tbody>
              <tr v-for="item in items" v-bind:key="item._id">
                
                <td>{{item.Main_Category}}</td>
                <td>{{item.Asset_Description}}</td>
                <td>{{item.Serial_Num}}</td>
                <td>{{item.Asset_Code}}</td>
                <td>{{item.Qty}}</td>
                <td>{{item.Make}}</td>
                <td>{{item.Condition}}</td>
                <td>{{item.Comments}}</td>
                <td>
                  <button>Edit</button>
                  <button type ="submit" @click.prevent="deletePost(item._id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          
        </b-card-text>
      </b-tab>
      <b-tab title="CIS/LAB/02">
        <b-card-text>
          <h5><router-link to="adminpanel">Back</router-link></h5>
          <center><h2>Current Details of Items - CIS/LAB/02</h2></center>
          <br>
          <table>
            <thead>
              <tr>
                <th>ID</th>
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
            <tbody>
              <tr v-for="item in items" v-bind:key="item._id">
                <td>{{item.Id}}</td>
                <td>{{item.Main_Category}}</td>
                <td>{{item.Asset_Description}}</td>
                <td>{{item.Serial_Num}}</td>
                <td>{{item.Asset_Code}}</td>
                <td>{{item.Qty}}</td>
                <td>{{item.Make}}</td>
                <td>{{item.Condition}}</td>
                <td>{{item.Comments}}</td>
                <td><button>Edit</button><button>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </b-card-text>
      </b-tab>
      <b-tab title="CIS/LAB/03"><b-card-text></b-card-text></b-tab>
      <b-tab title="CIS/LAB/04"><b-card-text></b-card-text></b-tab>
      <b-tab title="CIS/LAB/05"><b-card-text></b-card-text></b-tab>
      </b-tabs>
  </b-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Current_Status',
  
  data() {
    return {
      //perPage: 3,
      //currentPage: 1,
      items: []
    }
  },
  methods: {
      
    
      deletePost(id)
      {
        this.$confirm("Are sure?").then((response) => {
          let uri = `http://localhost:8085/lab/lab1/${id}`;
          axios.delete(uri).then(response => {
          this.items.splice(this.items.indexOf(id), 1);
        });
        });
        
      }
    
  },
      
  mounted () {
    axios.get('http://localhost:8085/lab/lab1')
    .then((response) => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  
  },
  

  
}
</script>

<style>

table {
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 5px 5px 5px 5px;
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

