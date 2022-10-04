import { useState } from 'react'
import { useRouter } from 'next/router'
import { createPayment } from '../server/controllers/mp.controller'
import { breakpoints, colors, fonts } from '../styles/theme'

const PAY_STATES = {
  TO_PAY: 0,
  LOADING: 1,
  WAITING_PAY: 2,
  SUCCESS: 3,
  ERROR: -1
}
const Donation = () => {
  const [form, setForm] = useState({
    quantity: 1
  })
  const [error, setError] = useState('')
  const [pay, setPay] = useState(PAY_STATES.TO_PAY)
  const router = useRouter()

  const createPay = async () => {
    setPay(PAY_STATES.LOADING)
    try {
      const urlMp = await createPayment(
        1,
        `Dona $${form.quantity}`,
        form.quantity
      )
      router.push(urlMp)
    } catch (err) {
      setPay(PAY_STATES.ERROR)
      setError(err)
    }
  }

  const handleChange = (e) => {
    const { target } = e
    const { name } = target
    const value = name === 'quantity' ? parseInt(target.value) : target.value

    setForm({
      ...form,
      [name]: value
    })
  }

  const formValidate = () => {
    const { quantity } = form
    if (!quantity) return 'La cantidad es requerida'
    if (quantity <= 0) return 'La cantidad debe ser mayor a 0'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = formValidate()
    !error ? createPay() : setError(error)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {pay === PAY_STATES.TO_PAY && (
          <>
            <span>AYUDO CON</span>
            <input
              type="number"
              min="1"
              required
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />
            <span>ARS</span>
            {error && <span>{error}</span>}
            <button type="submit">
              <img src="/mercado-pago.svg" className="mp-logo" />
            </button>
          </>
        )}
        {pay === PAY_STATES.LOADING && <span>Generando pago...</span>}
      </form>
      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            padding: 10px;
            height: 100%;
            width: 100%;
            background: ${colors.white};
            box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
          }
          span {
            font-size: ${fonts.subtitle.desktop};
            font-weight: 800;
          }
          button {
            border: none;
            border-radius: 10px;
            background: #b3ddfc;
            width: 200px;
            padding: 5px;
          }
          input {
            font-size: 20px;
            font-weight: 800;
            text-align: center;
            width: 150px;
            height: 100%;
            border-radius: 10px;
            border: 1px solid #e3e3e3;
          }
          input:focus {
            outline: none;
          }
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          .mp-logo {
            width: 100px;
            height: 40px;
            cursor: pointer;
          }
          @media (max-width: ${breakpoints.mobile}) {
            form {
              max-width: 350px;
            }
            .mp-logo {
              width: 100px;
              height: 40px;
              cursor: pointer;
            }
          }
        `}
      </style>
    </>
  )
}

export default Donation
