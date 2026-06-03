const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Archétype de rage",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 10% de chances supplémentaires de porter un coup critique.${RETURN}${RETURN}

Chaque frappe possède également 40% de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.BURN} sur la cible.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête de carnage",
          description: `Attaque 4 fois au hasard. Place un buff ${BUFFS.ATK} de 50% sur ce Champion pendant 3 tours avant d'attaquer.${RETURN}${RETURN}

Chaque frappe possède 10% de chances supplémentaires de porter un coup critique. Chaque frappe possède également 75% de chances d'activer instantanément tout débuff ${DEBUFFS.BURN} sur chaque cible et de réduire d'1 tour la durée de ces débuffs ${DEBUFFS.BURN}.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 30% si 3 débuffs ${DEBUFFS.BURN} ou plus sont activés pendant l'attaque.`,
          damage: "1.65*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Explosion aveugle",
          description: `Attaque tous les ennemis. Possède 10% de chances supplémentaires de porter un coup critique. Possède 75% de chances de placer des débuffs ${DEBUFFS.BURN} et ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.SPD} de 30% sur les cibles dont le Compteur de Tour est supérieur à 50%.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rire du danger [P]",
          description: `Dès que ce Champion reçoit un débuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION}, le retire instantanément. Ensuite, soigne totalement ce Champion et accorde un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 509",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
