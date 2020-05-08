<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      hover
      responsive="lg"
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: []
    };
  },
  created() {
    this.fetchRecord1();
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
          this.items = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
