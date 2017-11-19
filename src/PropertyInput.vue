<template>
  <div class="property-input">
    
    <label for="address">Address</label>
    <input type="text" name="address" v-model="address" required placeholder="79 Market St.">

    <label for="rent_weekly">Rent Weekly</label>
    <input type="number" name="rent_weekly" v-model="rent_weekly" required>

    <label for="sub_rent_weekly">Sub-Rent Weekly</label>
    <input type="number" name="sub_rent_weekly" v-model="sub_rent_weekly" required>


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
      'sub_rent_weekly': 0
    }
  },
  methods: {
    submitProperty() {
      var vm = this;
      EventBus.$emit('submitProperty', {
        address: vm.address,
        rent_weekly: vm.rent_weekly,
        sub_rent_weekly: vm.sub_rent_weekly,
        // Getters
        get rent_monthly() {
          return RentCalc.getMontlyRent(this.rent_weekly);
        },
        get sub_rent_monthly() {
          return RentCalc.getMontlyRent(this.sub_rent_weekly);
        },
        get head_rent_weekly() {
          return this.sub_rent_weekly > this.rent_weekly ? 0 : this.rent_weekly - this.sub_rent_weekly;
        },
        get head_rent_monthly() {
          return this.sub_rent_monthly > this.rent_monthly ? 0 : this.rent_monthly - this.sub_rent_monthly;
        },
        get head_earn_weekly() {
          return this.head_rent_weekly ? 0 : Math.abs(this.rent_weekly - this.sub_rent_weekly);
        },
        get head_earn_monthly() {
          return this.head_rent_monthly ? 0 : Math.abs(this.rent_monthly - this.sub_rent_monthly);
        }
      }); 
    }
  }
}
</script>

<style lang="scss">

</style>
