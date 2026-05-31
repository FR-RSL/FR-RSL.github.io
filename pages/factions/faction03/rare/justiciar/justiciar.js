const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tenir la Ligne",
          description: `Attaque 1 ennemi. Augmente de 3 % la DÉF de ce Champion (jusqu'à 10 fois lors d'un round).`,
          damage: "3.65*ATQ+DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup Dédaigneux",
          description: `Attaque 1 ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour sur la cible.`,
          damage: "5.5*DEF+ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Répartie [P]",
          description: `Lorsque ce Champion reçoit un coup critique, contre-attaque en utilisant sa compétence par défaut et réduit d'1 tour la durée des buffs de la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "914",
        "DEF": "1 134",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 19%`,
};
