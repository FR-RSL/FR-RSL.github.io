const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rôtir",
          description: `Attaque un ennemi. Les dégâts augmentent de 50 % si la cible souffre d'un débuff ${DEBUFFS.BURN}.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bagarre de Bar",
          description: `Place un débuff ${DEBUFFS.PROVOKE} d'1 tour sur tous les ennemis. Possède 50 % de chances de placer, à la place, un débuff ${DEBUFFS.PROVOKE} de 2 tours sur la cible. Place, pendant 2 tours, un buff de ${BUFFS.REFLECT_DAM} de 30 % sur ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Santé !",
          description: `Ranime un allié avec 50 % de PV et remplit de 50 % son Compteur de Tour. Place un buff de ${BUFFS.BLOCK_DAMAGE} d'1 tour sur cet allié.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Foule Chahuteuse [P]",
          description: `Lorsque ce Champion se fait frapper, remplit de 15 % le Compteur de Tour de tous les alliés. Lorsque ce Champion se fait frapper par un Boss, remplit de 25 % le Compteur de Tour de tous les alliés.`,
          cooldown: 2,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "881",
        "DEF": "1 465",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "80",
        "PRÉ": "10"
      },
};

const aura = null;
