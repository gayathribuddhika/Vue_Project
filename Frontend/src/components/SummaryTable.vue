<template>
  <div id="tbl">
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>No</th>
          <th>Item List</th>
          <th>In Stock</th>
          <th>On Order</th>
          <th>Damaged</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stocks" :key="stock._id">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
    nam: "SummaryTable"
}
</script>