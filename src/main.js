import { createApp } from "vue";
import { SanityBlocks } from 'sanity-blocks-vue-component';
import App from "./App.vue";


import "./assets/main.css";

const app = createApp(App);
app.component('sanity-blocks', SanityBlocks);
createApp(App).mount("#format-wizard");

