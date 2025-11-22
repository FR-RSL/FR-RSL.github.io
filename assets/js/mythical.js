// FR RSL - Mythical Champion Page JavaScript

// Current active form
let currentForm = "form1";
let isAnimating = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    parseMacros();
    initializeChampionPage();
    setupFormSwitcher();
    setupNavbarScroll();
});

// Parse and replace macros in skill descriptions
function parseMacros() {
    // Get all skill descriptions
    const descriptions = document.querySelectorAll('.skill-description, .aura-description');
    
    descriptions.forEach(desc => {
        let html = desc.innerHTML;
        
        // Replace ${BUFFS.XXX} patterns
        html = html.replace(/\$\{BUFFS\.(\w+)\}/g, (match, key) => {
            return BUFFS[key] || match;
        });
        
        // Replace ${DEBUFFS.XXX} patterns
        html = html.replace(/\$\{DEBUFFS\.(\w+)\}/g, (match, key) => {
            return DEBUFFS[key] || match;
        });
        
        // Replace ${EFFECT.XXX} patterns
        html = html.replace(/\$\{EFFECT\.(\w+)\}/g, (match, key) => {
            return EFFECT[key] || match;
        });
        
        desc.innerHTML = html;
    });
}

// Initialize champion page
function initializeChampionPage() {
    // Show the default form
    showForm(currentForm);
    
    // Set active button
    updateActiveButton(currentForm);
}

// Setup form switcher buttons
function setupFormSwitcher() {
    const formButtons = document.querySelectorAll('.form-btn');
    
    formButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetForm = this.dataset.form;
            
            if (targetForm !== currentForm && !isAnimating) {
                switchForm(targetForm);
            }
        });
    });
}

// Switch between forms with animation
function switchForm(newForm) {
    if (isAnimating || newForm === currentForm) return;
    
    isAnimating = true;
    
    // Get sections
    const sections = document.querySelectorAll('.champion-image-card, .skills-section, .stats-section');
    
    // Phase 1: Fade out with scale effect
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            section.style.opacity = '0.3';
            section.style.transform = 'scale(0.95)';
            section.style.filter = 'blur(4px)';
        }, index * 50);
    });
    
    // Phase 2: Update content
    setTimeout(() => {
        // Hide old form, show new form
        hideForm(currentForm);
        showForm(newForm);
        
        // Update active button
        updateActiveButton(newForm);
        
        // Update champion type if data attributes exist
        updateChampionType(newForm);
        
        // Update current form
        currentForm = newForm;
        
        // Animate stats change
        animateStatsChange();
    }, 500);
    
    // Phase 3: Fade in
    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'scale(1)';
                section.style.filter = 'none';
            }, index * 50);
        });
    }, 600);
    
    // Phase 4: Clean up
    setTimeout(() => {
        sections.forEach(section => {
            section.style.transition = '';
        });
        isAnimating = false;
    }, 1000);
}

// Show specific form
function showForm(formId) {
    const formElements = document.querySelectorAll(`[data-form="${formId}"]`);
    formElements.forEach(element => {
        if (!element.classList.contains('form-btn')) {
            element.style.display = '';
            element.classList.add('active-form');
        }
    });
}

// Hide specific form
function hideForm(formId) {
    const formElements = document.querySelectorAll(`[data-form="${formId}"]`);
    formElements.forEach(element => {
        if (!element.classList.contains('form-btn')) {
            element.style.display = 'none';
            element.classList.remove('active-form');
        }
    });
}

// Update active button state
function updateActiveButton(formId) {
    const buttons = document.querySelectorAll('.form-btn');
    buttons.forEach(button => {
        if (button.dataset.form === formId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Update champion type based on form
function updateChampionType(formId) {
    const typeElement = document.getElementById('champion-type');
    if (!typeElement) return;
    
    const typeAttribute = `data-type-${formId}`;
    const newType = typeElement.getAttribute(typeAttribute);
    
    if (newType) {
        // Animate the type change
        typeElement.style.transition = 'all 0.3s ease';
        typeElement.style.opacity = '0';
        typeElement.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            typeElement.textContent = newType;
            typeElement.style.opacity = '1';
            typeElement.style.transform = 'scale(1)';
        }, 300);
    }
}

// Animate stats change
function animateStatsChange() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach((stat, index) => {
        setTimeout(() => {
            // Add animation class
            stat.classList.add('animating');
            
            // Determine if increasing or decreasing (you can customize this logic)
            const random = Math.random();
            if (random > 0.6) {
                stat.classList.add('increasing');
            } else if (random < 0.4) {
                stat.classList.add('decreasing');
            }
            
            // Remove animation classes
            setTimeout(() => {
                stat.classList.remove('animating', 'increasing', 'decreasing');
            }, 600);
        }, index * 50);
    });
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Utility function to parse buff/debuff constants if needed
function parseBuffsDebuffs(text) {
    // This function can be expanded to handle BUFFS and DEBUFFS constants
    // For now, it returns the text as-is
    return text;
}

// Export functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchForm,
        showForm,
        hideForm
    };
}
