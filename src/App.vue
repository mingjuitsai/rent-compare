<template>
  <div id="app">
  

  <property-input></property-input>
  

  <div class="properties-table">
    
    <template v-for="property in properties">
      {{ property.address }} / {{ property.headrent_monthly }}
    </template>
    
  </div>

  </div>
</template>

<script>
import PropertyInput from './PropertyInput.vue';
import { EventBus } from './EventBus';

export default {
  name: 'app',
  components: {
    'property-input': PropertyInput
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
  }
}
</script>

<style lang="scss">

</style>
