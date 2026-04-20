
// Terminal Animation for IKKF Demo

const terminalSteps = [
    {
        type: 'command',
        text: 'ikkf start "Build authentication system"',
        delay: 500
    },
    {
        type: 'output',
        phase: 1,
        name: 'ACKNOWLEDGE',
        desc: 'Task understood: Build authentication system with JWT tokens',
        status: 'complete',
        delay: 800
    },
    {
        type: 'output',
        phase: 2,
        name: 'DOMAIN DETECTION',
        desc: 'Domain: Backend/API | Expertise: JWT, bcrypt, session management',
        status: 'complete',
        delay: 800
    },
    {
        type: 'output',
        phase: 3,
        name: 'CHECK EXISTING',
        desc: 'Found: auth.middleware.js, user.model.js | Using existing patterns',
        status: 'complete',
        delay: 1000
    },
    {
        type: 'output',
        phase: 4,
        name: 'RESEARCH',
        desc: 'Best practice: RS256 signing, 15min access/7d refresh tokens',
        status: 'complete',
        delay: 1200
    },
    {
        type: 'output',
        phase: 5,
        name: 'DECOMPOSITION',
        desc: 'Chunks: 1)JWT lib 2)Auth routes 3)Middleware 4)Tests',
        status: 'complete',
        delay: 1000
    },
    {
        type: 'output',
        phase: 6,
        name: 'SYNTHESIZE',
        desc: 'Plan: Express + jsonwebtoken + bcryptjs + jest',
        status: 'complete',
        delay: 1000
    },
    {
        type: 'output',
        phase: 7,
        name: 'EXECUTE',
        desc: '✓ auth.controller.js | ✓ auth.routes.js | ✓ auth.test.js',
        status: 'complete',
        delay: 1500
    },
    {
        type: 'summary',
        text: 'Task complete. 4 files created. All tests passing.',
        delay: 500
    },
    {
        type: 'prompt',
        text: '_',
        delay: 0
    }
];

class TerminalAnimator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentStep = 0;
        this.isAnimating = false;
    }

    async start() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.currentStep = 0;
        this.container.innerHTML = '';
        
        for (const step of terminalSteps) {
            await this.renderStep(step);
            await this.sleep(step.delay);
        }
        
        this.isAnimating = false;
    }

    async renderStep(step) {
        const element = document.createElement('div');
        
        switch (step.type) {
            case 'command':
                element.className = 'terminal-line';
                element.innerHTML = `
                    <span class="prompt">$</span>
                    <span class="command typing">${this.escapeHtml(step.text)}</span>
                `;
                break;
                
            case 'output':
                element.className = 'terminal-output-item';
                element.style.opacity = '0';
                element.innerHTML = `
                    <div class="phase-line">
                        <span class="phase-num">${step.phase}</span>
                        <span class="phase-name">${step.name}</span>
                        <span class="phase-status">${step.status === 'complete' ? '✓' : '→'}</span>
                    </div>
                    <div class="phase-desc">${step.desc}</div>
                `;
                break;
                
            case 'summary':
                element.className = 'terminal-summary';
                element.style.opacity = '0';
                element.innerHTML = `
                    <div class="summary-line">
                        <span class="summary-icon">🎉</span>
                        <span class="summary-text">${step.text}</span>
                    </div>
                `;
                break;
                
            case 'prompt':
                element.className = 'terminal-line';
                element.innerHTML = `
                    <span class="prompt">$</span>
                    <span class="cursor">${step.text}</span>
                `;
                break;
        }
        
        this.container.appendChild(element);
        
        // Animate in
        if (step.type === 'output' || step.type === 'summary') {
            await this.sleep(50);
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '1';
        }
        
        // Scroll to bottom
        this.container.scrollTop = this.container.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    reset() {
        this.container.innerHTML = '';
        this.currentStep = 0;
        this.isAnimating = false;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const terminal = new TerminalAnimator('terminal-body');
    
    // Start animation when terminal section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !terminal.isAnimating) {
                terminal.start();
            }
        });
    }, { threshold: 0.5 });
    
    const terminalSection = document.getElementById('terminal');
    if (terminalSection) {
        observer.observe(terminalSection);
    }
    
    // Replay button
    const replayBtn = document.getElementById('replay-btn');
    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            terminal.reset();
            terminal.start();
        });
    }
});

// Smooth scroll for navigation (keep existing)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in elements on scroll (keep existing)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(item);
});

// Observe pricing cards
document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(card);
});
