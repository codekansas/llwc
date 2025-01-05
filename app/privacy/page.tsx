export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Create an account</li>
            <li>Use our language learning features</li>
            <li>Contact us for support</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Personalize your learning experience</li>
            <li>Communicate with you about our services</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </section>
      </div>
    </div>
  );
}
