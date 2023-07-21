import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import {useAuth0} from "@auth0/auth0-vue";
import axios from "axios";

export const useUserDataStore = defineStore('userData',  () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  const managementToken = ref('')
  const customerDomains = ref("")
  const stripeCustomerID = ref("")
  const stripeCustomerData = ref("")
  const stripeCustomerSubscriptions = reactive({})
  const stripeCustomerInvoices = reactive({})

  if (localStorage.getItem("userData")) {
    const getState = (JSON.parse(localStorage.getItem("userData") || null ))
    customerDomains.value = getState.customerDomains
    stripeCustomerID.value = getState.stripeCustomerID
    stripeCustomerData.value = getState.stripeCustomerData
    stripeCustomerSubscriptions.value = getState.stripeCustomerSubscriptions
  }

  // async function getAccessToken() {
  //   const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/token`,
  //     {
  //       "username": import.meta.env.VITE_ACCESS_TOKEN_USERNAME,
  //       "password": import.meta.env.VITE_ACCESS_TOKEN_PASSWORD,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       }
  //     })
  //   return response.data.access_token
  // }

  async function getManagementToken() {
    // const token = await getAccessToken()
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/management-token`,{}, {
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    })
    managementToken.value = response.data.access_token
  }

  async function getUserMetadata() {
    // const token = await getManagementToken()
    const response = await axios.get(`${import.meta.env.VITE_AUTH0_MANAGEMENT_API_URL}/users/${user.value.sub}
`, {
      headers: {
        Authorization: `Bearer ${managementToken.value}`
      }
    });
    if (response.data.app_metadata.my_domains) {
      customerDomains.value = response.data.app_metadata.my_domains
    }
    stripeCustomerID.value = response.data.app_metadata.stripe_customer_id
  }

  async function getCustomerData() {
    // const token = await getManagementToken()
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/customer/${stripeCustomerID.value}`,
      {
        headers: {
          Authorization: `Bearer ${managementToken.value}`
        }
      });
    stripeCustomerData.value = response.data
    stripeCustomerSubscriptions.items = response.data.subscriptions.data
    stripeCustomerSubscriptions.count = response.data.subscriptions.total_count
  }

  async function getCustomerInvoices() {
    // const token = await getManagementToken()
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/customer/${stripeCustomerID.value}/invoices`,
      {
        headers: {
          Authorization: `Bearer ${managementToken.value}`
        }
      })
    stripeCustomerInvoices.data = response.data.data
    stripeCustomerInvoices.length = response.data.data.length
  }

    const getAllData = async () => {
      try {
        await getManagementToken()
        await Promise.all([getCustomerData(), getCustomerInvoices(), getUserMetadata()])
        console.log(stripeCustomerSubscriptions)
        console.log(stripeCustomerInvoices)
        console.log(stripeCustomerData.value)
      }
      catch (error) {
        console.log(error)
      }
    }


  return {loginWithRedirect, logout, managementToken, getManagementToken, getUserMetadata, getCustomerData, getCustomerInvoices, getAllData,
    user, isAuthenticated, customerDomains, stripeCustomerID, stripeCustomerData, stripeCustomerSubscriptions, stripeCustomerInvoices,
  }
})
