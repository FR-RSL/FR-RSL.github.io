const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plongeon Mortel",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Ces chances passent à 50 % si la cible est affligée d'un débuff ${DEBUFFS.HEX}.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour si cette attaque tue un ennemi sous débuff ${DEBUFFS.HEX}.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrage de Plumes",
          description: `Place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours, puis attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours sur les cibles affligées de débuffs ${DEBUFFS.HEX}.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Punition Céleste",
          description: `Place un buff ${BUFFS.PRE} de 50 % sur ce Champion pendant 2 tours, puis attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.HEX} pendant 3 tours.${RETURN}${RETURN}

Sinon, possède 100 % de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour sur les cibles affligées de débuffs ${DEBUFFS.HEX}.`,
          damage: "4.7*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Contrordre [P]",
          description: `Contre-attaque avec la compétence par défaut chaque fois que ce Champion perd 30 % de PV ou plus lors d'un seul tour. Contre-attaque toujours lorsqu'il est attaqué si 2 alliés ou plus sont morts.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 531",
        "DEF": "1 079",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
