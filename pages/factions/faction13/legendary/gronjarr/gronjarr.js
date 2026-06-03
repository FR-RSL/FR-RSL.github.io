const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pyro tabassage",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.BURN}.`,
          damage: "0.1*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brise mensonge",
          description: `Attaque 2 fois un ennemi. La première frappe possède 75 % de chances de retirer tous les buffs ${BUFFS.BLOCK_DEBUFFS}. La seconde frappe possède 75% de chances de retirer un buff aléatoire, sauf les buffs ${BUFFS.BLOCK_DEBUFFS}.`,
          damage: "0.15*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Feux du vieux",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours. Remplit également le Compteur de Tour de ce Champion de 5 % pour chaque débuff ${DEBUFFS.BURN} dont est affligée l'équipe ennemie avant cette attaque.`,
          damage: "0.2*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien de flamme [P]",
          description: `${PASSIVE}

Ce Champion ne recevra aucun dégât des débuffs ${DEBUFFS.BURN}. Au contraire, les débuffs ${DEBUFFS.BURN} soigneront ce Champion de 5 % des PV MAX chaque fois que le débuff s'active.${RETURN}${RETURN}

${ACTIVE}

Dès qu'un ennemi essaie de placer un débuff ${DEBUFFS.GEL} sur ce Champion, le retire instantanément et le place sur l'assaillant. Place également un débuff ${DEBUFFS.BURN} sur l'assaillant pendant 1 tour. Il est impossible de résister au débuff ${DEBUFFS.BURN}.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "837",
        "DEF": "1 222",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
