import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";

export default function Home() {
  const isLoggedIn = true; // This should be replaced with actual authentication logic
  const name = "Héctor"; // This should be replaced with actual user data

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-300 ">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="font-bold">SaaS Demo</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="h-screen flex flex-col justify-start items-center text-center px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mt-50 mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* PRICING */}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-2xl font-extrabold mb-12 text-center">
            A pricing that adapts to your means
          </h2>
          {/* CARD */}
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Collect customer feedback",
                "Unlimited boards",
                "Admin dashboard",
                "24/7 support",
              ].map((priceItem) => (
                <li key={priceItem} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-green-600 size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {priceItem}
                </li>
              ))}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-2xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "How do I create a feedback board?",
                answer:
                  "Simply sign up and click on 'Create Board' in your dashboard. You can customize the board to fit your needs.",
              },
              {
                question: "Can I invite my team members?",
                answer:
                  "Yes, you can invite unlimited team members to collaborate on feedback boards and manage suggestions.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "We offer a 14-day free trial with access to all features. No credit card required to get started.",
              },
              {
                question: "How do I cancel my subscription?",
                answer:
                  "You can cancel anytime from your account settings. Your subscription will remain active until the end of the billing period.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes, our support team is available 24/7 via chat and email to help you with any questions.",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
