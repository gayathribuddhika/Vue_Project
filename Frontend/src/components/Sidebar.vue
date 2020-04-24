<template>
  <div>
    <b-card>
      <b-nav vertical>
        <b-nav-item to="/login/resetpassword" exact exact-active-class="active">Active</b-nav-item>
        <b-nav-item to="/some/route/foo" exact exact-active-class="active">Foo</b-nav-item>
        <b-nav-item to="/some/route/bar" exact exact-active-class="active">Bar</b-nav-item>
      </b-nav>
      <b-card-body>
      <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
      <router-view></router-view>
      <!-- Or if using Nuxt.js
      <nuxt-child></nuxt-child>
      -->
    </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>



</style>