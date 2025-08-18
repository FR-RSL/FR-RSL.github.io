const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Brise-demon",
          description: `
            Attaque tous les ennemis.
            Avant d'attaquer, a 25% de chances
            de placer un débuff <span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.<br><br>
            A 50% de chances de placer un débuff <span class='gbt'>Affaiblissement</span> de 25%
            pendant 2 tours si la cible est membre de l'Alliance corrompue, un Boss ou un sbire.
            Les ennemies membre de l'Alliance corrompue, les Boss ou sbires ne peuvent pas resister a cet effet.<br><br>
            Accorde un Tour supplémentaire si un débuff <span class='gbt'>Affaiblissement</span> a ete place sur tous les ennemis
            par cette compétence.

          `,
          damage: "2.5*ATQ",
          levelInfo: [
            "Niv. 2 : Dégâts +10%",
            "Niv. 3 : Dégâts +10%",
            "Niv. 4 : Chance de Buff/débuff +10%",
            "Niv. 5 : Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Retour dans l'abime",
          description: `
            Attaque 2 fois un ennemi.<br><br>
            Chaque frappe ignorera 25% de la DEF de la cible.
            Si la cible est membre de l'Alliance corrompue, un Boss ou un sbire,
            chaque frappe ignore au lieu de ca 50% de la DEF de la cible.<br><br>
            Chaque frappe reduit l'ATQ de la cible de 5% (s'accumule jusqu'a 25%).
            Chaque frappe augmente également l'ATQ de ce Champion de 5% (s'accumule jusqu'a 50%).
          `,
          damage: "2.4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Niv. 2 : Dégâts +10%",
            "Niv. 3 : Dégâts +10%",
            "Niv. 4 : Temps de recharge -1"
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Fureur enragee",
          description: `
            Attaque 2 fois tous les ennemis.
            Avant d'attaquer, place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%
            sur ce Champion pendant 2 tours.<br><br>
            Pour chaque coup critique porte par la premiere frappe, augmente les degats infliges par la seconde frappe de 10%.
            Ignorera les buffs <span class='gbt'>Intuable</span> et <span class='gbt'>Bouclier</span>.
          `,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Niv. 2 : Dégâts +10%",
            "Niv. 3 : Dégâts +10%",
            "Niv. 4 : Temps de recharge -1"
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Cauchemar du Mal [P]",
          description: `
            Active la compétence <span class='gt'>Brise-demon</span> tous les cinq tours joues par ce Champion.<br><br>
            Les ennemis de l'Alliance corrompue, les Boss et les sbires ne peuvent pas porter de coup critique sur ce Champion.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 865",
        ATQ: "1 674",
        DEF: "914",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.png",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

let currentTooltip = null;
let touchTimeout = null;

// Fonction pour détecter si on est sur mobile
function isMobile() {
  return window.innerWidth <= 767;
}

// Fonction pour créer le HTML de description d'un sort
function createSpellDescriptionHTML(spell, index) {
  const levelInfoHTML = spell.levelInfo
    ? spell.levelInfo.map((info) => `<li>${info}</li>`).join("")
    : "";

  const damageHTML = spell.damage
    ? `<p><strong class="gold-t">Multiplicateur :</strong> <strong class="gold-t">${spell.damage}</strong></p>`
    : "";

  const cooldownHTML = spell.cooldown
    ? `<div class="cooldown">⏱ ${spell.cooldown} tours</div>`
    : "";

  return `
    <div class="spell-header">
      <span class="spell-name">${spell.name}</span>
      ${cooldownHTML}
    </div>
    <div>${spell.description}</div>
    ${damageHTML}
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
  
  const spell = championData.spells[spellIndex];
  if (!spell) return;
  
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;

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
  const rect = event.currentTarget.getBoundingClientRect();
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
  
  let left = rect.left + rect.width / 2 - tooltipWidth / 2;
  let top = rect.bottom + 10;
  
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
    top = rect.top - tooltipHeight - 10;

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
  if (!(tooltipRight < rect.left ||
        left > rect.right ||
        tooltipBottom < rect.top ||
        top > rect.bottom)) {
    // Il y a chevauchement, repositionner
    if (rect.top - tooltipHeight - 10 >= margin) {
      // Placer au-dessus si possible
      top = rect.top - tooltipHeight - 10;
    } else if (rect.right + 10 + tooltipWidth <= viewportWidth - margin) {
      // Placer à droite si possible
      left = rect.right + 10;
      top = rect.top + rect.height / 2 - tooltipHeight / 2;
    } else if (rect.left - tooltipWidth - 10 >= margin) {
      // Placer à gauche si possible
      left = rect.left - tooltipWidth - 10;
      top = rect.top + rect.height / 2 - tooltipHeight / 2;
    } else {
      // En dernier recours, placer en bas avec décalage
      top = rect.bottom + 10;
      left = Math.max(margin, Math.min(left, viewportWidth - tooltipWidth - margin));
    }
  }

  // Appliquer la position finale
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.visibility = 'visible';
}

