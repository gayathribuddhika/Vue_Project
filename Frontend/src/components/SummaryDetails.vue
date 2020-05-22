<template>
  <div>
    <br />
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="CIS/LAB/01">
          <b-card-text>CIS/LAB/01</b-card-text>
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
        </b-tab>
        <b-tab title="CIS/LAB/02">
          <b-card-text>CIS/LAB/02</b-card-text>
        </b-tab>
        <b-tab title="CIS/LAB/03">
          <b-card-text>CIS/LAB/03</b-card-text>
        </b-tab>
        <b-tab title="CIS/LAB/04">
          <b-card-text>CIS/LAB/04</b-card-text>
        </b-tab>
        <b-tab title="CIS/LAB/05">
          <b-card-text>CIS/LAB/05</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>