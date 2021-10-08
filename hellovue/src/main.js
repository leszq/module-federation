import { createApp } from 'vue'
import App from './App.vue'



export class HydraVue extends HTMLElement {
    connectedCallback() {
        createApp(App).mount(this)
    }
}
  
customElements.define('hydra-element', HydraVue);