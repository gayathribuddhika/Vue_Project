<template>
  <div>
    <b-card bg-variant="light">  
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                label-cols-lg="3"
                label="Shipping Address"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
            >
                <b-form-group
                    label-cols-sm="3"
                    label="ID"
                    label-for="record_id"
                    label-align-sm="right"
                >
                    <b-form-input
                        id="record_id"
                        v-model="form._id"
                        type="text"
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

      

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
        </b-form-group>
    </b-form>
    </b-card>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
      name: 'Records',
    data() {
      return {
        form: {
          email: '',
          name: '',
          category: null,
          checked: []
        },
        categories: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>