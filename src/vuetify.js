import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const options = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#1B6ED5",
        accent: "#1B6ED5",
      },
      dark: {
        primary: "#1B6ED5",
        accent: "#1B6ED5",
      },
    },
  },
  icons: {
    iconfont: "md",
  },
};

export default new Vuetify(options);
