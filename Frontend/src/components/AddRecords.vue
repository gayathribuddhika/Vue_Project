<template>
  <div>
    <div class="btn">
      <b-button squared variant="dark" to="/adminpanel">Back</b-button>
      <b-button squared variant="dark" to="/adminpanel/currentstatus">Current Details</b-button>
    </div>
    
    <center>
      <br />
      <b-card bg-variant="light" body-class="text-center" class="mb-2" style="max-width: 65rem;">
        <b-form @submit.prevent="addToRecords" @reset="onReset" v-if="show">
          <b-form-group
            label-cols-lg="3"
            label="Add a New Record"
            label-size="lg"
            label-class="font-weight-bold pt-1"
            class="mb-2"
          >
            <b-form-group
              label-cols-sm="3"
              label="Select LAB"
              label-for="select_lab"
              label-align-sm="right"
            >
              <b-form-select
                id="select_lab"
                v-model="form.select_lab"
                required
                :options="select_labs"
              ></b-form-select>
            </b-form-group>
            <!--<b-form-group
                    label-cols-sm="3"
                    label="ID"
                    label-for="record_id"
                    label-align-sm="right"
                >
                    <b-form-input
                        id="record_id"
                        v-model="form.id"
                        type="number"
                        required
                        :class="{ 'hasError': $v.form.id.$error } "
                    >
                    </b-form-input>
            </b-form-group>-->

            <b-form-group
              label-cols-sm="3"
              label="Main Category"
              label-for="record_category"
              label-align-sm="right"
            >
              <b-form-select
                id="record_category"
                v-model="form.category"
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
                v-model="form.description"
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
                v-model="form.serial_num"
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
                v-model="form.code"
                type="text"
                required
                :class="{ 'hasError': $v.form.code.$error }"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Qty"
              label-for="record_qty"
              label-align-sm="right"
            >
              <b-form-input
                id="record_qty"
                v-model="form.qty"
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
              <b-form-input id="record_make" v-model="form.make" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Condition"
              label-for="record_condition"
              label-align-sm="right"
            >
              <b-form-input id="record_condition" v-model="form.condition" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Comments"
              label-for="record_comment"
              label-align-sm="right"
            >
              <b-textarea id="record_comment" v-model="form.comment" type="text"></b-textarea>
            </b-form-group>
          
            <b-button type="submit" variant="primary" :disabled="submitted === 'pending'">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            
            <p v-if="submitted === 'ok'">Record Submitted Successfully!!!</p>
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
  name: "AddRecords",
  data() {
    return {
      form: {
        select_lab: null ,
        category: null,
        description: null,
        serial_num: "",
        code: "",
        qty: "",
        make: "",
        condition: "",
        comment: "",

        counter: 0
      },

      select_labs: [
        { text: "Select One", value: null },
        "CIS/LAB/01",
        "CIS/LAB/02",
        "CIS/LAB/03",
        "CIS/LAB/04",
        "CIS/LAB/05"
      ],
      show: true,

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

  methods: {
    
    addToRecords(){
      if( this.form.select_lab == "CIS/LAB/01"){
        let newRecord = {
        
        Select_LAB: this.form.select_lab,
        //Item_id: this.form.counter,
        Main_Category: this.form.category,
        Asset_Description: this.form.description,
        Serial_Num: this.form.serial_num,
        Asset_Code: this.form.code,
        Qty: this.form.qty,
        Make: this.form.make,
        Condition: this.form.condition,
        Comments: this.form.comment
      };
      console.log("submit");

      this.$v.$touch();
      if (this.$v.form.error) {
        this.submitted = "error";
      } else console.log(newRecord);
      axios
        .post("http://localhost:8085/lab/lab1", newRecord)
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
      } else if ( this.form.select_lab == "CIS/LAB/02") {
        let newRecord = {
        //id: this.form.id,
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
      console.log("submit");

      this.$v.$touch();
      if (this.$v.form.error) {
        this.submitted = "error";
      } else console.log(newRecord);
      axios
        .post("http://localhost:8085/lab/lab2", newRecord)
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
      } else if ( this.form.select_lab == "CIS/LAB/03") {
        let newRecord = {
        //id: this.form.id,
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
      console.log("submit");

      this.$v.$touch();
      if (this.$v.form.error) {
        this.submitted = "error";
      } else console.log(newRecord);
      axios
        .post("http://localhost:8085/lab/lab3", newRecord)
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
      } else if ( this.form.select_lab == "CIS/LAB/04") {
        let newRecord = {
        //id: this.form.id,
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
      console.log("submit");

      this.$v.$touch();
      if (this.$v.form.error) {
        this.submitted = "error";
      } else console.log(newRecord);
      axios
        .post("http://localhost:8085/lab/lab4", newRecord)
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
      } else if(this.form.select_lab == "CIS/LAB/05") {
        let newRecord = {
        //id: this.form.id,
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
      console.log("submit");

      this.$v.$touch();
      if (this.$v.form.error) {
        this.submitted = "error";
      } else console.log(newRecord);
      axios
        .post("http://localhost:8085/lab/lab5", newRecord)
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


    onReset(evt) {
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
    }
    
  }
};
</script>


