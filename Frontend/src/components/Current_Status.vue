<template>
    <b-container width="100%">
        <b-row>
            <b-col>ID</b-col>
            <b-col>Main Category</b-col>
            <b-col>Asset Description</b-col>
            <b-col>Asset Code</b-col>
            <b-col>Qty</b-col>
            <b-col>Make</b-col>
            <b-col>Condition</b-col>
            <b-col>Comments</b-col>
        </b-row>
        <br>
        <b-row v-for = "item in items" v-bind:key="item._id">
            <b-col>{{item.Id}}</b-col>
            <b-col>{{item.Main_Category}}</b-col>
            <b-col>{{item.Asset_Description}}</b-col>
            <b-col>{{item.Asset_Code}}</b-col>
            <b-col>{{item.Qty}}</b-col>
            <b-col>{{item.Make}}</b-col>
            <b-col>{{item.Condition}}</b-col>
            <b-col>{{item.Comments}}</b-col>
        </b-row>
    </b-container>
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

  }
}
</script>