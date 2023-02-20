import { Elements, CardElement } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"



const stripePromise =  loadStripe("pk_test_51MdIlzG6dKHaqpMMfV2dAqCeQe0OS9tiZ8tugiJqm8sFfFKM8X9Q4LqpK6DuE6bvxZdBJUFZ2qasLRt1HwNByaDB00pdSyqPEx")
// React Testing para codigos de diversos tipos y respuestas de tarjetas
export const Payments = () => {

  return (
   <Elements stripe={stripePromise}>
    <form>
        <CardElement/>
    </form>
   </Elements>
  )
}
