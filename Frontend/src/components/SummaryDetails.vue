<template>
  <div>
    <br />
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="CIS/LAB/01">
          <b-card-text>CIS/LAB/01</b-card-text>
          <SummaryTable></SummaryTable>
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

<script>
import SummaryTable from "../components/SummaryTable.vue"
export default {
  name: "SummaryDetails",
  components:{
    SummaryTable
  }
}
</script>