const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Métaboliser",
          description: `Attaque un ennemi. Soigne de 20% des dégâts infligés si la cible est affligée d'un débuff de ${DEBUFFS.POISON}.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coupe-Tendon",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Nova Toxique",
          description: `Ce Champion reçoit des dégâts équivalents à 99% de ses PV actuels. Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours. Possède 80% de chances de placer quatre débuffs ${DEBUFFS.POISON} de 5% sur tous les ennemis pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 310",
        "DEF": "859",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 40`,
};
