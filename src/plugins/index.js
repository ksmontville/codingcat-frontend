/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import { createAuth0 } from '@auth0/auth0-vue'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'


export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(
      createAuth0(
        {
          domain: import.meta.env.VITE_AUTH0_DOMAIN,
          clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }
      )
    )

}
