import CheckoutHero from "@/components/checkout/CheckoutHero";
import ContactForm from "@/components/checkout/ContactForm";
import AddressForm from "@/components/checkout/AddressForm";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import TrustSection from "@/components/checkout/TrustSection";
import PlaceOrder from "@/components/checkout/PlaceOrder";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="w-full pb-[140px]">

      <CheckoutHero />

      <section className="w-full">

        <div
          style={{
            maxWidth: "1650px",
            margin: "0 auto",
            paddingLeft: "80px",
            paddingRight: "80px",
            marginTop: "80px",
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.7fr 0.9fr",
              gap: "80px",
              alignItems: "start",
            }}
          >

            {/* LEFT */}

            <div>

              <ContactForm />

              <div style={{ height: "70px" }} />

              <AddressForm />

              <div style={{ height: "70px" }} />

              <ShippingMethod />

              <div style={{ height: "70px" }} />

              <PaymentMethod />

              <div style={{ height: "70px" }} />

              <TrustSection />

              <div style={{ height: "60px" }} />

              <PlaceOrder />

            </div>

            {/* RIGHT */}

            <OrderSummary />

          </div>

        </div>

      </section>

    </main>
  );
}