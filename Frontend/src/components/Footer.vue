<template>
  <div>
    <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css" />
    <b-card-footer
      footer-bg-variant="success"
      footer-border-variant="success"
      footer-text-variant="light"
    >
      <b-container class="text-center text-md-senter">
        <b-row>
          <b-col md="6">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              <u>Contact Info</u>
            </h6>
            <p>
              Faculty of Applied Sciences
              <br />Sabaragamuwa University of Sri Lanka
              <br />PO Box 02
              <br />Pambahinna, Sri Lanka
              <br />70140
            </p>
            <p>
              Tel - 045 3454519
              <br />Email - imsadmin@appsc.sab.ac.lk
            </p>
          </b-col>

          <hr class="w-100 clearfix d-md-none" />
          <b-col md="6">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              <u>Quick Links</u>
            </h6>
            <div class="icons">
              <p>
                <router-link to="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" /></router-link>
              </p>
              <p>
                <router-link to="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></router-link>
              </p>
              <p>
                <router-link to="#"><font-awesome-icon icon="envelope" /></router-link>
              </p>
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row class="d-flex align-items-center">
          <b-col>
            <p class="text-center text-md-left grey-text">
              <b>&copy; 2019, All rights reserved by Faculty of Applied Sciences, Sabaragamuwa University of Sri Lanka, PO Box.02, Pambahinna, 70140, Sri Lanka</b>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-card-footer>
  </div>
</template>

<style scoped>
.icons {
  text-align: center;
}
</style>
