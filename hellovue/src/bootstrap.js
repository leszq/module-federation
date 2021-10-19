import Vue from 'vue'
import App from './App.vue'

export class MfeVue extends HTMLElement {
    connectedCallback() {
      new Vue({
        render: (h) => h(App),
      }).$mount(this)
    }
}
  
customElements.define('hydra-element', MfeVue);