import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { FeaturesGrid } from '../components/FeaturesGrid.js';
import { FeatureToggle } from '../components/FeatureToggle.js';
import { VideoSection } from '../components/VideoSection.js';
import { StreamingSection } from '../components/StreamingSection.js';
import { Pricing } from '../components/Pricing.js';
import { Testimonials } from '../components/Testimonials.js';
import { FAQ } from '../components/FAQ.js';

export function Home() {
    const container = document.createElement('div');

    // Top Section (Dark Theme for Hero)
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'dark-section hero-bg'; // Enhanced Background
    headerWrapper.style.paddingBottom = '2rem';

    // Navbar
    headerWrapper.appendChild(Navbar());

    // Hero
    headerWrapper.appendChild(Hero());

    container.appendChild(headerWrapper);

    // Why Choose (Grid)
    container.appendChild(FeaturesGrid());

    // Comparison (Toggle)
    container.appendChild(FeatureToggle());

    // Video Section
    container.appendChild(VideoSection());

    // Streaming Section
    container.appendChild(StreamingSection());

    // Pricing Section
    container.appendChild(Pricing());

    // Testimonials
    container.appendChild(Testimonials());

    // FAQ Section
    container.appendChild(FAQ());

    return container;
}
