<template>
  <div>
    
    <b-card bg-variant="light" body-class="text-center">  
        <b-form @reset="onReset" v-if="show">
            <b-form-group
                label-cols-lg="3"
                label="Add a New Record"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                
                class="mb-0"
            >
                <!-- <b-form-group
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
                    >
                    </b-form-select>
                </b-form-group> -->
                <b-form-group
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
                    >
                    </b-form-input>
                </b-form-group>
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
                    >
                    </b-form-select>
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
                    >
                    </b-form-select>
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
                        type="string"
                        required
                    >
                    </b-form-input>
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
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Make"
                    label-for="record_make"
                    label-align-sm="right"
                >
                    <b-form-input
                        id="record_make"
                        v-model="form.make"
                        type="text"
                        
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Conditions"
                    label-for="record_condition"
                    label-align-sm="right"
                >
                    <b-form-input
                        id="record_condition"
                        v-model="form.condition"
                        type="text"
                        
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Comments"
                    label-for="record_comment"
                    label-align-sm="right"
                >
                    <b-textarea
                        id="record_comment"
                        v-model="form.comment"
                        type="text"
                    >
                    </b-textarea>
                </b-form-group>
                
            <b-button type="submit" variant="primary" @click= "addToRecords">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form-group>
        </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
      name: 'Records',
    data() {
      return {
        form: {
          id: '',
          category: null,
          description: null,
          code: '',
          qty: '',
          make: '',
          condition: '',
          comment: ''
        },

        select_labs: [{ text: 'Select One', value: null }, 'CIS/LAB/01', 'CIS/LAB/02', 'CIS/LAB/03', 'CIS/LAB/04', 'CIS/LAB/05'],
        show: true,
        
        categories: [{ text: 'Select One', value: null }, 'Computer', 'Accessories', 'Office Equipments', 'Communication Equipments', 'Other Equipments (ACs, Projector, Projector Screen, WihiteBoard, Sound System)', 'Furniture', 'Other'],
        show: true,

        descriptions: [{ text: 'Select One', value: null }, 'Fans', 'ACs', 'Whiteboard', 'Projector', 'Projector Screen', 'Sound System', 'Printer', 'Monitor', 'System Unit', 'UPS', 'Mouse', 'Keyboard', 'Computer Table', 'Computer Chair', 'Normal Chair', 'Computrt Table', 'Telephone', 'Laminationg Machine', 'Photocopy Machine'],
        show: true
      }
    },
    methods: {
         
        addToRecords() {
            let newRecord = {
                id: this.form.id,
                Main_Category: this.form.category,
                Asset_Description: this.form.description,
                Asset_Code: this.form.code,
                Qty: this.form.qty,
                Make: this.form.make,
                condition: this.form.condition,
                Comments: this.form.comment
            }
            console.log(newRecord);
            axios.post("http://localhost:8085/lab/lab1", newRecord)
                .then((response) => {
                    console.log(response);
                    //alert("Successfully Added to Database")
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        },

     
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.category = null
        this.form.description = null
        this.form.code = ''
        this.form.qty = ''
        this.form.make = ''
        this.form.condition = ''
        this.form.comment = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>