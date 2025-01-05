export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using Learn Language with Comics ("LLWC"), you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. User Accounts</h2>
          <p>To use our services, you must:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Be at least 13 years of age</li>
            <li>Maintain accurate account information</li>
            <li>Keep your account credentials secure</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Share inappropriate or harmful content</li>
            <li>Attempt to breach our security measures</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. Content and Copyright
          </h2>
          <p>
            All content provided through our service is protected by copyright
            and other intellectual property laws. Users may not reproduce,
            distribute, or create derivative works without proper authorization.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service
            immediately, without prior notice, for any violation of these Terms
            of Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Continued use of our service
            after any changes constitutes acceptance of the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
