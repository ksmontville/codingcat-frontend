import {useAuth0} from "@auth0/auth0-vue";
import { defineStore } from 'pinia'

export const useUserDataStore = defineStore('userData',  () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  return { loginWithRedirect, logout, user, isAuthenticated }

})
