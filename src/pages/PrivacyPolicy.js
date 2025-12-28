import { Navbar } from '../components/Navbar.js';

export function PrivacyPolicy() {
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
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Privacy Policy</h1>
    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
      Transparency is at the core of our mission. Here is exactly how we handle your data.
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
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">1. No Logs Policy</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          BetterThanVPN maintains a strict zero-logs policy. We do not collect, store, or share any of the following information:
        </p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          <li>Your originating IP address.</li>
          <li>Your browsing history.</li>
          <li>DNS queries.</li>
          <li>Traffic destination or content.</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">2. Information We Collect</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          To operate our specific service, we collect minimal data required for account management:
        </p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          <li><strong>Account Information:</strong> An email address for account management and password reset purposes.</li>
          <li><strong>Payment Data:</strong> All payments are processed by Stripe. We do not store your credit card details.</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">3. Residential IP Usage</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          Our network utilizes legitimate residential IP addresses carried over enterprise backbones. While this provides superior access to streaming and banking services, it operates differently from traditional datacenter VPNs. We ensure that all IP usage complies with US carrier regulations.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">4. Jurisdiction</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          BetterThanVPN is incorporated in the United States and is subject to US law. However, because we do not store logs, we cannot produce user activity data even if compelled by a subpoena.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">5. Changes to This Policy</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          We may update this policy to reflect changes in our services or legal requirements. You will be notified of significant changes via email or a prominent notice on our website.
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
