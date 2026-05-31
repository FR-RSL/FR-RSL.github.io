const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe de canne",
          description: `Attaque un ennemi. 

A 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "0.25*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Scelle-peau",
          description: `Place un buff ${BUFFS.RES} de 25 % sur tous les alliés pendant 2 tours. 

Place également un buff ${BUFFS.SHIELD} sur tous les alliés, équivalent à 20 % de leurs PV MAX, pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Suture-peau",
          description: `Soigne tous les alliés à hauteur de 15 % des PV MAX de ce Champion. 

Remplit également les Compteurs de Tour de tous les alliés de 15 %.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Temps de recharge -1", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "815",
        "DEF": "1 057",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
