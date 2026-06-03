const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Robuste",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 10 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.12*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri Guerrier",
          description: `Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CRATE} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Guerre Éternelle",
          description: `Ranime 2 alliés avec 50 % de PV et remplit leurs Compteurs de Tour de 50 %. Après la réanimation, place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "903",
        "DEF": "1 035",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
