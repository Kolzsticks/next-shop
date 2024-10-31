"use client";

import { CreditCard, Trash } from "lucide-react"; // Import necessary icons
import { useState } from "react"; // Import useState for state management

const paymentMethodsData = [
  {
    id: 1,
    cardNumber: "**** **** **** 1234",
    cardHolder: "John Doe",
    expiration: "12/25",
  },
  {
    id: 2,
    cardNumber: "**** **** **** 5678",
    cardHolder: "Jane Smith",
    expiration: "03/26",
  },
];

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState(paymentMethodsData);

  const handleRemove = (id: number) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id)); // Remove payment method
  };

  return (
    <div className=" w-full p-8">
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold flex items-center">
        <CreditCard className="mr-2" />
        Payment Methods
      </h2>
      {paymentMethods.length === 0 ? (
        <p>No saved payment methods.</p>
      ) : (
        paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <p>{method.cardHolder}</p>
              <p>{method.cardNumber}</p>
              <p>Expires: {method.expiration}</p>
            </div>
            <button
              onClick={() => handleRemove(method.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash />
            </button>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default PaymentMethods;
