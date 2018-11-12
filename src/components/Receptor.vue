<template>
  <div>
    Name :
    <input
      v-model="message"
      type="text" />
    <button type="button" class="button" @click="applyMessage">적용</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {setMessage} from '@/store/types';
export default {
  name: 'Receptor',
  model: {
    prop: 'origMessage',
    event: 'change'
  },
  props: {
    origMessage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      message: this.origMessage
    };
  },
  methods: {
    ...mapMutations([setMessage]),
    applyMessage() {
      this.setMessage(this.message);
    }
  }
};
</script>
