import { createPreference } from '../services/mp.services'

export const createPayment = async (itemId, title, quantity) => {
  const link = await createPreference(itemId, title, quantity)
  return link
}
