const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Couteau à étriper",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Horde de rongeurs",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Méchanceté vicieuse",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.ATK} de 50% sur ce Champion pendant 2 tours si le débuff ${DEBUFFS.WEAKEN} est placé.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vermine [P]",
          description: `Dégâts augmentés de 20% lors d'une attaque sur des ennemis sous débuffs ${DEBUFFS.POISON}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 365",
        "DEF": "1 057",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
