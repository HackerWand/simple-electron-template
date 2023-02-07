import { createApp } from "vue";
import store from './renderer/store'
import router from "./renderer/router";
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import App from "./renderer/App.vue";

const app = createApp(App);

app.use(store).use(router).use(ViewUIPlus);

app.mount("#app");