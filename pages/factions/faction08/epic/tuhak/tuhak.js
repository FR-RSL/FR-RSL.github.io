const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Combat Déloyal",
          description: `Attaque 2 fois un ennemi. Possède 30 % de chances d'augmenter d'1 tour le temps de recharge d'une des Compétences, choisie au hasard, de la cible. Sinon, augmente d'1 tour les temps de recharge de toutes les Compétences de la cible lors de chaque frappe si ce Champion possède moins de 50 % de PV lorsqu'il attaque.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tourbillon de Combat",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Place un buff ${BUFFS.SPD} de 30 % sur ce Champion pendant 2 tours. Soigne ce Champion de 15 % des dégâts infligés s'il possède moins de 50 % de PV lorsqu'il attaque.`,
          damage: "3.75*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brutalité Astucieuse",
          description: `Attaque un ennemi. Vole 50 % du Compteur de tour actuel de la cible. Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} de 2 tours. Vole 100 % du Compteur de tour de la cible si ce Champion possède moins de 50 % de PV lorsqu'il attaque.`,
          damage: "6.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Coeur-de-Fer [P]",
          description: `Réduit de 20 % les dégâts reçus par ce Champion lorsque ses PV tombent sous 60 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 365",
        "DEF": "870",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 22%`,
};
