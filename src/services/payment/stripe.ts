/*
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10", // Usá la última disponible según tu Stripe Dashboard
});


export const createPaymentIntent = async (amount: number, currency = "usd") => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe espera el monto en centavos
      currency,
      payment_method_types: ["card"],
    });

    return paymentIntent.client_secret;
  } catch (error: any) {
    console.error("Error creating payment intent:", error.message);
    throw new Error("No se pudo crear el pago.");
  }
};

export const createCustomer = async (email: string, name?: string) => {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    });

    return customer.id;
  } catch (error: any) {
    console.error("Error creating customer:", error.message);
    throw new Error("No se pudo crear el cliente.");
  }
};*/
