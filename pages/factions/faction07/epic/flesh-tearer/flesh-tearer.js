const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Multiplie la Misère",
          description: `Attaque 1 ennemi. Possède 40 % de chances de transférer sur la cible 1 débuff aléatoire de ce Champion.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chef de Guerre",
          description: `Soigne tous tes alliés à hauteur de 30 % de leurs PV max. Augmente d'1 tour la durée de tous les buffs alliés.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Profil Bas",
          description: `Attaque tous les ennemis. Réduit d'1 tour la durée de tous les buffs ennemis. Augmente d'1 tour la durée de tous les débuffs ennemis.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "991",
        "DEF": "1 079",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 27%`,
};
