// Données des deux formes de Toshiro
const championForms = {
  form1: {
    type: "Attaque",
    spells: [
      {
        img: "assets/sort1.png",
        name: "Saignée rapide",
        description: `
          Attaque un ennemi. Possède 50% de chances d'attaquer
          un autre ennemi s'il se trouve sous debuff <span class='gbt'>Sangsue</span>.<br><br>
          Place également un buff <span class='gbt'>Voile Parfait</span> sur ce Champion pendant 1 tour.
        `,
        damage: "2.8*ATQ + 0.1*PV",
        levelInfo: [
          "Niv. 2 : Dégâts +20%",
        ]
      },
      {
        img: "assets/sort2.png",
        name: "Fléchettes sanguines",
        description: `
          Attaque 4 fois de façon aléatoire. Chaque frappe augmente l'ATQ et les PV
          de ce Champion de 5% lorsqu'il se trouve sous sa Forme de base (s'accumule jusqu'à 100%).
          Si une cible se trouve sous debuff <span class='gbt'>Sangsue</span>, l'ATQ et les PV de ce Champion
          sont au lieu de ça augmentés de 10%.<br><br>
          Les dégâts infligés par cette compétence augmentent de 15% pour chaque debuff
          <span class='gbt'>Sangsue</span> placé sur l'équipe ennemie.
        `,
        damage: "1.5*ATQ + 0.1*PV",
        cooldown: 3,
        levelInfo: [
          "Niv. 2 : Dégâts +10%",
          "Niv. 3 : Dégâts +10%",
        ],
      },
      {
        img: "assets/sort3.png",
        name: "Typhon sanglant",
        description: `
          Attaque tous les ennemis.<br><br>
          Place un debuff <span class='gbt'>Réduction de DEF</span> de 60% et un debuff
          <span class='gbt'>Sangsue</span> pendant 2 tours.<br><br>
          Place une frappe supplémentaire sur les ennemis sous 2 debuffs ou plus.
        `,
        damage: "3.5*ATQ + 0.1*PV",
        cooldown: 3,
        levelInfo: [
          "Niv. 2 : Dégâts +20%",
          "Niv. 3 : Ignorer la RES +20%"
        ]
      },
      {
        img: "assets/meta1.png",
        name: "Métamorphe",
        description: `
          Fait passer ce Champion à sa Forme alternative.
          Accorde ensuite un Tour supplémentaire.
        `,
        cooldown: 4,
        isMetamorphosis: true,
      },
      {
        img: "assets/passif1.png",
        name: "Faim de Vornspore [P]",
        description: `
          Remplit le Compteur de Tour de ce Champion de 5% chaque fois 
          qu'il attaque une cible sous debuff <span class='gbt'>Sangsue</span>.<br><br>
          Inflige 25% de dégâts en plus aux ennemis sous debuff <span class='gbt'>Sangsue</span>.
        `,
        isPassive: true,
      },
    ],
    stats: {
      "PV": "18 660",
      "ATQ": "1 520",
      "DÉF": "1 090",
      "VIT": "103",
      "TAUX C.": "15%",
      "DÉG C.": "63%",
      "RÉS": "30",
      "PRÉ": "20"
    },
  },
  form2: {
    type: "PV",
    spells: [
      {
        img: "assets/sort4.png",
        name: "Entaille d'iaito",
        description: `
          Attaque tous les ennemis.
          Possède 50% de chances d'augmenter d'1 tour la durée de tous les debuffs ennemis.
        `,
        damage: "0.16*PV + 0.7*ATQ",
        levelInfo: [
          "Niv. 2 : Dégâts +20%"
        ]
      },
      {
        img: "assets/sort5.png",
        name: "Dessine dans le sang",
        description: `
          Attaque tous les ennemis.<br><br>
          Soigne tous les alliés sauf ce Champion à hauteur de 10% des dégâts infligés.
          La valeur du soin augmente de 5% pour chaque debuff <span class='gbt'>Sangsue</span>
          dont est affligée l'équipe ennemie.
        `,
        damage: "0.25*PV + 0.7*ATQ",
        cooldown: 4,
        levelInfo: [
          "Niv. 2 : Dégâts +20%",
          "Niv. 3 : Temps de recharge -1"
        ]
      },
      {
        img: "assets/sort6.png",
        name: "Massacre cinglant",
        description: `
          Attaque tous les ennemis.
          Place un debuff <span class='gbt'>Réduction de VIT</span> de 30% 
          et un debuff <span class='gbt'>Sangsue</span> pendant 2 tours.<br><br>
          Accorde ensuite un Tour supplémentaire.
        `,
        damage: "0.27*PV + 0.7*ATQ",
        cooldown: 4,
        levelInfo: [
          "Niv. 2 : Dégâts +20%",
          "Niv. 3 : Ignorer la RES +20%"
        ]
      },
      {
        img: "assets/meta2.png",
        name: "Métamorphe",
        description: `
          Fait passer ce Champion à sa Forme de base.
          Accorde ensuite un Tour supplémentaire.
        `,
        cooldown: 4,
        isMetamorphosis: true,
      },
      {
        img: "assets/passif2.png",
        name: "Enrobé de carnage [P]",
        description: `
          Double la quantité de soin reçue par ce Champion lorsqu'il attaque 
          des ennemis sous debuff <span class='gbt'>Sangsue</span>.<br><br>
          Réduit également les dégâts infligés par des ennemis sous debuffs 
          <span class='gbt'>Sangsue</span> de 50%.
        `,
        isPassive: true,
      },
    ],
    stats: {
      "PV": "25 110",
      "ATQ": "1 134",
      "DÉF": "1 046",
      "VIT": "100",
      "TAUX C.": "15%",
      "DÉG C.": "63%",
      "RÉS": "30",
      "PRÉ": "20"
    },
  },
};