function hideTooltip() {
  if (currentTooltip) {
    currentTooltip.classList.remove("show");
    currentTooltip.style.maxHeight = ''; // Reset max-height
    currentTooltip.style.overflowY = ''; // Reset overflow
    currentTooltip.style.display = 'none'; // Force la fermeture
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

function initPage() {
  // Types et sorts
  const championTypeElement = document.getElementById("champion-type");
  if (championTypeElement) {
    championTypeElement.textContent = championData.type;
  }

  const spellsContainer = document.getElementById("spells-section");
  if (!spellsContainer) return;
  
  // Créer les sorts avec descriptions mobiles
  spellsContainer.innerHTML = '';
  
  championData.spells.forEach((spell, index) => {
    // Créer le container pour mobile
    const spellContainer = document.createElement('div');
    spellContainer.className = 'spell-container';
    
    // Créer l'élément sort
    const spellDiv = document.createElement('div');
    spellDiv.className = `spell ${spell.isPassive ? "passive" : ""}`;
    spellDiv.setAttribute('aria-label', spell.name);
    
    const img = document.createElement('img');
    img.src = spell.img;
    img.alt = spell.name;
    spellDiv.appendChild(img);
    
    // Event listeners pour desktop seulement
    spellDiv.addEventListener('mouseenter', (e) => showTooltip(e, index));
    spellDiv.addEventListener('mouseleave', (e) => {
      // Petite vérification pour s'assurer qu'on quitte vraiment l'élément
      setTimeout(() => {
        if (!spellDiv.matches(':hover')) {
          hideTooltip();
        }
      }, 50);
    });
    spellDiv.addEventListener('touchstart', (e) => handleTouch(e, index));
    
    spellContainer.appendChild(spellDiv);
    
    // Créer la description mobile
    const mobileDescription = document.createElement('div');
    mobileDescription.className = 'mobile-spell-description';
    mobileDescription.innerHTML = createSpellDescriptionHTML(spell, index);
    
    spellContainer.appendChild(mobileDescription);
    spellsContainer.appendChild(spellContainer);
  });

  // Statistiques
  const statsContent = document.getElementById("stats-content");
  if (statsContent) {
    const statsHTML = Object.entries(championData.stats)
      .map(([key, value]) => `
        <div class="stat-row">
          <div class="stat-name">${key}</div>
          <div class="stat-value">${value}</div>
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
  // Masquer les tooltips lors du redimensionnement
  hideTooltip();
  
  // Réinitialiser si on change de mobile à desktop ou vice versa
  const wasMobile = document.body.classList.contains('mobile-view');
  const nowMobile = isMobile();
  
  if (wasMobile !== nowMobile) {
    if (nowMobile) {
      document.body.classList.add('mobile-view');
    } else {
      document.body.classList.remove('mobile-view');
    }
  }
}

// Ajouter des event listeners globaux pour une gestion plus robuste
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

// Gérer le redimensionnement de la fenêtre
window.addEventListener('resize', handleResize);

// Initialisation
document.addEventListener("DOMContentLoaded", function() {
  // Définir la classe mobile dès le départ
  if (isMobile()) {
    document.body.classList.add('mobile-view');
  }
  
  initPage();
});