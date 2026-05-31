const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hallebarde du Soleil",
          description: `Attaque un ennemi. Augmente la DÉF de ce Champion de 5 % si cette attaque passe en critique (s'accumule jusqu'à 20 %).

Soignera également ce Champion de 75 % de sa DÉF après l'attaque si sa DÉF a déjà été augmentée de 20 %.`,
          damage: "3.2*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bénédiction Solaire",
          description: `Attaque tous les ennemis. Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des dégâts infligés pendant 2 tours.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lumière Crue",
          description: `Transfère tous les débuffs de tous les alliés sur une cible ennemie, puis attaque cet ennemi avec la compétence par défaut.

Convertit la RÉS de ce Champion en PRÉ supplémentaire lors de l'utilisation de cette compétence.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Intercesseuse [P]",
          description: `Dès qu'un allié qui possède 2 débuffs ou plus se fait attaquer, ce Champion absorbera 30 % des dégâts infligés à cet allié.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "804",
        "DEF": "1 542",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
