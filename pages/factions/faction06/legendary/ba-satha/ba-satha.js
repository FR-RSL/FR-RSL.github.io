const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rouleau Mortel",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "0.24*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bénédiction du Dieu des Bêtes",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.SHIELD} de 2 tours égal à 25 % des PV de ce Champion sur les alliés sous débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP} ou ${DEBUFFS.STUN}.`,
          cooldown: 4,
          levelInfo: ["Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Poids Sidérant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour et de réduire le Compteur de Tour de chaque ennemi de 30 %.`,
          damage: "0.27*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien d'Âmes [P]",
          description: `Lorsqu'un ennemi est ranimé, possède 75 % de chances de lui placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Il est impossible de résister à cet effet ou de le bloquer.`,
          cooldown: 1,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "837",
        "DEF": "1 387",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 31%`,
};
