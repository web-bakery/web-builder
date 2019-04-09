import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Vuse from 'vuse';
import Uploader from './Uploader'
import pwa from './pwa';
import './style/_demo.styl';

import hero1 from './sections/hero/hero1';
import hero2 from './sections/hero/hero2';
import section1 from './sections/section/section1';
import section2 from './sections/section/section2';
import social1 from './sections/social/social1';
import social2 from './sections/social/social2';
import social3 from './sections/social/social3';
import social4 from './sections/social/social4';
import newsletter from './sections/forms/newsletter';


// add the uploader to the list of sub-components.
Vuse.mix({
  components: {
    Uploader
  }
});


// register components.
Vuse.component(hero1);
Vuse.component(hero2);
Vuse.component(section1);
Vuse.component(section2);
Vuse.component(social1);
Vuse.component(social2);
Vuse.component(social3);
Vuse.component(social4);
Vuse.component(newsletter);

// install pwa plugin.
Vuse.use(pwa);


Vue.use(Vuetify)

// install the builder
Vue.use(Vuse, {
  // main css file
  assets: {
    css: 'css/vuse.css'
  },
  // builder default themes
  themes: [{
    name: 'Theme 1',
    sections: [hero1, section1, social1, social3, newsletter]
  }, {
    name: 'Theme 2',
    sections: [hero2, section2, social3, social4, newsletter]
  }]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
