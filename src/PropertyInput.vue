<template>
  <div class="property-input">
    
    <label for="address">Address</label>
    <input type="text" name="address" v-model="address" required placeholder="79 Market St.">

    <label for="rent_weekly">Rent Weekly</label>
    <input type="number" name="rent_weekly" v-model="rent_weekly" required>

    <label for="subrent_weekly">Sub-Rent Weekly</label>
    <input type="number" name="subrent_weekly" v-model="subrent_weekly" required>


    <button @click="submitProperty">Submit</button>

  </div>
</template>

<script>
import { EventBus } from './EventBus';
import { RentCalc } from './RentCalc';

export default {
  name: 'property-input',
  data () {
    return {
      'address': '',
      'rent_weekly': 300,
      'subrent_weekly': 0
    }
  },
  methods: {
    submitProperty() {
      var vm = this;
      EventBus.$emit('submitProperty', {
        address: vm.address,
        rent_weekly: vm.rent_weekly,
        subrent_weekly: vm.subrent_weekly,
        // Getters
        get rent_monthly() {
          return RentCalc.getMontlyRent(this.rent_weekly);
        },
        get subrent_monthly() {
          return RentCalc.getMontlyRent(this.subrent_weekly);
        },
        get headrent_weekly() {
          return this.rent_weekly - this.subrent_weekly;
        },
        get headrent_monthly() {
          return this.rent_monthly - this.subrent_monthly;
        }
      }); 
    }
  }
}
</script>

<style lang="scss">

</style>
