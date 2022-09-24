export const getUser = async () => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/users/me`, {
      headers: {
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_PROD_MP}`
      }
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const createPreference = async (itemId, title, quantity) => {
  const data = {
    items: [
      {
        id: itemId,
        title,
        quantity,
        currency_id: 'ARS',
        unit_price: 1
      }
    ],
    auto_return: 'all',
    back_urls: {
      success: 'http://localhost:3000/6326813f39894b7104497d8b',
      pending: 'http://localhost:3000/6326813f39894b7104497d8b',
      failure: 'http://localhost:3000/6326813f39894b7104497d8b'
    }
  }
  try {
    const response = await fetch(
      `https://api.mercadopago.com/checkout/preferences`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_PROD_MP}`
        },
        body: JSON.stringify(data)
      }
    )

    const result = await response.json()
    console.log(result)
    return result.init_point
  } catch (error) {
    return error
  }
}
