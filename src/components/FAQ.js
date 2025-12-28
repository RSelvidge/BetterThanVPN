export function FAQ() {
    const section = document.createElement('section');
    section.className = 'container';
    section.style.padding = '4rem 1.5rem';
    section.style.maxWidth = '800px';
    section.style.margin = '0 auto 4rem auto';

    const title = document.createElement('h2');
    title.textContent = 'Technical FAQ';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    section.appendChild(title);

    const questions = [
        {
            q: "Why is this better than Nord/Express?",
            a: "We own the network routes; they just rent servers. This means we control the entire path your data takes, ensuring lower latency and higher security."
        },
        {
            q: "Will this work with my Bank?",
            a: "Yes. Unlike standard VPNs that use blacklisted 'datacenter IPs', we use reputation-based residential IPs that are trusted by major US financial institutions like Chase and Wells Fargo."
        },
        {
            q: "Do I need to configure servers?",
            a: "No. Our Smart Client automatically routes you to the nearest US fiber node. There's no complex setup—just one click to connect."
        }
    ];

    const list = document.createElement('div');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '1rem';

    questions.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'glass-panel';
        itemEl.style.cursor = 'pointer';
        itemEl.style.overflow = 'hidden';

        const question = document.createElement('div');
        question.style.padding = '1.5rem';
        question.style.display = 'flex';
        question.style.justifyContent = 'space-between';
        question.style.alignItems = 'center';
        question.style.fontWeight = '600';
        question.innerHTML = `<span>${item.q}</span><span style="color: var(--accent-indigo)">+</span>`;

        const answer = document.createElement('div');
        answer.style.padding = '0 1.5rem 1.5rem 1.5rem';
        answer.style.color = 'var(--text-muted)';
        answer.style.display = 'none'; // Hidden by default
        answer.textContent = item.a;

        itemEl.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            // Close all others (optional, maybe nice for UX)
            // Array.from(list.children).forEach(child => child.querySelector('div:last-child').style.display = 'none');

            if (isOpen) {
                answer.style.display = 'none';
                question.querySelector('span:last-child').textContent = '+';
                itemEl.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            } else {
                answer.style.display = 'block';
                // Add simple fade in
                answer.style.animation = 'fadeIn 0.3s ease';
                question.querySelector('span:last-child').textContent = '-';
                itemEl.style.borderColor = 'var(--accent-indigo)';
            }
        });

        itemEl.appendChild(question);
        itemEl.appendChild(answer);
        list.appendChild(itemEl);
    });

    section.appendChild(list);
    return section;
}
