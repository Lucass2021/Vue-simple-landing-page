import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFacebook, faUserSecret)

import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(Quasar, quasarUserOptions).mount('#app')