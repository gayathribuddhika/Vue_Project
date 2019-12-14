<template>
<div class = "homepage">
  <div class="container pt-5 pb-5" v-if="true">
    <form id="homepage">
      <section>
        <lable>username</lable>
          <input type="text" placeholder="Enter your username here">
        </section>
        <section>
          <lable>Password</lable>
          <input type="password" placeholder="Enter your password here">
        </section>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home'
  
}
</script>


<style scoped>

</style>
