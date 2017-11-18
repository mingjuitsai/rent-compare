<template>
  <div class="property-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Address</th>
          <th>Rent weekly</th>
          <th>Rent monthly</th>
          <th>Sub-tenant rent weekly</th>
          <th>Sub-tenant rent monthly</th>
          <th>Head-tenant rent weekly</th>
          <th>Head-tenant rent monthly</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Property -->
        <template v-for="(property, index) in properties">
          <tr>
            <td>{{ index }}</td>
            <td>
              <input type="text" v-model="property.address">
            </td>
            <td>
              <input type="number" v-model="property.rent_weekly">
            </td>
            <td>{{ property.rent_monthly }}</td>
            <td>
              <input type="number" v-model="property.subrent_weekly">
            </td>
            <td>{{ property.subrent_monthly }}</td>
            <td>{{ property.headrent_weekly }}</td>
            <td>{{ property.headrent_monthly }}</td>
            <td>
              <button @click='removeProperty(index)'>Remove</button>
            </td>
          </tr>
        </template>
        <!-- Property -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { EventBus } from './EventBus';

export default {
  name: 'property-table',
  props: ['properties'],
  methods: {
    removeProperty(index) {
      EventBus.$emit('removeProperty', index);
    }
  }
}
</script>

<style lang="scss">

</style>
