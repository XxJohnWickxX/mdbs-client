import React from 'react';
import PaypalButton from "./PaypalButton";


const CLIENT = {
  sandbox: process.env.PAYPAL_SANDBOX,
  production: process.env.PAYPAL_PRODUCTION,
};

const ENV = process.env.PAYPAL_SANDBOX === 'production'
  ? 'production'
  : 'sandbox';

class Pay extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Pago realizado!', payment);

    const onError = (error) =>
      console.log('Error de transaccion', error);

    const onCancel = (data) =>
      console.log('Desea cancelar!', data);

    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default Pay;