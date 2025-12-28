import './style.css'
import { Home } from './pages/Home.js';
import { Gamer } from './pages/Gamer.js';
import { PublicWifi } from './pages/PublicWifi.js';
import { AmIExposed } from './pages/AmIExposed.js';
import { Setup } from './pages/Setup.js';
import { Security } from './pages/Security.js';
import { Patching } from './pages/Patching.js';
import { Footer } from './components/Footer.js';
import { PrivacyPolicy } from './pages/PrivacyPolicy.js';
import { TermsOfService } from './pages/TermsOfService.js';

const app = document.querySelector('#app');

const routes = {
    '/': Home,
    '/gaming': Gamer,
    '/public-wifi': PublicWifi,
    '/exposed': AmIExposed,
    '/setup': Setup,
    '/security': Security,
    '/patching': Patching,
    '/privacy': PrivacyPolicy,
    '/terms': TermsOfService,
};

function render() {
    const hash = window.location.hash.slice(1) || '/';
    const page = routes[hash] || Home;
    app.innerHTML = '';
    app.appendChild(page());
    app.appendChild(Footer());
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
