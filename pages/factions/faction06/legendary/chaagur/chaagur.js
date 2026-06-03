const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stupeur",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête de Venin",
          description: `Attaque 2 fois tous les ennemis. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 4 tours. La seconde frappe possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 3 tours.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stoppe-Coeur",
          description: `Attaque 1 ennemi, puis attaque un autre ennemi pris au hasard. Si la cible se trouve sous débuff ${DEBUFFS.POISON}, ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi. Réinitialise le compteur de tour de la compétence Tempête de Venin si cette attaque tue deux ennemis.`,
          damage: "2.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Agonie constante [P]",
          description: `Attaque instantanément les ennemis avec la compétence par défaut dès qu'ils reçoivent des dégâts de débuffs ${DEBUFFS.POISON} placés par ce Champion.${RETURN}${RETURN}

Lors de frappes sur des ennemis sous débuffs ${DEBUFFS.POISON}, soigne ce Champion de 10 % des dégâts infligés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 542",
        "DEF": "1 134",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
