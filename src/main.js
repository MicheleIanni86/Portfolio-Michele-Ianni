import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.scss';

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import Font Awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faLaptopCode);

// Create the app
const app = createApp(App);

// Register the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');
