<template>
   <base-pagination :page-count="10" v-model="defaultPagination"></base-pagination>
</template>

<script>
  export default {
    data () {
        return {
          defaultPagination: 1
        }
      }
  }
</script>