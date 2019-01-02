import {setMessage} from './types';

export const state = {
  message: 'VUE'
};

export const getters = {};
export const actions = {};
export const mutations = {
  [setMessage](_state, message) {
    _state.message = message;
  }
};
