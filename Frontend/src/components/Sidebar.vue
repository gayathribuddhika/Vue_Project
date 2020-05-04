<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Sidebar",
  data() {
    return {
      items:[]
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