// Aura commune aux deux formes
const aura = {
  img: "../../../../../assets/images/auras/hp.png",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.`,
};

// Forme actuelle
let currentForm = "form1";

// Verrou pour empêcher les changements pendant l'animation
let isAnimating = false;

let currentTooltip = null;
let touchTimeout = null;

// Fonction pour détecter si on est sur mobile
function isMobile() {
  return window.innerWidth <= 767;
}

// Fonction pour créer le HTML de description d'un sort - identique à Arashi
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
  
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;
  
  const spell = championForms[currentForm].spells[spellIndex];
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
  const rect = tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  let left = event.clientX + 15;
  let top = event.clientY - 10;
  
  // Ajustement horizontal
  if (left + rect.width > viewportWidth - 20) {
    left = event.clientX - rect.width - 15;
  }
  
  // Ajustement vertical
  if (top + rect.height > viewportHeight - 20) {
    top = event.clientY - rect.height + 10;
  }
  
  // S'assurer que le tooltip reste dans les limites
  left = Math.max(10, Math.min(left, viewportWidth - rect.width - 10));
  top = Math.max(10, Math.min(top, viewportHeight - rect.height - 10));
  
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
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

// Fonction pour changer de forme avec animation impactante
function switchForm(formKey) {
  if (currentForm === formKey) return;
  if (isAnimating) {
    console.log('Animation en cours, changement bloqué');
    return;
  }

  console.log('Switching to form:', formKey); // Debug
  isAnimating = true; // Verrouiller les changements

  const panels = document.querySelectorAll('.panel');
  const formData = championForms[formKey];
  const oldStats = championForms[currentForm].stats;

  console.log('Found panels:', panels.length); // Debug

  // Animation élégante et mythique
  panels.forEach((panel, index) => {
    console.log('Starting elegant animation for panel', index, panel.className);

    // Phase 1: Préparation avec effet de lueur
    panel.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    panel.style.transform = 'scale(0.95)';
    panel.style.boxShadow = '0 0 20px rgba(229, 57, 53, 0.4), inset 0 0 20px rgba(229, 57, 53, 0.1)';
    panel.style.borderColor = 'rgba(229, 57, 53, 0.6)';

    // Phase 2: Transformation principale avec décalage
    setTimeout(() => {
      const rotations = ['rotateY(8deg)', 'rotateX(6deg)', 'rotateY(-8deg)'];
      const scales = [0.88, 0.85, 0.90];

      panel.style.transform = `scale(${scales[index]}) ${rotations[index]}`;
      panel.style.boxShadow = '0 15px 40px rgba(229, 57, 53, 0.6), 0 0 30px rgba(229, 57, 53, 0.4)';
      panel.style.borderColor = 'rgba(229, 57, 53, 0.8)';
      panel.style.filter = 'brightness(1.1) saturate(1.3)';
    }, 100 + index * 80); // Effet en cascade

    // Phase 3: Pic de l'animation
    setTimeout(() => {
      panel.style.transform = `scale(0.82) ${panel.style.transform.includes('rotateY') ? 'rotateY(0deg)' : 'rotateX(0deg)'}`;
      panel.style.boxShadow = '0 20px 50px rgba(229, 57, 53, 0.7), 0 0 40px rgba(229, 57, 53, 0.5)';
      panel.style.filter = 'brightness(1.2) saturate(1.5) hue-rotate(15deg)';
    }, 300 + index * 80);
  });

  // Animer les sorts avec transition d'images parfaitement synchronisée
  const spells = document.querySelectorAll('.spell');
  spells.forEach((spell, index) => {
    const img = spell.querySelector('img');
    if (img) {
      const newSpell = formData.spells[index];
      if (newSpell) {
        // Créer une nouvelle image pour l'animation d'entrée
        const newImg = document.createElement('img');
        newImg.src = newSpell.img;
        newImg.alt = newSpell.name;
        newImg.style.position = 'absolute';
        newImg.style.top = '0';
        newImg.style.left = '0';
        newImg.style.width = '100%';
        newImg.style.height = '100%';
        newImg.style.objectFit = 'cover';
        newImg.style.borderRadius = '50%';

        // État initial de la nouvelle image (opposé à l'ancienne)
        newImg.style.transform = 'scale(0.3) rotate(-180deg)';
        newImg.style.opacity = '0';
        newImg.style.filter = 'blur(5px) hue-rotate(-90deg)';
        newImg.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        // Ajouter la nouvelle image au container
        spell.style.position = 'relative';
        spell.appendChild(newImg);

        // Animation de sortie de l'ancienne image
        img.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        img.style.transform = 'scale(0.3) rotate(180deg)';
        img.style.opacity = '0';
        img.style.filter = 'blur(5px) hue-rotate(90deg)';

        // Animation d'entrée de la nouvelle image (simultanée)
        setTimeout(() => {
          newImg.style.transform = 'scale(1.1) rotate(10deg)';
          newImg.style.opacity = '1';
          newImg.style.filter = 'blur(0px) hue-rotate(0deg)';
        }, 50);

        // Finalisation après l'animation
        setTimeout(() => {
          // Retour à la normale pour la nouvelle image
          newImg.style.transform = 'scale(1) rotate(0deg)';

          // Remplacer l'ancienne image après l'animation
          setTimeout(() => {
            img.src = newSpell.img;
            img.alt = newSpell.name;
            img.style.transform = 'scale(1) rotate(0deg)';
            img.style.opacity = '1';
            img.style.filter = 'none';

            // Supprimer la nouvelle image temporaire
            if (newImg.parentNode) {
              newImg.parentNode.removeChild(newImg);
            }
          }, 100);
        }, 500);
      }
    }
  });

  // Mettre à jour les boutons immédiatement avec effet
  document.querySelectorAll('.form-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.form === formKey) {
      btn.classList.add('active');
      // Effet de pulsation sur le bouton actif
      btn.style.animation = 'pulse 0.3s ease-out';
      setTimeout(() => btn.style.animation = '', 300);
    }
  });

  // Phase 1: Transition visuelle (500ms)
  setTimeout(() => {
    console.log('Phase 1: Updating content'); // Debug

    // Mettre à jour le type de champion avec animation lettre par lettre
    const typeElement = document.getElementById('champion-type');
    if (typeElement) {
      animateTypeChange(typeElement, formData.type);
    }

    // Nettoyer les anciens event listeners d'aura
    const oldAuraDescription = document.querySelector('.mobile-aura-description');
    if (oldAuraDescription) {
      oldAuraDescription.remove();
    }

    // Mettre à jour les sorts
    updateSpells(formData.spells);

    // Mettre à jour l'aura (reste la même)
    updateAura();

  }, 500);

  // Phase 2: Animation des statistiques À LA FIN (1100ms)
  setTimeout(() => {
    console.log('Phase 2: Animating stats'); // Debug
    currentForm = formKey;
    animateStatsTransition(oldStats, formData.stats);
  }, 1100);

  // Phase 3: Retour élégant à la normale (700ms)
  setTimeout(() => {
    console.log('Phase 3: Elegant return to normal'); // Debug
    panels.forEach((panel, index) => {
      // Transition de retour plus douce
      panel.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
      panel.style.transform = 'scale(1.02)'; // Léger rebond
      panel.style.filter = 'brightness(1.05) saturate(1.1)';
      panel.style.boxShadow = '0 8px 25px rgba(229, 57, 53, 0.3)';

      // Retour final après le rebond
      setTimeout(() => {
        panel.style.transform = 'scale(1)';
        panel.style.filter = 'none';
        panel.style.boxShadow = '';
        panel.style.borderColor = '';
      }, 200 + index * 50);
    });
  }, 700);

  // Phase 4: Nettoyage final (1500ms)
  setTimeout(() => {
    console.log('Phase 4: Final cleanup'); // Debug
    panels.forEach((panel, index) => {
      console.log('Cleaning panel', index); // Debug
      panel.classList.remove('transitioning');

      // Nettoyer tous les styles inline
      panel.style.transition = '';
      panel.style.transform = '';
      panel.style.filter = '';
      panel.style.boxShadow = '';
      panel.style.borderColor = '';
    });
    // Nettoyer les styles des sorts et supprimer les images temporaires
    document.querySelectorAll('.spell').forEach(spell => {
      spell.classList.remove('morphing');
      spell.style.position = '';

      // Nettoyer toutes les images dans le sort
      const images = spell.querySelectorAll('img');
      images.forEach((img, imgIndex) => {
        if (imgIndex === 0) {
          // Image principale - nettoyer les styles
          img.style.transition = '';
          img.style.transform = '';
          img.style.opacity = '';
          img.style.filter = '';
        } else {
          // Images temporaires - supprimer
          if (img.parentNode) {
            img.parentNode.removeChild(img);
          }
        }
      });
    });

    // Déverrouiller les changements de forme
    isAnimating = false;
    console.log('Animation terminée, changements déverrouillés');
  }, 1500);
}

// Fonction pour mettre à jour les sorts - identique à Arashi
function updateSpells(spells) {
  const spellsContainer = document.getElementById("spells-section");
  if (!spellsContainer) return;

  // Créer les sorts avec descriptions mobiles
  spellsContainer.innerHTML = '';

  spells.forEach((spell, index) => {
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

    // Event listeners pour les sorts (desktop seulement)
    spellDiv.addEventListener('mouseenter', (e) => showTooltip(e, index));
    spellDiv.addEventListener('mouseleave', (e) => {
      // Même logique que pour les sorts
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
}

// Fonction pour mettre à jour les statistiques - identique à Arashi
function updateStats(stats) {
  const statsContent = document.getElementById("stats-content");
  if (!statsContent) return;

  const statsHTML = Object.entries(stats)
    .map(([key, value]) => `
      <div class="stat-row">
        <div class="stat-name">${key}</div>
        <div class="stat-value" data-stat="${key}">${value}</div>
      </div>
    `).join("");
  statsContent.innerHTML = statsHTML;
}

// Fonction pour animer la transition des statistiques
function animateStatsTransition(oldStats, newStats) {
  const statsContent = document.getElementById("stats-content");
  if (!statsContent) return;

  // Créer le HTML avec les anciennes valeurs
  const statsHTML = Object.entries(oldStats)
    .map(([key, value]) => `
      <div class="stat-row">
        <div class="stat-name">${key}</div>
        <div class="stat-value" data-stat="${key}" data-old="${value}" data-new="${newStats[key]}">${value}</div>
      </div>
    `).join("");
  statsContent.innerHTML = statsHTML;

  // Animer chaque statistique
  Object.entries(newStats).forEach(([statName, newValue], index) => {
    const statElement = document.querySelector(`[data-stat="${statName}"]`);
    if (!statElement) return;

    const oldValue = oldStats[statName];

    // Déterminer le type d'animation selon le changement
    let animationType = 'unchanged';
    if (oldValue !== newValue) {
      // Extraire les nombres pour comparaison
      const oldNum = parseFloat(oldValue.replace(/[^\d.-]/g, '')) || 0;
      const newNum = parseFloat(newValue.replace(/[^\d.-]/g, '')) || 0;

      if (!isNaN(oldNum) && !isNaN(newNum)) {
        animationType = newNum > oldNum ? 'increasing' : 'decreasing';
      }
    }

    // Animer avec décalage pour effet en cascade
    setTimeout(() => {
      animateStatValue(statElement, oldValue, newValue, animationType);
    }, index * 150); // Décalage augmenté pour plus d'effet
  });
}

// Fonction pour animer le changement de type lettre par lettre avec caractères invisibles
function animateTypeChange(element, newType) {
  const oldType = element.textContent;
  console.log('Animating type change from', oldType, 'to', newType);

  // Caractère invisible (Zero Width Space)
  const invisibleChar = '\u200B';

  // Déterminer la longueur maximale pour maintenir la largeur
  const maxLength = Math.max(oldType.length, newType.length);

  // Créer les versions paddées avec des caractères invisibles
  const oldTypePadded = oldType.padEnd(maxLength, invisibleChar);

  let currentText = oldTypePadded.split('');
  element.textContent = oldTypePadded;

  // Phase 1: Remplacement des caractères par des caractères invisibles (de droite à gauche)
  let deleteIndex = oldType.length - 1;
  const deleteInterval = setInterval(() => {
    if (deleteIndex >= 0) {
      currentText[deleteIndex] = invisibleChar;
      element.textContent = currentText.join('');
      deleteIndex--;

      // Effet visuel pendant la suppression
      element.style.color = '#ff6b6b';
      element.style.transform = 'scale(0.95)';
      element.style.opacity = '0.7';
      element.style.letterSpacing = '1px';
    } else {
      clearInterval(deleteInterval);

      // Phase 2: Remplacement des caractères invisibles par les nouveaux caractères (de gauche à droite)
      let addIndex = 0;

      const addInterval = setInterval(() => {
        if (addIndex < newType.length) {
          currentText[addIndex] = newType[addIndex];
          element.textContent = currentText.join('');
          addIndex++;

          // Effet visuel pendant l'ajout
          element.style.color = '#4caf50';
          element.style.transform = 'scale(1.05)';
          element.style.opacity = '1';
          element.style.letterSpacing = '0.5px';
        } else {
          clearInterval(addInterval);

          // Phase 3: Retour à la normale
          setTimeout(() => {
            element.textContent = newType; // Texte final sans caractères invisibles
            element.style.color = '';
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
            element.style.letterSpacing = '';
          }, 200);
        }
      }, 80); // 80ms entre chaque lettre
    }
  }, 60); // 60ms pour remplacer chaque lettre par un caractère invisible
}

// Fonction pour animer une statistique individuelle
function animateStatValue(element, oldValue, newValue, animationType) {
  element.classList.add('animating', animationType);

  // Extraire les nombres des valeurs
  const oldNum = parseFloat(oldValue.replace(/[^\d.-]/g, '')) || 0;
  const newNum = parseFloat(newValue.replace(/[^\d.-]/g, '')) || 0;

  // Si ce sont des nombres, animer l'incrémentation/décrémentation
  if (!isNaN(oldNum) && !isNaN(newNum) && oldNum !== newNum) {
    const duration = 800; // 800ms pour l'animation
    const steps = 40; // Plus de steps pour plus de fluidité
    const stepValue = (newNum - oldNum) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const currentValue = oldNum + (stepValue * currentStep);

      // Formater la valeur selon le type original
      let displayValue;
      if (oldValue.includes('%')) {
        displayValue = Math.round(currentValue) + '%';
      } else if (oldValue.includes(' ')) {
        // Pour les valeurs avec espaces (comme "18 660")
        displayValue = Math.round(currentValue).toLocaleString('fr-FR').replace(/,/g, ' ');
      } else {
        displayValue = Math.round(currentValue).toString();
      }

      element.textContent = displayValue;

      if (currentStep >= steps) {
        clearInterval(interval);
        element.textContent = newValue; // Valeur finale exacte
        setTimeout(() => {
          element.classList.remove('animating', 'increasing', 'decreasing', 'unchanged');
        }, 200);
      }
    }, stepDuration);
  } else {
    // Pour les valeurs non numériques, changement direct avec effet
    setTimeout(() => {
      element.textContent = newValue;
      setTimeout(() => {
        element.classList.remove('animating', 'increasing', 'decreasing', 'unchanged');
      }, 600);
    }, 300);
  }
}

// Fonction pour mettre à jour l'aura - identique à Arashi
function updateAura() {
  const auraImg = document.getElementById("aura-img");
  if (!auraImg) return;

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

// Fonction principale d'initialisation
function initializeChampionPage() {
  // Initialiser directement la première forme sans animation
  const formData = championForms[currentForm];

  // Mettre à jour le type de champion
  document.getElementById('champion-type').textContent = formData.type;

  // Mettre à jour les sorts
  updateSpells(formData.spells);

  // Mettre à jour les statistiques
  updateStats(formData.stats);

  // Mettre à jour l'aura
  updateAura();

  // Mettre à jour les boutons
  document.querySelectorAll('.form-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.form === currentForm) {
      btn.classList.add('active');
    }
  });

  // Event listeners pour les boutons de forme
  document.querySelectorAll('.form-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchForm(btn.dataset.form);
    });
  });
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
