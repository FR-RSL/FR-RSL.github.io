const championData = {
type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Marteau de Kaerok",
          description: `
            Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. <br><br>
			Ignorera 25% de la RES de la cible si ce Champion dispose d’un buff ${BUFFS.SHIELD}.
          `,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Ecrasement de bouclier",
          description: `
            Soigne tous les alliés de la valeur totale des ${BUFFS.SHIELD}s sur tous les alliés.<br><br>
			Retire ensuite tous les ${BUFFS.SHIELD}s sur les alliés, puis attaque tous les ennemis. Les dégâts infligés par cette attaque sont équivalentes à la valeur totale des ${BUFFS.SHIELD}s retirés (les dégâts ne peuvent pas dépasser 1000% de la DEF de ce Champion).
          `,
		  damage: "DEF + Valeur du Bouclier",
          cooldown: 4,
          levelInfo: [
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Admirez la bannière",
          description: `
            Place un buff ${BUFFS.SHIELD} équivalent à 30% des PV MAX de ce Champion sur tous les alliés pendant 2 tours et un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf ce Champion pendant 2 tours.
          `,
          cooldown: 5,
          factions: [
            `Active instantanément cette compétence  dès qu’un allié est ranimé. Ne placera pas cette compétence en temps de recharge. Si plusieurs Champion de l’équipe disposent de cette Compétence, une seule sera activée.`,
            `Place également un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 2 tours.`,
            `Les buffs placés par cette compétence ne peuvent pas être retirés.`,
          ],
          levelInfo: [
            "Bouclier +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Chevalier ultime [P]",
          description: `
            Les alliés sous buff ${BUFFS.SHIELD} reçoivent 10% de dégâts en moins. Si plusieurs Champions de l’équipe disposent de cette Compétence, une seule sera activée.
          `,
          factions: [
            `Les alliés sous buff ${BUFFS.SHIELD} sont immunisés contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} et ${DEBUFFS.PETRIFICATION}`,
            `Les alliés sous buffs ${BUFFS.ALLY_PROTECT} ont 20% de chances de contre-attaquer lorsqu’ils sont frappés.`,
            `La valeur de tous les buffs ${BUFFS.SHIELD} alliés est augmentée de 100% sauf les buffs ${BUFFS.SHIELD} accordés par des Jeux d’Artefacts.`,
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 825",
        ATQ: "760",
        DEF: "1 564",
        VIT: "106",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
  img: "../../../../../../assets/images/auras/sup-defence.png",
  description: `
    Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%.<br><br>
    Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%.
    (ne s'applique qu'a la Faction des Seigneurs de l'Oriflamme).
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
