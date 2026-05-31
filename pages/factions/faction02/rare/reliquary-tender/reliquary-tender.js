const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton de Gardienne",
          description: `Attaque un ennemi. Offre 20 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protection de Garde",
          description: `Retire tous les débuffs sur tous les alliés, puis leur accorde un buff de ${BUFFS.HEALS} de 15 % pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Appel à la Vie",
          description: `Ranime un allié avec 30 % de PV et remplit de 30 % son Compteur de Tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "859",
        "DEF": "958",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
