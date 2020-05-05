<template v-slot:cell(actions)="{ item }">
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Sidebar",
  data() {
    return {
      items:[],
      fields:[Main_Category, Asset_Description, Serial_Num, Asset_Code, Qty, Make, Condition, Comments, {
        key: 'actions'}]
    }
  },

  /*created() {
    this.getRecords();
  },*/

  methods: {
    getRecords(){
      axios
        .get("http://localhost:8085/lab/lab1")
        .then(response => {
          console.log(response.data);
          this.items = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
}
</script>