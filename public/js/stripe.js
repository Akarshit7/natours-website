import axios from 'axios';
import { showAlert } from './alerts';

/* eslint-disable */
const stripe = Stripe(
  'pk_test_51NmVqDSAsysmXednT0IvTgEqlQOH4NHTyovHyx9nzsp8mmrs3as6Nl8w82TctWhV6EiYjulBsJR9dNsrNePQSvOd006ddExz5g',
);
export const bookTour = async (tourId) => {
  try {
    //get checkout session from the api
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
    );

    //create checkout form +charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(err);
    showAlert('error', err.message);
  }
};
