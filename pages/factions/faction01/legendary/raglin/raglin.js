const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Repentir",
          description: `Attaque 3 fois un ennemi. Remplit de 15 % le Compteur de Tour de 3 alliés pris au hasard. Les alliés ne peuvent remplir leur Compteur de Tour qu'une fois grâce à cette Compétence.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Clémence",
          description: `Retire tous les débuffs de tous les alliés, puis place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.ATK} de 50 % % sur tous les alliés pendant 2 tours.

Ensuite, soigne tous les alliés. La valeur du soin est proportionnelle à l'ATQ et aux PV de cette Championne.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Miracle",
          description: `Ranime un allié avec 75 % de PV et 100 % de Compteur de Tour. Réduit également de 3 tours les temps de recharge de toutes les compétences des alliés ranimés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Invocation bénie [P]",
          description: `Cette Championne est immunisée contre les débuffs ${DEBUFFS.LOCK_ACTIVE} et les effets d'augmentation des temps de recharge.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "1 156",
        "DEF": "1 068",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
