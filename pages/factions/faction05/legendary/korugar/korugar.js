const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Étrange hostilité",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 10 % de ses PV MAX.`,
          damage: "0.21*HP",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pour qui sonne le glas",
          description: `Attaque tous les ennemis. Possède 75 % de chances de remplir le Compteur de Tour de tous les alliés de 30 %. 

Possède également 75 % de chances de retirer tous les débuffs sur tous les alliés.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Conduit de tortures",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. Place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lieu de violence [P]",
          description: `Augmente la RÉS de ce Champion de 20 points et sa DÉF de 10 % pour chaque buff ${BUFFS.ALLY_PROTECT} sur les alliés. Augmente également la RÉS des alliés de 15 points et leur DÉF de 5 % pour chaque buff ${BUFFS.ALLY_PROTECT} sur les alliés. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort. 

Contre-attaque dès qu'un allié sous buff ${BUFFS.ALLY_PROTECT} se fait attaquer. Peut se produire une fois par tour ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "881",
        "DEF": "1 255",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%`,
};
