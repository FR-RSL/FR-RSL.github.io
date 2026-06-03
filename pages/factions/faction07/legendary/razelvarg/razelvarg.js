const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bond dément",
          description: `Attaque 3 fois un ennemi. Chaque coup remplira le Compteur de Tour de ce Champion de 5 %.`,
          damage: "ATQ*(0.45*SPD/100)",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nuit du lapin",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.${RETURN}${RETURN}

Soigne ce Champion de 10 % de ses PV MAX pour chaque débuff ${DEBUFFS.LEECH} placé par cette compétence.`,
          damage: "ATQ*(1.5+SPD/100)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Suis si tu peux",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours avant d'attaquer.`,
          damage: "ATQ*(1.5+SPD/100)",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vitesse innée [P]",
          description: `Chaque buff ${BUFFS.SPD} placé par ce Champion augmente sa VIT de 5 (s'accumule jusqu'à 100).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 520",
        "DEF": "1 057",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
