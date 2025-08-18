const championData = {
type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Chant de dague",
          description: `
            Attaque tous les ennemis.<br><br>
            A 15% de chances de placer un débuff
            <span class='gbt'>Etourdissement</span> pendant 1 tour.
            Ignorera 20% de la RES de chaque cible pour chaque buff
            <span class='gbt'>Soins continus</span> sur ce Champion.
          `,
          damage: "2.4*ATQ",
          levelInfo: [
            "Niv. 2 : Dégâts +10%",
            "Niv. 3 : Chance de Buff/débuff +10%",
            "Niv. 4 : Dégâts +15%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Orchestre de Guerre",
          description: `
            Selectionne une cible.<br><br>
            Si la cible est un ennemi, reduit d'1 tour la durée de tous les buffs
            sur tous les ennemis. Place un débuff <span class='gbt'>Poison</span> de 5%
            sur tous les ennemis pendant 2 tours et un <span class='gbt'>Poison</span> de 5%
            supplémentaires pendant 2 tours pour chaque buff <span class='gbt'>Soins continus</span>
            sur ce Champion. Il est impossible de resister a ces débuffs.
            Ensuite, active instantanement tous les débuffs <span class='gbt'>Poison</span>
            sur tous les ennemis.<br><br>
            Si la cible est un allié, augmente d'1 tour la durée de tous les buffs, pui
            active instantanement tous les buffs <span class='gbt'>Soins continus</span> sur tous les alliés.
            Place un buff <span class='gbt'>Voile Parfait</span> sur ce Champion pendant 2 tours.
            Place également un buff <span class='gbt'>Soins continus</span> de 15% sur ce Champion
            pendant 2 tours et un autre buff <span class='gbt'>Soins continus</span> de 15% pendant 2 tours
            pour chaque allié vivant.<br><br>
            Enfin, remplit le Compteur de Tour de ce Champion de 15% pour chaque buff
            ou débuff place par cette compétence.
          `,
          cooldown: 5,
          levelInfo: [
            "Niv. 2 : Temps de recharge -1",
            "Niv. 3 : Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Crescendo rythmique",
          description: `
            Attaque un ennemi.
            Avant d'attaquer, a 100% de chances de retirer tous les buffs
            de la cible et de placer un débuff <span class='gbt'>Reduction de DEF</span> de 60% 
            et un débuff <span class='gbt'>Affaiblissement</span> de 25% sur la cible pendant 2 tours.
            Ignorera 20% de la RES de la cible pour chaque buff <span class='gbt'>Soins continus</span>
            sur ce Champion.
          `,
          damage: "5*ATQ | PV MAX ennemis*(0.2 + 0.1*Poisons)",
          cooldown: 4,
          factions: [
            `Retire tous les buffs de tous les ennemis si la cible initiale est tuee.
            Il est impossible de resister a ce retrait de buffs.`,
            `Ignorera 5% de la DEF de la cible pour chaque débuff
            <span class='gbt'>Poison</span> dont elle est affligee et chaque buff
            <span class='gbt'>Soins continus</span> sur ce Champion.`,
            `Si la cible initiale se trouve sous débuff <span class='gbt'>Poison</span>,
            attaque également tous les autres ennemis. Les degats infliges sont
            proportionnels aux PV MAX de la cible initiale et au nombre de débuffs
            <span class='gbt'>Poison</span> dont elle est affligee.
            Si la cible initiale est un Boss ou un sbire, les degats infliges
            sont equivalent a 10% de ses PV MAX.`,
          ],
          levelInfo: [
            "Niv. 2 : Dégâts +10%",
            "Niv. 3 : Dégâts +10%",
            "Niv. 4 : Dégâts +15%",
            "Niv. 5 : Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Symphonie de Sylvains [P]",
          description: `
            Ignore 15% de la DEF de la cible lorsque ce Champion attaque en se trouvant
            sous buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile Parfait</span>.<br><br>
            Ce Champion recoit 30% de degats en moins contre les ennemis qui ne se trouvent pas
            sous buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile Parfait</span>.
          `,
          factions: [
            `Chaque buff <span class='gbt'>Soins continus</span> 
            sur ce Champion augmente son TAUX C. de 20%.`,
            `A chaque fois qu'un buff <span class='gbt'>Soins continus</span>
            s'active sur ce Champion, remplit également son Compteur de Tour de 8%.`,
            `A chaque fois qu'un buff <span class='gbt'>Soins continus</span>
            s'active sur ce Champion ou un allié, augmente les degats de ce Champion
            de 5% (s'accumule jusqu'a 150%).`,
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 855",
        ATQ: "1 663",
        DEF: "859",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
  img: "../../../../../../assets/images/auras/sup-crit.png",
  description: `
    Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 25%.<br><br>
    Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%.<br>
    (ne s'applique qu'a la Faction des Gardes Sylvains).
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
function positionTooltip(event, tooltip, spellIndex = null) {
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

  // LOGIQUE SPÉCIALE : Pour les sorts A2 et A3, s'assurer qu'ils sont entièrement visibles
  if (spellIndex !== null && (spellIndex === 1 || spellIndex === 2)) { // A2 = index 1, A3 = index 2
    console.log(`Special positioning for spell index ${spellIndex}`);
    console.log(`Tooltip height: ${tooltipHeight}, viewport height: ${viewportHeight}`);

    // Calculer la position optimale pour que le tooltip soit entièrement visible
    const maxTop = viewportHeight - tooltipHeight - margin;
    const minTop = margin;

    console.log(`Available range: ${minTop} to ${maxTop}`);

    // Essayer d'abord en dessous du sort
    let preferredTop = rect.bottom + 10;

    // Si ça dépasse en bas, essayer au-dessus
    if (preferredTop + tooltipHeight > viewportHeight - margin) {
      preferredTop = rect.top - tooltipHeight - 10;
    }

    // Si ça dépasse en haut, centrer dans l'espace disponible
    if (preferredTop < margin) {
      preferredTop = Math.max(minTop, (viewportHeight - tooltipHeight) / 2);
    }

    top = preferredTop;
    console.log(`Final position for spell ${spellIndex}: ${top}`);
  }



  // Vérifier si le tooltip déborde horizontalement
  if (left + tooltipWidth > viewportWidth - margin) {
    left = viewportWidth - tooltipWidth - margin;
  }
  if (left < margin) {
    left = margin;
  }

  // Vérifier si le tooltip déborde verticalement en bas (sauf pour A2/A3 déjà forcés)
  if (spellIndex !== 1 && spellIndex !== 2 && top + tooltipHeight > viewportHeight - margin) {
    // Essayer de le placer au-dessus du sort
    top = rect.top - tooltipHeight - 10;

    // Si ça déborde encore en haut, l'aligner par le haut
    if (top < margin) {
      top = margin;
    }
  }



  // Si le tooltip est trop grand pour l'écran, limiter sa hauteur
  if (tooltipHeight > viewportHeight - 2 * margin) {
    tooltip.style.maxHeight = `${viewportHeight - 2 * margin}px`;
    tooltip.style.overflowY = 'auto';
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

  // SÉCURITÉ FINALE : S'assurer que top est toujours positif juste avant application
  if (top < 0) {
    console.log(`FINAL CHECK: Top was ${top}, forcing to 20px`);
    top = 20;
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
  positionTooltip(event, tooltip, spellIndex);
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
