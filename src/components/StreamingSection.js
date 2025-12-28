export function StreamingSection() {
    const section = document.createElement('section');
    section.className = 'container';
    section.style.padding = '6rem 1.5rem';
    section.style.display = 'flex';
    section.style.alignItems = 'center';
    section.style.flexDirection = 'row-reverse'; // Image on left (or reverse of video section)
    section.style.gap = '4rem';

    const content = document.createElement('div');
    content.style.flex = '1';
    content.innerHTML = `
      <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
        <span style="background: #000; color: #E50914; font-weight: 900; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">NETFLIX</span>
        <span style="background: #1CE783; color: #000; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">HULU</span>
        <span style="background: #00A8E1; color: #fff; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">PRIME</span>
      </div>
      <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Watch your favorite TV shows from anywhere</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem;">
        With our Residential IP network, streaming services see you as a real home user, not a VPN. Avoid "Proxy Detected" errors forever.
      </p>
      <a href="#/pricing" class="btn btn-primary">Get BetterThanVPN</a>
    `;

    const visual = document.createElement('div');
    visual.style.flex = '1';
    visual.className = 'glass-panel';
    visual.style.height = '400px';
    visual.style.position = 'relative';
    visual.style.overflow = 'hidden';
    visual.style.background = '#f0f0f0';

    // Mock Streaming UI
    visual.innerHTML = `
       <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 60%; background: #111; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); display: flex; flex-direction: column;">
          <div style="height: 100%; position: relative;">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-weight: 700; opacity: 0.2; font-size: 2rem;">4K HDR</span>
            </div>
             <!-- Play Bar -->
            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem;">
                <div style="height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden;">
                    <div style="width: 45%; height: 100%; background: #E50914;"></div>
                </div>
            </div>
          </div>
       </div>
       <div style="position: absolute; top: 20px; right: 20px; background: white; padding: 0.5rem 1rem; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-weight: 600; display: flex; align-items: center; gap: 6px;">
          <div style="width: 8px; height: 8px; background: #00D632; border-radius: 50%;"></div>
          Unblocked
       </div>
    `;

    section.appendChild(visual);
    section.appendChild(content);

    return section;
}
