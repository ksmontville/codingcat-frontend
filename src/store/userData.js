import {ref} from "vue";
import {defineStore} from 'pinia'
import {useAuth0} from "@auth0/auth0-vue";
import axios from "axios";

export const useUserDataStore = defineStore('userData',  () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  const customerDomains = ref("")
  const stripeCustomerID = ref("")
  const stripeCustomerData = ref("")
  const stripeCustomerSubscriptions = ref("")

  if (localStorage.getItem("userData")) {
    const getState = (JSON.parse(localStorage.getItem("userData") || null ))
    customerDomains.value = getState.customerDomains
    stripeCustomerID.value = getState.stripeCustomerID
    stripeCustomerData.value = getState.stripeCustomerData
    stripeCustomerSubscriptions.value = getState.stripeCustomerSubscriptions
  }

  async function getAccessToken() {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/token`,
      {
        "username": import.meta.env.VITE_ACCESS_TOKEN_USERNAME,
        "password": import.meta.env.VITE_ACCESS_TOKEN_PASSWORD,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    return response.data.access_token
  }

  async function getManagementToken() {
    const token = await getAccessToken()
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/management-token`,{}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.access_token
  }

  async function getUserMetadata() {
    const token = await getManagementToken()
    const response = await axios.get(`${import.meta.env.VITE_AUTH0_MANAGEMENT_API_URL}/users/${user.value.sub}
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
    stripeCustomerSubscriptions.value = response.data.subscriptions

  }

  return {loginWithRedirect, logout, getUserMetadata, getCustomerData, getAccessToken,
    user, isAuthenticated, customerDomains, stripeCustomerID, stripeCustomerData, stripeCustomerSubscriptions,
  }
})
