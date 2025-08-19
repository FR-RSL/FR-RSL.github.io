const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Bucher sortilege",
          description: `
            Attaque un ennemi.<br><br>
			Possède 50% de chances d’appliquer un effet <span class='gbt'>Propagation de Débuffs</span>, 
			prenant un débuff <span class='gbt'>Malédiction</span> et le plagant sur tous les ennemis.<br><br>
			Si la cible ne se trouve pas sous débuff <span class='gbt'>Malédiction</span>, propagera un autre débuff aléatoire.
          `,
          damage: "3.7*ATQ",
          levelInfo: [
            "Niv. 2 : Dégâts +10%",
            "Niv. 3 : Chance de Buff/débuff +5%",
            "Niv. 4 : Dégâts +10%",
            "Niv. 5 : Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Salves d'anathemes",
          description: `
            Attaque un ennemi.<br><br>
			Avant d’attaquer, place un buff <span class='gbt'>Augmentation d’ATQ</span> de 50%
			sur ce Champion pendant 2 tours. Répéte l’attaque sur tous les ennemis sous débuff
			<span class='gbt'>Malédiction</span>.<br><br> Cette attaque ignorera les buffs
			<span class='gbt'>Bouclier</span> contre les cibles sous débuff
			<span class='gbt'>Malédiction</span>.
          `,
          cooldown: 4,
          damage: "3.8*ATQ",
          levelInfo: [
          	"Niv. 2 : Dégâts +10%",
            "Niv. 3 : Dégâts +10%",
            "Niv. 4 : Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Malediction infernale",
          description: `
            Attaque tous les ennemis.<br><br>
			Avant d'attaquer, place un débuff <span class='gbt'>Malédiction</span>
			sur tous les ennemis pendant 2 tours. Les dégats infligés par cette compétence augmentent de 20%
			pour chaque débuff <span class='gbt'>Malédiction</span> placé. S'additionne jusqu'a 100%.<br><br>
			Soigne ce Champion de 20% de ses PV MAX pour chaque débuff <span class='gbt'>Malédiction</span> auquel
			l'ennemi a résisté ou qu'il a bloqué.
          `,
          cooldown: 4,
          damage: "4*ATQ",
          levelInfo: [
          	"Niv. 2 : Dégâts +10%",
            "Niv. 3 : Dégâts +10%",
            "Niv. 4 : Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Semi-engendre [P]",
          description: `
            Remplit le Compteur de Tour de ce Champion de 10% lorsqu’il attaque des cibles sans débuff
			<span class='gbt'>Malédiction</span>.<br><br>
			Ignorera 15% de la DEF d’une cible si elle se trouve sous débuff <span class='gbt'>Malédiction</span>.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 515",
        ATQ: "1 498",
        DEF: "980",
        VIT: "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
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