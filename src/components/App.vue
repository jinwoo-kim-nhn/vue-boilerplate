<template>
  <div>
    <Receptor v-model="message" />
    <Expression :message="message" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Receptor from './Receptor';
import Expression from './Expression';
export default {
  name: 'App',
  components: {
    Receptor,
    Expression
  },
  computed: {
    ...mapState(['message'])
  }
};
</script>
