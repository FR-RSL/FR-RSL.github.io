const championData = {
  type: "PV",
  spells: [
    {
      img: "assets/sort1.png",
      name: "Lames dissimulées",
      description: `
        Attaque 2 fois un ennemi.<br><br>
        Chaque frappe a 75% de chances de voler un buff aléatoire.
        Il est impossible de résister à cet effet si ce Champion se trouve
        sous un buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>.
      `,
      damage: "0.14*PV",
      levelInfo: [
        "Niv. 2 : Dégâts +10%",
        "Niv. 3 : Chance de Buff/Debuff +10%",
        "Niv. 4 : Dégâts +10%",
        "Niv. 5 : Chance de Buff/Debuff +15%",
      ],
    },
    {
      img: "assets/sort2.png",
      name: "Assassin nautique",
      description: `
        Attaque un ennemi.<br><br>
        Ignorera 25% de la DEF de la cible, ainsi que les buffs
        <span class='gbt'>Bouclier</span> et <span class='gbt'>Renforcer</span>.
        Ignorera également les buffs <span class='gbt'>Peau de Pierre</span> si
        ce Champion se trouve sous un buff 
        <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>.
      `,
      damage: "0.34*PV",
      cooldown: 5,
      levelInfo: [
        "Niv. 2 : Dégâts +10%",
        "Niv. 3 : Temps de recharge -1",
        "Niv. 4 : Dégâts +10%",
        "Niv. 5 : Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.png",
      name: "Assaut du Ressac",
      description: `
        Attaque tous les ennemis.
        Avant d'attaquer, place un buff <span class='gbt'>Voile parfait</span>
        et un buff <span class='gbt'>Augmentation des DÉG C.</span> de 30%
        sur ce Champion pendant 2 tours.<br><br>
        Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique
        plutôt que des dégâts de zone. Ignorera 15% de la DÉF du premier ennemi.
        Après avoir frappé le premier ennemi, frappera chacun des autres ennemis.
        Après la première frappe, chaque frappe successive ignore 5% supplémentaires de la DÉF
        de la cible (s'accumule jusqu'à 35%).<br><br>
        Pour chaque ennemi tué par cette attaque, augmente les PV de ce Champion de 5%
        (s'accumule jusqu'à 30%).
      `,
      damage: "0.32*PV",
      cooldown: 6,
      levelInfo: [
        "Niv. 2 : Dégâts +10%",
        "Niv. 3 : Temps de recharge -1",
        "Niv. 4 : Dégâts +10%",
        "Niv. 5 : Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.png",
      name: "Seigneur pirate [P]",
      description: `
        <span class='gbt'>Effet Passif</span><br><br>
        Au début de chaque Round, place un buff <span class='gbt'>Voile parfait</span>
        sur ce Champion pendant 1 tour.<br><br>
        Possède 20% de chances de renvoyer sur l'assaillant tous les dégâts et débuffs que
        reçoit ce Champion. Ne fonctionnera que sur les compétences qui infligent des dégâts
        ou qui infligent des dégâts et placent des débuffs.
        Ne fonctionne pas contre les Boss.<br><br>
        <span class='gbt'>Effet Actif</span><br><br>
        Si les dégâts renvoyés tuent un ennemi, remplit le Compteur de Tour de ce Champion
        de 30% et place un buff <span class='gbt'>Voile parfait</span> sur ce Champion pendant 1 tour.
      `,
      cooldown: 4,
      levelInfo: [
        "Niv. 2 : Temps de recharge -1",
        "Niv. 3 : Temps de recharge -1",
      ],
      isPassive: true,
    },
  ],
  stats: {
    "PV": "23 955",
    "ATQ": "793",
    "DÉF": "1 189",
    "VIT": "100",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    "RÉS": "40",
    "PRÉ": "0",
  },
};

const aura = {
  img: "../../../Images/Auras/speed.png",
  description: `Augmente la statistique VIT des Alliés dans les batailles d'Arène de 28%.`,
};

let currentTooltip = null;
let touchTimeout = null;

function showTooltip(event, spellIndex) {
  const spell = championData.spells[spellIndex];
  const tooltip = document.getElementById("tooltip");

  const levelInfoHTML = spell.levelInfo
    ? spell.levelInfo.map((info) => `<li>${info}</li>`).join("")
    : "";

  const damageHTML = spell.damage
    ? `<p><strong class="gold-t">Multiplicateur :</strong> <strong class="gold-t">${spell.damage}</strong></p>`
    : "";

  const cooldownHTML = spell.cooldown
    ? `<div class="cooldown">⏱ ${spell.cooldown} tours</div>`
    : "";

  tooltip.innerHTML = `
    <div class="spell-header">
      <span class="spell-name">${spell.name}</span>
      ${cooldownHTML}
    </div>
    <div>${spell.description}</div>
    ${damageHTML}
    ${levelInfoHTML ? `<ul class="level-info">${levelInfoHTML}</ul>` : ""}
  `;

  positionTooltip(event, tooltip);
  tooltip.classList.add("show");
  currentTooltip = tooltip;
}

function showAuraTooltip(event) {
  const tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = `
    <h4>Aura</h4>
    <div>${aura.description}</div>
  `;
  positionTooltip(event, tooltip);
  tooltip.classList.add("show");
  currentTooltip = tooltip;
}

function positionTooltip(event, tooltip) {
  const rect = event.currentTarget.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;
  
  // Dimensions estimées du tooltip
  const tooltipWidth = Math.min(450, viewportWidth * 0.9);
  const tooltipHeight = 200; // Estimation
  const margin = 10;
  
  let left = rect.left + scrollX + (rect.width / 2) - (tooltipWidth / 2);
  let top = rect.bottom + scrollY + margin;
  
  // Ajustement horizontal
  if (left < margin) {
    left = margin;
  } else if (left + tooltipWidth > viewportWidth - margin) {
    left = viewportWidth - tooltipWidth - margin;
  }
  
  // Ajustement vertical
  if (top + tooltipHeight > viewportHeight + scrollY - margin) {
    // Si pas assez de place en bas, afficher au-dessus
    top = rect.top + scrollY - tooltipHeight - margin;
    
    // Si toujours pas assez de place, centrer verticalement
    if (top < scrollY + margin) {
      top = scrollY + (viewportHeight - tooltipHeight) / 2;
    }
  }
  
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.maxWidth = `${tooltipWidth}px`;
}

function hideTooltip() {
  if (currentTooltip) {
    currentTooltip.classList.remove("show");
    currentTooltip = null;
  }
  if (touchTimeout) {
    clearTimeout(touchTimeout);
    touchTimeout = null;
  }
}

function handleTouch(event, index, isAura = false) {
  event.preventDefault();
  
  if (touchTimeout) {
    clearTimeout(touchTimeout);
  }
  
  if (isAura) {
    showAuraTooltip(event);
  } else {
    showTooltip(event, index);
  }
  
  touchTimeout = setTimeout(hideTooltip, 3000);
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Types et sorts
  document.getElementById("champion-type").textContent = championData.type;

  const spellsHTML = championData.spells
    .map((spell, index) => `
      <div class="spell ${spell.isPassive ? "passive" : ""}" 
           onmouseenter="showTooltip(event, ${index})" 
           onmouseleave="hideTooltip()"
           ontouchstart="handleTouch(event, ${index})"
           aria-label="${spell.name}">
        <img src="${spell.img}" alt="${spell.name}">
      </div>
    `).join("");
  document.getElementById("spells-section").innerHTML = spellsHTML;

  // Statistiques avec nouvelle structure
  const statsHTML = Object.entries(championData.stats)
    .map(([key, value]) => `
      <div class="stat-row">
        <div class="stat-name">${key}</div>
        <div class="stat-value">${value}</div>
      </div>
    `).join("");
  document.getElementById("stats-content").innerHTML = statsHTML;

  // Aura
  const auraImg = document.getElementById("aura-img");
  auraImg.src = aura.img;
  auraImg.parentElement.onmouseenter = showAuraTooltip;
  auraImg.parentElement.onmouseleave = hideTooltip;
  auraImg.parentElement.ontouchstart = (e) => handleTouch(e, 0, true);
  auraImg.parentElement.setAttribute('aria-label', 'Aura');
});

// Fermer tooltip en cliquant ailleurs
document.addEventListener('click', function(event) {
  if (currentTooltip && 
      !event.target.closest('.spell') && 
      !event.target.closest('.aura') &&
      !event.target.closest('.tooltip')) {
    hideTooltip();
  }
});

// Ajuster la position du tooltip lors du redimensionnement
window.addEventListener('resize', () => {
  if (currentTooltip && currentTooltip.classList.contains('show')) {
    hideTooltip();
  }
});

// Ajuster la position du tooltip lors du scroll
window.addEventListener('scroll', () => {
  if (currentTooltip && currentTooltip.classList.contains('show')) {
    hideTooltip();
  }
});