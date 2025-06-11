import "./Policy.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-date">Effective date: 10 June 2025</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. General Provisions</h2>
            <p>
              This Privacy Policy defines the rules for processing and
              protecting personal data provided by users in connection with the
              use of the website neurohiveai.agency. The Policy complies with
              Articles 13 and 14 of the GDPR and the ePrivacy Directive.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Data Controller</h2>
            <p>
              Vadym Klius, operating under the business name Neurohive AI
              <br />
              Address: ul. Prosta 70, 00-838 Warsaw, Poland
              <br />
              Email:{" "}
              <a href="mailto:biuro@neurohiveai.io">biuro@neurohiveai.io</a>
              <br />
              Phone: +48 509 980 939
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Types of Data Collected</h2>
            <ul>
              <li>Identification data: name, surname, job title</li>
              <li>Contact data: e-mail address, phone number</li>
              <li>
                Technical data: IP address, cookie identifiers, server logs
              </li>
              <li>
                Voluntary data entered in forms (e.g., inquiry content, company
                name)
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Purposes and Legal Basis of Processing</h2>
            <ul>
              <li>
                <strong>Responding to inquiries</strong> – Article 6(1)(b) GDPR
                (pre-contractual steps), stored for 3 years from last contact
              </li>
              <li>
                <strong>Direct marketing</strong> – Article 6(1)(a) GDPR
                (consent), stored until consent is withdrawn
              </li>
              <li>
                <strong>Analytics (GA4, Consent Mode)</strong> – Article 6(1)(a)
                GDPR (consent), stored up to 2 years
              </li>
              <li>
                <strong>Ensuring website security (logs)</strong> – Article
                6(1)(f) GDPR (legitimate interest), stored for 12 months
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. AI Chat (BETA) – Disclaimer</h2>
            <p>
              The AI chat feature is in a beta version. Answers may be
              inaccurate or go beyond the scope of the company's activity. Price
              quotes provided are indicative and do not constitute a legally
              binding offer.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Cookies and Similar Technologies</h2>
            <p>
              The Website uses cookies as described in the Cookie Policy. On the
              first visit, a consent banner appears with the options: "Accept
              all", "Reject all", and "Settings". Users may change their
              preferences anytime via the "Change cookie settings" link in the
              footer.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Data Recipients</h2>
            <ul>
              <li>Hetzner Online GmbH (EU – hosting)</li>
              <li>Kommo (CRM, EEA)</li>
              <li>
                Google LLC (Analytics, based on EU–US Data Privacy Framework)
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Third-Country Transfers</h2>
            <p>
              Data is transferred to the USA in accordance with the EU–US Data
              Privacy Framework or Standard Contractual Clauses (SCC).
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Your Rights</h2>
            <ul>
              <li>Access to your personal data</li>
              <li>Rectification of incorrect data</li>
              <li>Erasure of data ("right to be forgotten")</li>
              <li>Restriction of processing</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>
            <p>
              Send requests to{" "}
              <a href="mailto:biuro@neurohiveai.io">biuro@neurohiveai.io</a>.
              You also have the right to lodge a complaint with the Polish DPA
              (UODO).
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Data Security</h2>
            <p>
              The Controller applies TLS encryption, pseudonymization of logs,
              backups, and access minimization policies.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Policy Changes</h2>
            <p>
              This Policy may be updated. The new version will be published on
              the Website with an updated effective date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
