const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mirage de lame",
          description: `Attaque 2 fois un ennemi. Chaque coup critique remplit le Compteur de Tour de ce Champion de 5 %.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête de dagues",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, place un buff ${BUFFS.CRATE} de 15 % sur ce Champion pendant 2 tours. 

La première frappe possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 30 % pendant 2 tours. La seconde frappe possède 50 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "2.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tueur implacable [P]",
          description: `Chaque frappe de ce Champion inflige 5 % de dégâts supplémentaires si la cible se trouve sous débuffs ${DEBUFFS.DEF} ou ${DEBUFFS.WEAKEN}. 

Inflige 10 % de dégâts supplémentaires si la cible se trouve à la fois sous débuffs ${DEBUFFS.DEF} et ${DEBUFFS.WEAKEN}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 299",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
