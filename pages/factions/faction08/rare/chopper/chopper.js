const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Stupéfiant",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "(1+SPD/75)*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Baston",
          description: `Attaque un ennemi. Place un débuff d'${DEBUFFS.STUN} d'1 tour si les PV actuels de la cible sont inférieurs aux PV actuels de ce Champion.`,
          damage: "6.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rendre Invalide",
          description: `Attaque un ennemi. Retire 2 buffs aléatoires de la cible.`,
          damage: "8.1*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 046",
        "DEF": "925",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des batailles d'Arène de 40`,
};
