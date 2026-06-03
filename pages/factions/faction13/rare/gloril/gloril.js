const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Craque-écailles",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "1.68*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Proie Acquise",
          description: `Attaque un ennemi. Les dégâts augmentent de 5% pour chaque débuff dont est affligée la cible.`,
          damage: "6.1*ATQ*(1+0.05*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Compagnie Héroïque",
          description: `Attaque un ennemi. Place un buff ${BUFFS.CRATE} de 15% sur tous les alliés pendant 2 tours si cette attaque passe en critique.`,
          damage: "6.04*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 244",
        "DEF": "705",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 30`,
};
