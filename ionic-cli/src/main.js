import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios';
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

/* Import Global Components */
import BaseLayout from './components/base/BaseLayout.vue';
import store from './store';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
  
/* Add Global Components */
app.component('base-layout', BaseLayout);

Axios.interceptors.request.use(async config => { // Agregamos el autorization al header al montar cualquier componente y realizar una petición
  const token = store.getters['auth/getToken'];
  // console.log(token)
  if (token) {
    config.headers.Authorization = 'BEARER ' + token+ 'asdasd';
  }
  return config;
});

router.isReady().then(() => {
  app.mount('#app');
});