// fontAwesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false; // Prevents Font Awesome from adding its default CSS
library.add(fas); // Add all icons from the solid pack
