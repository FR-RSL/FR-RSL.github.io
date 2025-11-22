const championData = {
  type: "Defense",
  spells: [
    {
      img: "assets/sort1.png",
      name: "Part de New York",
      description: `
        Attaque 2 fois un ennemi. Lors d'une contre-attaque, répètera cette attaque sur un ennemi aleatoire.<br><br>
        Ignorera 3% de la DEF de la cible pour chaque buff dont bénéficie ce Champion (s'accumule jusqu'a 15%).
      `,
      damage: "1.7*DEF",
      levelInfo: [
        "Dégâts +5%",
        "Dégâts +5%",
        "Dégâts +10%",
      ],
    },
    {
      img: "assets/sort2.png",
      name: "Carap-As !",
      description: `
        Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours et un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf ce Champion pendant 2 tours.<br><br>
        Place également un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.
      `,
      cooldown: 5,
      levelInfo: [
        "Temps de recharge -1",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.png",
      name: "Tortues ensembles",
      description: `
        Attaque tous les ennemis. Les dégâts infligés par cette compétence augmentent de 5% pour chaque buff sur tous les alliés et ennemis.<br><br>
        Retire tous les buffs sur tous les ennemis si cette attaque tue un ennemi. Il est impossible de résister a cet effet.
      `,
      damage: "3.4*DEF",
      cooldown: 4,
      factions: [
        `Ignorera 15% de la DEF de la cible pour chaque <span class='gold-t'>Leonardo</span>, <span class='gold-t'>Donatello</span>, <span class='gold-t'>Michelangelo</span> et <span class='gold-t'>Raphael</span> dans l'équipe. Ne compte pas ce Champion.`,
        `Augmente les dégâts infligés par cette compétence proportionnellement aux PV manquants de ce Champion.`,
        `Active cette compétence dès que les PV d'un allié tombent sous 50%. Se produit une fois par compétence.
        Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée`
      ],
      levelInfo: [
        "Dégâts +10%",
        "Dégâts +10%",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.png",
      name: "Heros en semi-carapace [P]",
      description: `
        Place un buff ${BUFFS.STONE_SKIN} sur ce Champion pendant 1 tour à chaque fois que les PV de ce Champion tombent sous 50%. Se produit une fois par compétence.<br><br>Des que <span class='gold-t'>Leonardo</span>, <span class='gold-t'>Donatello</span>, <span class='gold-t'>Michelangelo</span> ou <span class='gold-t'>Raphael</span> attaque, ce Champion se joint a cette attaque.
      `,
      isPassive: true,
    },
  ],
  stats: {
    PV: "17 670",
    ATQ: "782",
    DEF: "1 619",
    VIT: "101",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    RÉS: "40",
    PRÉ: "0",
  },
};

const aura = {
  img: "../../../../../../assets/images/auras/defence.png",
  description: `
    Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%.
  `,
};

let currentTooltip = null;
let touchTimeout = null;

// Fonction pour détecter si on est sur mobile
function isMobile() {
  return window.innerWidth <= 767;
}

// Fonction pour créer le HTML de description d'un sort avec support des factions
function createSpellDescriptionHTML(spell, index) {
  const levelInfoHTML = spell.levelInfo
    ? spell.levelInfo.map((info, index) => `<li>Niv. ${index + 2} : ${info}</li>`).join("")
    : "";

  const damageHTML = spell.damage
    ? `<p><strong class="gold-t">Multiplicateur :</strong> <strong class="gold-t">${spell.damage}</strong></p>`
    : "";

  const cooldownHTML = spell.cooldown
    ? `<div class="cooldown">⏱ ${spell.cooldown} tours</div>`
    : "";

  // Génération spéciale des informations de factions pour Tetsuya (Lead Faction)
  const factionsHTML = spell.factions
    ? spell.factions.map((info, index) => `
        <div class="faction-effect">
          <div class="faction-count">${index + 1} ${index === 0 ? "allié" : "alliés"} ${index === 0 ? "Tortue" : "Tortues"} :</div>
          <div class="faction-description">${info}</div>
        </div>
      `).join("")
    : "";

  return `
    <div class="spell-header">
      <span class="spell-name">${spell.name}</span>
      ${cooldownHTML}
    </div>
    <p>${spell.description}</p>
    ${damageHTML}
    ${factionsHTML ? `<div class="factions-info">${factionsHTML}</div>` : ""}
    ${levelInfoHTML ? `<ul class="level-info">${levelInfoHTML}</ul>` : ""}
  `;
}

// Fonction pour positionner intelligemment la tooltip
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

// Fonction pour afficher la tooltip sur desktop
function showTooltip(event, spellIndex) {
  if (isMobile()) return;

  const spell = championData.spells[spellIndex];
  const tooltip = document.getElementById("tooltip");

  tooltip.innerHTML = createSpellDescriptionHTML(spell, spellIndex);

  // Utiliser le positionnement intelligent
  positionTooltip(event, tooltip);
  tooltip.classList.add("show");

  currentTooltip = tooltip;
}

// Fonction pour masquer la tooltip
function hideTooltip() {
  if (currentTooltip) {
    currentTooltip.classList.remove("show");
    currentTooltip.style.maxHeight = ''; // Reset max-height
    currentTooltip.style.overflowY = ''; // Reset overflow
    currentTooltip.style.display = 'none';
    currentTooltip = null;
  }
  if (touchTimeout) {
    clearTimeout(touchTimeout);
    touchTimeout = null;
  }
}

// Fonction pour gérer les interactions tactiles
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

// Fonction pour l'aura
function showAuraTooltip(event) {
  if (isMobile()) return;

  const tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = `
    <h4 class="gold-t">Aura</h4>
    <p>${aura.description}</p>
  `;

  // Utiliser le positionnement intelligent
  positionTooltip(event, tooltip);
  tooltip.classList.add("show");

  currentTooltip = tooltip;
}

// Fonction d'initialisation de la page
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
    const spellContainer = document.createElement('div');
    spellContainer.className = 'spell-container';

    const spellDiv = document.createElement('div');
    spellDiv.className = `spell ${spell.isPassive ? 'passive' : ''}`;

    const spellImg = document.createElement('img');
    spellImg.src = spell.img;
    spellImg.alt = spell.name;
    spellDiv.appendChild(spellImg);

    // Événements pour desktop
    spellDiv.addEventListener('mouseenter', (e) => showTooltip(e, index));
    spellDiv.addEventListener('mouseleave', hideTooltip);
    spellDiv.addEventListener('touchstart', (e) => handleTouch(e, index));

    spellContainer.appendChild(spellDiv);

    // Créer la description mobile (toujours, le CSS gère l'affichage)
    const mobileDescription = document.createElement('div');
    mobileDescription.className = 'mobile-spell-description';
    mobileDescription.innerHTML = createSpellDescriptionHTML(spell, index);

    spellContainer.appendChild(mobileDescription);
    spellsContainer.appendChild(spellContainer);
  });

  // Mettre à jour les statistiques
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

  // Mettre à jour l'aura
  const auraImg = document.getElementById("aura-img");
  if (auraImg) {
    auraImg.src = aura.img;
    auraImg.addEventListener('mouseenter', showAuraTooltip);
    auraImg.addEventListener('mouseleave', hideTooltip);
    auraImg.addEventListener('touchstart', (e) => handleTouch(e, 0, true));

    // Créer la description mobile de l'aura (toujours, le CSS gère l'affichage)
    const auraContainer = auraImg.closest('.aura-container');
    if (auraContainer) {
      const mobileAuraDesc = document.createElement('div');
      mobileAuraDesc.className = 'mobile-aura-description';
      mobileAuraDesc.innerHTML = `
        <h4 class="gold-t">Aura de Lead Faction</h4>
        <p>${aura.description}</p>
      `;
      auraContainer.appendChild(mobileAuraDesc);
    }
  }
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", initPage);
