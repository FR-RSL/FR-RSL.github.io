const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Fuyante",
          description: `Attaque 1 ennemi. Ignorera les buffs de ${BUFFS.BLOCK_DAMAGE} et de ${BUFFS.SHIELD}.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poison Accablant",
          description: `Attaque 1 ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours. Place un débuff de ${DEBUFFS.HEALS} de 50 % pendant 2 tours si la cible souffre d'un débuff de ${DEBUFFS.DEF}.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Catalyser",
          description: `Attaque 1 ennemi. La frappe passera en critique si la cible souffre d'un débuff de ${DEBUFFS.HEALS}.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 310",
        "DEF": "826",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés Magie lors de toutes les Batailles de 30%`,
};
