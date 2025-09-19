const championData = {
  type: "{{CHAMPION_TYPE_SHORT}}", // PV, ATQ, DEF, VIT, SUP
  spells: [
    {
      img: "assets/sort1.png",
      name: "{{SPELL_1_NAME}}",
      description: `
        {{SPELL_1_DESCRIPTION}}
      `,
      damage: "{{SPELL_1_DAMAGE}}", // Format: "0.14*PV" ou "0.34*ATQ"
      levelInfo: [
        "{{SPELL_1_LEVEL_2}}",
        "{{SPELL_1_LEVEL_3}}",
        "{{SPELL_1_LEVEL_4}}",
        "{{SPELL_1_LEVEL_5}}",
      ],
    },
    {
      img: "assets/sort2.png",
      name: "{{SPELL_2_NAME}}",
      description: `
        {{SPELL_2_DESCRIPTION}}
      `,
      damage: "{{SPELL_2_DAMAGE}}",
      cooldown: {{SPELL_2_COOLDOWN}}, // Nombre de tours
      levelInfo: [
        "{{SPELL_2_LEVEL_2}}",
        "{{SPELL_2_LEVEL_3}}",
        "{{SPELL_2_LEVEL_4}}",
        "{{SPELL_2_LEVEL_5}}",
      ],
    },
    {
      img: "assets/sort3.png",
      name: "{{SPELL_3_NAME}}",
      description: `
        {{SPELL_3_DESCRIPTION}}
      `,
      damage: "{{SPELL_3_DAMAGE}}",
      cooldown: {{SPELL_3_COOLDOWN}},
      levelInfo: [
        "{{SPELL_3_LEVEL_2}}",
        "{{SPELL_3_LEVEL_3}}",
        "{{SPELL_3_LEVEL_4}}",
        "{{SPELL_3_LEVEL_5}}",
      ],
    },
    {
      img: "assets/passif1.png",
      name: "{{PASSIVE_NAME}} [P]",
      description: `
        <span class='gbt'>Effet Passif</span><br><br>
        {{PASSIVE_DESCRIPTION}}
      `,
      cooldown: {{PASSIVE_COOLDOWN}}, // Si applicable, sinon supprimer cette ligne
      levelInfo: [
        "{{PASSIVE_LEVEL_2}}",
        "{{PASSIVE_LEVEL_3}}",
      ],
      isPassive: true,
    },
  ],
  stats: {
    "PV": "{{STAT_HP}}",
    "ATQ": "{{STAT_ATK}}",
    "DÉF": "{{STAT_DEF}}",
    "VIT": "{{STAT_SPD}}",
    "TAUX C.": "{{STAT_CRIT_RATE}}%",
    "DÉG C.": "{{STAT_CRIT_DMG}}%",
    "RÉS": "{{STAT_RES}}",
    "PRÉ": "{{STAT_ACC}}",
  },
};

const aura = null;

let currentTooltip = null;
let touchTimeout = null;

// Fonction pour détecter si on est sur mobile
function isMobile() {
  return window.innerWidth <= 767;
}

// Fonction pour créer le HTML de description d'un sort
function createSpellDescriptionHTML(spell, index) {
  const levelInfoHTML = spell.levelInfo
    ? spell.levelInfo.map((info, index) => `<li>Niv. ${index + 2} : ${info}</li>`).join("")
    : "";

  const damageHTML = spell.damage
    ? `<div class="damage-info">Dégâts : ${spell.damage}</div>`
    : "";

  const cooldownHTML = spell.cooldown
    ? `<div class="cooldown-info">Temps de recharge : ${spell.cooldown} tours</div>`
    : "";

  return `
    <h4>${spell.name}</h4>
    <div>${spell.description}</div>
    ${damageHTML}
    ${cooldownHTML}
    ${levelInfoHTML ? `<ul class="level-info">${levelInfoHTML}</ul>` : ""}
  `;
}

// Fonction pour créer le HTML de description de l'aura
function createAuraDescriptionHTML() {
  return `
    <h4>Aura</h4>
    <div>${aura.description}</div>
  `;
}

function showTooltip(event, spellIndex) {
  // Ne pas afficher le tooltip sur mobile
  if (isMobile()) return;
  
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;
  
  const spell = championData.spells[spellIndex];
  tooltip.innerHTML = createSpellDescriptionHTML(spell, spellIndex);
  positionTooltip(event, tooltip);
  tooltip.classList.add("show");
  currentTooltip = tooltip;
}

