const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sangsue Ravageuse",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 30% des dégâts infligés.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dévastation",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Place également un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours sur les ennemis ayant reçu un débuff ${DEBUFFS.WEAKEN}.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flot de Calamités",
          description: `Attaque un ennemi. Ignorera 30% de la DÉF de la cible. Détruit les PV MAX de la cible de 50% des dégâts infligés.${RETURN}${RETURN}

Place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour si cette attaque tue un ennemi.`,
          damage: "5.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tuerie [P]",
          description: `Augmente l'ATQ de ce Champion de 10% chaque fois qu'il utilise une Compétence Active (s'additionne jusqu'à 100%). Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
