const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche crève-âme",
          description: `Attaque un ennemi. 

Soigne cette Championne à hauteur de 10 % de ses PV MAX. Lorsqu'elle attaque une cible sous débuff ${DEBUFFS.BURN} soigne plutôt cette Championne de 20 % de ses PV MAX.`,
          damage: "3.25*ATQ",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tir de lune",
          description: `Attaque tous les ennemis. Possède 50 % de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.BURN}.`,
          damage: "3.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Baliste lunaire",
          description: `Attaque 3 fois de façon aléatoire. Avant d'attaquer, place un buff ${BUFFS.PRE} de 25 % sur cette Championne pendant 2 tours. 

Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "1.7*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Boost solaire [P]",
          description: `Booste le Compteur de Tour de cette Championne de 5 % chaque fois qu'un débuff ${DEBUFFS.BURN} est activé.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 266",
        "DEF": "870",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