function showAuraTooltip(event) {
  // Ne pas afficher le tooltip sur mobile
  if (isMobile()) return;
  
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;
  
  tooltip.innerHTML = createAuraDescriptionHTML();
  positionTooltip(event, tooltip);
  tooltip.classList.add("show");
  currentTooltip = tooltip;
}

function positionTooltip(event, tooltip) {
  const spellRect = event.currentTarget.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const margin = 20;

  // D'abord positionner le tooltip pour calculer sa taille
  tooltip.style.left = '0px';
  tooltip.style.top = '0px';
  tooltip.style.visibility = 'hidden';
  tooltip.style.display = 'block';

  const tooltipRect = tooltip.getBoundingClientRect();
  const tooltipWidth = tooltipRect.width;
  const tooltipHeight = tooltipRect.height;

  let left = spellRect.left + spellRect.width / 2 - tooltipWidth / 2;
  let top = spellRect.bottom + 10;

  // Vérifier si le tooltip déborde horizontalement
  if (left + tooltipWidth > viewportWidth - margin) {
    left = viewportWidth - tooltipWidth - margin;
  }
  if (left < margin) {
    left = margin;
  }

  // Vérifier si le tooltip déborde verticalement en bas
  if (top + tooltipHeight > viewportHeight - margin) {
    // Essayer de le placer au-dessus du sort
    top = spellRect.top - tooltipHeight - 10;

    // Si ça déborde encore en haut, le placer au maximum visible en bas
    if (top < margin) {
      top = viewportHeight - tooltipHeight - margin;

      // Si même comme ça c'est trop grand, ajuster la hauteur
      if (top < margin) {
        top = margin;
        tooltip.style.maxHeight = `${viewportHeight - 2 * margin}px`;
        tooltip.style.overflowY = 'auto';
      }
    }
  }

  // NOUVELLE CONDITION : S'assurer que le tooltip ne chevauche pas l'image du sort
  const tooltipBottom = top + tooltipHeight;
  const tooltipRight = left + tooltipWidth;

  // Vérifier si le tooltip chevauche avec l'image du sort
  if (!(tooltipRight < spellRect.left ||
        left > spellRect.right ||
        tooltipBottom < spellRect.top ||
        top > spellRect.bottom)) {
    // Il y a chevauchement, repositionner
    if (spellRect.top - tooltipHeight - 10 >= margin) {
      // Placer au-dessus si possible
      top = spellRect.top - tooltipHeight - 10;
    } else if (spellRect.right + 10 + tooltipWidth <= viewportWidth - margin) {
      // Placer à droite si possible
      left = spellRect.right + 10;
      top = spellRect.top + spellRect.height / 2 - tooltipHeight / 2;
    } else if (spellRect.left - tooltipWidth - 10 >= margin) {
      // Placer à gauche si possible
      left = spellRect.left - tooltipWidth - 10;
      top = spellRect.top + spellRect.height / 2 - tooltipHeight / 2;
    } else {
      // En dernier recours, placer en bas avec décalage
      top = spellRect.bottom + 10;
      left = Math.max(margin, Math.min(left, viewportWidth - tooltipWidth - margin));
    }
  }

  // Appliquer la position finale
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.visibility = 'visible';
}

function hideTooltip() {
  const tooltip = document.getElementById("tooltip");
  if (tooltip) {
    tooltip.classList.remove("show");
    currentTooltip = null;
  }
  
  if (touchTimeout) {
    clearTimeout(touchTimeout);
    touchTimeout = null;
  }
}

function handleTouch(event, index, isAura = false) {
  // Sur mobile, ne pas gérer les touches puisqu'on affiche tout automatiquement
  if (isMobile()) return;
  
  event.preventDefault();
  
  if (touchTimeout) {
    clearTimeout(touchTimeout);
  }
  
  if (isAura) {
    showAuraTooltip(event);
  } else {
    showTooltip(event, index);
  }
  
  touchTimeout = setTimeout(hideTooltip, 5000);
}

