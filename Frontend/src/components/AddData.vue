<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Student</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Select LAB</label>
          <input type="text" class="form-control" v-model="form.select_lab" required />
        </div>

        <div class="form-group">
          <label>Main Category</label>
          <input type="text" class="form-control" v-model="form.category" required />
        </div>

        <div class="form-group">
          <label>Asset Description</label>
          <input type="text" class="form-control" v-model="form.description" required />
        </div>

        <div class="form-group">
          <label>Serial No:</label>
          <input type="text" class="form-control" v-model="form.serial_num" required />
        </div>

        <div class="form-group">
          <label>Asset Code</label>
          <input type="text" class="form-control" v-model="form.code" required />
        </div>

        <div class="form-group">
          <label>Qty</label>
          <input type="number" class="form-control" v-model="form.qty" required />
        </div>

        <div class="form-group">
          <label>Make</label>
          <input type="text" class="form-control" v-model="form.make" required />
        </div>

        <div class="form-group">
          <label>Condition</label>
          <input type="text" class="form-control" v-model="form.condition" required />
        </div>

        <div class="form-group">
          <label>Comments</label>
          <input type="text" class="form-control" v-model="form.comment" required />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        select_lab: "",
        //id: 1,
        category: "",
        description: "",
        serial_num: "",
        code: "",
        qty: "",
        make: "",
        condition: "",
        comment: ""
      }
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8085/lab/lab1";

      axios
        .post(apiURL, this.form)
        .then(() => {
          this.$router.push("/admindashboard/currentstatus");
          this.form = {
            Select_LAB: this.form.select_lab,
        Main_Category: this.form.category,
        Asset_Description: this.form.description,
        Serial_Num: this.form.serial_num,
        Asset_Code: this.form.code,
        Qty: this.form.qty,
        Make: this.form.make,
        Condition: this.form.condition,
        Comments: this.form.comment
          };
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


