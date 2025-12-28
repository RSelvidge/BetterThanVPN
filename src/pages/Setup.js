import { Navbar } from '../components/Navbar.js';

export function Setup() {
    const container = document.createElement('div');
    container.appendChild(Navbar());

    const content = document.createElement('main');
    content.className = 'container';
    content.style.padding = '4rem 1.5rem';
    content.style.maxWidth = '800px';
    content.style.margin = '0 auto';
    content.style.textAlign = 'center';

    content.innerHTML = `
    <h1 style="font-size: 3rem; margin-bottom: 2rem;">Get Connected in Seconds</h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Enterprise security, consumer simplicity. No configuration required.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
      <!-- Step 1 -->
      <div class="glass-panel" style="padding: 2rem;">
        <div style="background: var(--accent-indigo); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.5rem auto;">1</div>
        <h3 style="margin-bottom: 1rem;">Download</h3>
        <p style="color: var(--text-muted);">Get the BetterThanVPN Smart Client for Windows, Mac, or iOS.</p>
      </div>

      <!-- Step 2 -->
      <div class="glass-panel" style="padding: 2rem;">
        <div style="background: var(--accent-indigo); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.5rem auto;">2</div>
        <h3 style="margin-bottom: 1rem;">Verify</h3>
        <p style="color: var(--text-muted);">Enter your unique Magic Link code sent to your email.</p>
      </div>

      <!-- Step 3 -->
      <div class="glass-panel" style="padding: 2rem;">
        <div style="background: var(--accent-green); color: black; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.5rem auto;">3</div>
        <h3 style="margin-bottom: 1rem;">Connect</h3>
        <p style="color: var(--text-muted);">Click the big green button. That's it. You're secure.</p>
      </div>
    </div>
    
    <div style="margin-top: 4rem;">
      <button class="btn btn-primary" style="font-size: 1.25rem; padding: 1rem 3rem;">Download Now</button>
    </div>
  `;

    container.appendChild(content);
    return container;
}
