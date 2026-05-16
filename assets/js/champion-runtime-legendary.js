/**
 * Runtime partagé pour les champions légendaires
 * Inclus automatiquement par le créateur de champion admin
 * Requiert : championData, aura (définis dans le fichier de données du champion)
 */

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
  if (isMobile() || !aura) return;

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
    spellContainer.className = `spell-container${spell.isPassive ? ' passive-container' : ''}${!spell.isPassive && spell.name === 'Metamorphe' ? ' metamorphe-container' : ''}`;

    const spellDiv = document.createElement('div');
    spellDiv.className = `spell ${spell.isPassive ? 'passive' : ''}`;

    const spellImg = document.createElement('img');
    spellImg.src = spell.img;
    spellImg.alt = spell.name;
    spellDiv.appendChild(spellImg);
    spellContainer.appendChild(spellDiv);

    // Description toujours visible
    const mobileDescription = document.createElement('div');
    mobileDescription.className = 'mobile-spell-description';
    mobileDescription.innerHTML = createSpellDescriptionHTML(spell, index);

    spellContainer.appendChild(mobileDescription);
    spellsContainer.appendChild(spellContainer);
  });

  // Mettre à jour les statistiques
  const statsContent = document.getElementById("stats-content");
  if (statsContent && championData.stats) {
    const statsHTML = Object.entries(championData.stats)
      .map(([key, value]) => `
        <div class="stat-row">
          <div class="stat-name">${key}</div>
          <div class="stat-value">${value}</div>
        </div>
      `).join("");

    statsContent.innerHTML = statsHTML;
  }

  // Mettre à jour l'aura — affichée comme une ligne de sort (icône + description)
  const auraImg = document.getElementById("aura-img");
  const auraContainer = auraImg ? auraImg.closest('.aura-container') : null;
  if (aura && auraImg) {
    auraImg.src = aura.img;

    // Restructurer le conteneur en style spell-container
    if (auraContainer) {
      // Récupérer le .aura parent de auraImg
      const auraBubble = auraImg.closest('.aura');
      if (auraBubble) {
        // Déplacer .aura au même niveau que description (flex row)
        auraContainer.style.flexDirection = 'row';
        auraContainer.style.alignItems = 'flex-start';
        auraContainer.style.gap = '1rem';
        auraContainer.style.marginTop = '0.5rem';
        auraContainer.style.padding = '0.9rem';
        auraContainer.style.background = 'rgba(255,255,255,0.03)';
        auraContainer.style.border = '1px solid var(--glass-border)';
        auraContainer.style.borderRadius = '2px';
        auraBubble.style.flexShrink = '0';
        auraBubble.style.width = '60px';
        auraBubble.style.height = '60px';
      }
      const mobileAuraDesc = document.createElement('div');
      mobileAuraDesc.className = 'mobile-spell-description';
      mobileAuraDesc.innerHTML = `
        <div class="spell-header"><span class="spell-name" style="background:linear-gradient(135deg,#ffb700,#ff8f00);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Aura</span></div>
        <p>${aura.description}</p>
      `;
      auraContainer.appendChild(mobileAuraDesc);
    }
  } else if (auraContainer) {
    auraContainer.style.display = 'none';
  }
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", initPage);
