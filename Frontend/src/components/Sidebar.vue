<template>
  <b-container class="green-text">
    <div class="deep-purple-skin">
      <b-side-nav logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" sideNavClass="sn-bg-4" mask="strong" :OpenedFromOutside.sync="toggleA" hidden waves>
        <ul>
          <li>
            <ul class="social">
            <li><a href="#" class="icons-sm fb-ic"><b-icon fab icon="facebook" /></a></li>
            <li><a href="#" class="icons-sm pin-ic"><b-icon fab icon="pinterest" /></a></li>
            <li><a href="#" class="icons-sm gplus-ic"><b-icon fab icon="google-plus" /></a></li>
            <li><a href="#" class="icons-sm tw-ic"><b-icon fab icon="twitter" /></a></li>
            </ul>
          </li>
          <li>
            <form class="search-form" role="search">
              <div class="form-group md-form mt-0 pt-1 ripple-parent" @click="wave">
                <input type="text" class="form-control" placeholder="Search">
              </div>
            </form>
          </li>
          <li>
            <b-side-nav-nav>
              <b-side-nav-cat name="Submit blog" icon="chevron-right">
                <b-side-nav-item href="#">Submit listing</b-side-nav-item>
                <b-side-nav-item href="#">Registration form</b-side-nav-item>
              </b-side-nav-cat>
              <b-side-nav-cat name="Instruction" icon="hand-pointer" far>
                <b-side-nav-item href="#">For bloggers</b-side-nav-item>
                <b-side-nav-item href="#">For authors</b-side-nav-item>
              </b-side-nav-cat>
              <b-side-nav-cat name="About" icon="eye">
                <b-side-nav-item href="#">Introduction</b-side-nav-item>
                <b-side-nav-item href="#">Monthly meetings</b-side-nav-item>
              </b-side-nav-cat>
              <b-side-nav-cat name="Contact me" icon="envelope" far>
                <b-side-nav-item href="#">FAQ</b-side-nav-item>
                <b-side-nav-item href="#">Write a message</b-side-nav-item>
              </b-side-nav-cat>
              <b-side-nav-item header icon="envelope" href="#">Write a message</b-side-nav-item>
              <b-side-nav-item header icon="user" href="#">Profile</b-side-nav-item>
            </b-side-nav-nav>
          </li>
        </ul>
      </b-side-nav>
    </div>
    <div class="text-center icon-div">
      <mdb-icon icon="bars" size="5x" @click.native="toggleLeftSideNav"/>
    </div>
  </b-container>
</template>

<script>
  import { bSideNav, bSideNavNav, bSideNavCat, bSideNavItem, bContainer, bIcon, waves } from 'bvue';
  export default {
    name: 'SideNavPage',
    components: {
      bSideNav,
      bSideNavNav,
      bSideNavCat,
      bSideNavItem,
      bContainer,
      bIcon
    },
    data(){
      return {
        toggleA: false
      };
    },
    methods: {
      toggleLeftSideNav() {
        this.toggleA = !this.toggleA;
      }
    },
    mixins: [waves]
  }
</script>

<style scoped>
  .container {
    height: 750px;
  }
  .icon-div {
    width: 49%;
    display: inline-block;
  }
  .icon-div .fa {
    cursor: pointer;
  }
</style>