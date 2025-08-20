// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Morsure du loup",
            description: `
              Attaque 2 fois un ennemi. Chaque frappe a 50% de chances de placer un débuff 
              <span class='gbt'>Gel</span> pendant 1 tour.<br><br>
              Si la cible ne se trouve pas sous débuff <span class='gbt'>Gel</span>, 
              repetera une fois l'attaque.
            `,
            damage: "2.6*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Grand Capitaine",
            description: `
              Place un buff <span class='gbt'>Blocage des débuffs</span> et un buff
              <span class='gbt'>Augmentation de VIT</span> de 30% sur tous les alliés pendant 2 tours.<br><br>
              Reduit d'1 tour le temps de recharge de toutes les compétences des alliés, sauf celles de ce Champion.
            `,
            cooldown: 4,
            levelInfo: ["Temps de recharge -1"]
          },
          {
            img: "assets/sort3.png",
            name: "Rage du Coeur-de-loup",
            description: `
              Attaque tous les ennemis.<br><br>
              Place un débuff <span class='gbt'>Gel</span> sur tous les ennemis
              pendant 1 tour et un débuff <span class='gbt'>Réduction de la VIT</span> de 30%
              sur tous les ennemis pendant 2 tours. Si un ennemi appartient au Pacte Gaellen, place au lieu
              de ca un débuff <span class='gbt'>Gel</span> de 2 tours.<br><br>
              Accorde un Tour supplémentaire.
            `,
            damage: "5.6*ATQ",
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta1.png",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme alternative.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.png",
            name: "Se mange froid [P]",
            description: `
            Des que ce Champion recoit un débuff d'un ennemi, a 30% de chances de placer un débuff
            <span class='gbt'>Gel</span> sur cet ennemi pendant 1 tour. Se produit une fois par tour.
            Ces chances passent a 100% si la cible appartient au Pacte Gaellen.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 635",
          "ATQ": "1 068",
          "DEF": "1 277",
          "VIT": "100",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Fente de givre",
            description: `
              Attaque un ennemi.<br><br>
              Si cette attaque tue un ennemi, reinitialise le temps de recharge d'une compétence aleatoire de ce Champion.
            `,
            damage: "0.28*PV",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Seisme de glacier",
            description: `
              Attaque tous les ennemis. Inflige une frappe supplémentaire aux ennemis sous débuffs
              <span class='gbt'>Gel</span>,
              <span class='gbt'>Etourdissement</span>,
              <span class='gbt'>Peur</span>,
              <span class='gbt'>Peur Absolue</span>,
              <span class='gbt'>Provocation</span> ou
              <span class='gbt'>Petrification</span>.<br><br>
              Chaque frappe reduit les PV MAX de chaque cible de 25% des 
              degats infliges (s'accumule jusqu'a 50%).<br><br>
              Chaque frappe reduit également le Compteur de Tour de chaque cible de 25%.
              Il est impossible de resister a cet effet si un ennemi se trouve sous débuff
              <span class='gbt'>Gel</span>,
              <span class='gbt'>Etourdissement</span>,
              <span class='gbt'>Peur</span>,
              <span class='gbt'>Peur Absolue</span>,
              <span class='gbt'>Provocation</span> ou
              <span class='gbt'>Petrification</span>.
            `,
            damage: "0.28*PV",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Disciple de Tormin",
            description: `
              Attaque un ennemi.<br><br>
              Ignorera 50% de la DEF de la cible. Si la cible se trouve sous débuff
              <span class='gbt'>Gel</span>, Ignorera au lieu de ca 100% de la DEF de la cible.<br><br>
              Si la cible est tuee lorsqu'elle se trouve sous débuff
              <span class='gbt'>Gel</span>, place également un débuff <span class='gbt'>Blocage de reanimation</span>.
            `,
            damage: "0.33*PV",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta2.png",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme de base.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif2.png",
          name: "Resolution glaciale [P]",
          description: `
            Contre-attaque avec la compétence <span class='gt'>Fente de givre</span>
            des qu'un ennemi augmente le temps de recharge d'une des compétences de ce Champion.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 635",
          "ATQ": "925",
          "DEF": "1 421",
          "VIT": "100",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/acc.png",
      description: `
        Augmente la statistique PRE des Alliés lors de toutes les Batailles de 80.
      `,
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
    ? spell.levelInfo.map((info, index) => `<li>Niv. ${index + 2} : ${info}</li>`).join("")
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
  console.log('showTooltip called for spell', spellIndex);
  // Ne pas afficher le tooltip sur mobile
  if (isMobile()) return;

  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;

  const spell = championForms[currentForm].spells[spellIndex];
  tooltip.innerHTML = createSpellDescriptionHTML(spell, spellIndex);
  positionTooltip(event, tooltip);
  tooltip.classList.add("show");
  currentTooltip = tooltip;
  console.log('Tooltip shown for spell', spellIndex);
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
  console.log('hideTooltip called, currentTooltip:', currentTooltip);
  if (currentTooltip) {
    console.log('Classes before removal:', currentTooltip.classList.toString());
    currentTooltip.classList.remove("show");
    console.log('Classes after removal:', currentTooltip.classList.toString());
    console.log('Display style:', currentTooltip.style.display);

    // Force le masquage
    currentTooltip.style.display = 'none';
    currentTooltip.style.maxHeight = ''; // Reset max-height
    currentTooltip.style.overflowY = ''; // Reset overflow
    currentTooltip = null;
    console.log('Tooltip hidden');
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
    // Empêcher l'image d'intercepter les événements de souris
    img.style.pointerEvents = 'none';
    spellDiv.appendChild(img);

    // Event listeners pour les sorts (desktop seulement)
    spellDiv.addEventListener('mouseenter', (e) => {
      console.log('Mouse ENTER on spell', index);
      showTooltip(e, index);
    });
    spellDiv.addEventListener('mouseleave', (e) => {
      console.log('Mouse LEAVE from spell', index);
      // Fermer immédiatement le tooltip quand on quitte le sort
      hideTooltip();
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
  auraElement.addEventListener('mouseleave', () => {
    // Fermer immédiatement le tooltip quand on quitte l'aura
    hideTooltip();
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
