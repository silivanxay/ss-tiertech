// Templates - all HTML partials in one file
const templates = {
    header: `<!-- Navigation -->
<nav class="navbar" id="navbar">
    <div class="container">
        <a href="#" class="logo">
            <img src="https://raw.githubusercontent.com/silivanxay/ss-tiertech/refs/heads/main/Logo.png" alt="SS TierTech Logo" class="logo-img">
            <span>SS TierTech</span>
        </a>
        <ul class="nav-links">
            <li><a href="#features">ຄຸນສົມບັດ</a></li>
            <li><a href="#benefits">ປະໂຫຍດ</a></li>
            <li><a href="#modules">ໂມດູນ</a></li>
            <li><a href="#pricing">ລາຄາ</a></li>
            <li><a href="#contact">ຕິດຕໍ່</a></li>
        </ul>
        <div class="nav-cta">
            <a href="#contact" class="btn btn-accent">ທົດລອງໃຊ້ຟຣີ</a>
        </div>
        <button class="mobile-menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>`,

    hero: `<!-- Hero Section -->
<section class="hero" id="hero">
    <div class="hero-pattern"></div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-badge">
                <span>🚀</span>
                <span>TierTech Office - ລະບົບຫ້ອງການທັນສະໄໝ</span>
            </div>
            <h1>ລະບົບຫ້ອງການ<br><span>ທັນສະໄໝ</span><br>ສຳລັບທຸລະກິດ</h1>
            <p>ປ່ຽນແປງລະບົບເອກະສານແບບດັ້ງເດີມໃຫ້ເປັນລະບົບດິຈິຕອນ ສຳລັບອົງກອນ 10-100 ຄົນ. ຮອງຮັບການອະນຸມັດທັງດິຈິຕອນ ແລະ ເຊັນເຈ້ຍ, ຈໍ້າກາບໍລິສັດ ແລະ ກົດໝາຍພາສີລາວ.</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-accent">
                    <span>ເລີ່ມຕົ້ນດຽວນີ້</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
                <a href="#features" class="btn btn-outline">ຮຽນຮູ້ເພີ່ມເຕີມ</a>
            </div>
        </div>
        <div class="hero-visual">
            <div class="hero-mockup">
                <div class="mockup-header">
                    <div class="mockup-dot"></div>
                    <div class="mockup-dot"></div>
                    <div class="mockup-dot"></div>
                </div>
                <div class="mockup-content">
                    <div class="mockup-row">
                        <div class="mockup-icon blue">📄</div>
                        <div class="mockup-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div class="mockup-badge approved">ອະນຸມັດແລ້ວ</div>
                    </div>
                    <div class="mockup-row">
                        <div class="mockup-icon orange">📋</div>
                        <div class="mockup-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div class="mockup-badge pending">ລໍຖ້າ</div>
                    </div>
                    <div class="mockup-row">
                        <div class="mockup-icon green">✅</div>
                        <div class="mockup-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div class="mockup-badge new">ໃໝ່</div>
                    </div>
                </div>
            </div>
            <div class="floating-card floating-card-1">
                <div class="floating-card-icon" style="background: rgba(16, 185, 129, 0.1);">✅</div>
                <h4>ເອກະສານອະນຸມັດ</h4>
                <p style="color: var(--success);">+127 ມື້ນີ້</p>
            </div>
            <div class="floating-card floating-card-2">
                <div class="floating-card-icon" style="background: rgba(59, 130, 246, 0.1);">📊</div>
                <h4>ປະສິດທິພາບ</h4>
                <p style="color: var(--primary);">+85%</p>
            </div>
        </div>
    </div>
</section>`
};

// Load templates function
function loadTemplates() {
    const appContainer = document.getElementById('app');
    if (!appContainer) {
        console.error('App container not found');
        return;
    }

    // Load in order
    const order = ['header', 'hero'];
    order.forEach(id => {
        if (templates[id]) {
            const container = document.createElement('div');
            container.id = \`\${id}-container\`;
            container.innerHTML = templates[id];
            appContainer.appendChild(container);
        }
    });

    if (typeof initializeApp === 'function') {
        initializeApp();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTemplates);
} else {
    loadTemplates();
}
