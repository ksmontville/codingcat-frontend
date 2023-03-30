import {ref} from "vue";
import {defineStore} from 'pinia'
import {useAuth0} from "@auth0/auth0-vue";
import axios from "axios";

export const useUserDataStore = defineStore('userData',  () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  const customerDomains = ref("")
  const stripeCustomerID = ref("")
  const stripeCustomerData = ref("")

  if (localStorage.getItem("userData")) {
    const getState = (JSON.parse(localStorage.getItem("userData")))
    console.log(getState)
    customerDomains.value = getState.customerDomains
    stripeCustomerID.value = getState.stripeCustomerID
    stripeCustomerData.value = getState.stripeCustomerData
  }

  async function getAccessToken() {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/token`)
    return response.data.access_token
  }

  async function getUserMetadata() {
    const token = await getAccessToken()
    const response = await axios.get(`https://codingcatllc.us.auth0.com/api/v2/users/${user.value.sub}
`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    customerDomains.value = response.data.app_metadata.my_domains
    stripeCustomerID.value = response.data.app_metadata.stripe_customer_id
  }

  async function getCustomerData() {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/customer/${stripeCustomerID.value}`)
    stripeCustomerData.value = response.data

  }

  return {loginWithRedirect, logout, getUserMetadata, getCustomerData,
    user, isAuthenticated, customerDomains, stripeCustomerID, stripeCustomerData,
  }
})
