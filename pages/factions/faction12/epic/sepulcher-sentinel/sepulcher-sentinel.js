const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée de Flétrissement",
          description: `Attaque un ennemi. Offre 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bouclier Sépulcral",
          description: `Place, pendant 2 tours, un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Étranger à la Mort [P]",
          description: `Possède 25 % de chances de totalement bloquer les dégâts en approche lorsqu'un allié se fait attaquer. Ne peut se produire qu'une fois par tour. Ne bloquera les dégâts de la cible alliée que si plusieurs alliés sont attaqués en même temps.`,
          cooldown: 1,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "903",
        "DEF": "1 321",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
