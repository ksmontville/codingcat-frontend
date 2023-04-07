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
import { watch } from "vue";

export function registerPlugins (app) {

  watch(pinia.state, (state) => {
    localStorage.clear()
    localStorage.setItem("userData", JSON.stringify(state.userData))
  },
    {deep: true}
  )

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
          useRefreshTokens: true,
          cacheLocation: 'localstorage',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }
      )
    )

}
