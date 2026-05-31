const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclat de Coeur",
          description: `Attaque tous les ennemis. 

Place un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. 

Remplit également le Compteur de Tour de tous les alliés de 5 %.`,
          damage: "2.77*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Qu'on leur coupe la tête !",
          description: `Retire tous les buffs dont disposent les ennemis. Place ensuite un débuff ${DEBUFFS.DEATHBRAND} sur la cible initiale pendant 2 tours. Place également un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour. 

Remplit le Compteur de Tour de cette Championne de 5 % pour chaque buff retiré par cette compétence.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ordre de reine",
          description: `Fait équipe avec tous les alliés pour attaquer un seul ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours. 

Réduit de 2 tours le temps de recharge de la compétence Qu'on leur coupe la tête ! de cette Championne si la cible est tuée.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gloire à la Reine [P]",
          description: `Pour tous les 10 buffs que l'équipe ennemie reçoit, accorde un Tour supplémentaire à cette Championne.

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 189",
        "DEF": "1 200",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 70`,
};
