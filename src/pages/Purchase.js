import { Navbar } from '../components/Navbar.js';
import { config } from '../config.js';

export function Purchase() {
  const container = document.createElement('div');
  container.className = 'dark-section'; // Dark theme for premium feel
  container.style.minHeight = '100vh';

  container.appendChild(Navbar());

  const content = document.createElement('main');
  content.className = 'container';
  content.style.padding = '4rem 1.5rem';
  content.style.maxWidth = '800px';
  content.style.margin = '0 auto';
  content.style.textAlign = 'center';

  content.innerHTML = `
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">Choose Your <span style="color: var(--accent-indigo)">Protection</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Simple, transparent pricing. No hidden fees.</p>

    <!-- Unified Plan Card (Resembling the Home Pricing) -->
    <div class="glass-panel" style="padding: 3rem; text-align: left; border: 1px solid var(--accent-indigo); box-shadow: 0 0 30px rgba(99, 102, 241, 0.15); position: relative;">
        <div style="position: absolute; top: -12px; right: 2rem; background: var(--accent-indigo); color: white; padding: 2px 10px; border-radius: 10px; font-size: 0.8rem; font-weight: 600;">
          ALL-ACCESS
        </div>
        
        <h3 style="font-size: 2rem; color: white;">Universal Access</h3>
        <div style="font-size: 3.5rem; font-weight: 700; margin: 1rem 0; color: white;">$15<span style="font-size: 1.25rem; color: var(--text-muted); font-weight: 400;">/mo</span></div>
        
        <div style="margin-bottom: 2rem; color: var(--accent-green); font-weight: 600; font-size: 1.1rem;">
          ✓ 3 Devices Included
        </div>

        <p style="color: var(--text-muted); margin-bottom: 2.5rem; font-size: 1.1rem;">
          Complete protection for Home, Gaming, Trading, and Public Wi-Fi.
        </p>

        <form style="display: flex; flex-direction: column; gap: 1rem;">
           <!-- Placeholder for potential direct checkout integration later -->
          <a href="${config.stripe.commuter}" target="_blank" class="btn btn-primary" style="width: 100%; text-align: center; box-sizing: border-box; display: inline-block; text-decoration: none; padding: 1rem; font-size: 1.2rem;">
            Activate Real Security — $15/month
            <div style="font-size: 0.8rem; font-weight: normal; opacity: 0.9; margin-top: 4px;">Up to 3 devices · Cancel anytime</div>
          </a>
          <p style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin-top: 1rem;">
            Processed securely by Stripe. 30-day money-back guarantee.
          </p>
        </form>

        <div style="margin-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
           <ul style="list-style: none; padding: 0; font-size: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; color: var(--text-inverse);">
            <li style="display: flex; gap: 10px;"><span>✓</span> Premium Backbone</li>
            <li style="display: flex; gap: 10px;"><span>✓</span> AES-256 Encryption</li>
            <li style="display: flex; gap: 10px;"><span>✓</span> Zero-Hops Routing</li>
            <li style="display: flex; gap: 10px;"><span>✓</span> Banking Protection</li>
          </ul>
        </div>
    </div>

    <!-- Trust Seals -->
    <div style="margin-top: 4rem; display: flex; justify-content: center; gap: 2rem; opacity: 0.6; filter: grayscale(100%);">
       <!-- Use placeholders or SVGs for Visa/Mastercard/Amex/Stripe -->
       <span style="color: white; font-weight: bold;">STRIPE SECURE</span>
       <span style="color: white; font-weight: bold;">SSL ENCRYPTED</span>
       <span style="color: white; font-weight: bold;">MONEY BACK GUARANTEE</span>
    </div>
  `;

  container.appendChild(content);
  return container;
}
