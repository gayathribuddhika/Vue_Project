<template>
  <div>
    <div class="btn">
      <b-button squared variant="dark" to="/adminpanel">Back</b-button>
      <b-button squared variant="dark" to="/adminpanel/currentstatus">View All</b-button>
    </div>
    <center>
    <br />
    <b-card bg-variant="light" body-class="text-center" class="mb-2" style="max-width: 65rem;">
      <b-form @submit.prevent="updateRecord" v-if="show">
        <b-form-group
          label-cols-lg="3"
          label="Update a Record"
          label-size="lg"
          label-class="font-weight-bold pt-1"
          class="mb-2"
        >
          <b-form-group
            label-cols-sm="3"
            label="Selected LAB"
            label-for="select_lab"
            label-align-sm="right"
          >
            <b-form-input
              id="select_lab"
              v-model="form.Select_LAB"
              required
              type="text"
              :class="{ 'hasError': $v.form.select_lab.$error } "
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Main Category"
            label-for="record_category"
            label-align-sm="right"
          >
            <b-form-select
              id="record_category"
              v-model="form.Main_Category"
              required
              :options="categories"
              :class="{ 'hasError': $v.form.category.$error } "
            ></b-form-select>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Asset Description"
            label-for="record_description"
            label-align-sm="right"
          >
            <b-form-select
              id="record_description"
              v-model="form.Asset_Description"
              required
              :options="descriptions"
              :class="{ 'hasError': $v.form.description.$error } "
            ></b-form-select>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Serial No:"
            label-for="serial_num"
            label-align-sm="right"
          >
            <b-form-input
              id="serial_num"
              v-model="form.Serial_Num"
              type="text"
              required
              :class="{ 'hasError': $v.form.serial_num.$error } "
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Asset Code"
            label-for="record_code"
            label-align-sm="right"
          >
            <b-form-input
              id="record_code"
              v-model="form.Asset_Code"
              type="text"
              required
              :class="{ 'hasError': $v.form.code.$error }"
            ></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="Qty" label-for="record_qty" label-align-sm="right">
            <b-form-input
              id="record_qty"
              v-model="form.Qty"
              type="number"
              required
              :class="{ 'hasError': $v.form.qty.$error }"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Make"
            label-for="record_make"
            label-align-sm="right"
          >
            <b-form-input id="record_make" v-model="form.Make" type="text"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Condition"
            label-for="record_condition"
            label-align-sm="right"
          >
            <b-form-input id="record_condition" v-model="form.Condition" type="text"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Comments"
            label-for="record_comment"
            label-align-sm="right"
          >
            <b-textarea id="record_comment" v-model="form.Comments" type="text"></b-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary" :disabled="submitted === 'pending'">Update</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>

          <p v-if="submitted === 'ok'">Record Updated Successfully!!!</p>
          <p v-if="submitted === 'pending'">Sending...</p>
          <p v-if="submitted === 'error'">Please fill all the required fields</p>
        </b-form-group>
      </b-form>
    </b-card>
    </center>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "UpdateRecords",
  data() {
    return {
      form: {
        lab1:{},
        lab2:{},
        lab3:{},
        lab4:{},
        lab5:{}
      },

      categories: [
        { text: "Select One", value: null },
        "Accessories",
        "Communication Equipments",
        "Computer",
        "Furniture",
        "Office Equipments",
        "Other Equipments (ACs, Projector, Projector Screen, WihiteBoard, Sound System, Fans)"
      ],
      show: true,

      descriptions: [
        { text: "Select One", value: null },
        "Fans",
        "ACs",
        "Whiteboard",
        "Projector",
        "Projector Screen",
        "Sound System",
        "Printer",
        "Monitor",
        "System Unit",
        "UPS",
        "Mouse",
        "Keyboard",
        "Computer Table",
        "Computer Chair",
        "Normal Chair",
        "Computrt Table",
        "Telephone",
        "Laminationg Machine",
        "Photocopy Machine"
      ],
      show: true,

      submitted: null
    };
  },

  validations: {
    form: {
      select_lab: { required },
      //id: { required },
      category: { required },
      description: { required },
      serial_num: { required },
      code: { required },
      qty: { required }
    }
  },

  created() {
    //this.fetchRecord1();
    this.fetchRecord2();
    /*this.fetchRecord3();
    this.fetchRecord4();
    this.fetchRecord5();*/
  },

  methods: {
    fetchRecord1(){
      let uri = `http://localhost:8085/lab/lab1/edit/${this.$route.params.id}`;
      axios.get(uri).then(response => {
          this.form = response.data;
          console.log(this.form);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecord2(){
      let uri = `http://localhost:8085/lab/lab2/edit/${this.$route.params.id}`;
      axios.get(uri).then(response => {
          this.form = response.data;
          console.log(this.form);
        })
        .catch(error => {
          console.log(error);
        });
    },
    /*fetchRecord3(){
      let uri = `http://localhost:8085/lab/lab3/edit/${this.$route.params.id}`;
      axios.get(uri).then(response => {
          this.form = response.data;
          console.log(this.form);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecord4(){
      let uri = `http://localhost:8085/lab/lab4/edit/${this.$route.params.id}`;
      axios.get(uri).then(response => {
          this.form = response.data;
          console.log(this.form);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecord5(){
      let uri = `http://localhost:8085/lab/lab5/edit/${this.$route.params.id}`;
      axios.get(uri).then(response => {
          this.form = response.data;
          console.log(this.form);
        })
        .catch(error => {
          console.log(error);
        });
    },*/
    updateRecord() {
      if (this.form.Select_LAB == "CIS/LAB/01") {
        let uri = `http://localhost:8085/lab/lab1/update/${this.$route.params.id}`;
        axios
          .post(uri, this.form)
          .then(response => {
            console.log(response);
            this.submitted = "pending";
            setTimeout(() => {
              this.submitted = "ok";
            }, 500);
          })
          .catch(error => {
            console.log(error);
          });
      } else if (this.form.Select_LAB == "CIS/LAB/02") {
        let uri = `http://localhost:8085/lab/lab2/update/${this.$route.params.id}`;
        axios
          .post(uri, this.form)
          .then(response => {
            console.log(response);
            this.submitted = "pending";
            setTimeout(() => {
              this.submitted = "ok";
            }, 500);
          })
          .catch(error => {
            console.log(error);
          });
      } else if (this.form.Select_LAB == "CIS/LAB/03") {
        let uri = `http://localhost:8085/lab/lab3/update/${this.$route.params.id}`;
        axios
          .post(uri, this.form)
          .then(response => {
            console.log(response);
            this.submitted = "pending";
            setTimeout(() => {
              this.submitted = "ok";
            }, 500);
          })
          .catch(error => {
            console.log(error);
          });
      } else if (this.form.Select_LAB == "CIS/LAB/04") {
        let uri = `http://localhost:8085/lab/lab4/update/${this.$route.params.id}`;
        axios
          .post(uri, this.form)
          .then(response => {
            console.log(response);
            this.submitted = "pending";
            setTimeout(() => {
              this.submitted = "ok";
            }, 500);
          })
          .catch(error => {
            console.log(error);
          });
      } else if (this.form.Select_LAB == "CIS/LAB/05") {
        let uri = `http://localhost:8085/lab/lab5/update/${this.$route.params.id}`;
        axios
          .post(uri, this.form)
          .then(response => {
            console.log(response);
            this.submitted = "pending";
            setTimeout(() => {
              this.submitted = "ok";
            }, 500);
          })
          .catch(error => {
            console.log(error);
          });
      }
},
    

    /*onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      //this.from.select_lab = null
      //this.form.id = ''
      this.form.category = null;
      this.form.description = null;
      this.form.serial_num = "";
      this.form.code = "";
      this.form.qty = "";
      this.form.make = "";
      this.form.condition = "";
      this.form.comment = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }*/
  }
};
</script>

