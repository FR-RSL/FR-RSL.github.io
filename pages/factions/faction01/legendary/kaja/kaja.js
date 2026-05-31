const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pétard",
          description: `Attaque un ennemi. Soigne cette Championne à hauteur de 10 % de ses PV MAX. Si un Timit se trouve dans la même équipe, les soigne tous de la même quantité.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Retour en trombe",
          description: `Ranime tous les alliés morts avec 50 % de PV et un Compteur de Tour de 50 %, puis leur accorde un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % pendant 2 tours.

Si Timit le Bouffon se trouve dans la même équipe et qu'il est mort, le ranime avec tous ses PV et un Compteur de Tour plein.

Si Timit le Bouffon se trouve dans la même équipe et qu'il est vivant, réinitialise le temps de recharge de sa compétence Fûts de terreur et l'active instantanément.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Quinte flush royale",
          description: `Remplit le Compteur de Tour de tous les alliés de 20 %. 

Retire également deux débuffs aléatoires sur chaque allié. Si Timit le Bouffon se trouve dans la même équipe, retire tous les débuffs sur tous les alliés. 

Ensuite, place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Duo de choc [P]",
          description: `Tous les effets de réduction du Compteur de Tour des ennemis sont réduits de 50 % lorsqu'ils sont utilisés contre cette Championne.

Si Timit le Bouffon se trouve dans la même équipe, cette Championne est immunisée contre les effets de réduction du Compteur de Tour utilisés par les ennemis. Si un ennemi essaie de réduire le Compteur de Tour de cette Championne lorsque Timit le Bouffon se trouve dans la même équipe, remplit au lieu de ça le Compteur de Tour de cette Championne du même pourcentage.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "947",
        "DEF": "1 321",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
