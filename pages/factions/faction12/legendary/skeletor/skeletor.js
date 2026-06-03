const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faux de dévastation",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 75 % de chances d'augmenter d'1 tour la durée d'un débuff aléatoire de la cible.`,
          damage: "0.12*PV",
          levelInfo: ["+5% Damage", "+10% Buff/Debuff Chance", "+10% Damage", "+15% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Comète crâne",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.PETRIFICATION} sur la cible pendant 1 tour. Si la cible est un Boss, place au lieu de ça un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.${RETURN}${RETURN}

Dès qu'un débuff ${DEBUFFS.PETRIFICATION} est retiré ou expire sur un ennemi, a 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % sur cet ennemi pendant 1 tour.`,
          damage: "0.32*PV",
          cooldown: 5,
          levelInfo: ["+15% Damage", "+10% Buff/Debuff Chance", "Temps de recharge -1", "+15% Buff/Debuff Chance", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hors d'ici, idiots !",
          description: `Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède également 75 % de chances de voler les buffs ${BUFFS.BLOCK_DEBUFFS} et un autre buff aléatoire de chaque ennemi.${RETURN}${RETURN}

Réduit ensuite les Compteurs de Tour de tous les ennemis de 15 %. Si un ennemi fait partie de la Ligue télérienne, réduit au lieu de ça le Compteur de Tour de cet ennemi de 30 %.`,
          cooldown: 5,
          levelInfo: ["+10% Buff/Debuff Chance", "Temps de recharge -1", "+15% Buff/Debuff Chance", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Maître du mal [P]",
          description: `Dès que ce Champion essaie de placer un débuff, voler un buff, réduire le Compteur de Tour d'un ennemi ou augmenter la durée d'un débuff sur un ennemi, augmente la PRÉ de ce Champion de 20 points pour chaque buff sur cet ennemi.${RETURN}${RETURN}

Dès que ce Champion est frappé, a 40 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % sur l'assaillant pendant 1 tour. Les chances passent à 75 % contre les Champions de la Ligue télérienne.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "1 046",
        "DEF": "1 101",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