// Fonction principale d'initialisation
function initializeChampionPage() {
  // Sorts
  const spellsContainer = document.getElementById("spells-section");
  if (spellsContainer && championData.spells) {
    const spellsHTML = championData.spells
      .map((spell, index) => {
        const passiveClass = spell.isPassive ? " passive" : "";
        const cooldownHTML = spell.cooldown
          ? `<div class="cooldown">${spell.cooldown}</div>`
          : "";
        
        return `
          <div class="spell-wrapper">
            <div class="spell${passiveClass}" data-spell-index="${index}">
              <img src="${spell.img}" alt="${spell.name}" class="spell-img">
              ${cooldownHTML}
            </div>
            <div class="spell-name">${spell.name}</div>
            <div class="mobile-spell-description" id="mobile-spell-${index}">
              ${createSpellDescriptionHTML(spell, index)}
            </div>
          </div>
        `;
      })
      .join("");
    spellsContainer.innerHTML = spellsHTML;

    // Event listeners pour les sorts (desktop seulement)
    championData.spells.forEach((spell, index) => {
      const spellElement = document.querySelector(`[data-spell-index="${index}"]`);
      if (spellElement) {
        spellElement.addEventListener('mouseenter', (e) => showTooltip(e, index));
        spellElement.addEventListener('mouseleave', (e) => {
          // Délai pour permettre à la souris de passer sur le tooltip
          setTimeout(() => {
            if (!spellElement.matches(':hover')) {
              hideTooltip();
            }
          }, 50);
        });
        spellElement.addEventListener('touchstart', (e) => handleTouch(e, index));
        spellElement.setAttribute('aria-label', spell.name);
      }
    });
  }

  // Statistiques
  const statsContent = document.getElementById("stats-content");
  if (statsContent && championData.stats) {
    const statsHTML = Object.entries(championData.stats)
      .map(([statName, statValue]) => `
        <div class="stat-row">
          <span class="stat-name">${statName}</span>
          <span class="stat-value">${statValue}</span>
        </div>
      `).join("");
    statsContent.innerHTML = statsHTML;
  }

  // Aura
  const auraImg = document.getElementById("aura-img");
  if (auraImg) {
    auraImg.src = aura.img;
    const auraElement = auraImg.parentElement;
    
    // Event listeners pour l'aura (desktop seulement)
    auraElement.addEventListener('mouseenter', showAuraTooltip);
    auraElement.addEventListener('mouseleave', (e) => {
      // Même logique que pour les sorts
      setTimeout(() => {
        if (!auraElement.matches(':hover')) {
          hideTooltip();
        }
      }, 50);
    });
    auraElement.addEventListener('touchstart', (e) => handleTouch(e, 0, true));
    auraElement.setAttribute('aria-label', 'Aura');
    
    // Créer la description mobile pour l'aura
    const mobileAuraDescription = document.createElement('div');
    mobileAuraDescription.className = 'mobile-aura-description';
    mobileAuraDescription.innerHTML = createAuraDescriptionHTML();
    
    // Ajouter la description après le container de l'aura
    const auraContainer = document.querySelector('.aura-container');
    if (auraContainer) {
      auraContainer.appendChild(mobileAuraDescription);
    }
  }
}

// Fonction pour gérer le redimensionnement de la fenêtre
function handleResize() {
  hideTooltip();
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initializeChampionPage);
window.addEventListener('resize', handleResize);

// Fermer le tooltip si on clique ailleurs
document.addEventListener('click', hideTooltip);

// Gestion globale de la souris pour fermer les tooltips
document.addEventListener('mouseover', function(e) {
  // Si on est sur mobile, ignorer
  if (isMobile()) return;
  
  // Si la souris n'est pas sur un élément avec tooltip, fermer le tooltip
  if (!e.target.closest('.spell') && !e.target.closest('.aura') && !e.target.closest('.tooltip')) {
    hideTooltip();
  }
});

// Ajouter un event listener pour les mouvements de souris plus général
document.addEventListener('mousemove', function(e) {
  if (isMobile()) return;
  
  // Si on a un tooltip actif et qu'on n'est plus sur l'élément source
  if (currentTooltip && currentTooltip.classList.contains('show')) {
    const activeSpells = document.querySelectorAll('.spell:hover');
    const activeAuras = document.querySelectorAll('.aura:hover');
    
    // Si aucun sort ni aura n'est survolé, fermer le tooltip
    if (activeSpells.length === 0 && activeAuras.length === 0) {
      hideTooltip();
    }
  }
});
