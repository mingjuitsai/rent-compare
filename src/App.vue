<template>
  <div id="app">
  

  <property-input></property-input>
  
  <!-- Table -->
  <property-table :properties="properties"></property-table>

  </div>
</template>

<script>
import PropertyInput from './PropertyInput.vue';
import PropertyTable from './PropertyTable.vue';
import { EventBus } from './EventBus';

export default {
  name: 'app',
  components: {
    'property-input': PropertyInput,
    'property-table': PropertyTable
  },
  data () {
    return {
      properties: []
    }
  },
  created() {
    var vm = this;

    EventBus.$on('submitProperty', function(property) {
      vm.properties.push(property);
    });

    EventBus.$on('removeProperty', function(index) {
      vm.properties.splice(index, 1);
    });
  }
}
</script>

<style lang="scss">

</style>
