const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente Sournoise",
          description: `Attaque 1 ennemi. Possède 30 % de chances de voler un buff aléatoire sur la cible.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dagues Volantes",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 50 % de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "1.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vicieuse Partenaire",
          description: `Place un buff d'${BUFFS.ATK} de 50 % et un buff d'${BUFFS.CRATE} de 30 % sur ce Champion pendant 2 tours. Accorde un Tour Supplémentaire lorsque Séducteur se trouve dans la même équipe.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 343",
        "DEF": "914",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
