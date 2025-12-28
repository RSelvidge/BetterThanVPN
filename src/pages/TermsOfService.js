import { Navbar } from '../components/Navbar.js';

export function TermsOfService() {
    const container = document.createElement('div');

    // Header Section (Dark)
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'dark-section';
    headerWrapper.style.paddingBottom = '2rem';
    headerWrapper.appendChild(Navbar());

    const hero = document.createElement('div');
    hero.className = 'container';
    hero.style.padding = '4rem 1.5rem';
    hero.style.textAlign = 'center';
    hero.innerHTML = `
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Terms of Service</h1>
    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
      Please read these terms carefully before using our services.
    </p>
  `;
    headerWrapper.appendChild(hero);
    container.appendChild(headerWrapper);

    // Content Section
    const content = document.createElement('main');
    content.className = 'container';
    content.style.padding = '4rem 1.5rem';
    content.style.maxWidth = '800px';
    content.style.margin = '0 auto';

    content.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">1. Acceptance of Terms</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          By accessing or using BetterThanVPN, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">2. User Conduct</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          You are responsible for all activities that occur under your account. You agree NOT to use the Service to:
        </p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          <li>Violate any applicable national or international law.</li>
          <li>Infringe upon the rights of others (e.g., copyright infringement).</li>
          <li>Distribute malware, viruses, or other harmful code.</li>
          <li>Engage in abusive behavior toward our network infrastructure (e.g., DDoS attacks).</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">3. Residential IP Usage</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          Our service provides access to legitimate residential IP addresses. You agree to use these IPs responsibly. We reserve the right to terminate accounts that flagrantly abuse these IPs, causing them to be blacklisted.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">4. Payment & Refunds</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          <strong>Subscriptions:</strong> Service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis.<br><br>
          <strong>Refunds:</strong> We offer a 3-day money-back guarantee for new users who are unsatisfied with the service performance.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">5. Limitation of Liability</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          In no event shall BetterThanVPN, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">6. Termination</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
      </section>

      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Last Updated: December 2025
        </p>
      </div>
    </div>
  `;

    container.appendChild(content);

    return container;
}
