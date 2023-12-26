https://ultimatecourses.com/blog/use-intersection-types-to-combine-types-in-typescript

interface Order {
  total: number;
  currency: string;
}

interface Stripe { card: number; }
interface PayPal { email: string; }

type StripeOrder = Order & Stripe;
type PayPalOrder = Order & PayPal;

const isStripe = (order: StripeOrder | PayPalOrder): order is StripeOrder => {
  return 'card' in (order as StripeOrder);
};

const processOrder = (order: StripeOrder | PayPalOrder) => {
  if (isStripe(order)) {
    // ✅ order.card
    // ❌ order.email
  } else {
    // ✅ order.email
    // ❌ order.card
  }
};

