const championData = {
  type: "Attaque",
  spells: [
    {
      img: "assets/sort1.png",
      name: "Laceration rapide",
      description: `
        Attaque un ennemi.<br><br>
        Remplit le Compteur de Tour de tous les alliés de 10% si cette
        attaque est critique.
      `,
      damage: "3.2*ATQ",
      levelInfo: [
        "Niv. 2 : Dégâts +10%",
        "Niv. 3 : Dégâts +10%",
      ],
    },
    {
      img: "assets/sort2.png",
      name: "Tacticien surnaturel",
      description: `
        Attaque 2 fois un ennemi. Placera 2 frappes supplémentaires
        si le Compteur de Tour de la cible est inferieur a 50%.<br><br>
        Ignorera un pourcentage de la DEF de la cible equivalent au Compteur
        de Tour actuel de la cible.<br><br>
        Reinitialise le temps de recharge de cette compétence si la cible est tuee.
      `,
      damage: "2*ATQ",
      cooldown: 4,
      levelInfo: [
        "Niv. 2 : Dégâts +10%",
        "Niv. 3 : Dégâts +10%",
        "Niv. 4 : Dégâts +10%",
        "Niv. 5 : Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.png",
      name: "Premonition decisive",
      description: `
        Attaque un ennemi.<br><br>
        Vole 100% du Compteur de Tour actuel de la cible et place un débuff
        <span class='gbt'>Peur Absolue</span> pendant 2 tours.
      `,
      damage: "5*ATQ",
      cooldown: 5,
      factions: [
        `Il est impossible de bloquer et de resister a l'effet de vol
        du Compteur de Tour et au débuff <span class='gbt'>Peur Absolue</span>.`,
        `Augmente les degats infliges par cette compétence en fonction de la difference entre la VIT
        de ce Champion et la VIT de la cible.`,
        `Attaquera également tous les autres ennemis qui ont plus de 50% de Compteur de Tour.
        Vole 100% du Compteur de Tour actuel de chaque cible et leur inflige un débuff <span class='gbt'>Peur Absolue</span> pendant 2 tours.`
      ],
      levelInfo: [
        "Niv. 2 : Dégâts +10%",
        "Niv. 3 : Dégâts +10%",
        "Niv. 4 : Dégâts +10%",
        "Niv. 5 : Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.png",
      name: "Fleau du Mikage [P]",
      description: `
        Remplit le Compteur de Tour de ce Champion de 15% des qu'un Champion
        ennemi joue un tour. Si plusieurs Champions de l'equipe disposent de
        cette compétence, une seule sera activee.
      `,
      factions: [
        `
        Les effets d'augmentation du Compteur de Tour sur les alliés sont 20% plus efficaces.
        Les effets d'augmentation du Compteur de Tour utilises sur les ennemis sont 20% moins efficaces.
        Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
        `,
        `
        Des que ce Champion voit son Compteur de Tour rempli, augmente de 5% les degats
        de sa prochaine attaque. Se reinitialise apres qu'une compétence est utilisee.
        Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
        `,
        `
        Tous les alliés sont immunises contre les effets de reduction du Compteur de TOur utilises par les ennemis.
        `,
      ],
      isPassive: true,
    },
  ],
  stats: {
    PV: "15 525",
    ATQ: "1 696",
    DEF: "848",
    VIT: "106",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    RÉS: "30",
    PRÉ: "0",
  },
};

const aura = {
  img: "../../../../../../assets/images/auras/sup-speed.png",
  description: `
    Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.<br><br>
    Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 15%.<br>
    (ne s'applique qu'a la Faction du Clan de l'Ombre).
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
    ? spell.levelInfo.map((info) => `<li>${info}</li>`).join("")
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
          <div class="faction-count">${index + 1} ${index === 0 ? "allié" : "alliés"} de faction :</div>
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
