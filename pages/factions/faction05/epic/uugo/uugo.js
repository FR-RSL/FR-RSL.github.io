const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Main Noire",
          description: `Attaque un ennemi. Possède 35 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. Les chances augmentent de 5 % pour chaque ennemi vivant.`,
          damage: "5.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maelström de Varech",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Possède également 50 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Les chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} augmentent de 5 % pour chaque ennemi vivant.`,
          damage: "4.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Infusion d'Uugo",
          description: `Retire tous les débuffs ${DEBUFFS.HEALS} sur tous les alliés, retire 1 débuff aléatoire sur tous les alliés, puis soigne tous les alliés de 20 % des PV MAX de ce Champion.

Si tous les alliés sont morts, les ranime avec 50 % de leurs PV, puis remplit leurs Compteurs de Tour de 50 %.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "RanCoeur ultime [P]",
          description: `Place sur ce Champion un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour dès que le dernier allié vivant de ce Champion se fait tuer.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "738",
        "DEF": "1 255",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
