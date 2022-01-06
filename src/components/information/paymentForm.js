import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

import history from "../../history";

import OrderSummary from "./orderSummary";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className='payment-form__name'
          type='name'
          title='Name'
          placeholder='Name on Credit Card'
          name='name'
          component={FormInput}
        />
        <Field
          className='payment-form__card'
          type='card'
          title='Credit Card Number'
          placeholder='____-____-____-____'
          name='card'
          component={FormInput}
        />

        <Field
          className='payment-form__expiration'
          type='expiration'
          title='Expiration Date'
          placeholder='MM/YY'
          name='expiration'
          component={FormInput}
        />
        <Field
          className='payment-form__cvv'
          type='cvv'
          title='cvv'
          placeholder='eg: 999'
          name='cvv'
          component={FormInput}
        />

        <div className='payment-form__line'></div>

        <Field
          className='payment-form__place-order'
          onClick={() => history.push("/account")}
          type='submit'
          title='Place Order'
          name='place-order'
          component={FormButton}
        />
        <Field
          className='payment-form__back'
          onClick={() => history.push("/information/shipping")}
          type='button'
          title='Back'
          name='back'
          short={true}
          component={FormButton}
        />
        <OrderSummary className='payment-form__order-summary' />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
