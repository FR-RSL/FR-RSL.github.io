const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sentir la Faiblesse",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sables Intarissables",
          description: `Attaque tous les ennemis. Réduit d'1 tour la durée de tous les buffs ennemis. Augmente d'1 tour la durée de tous les buffs alliés.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Survivante Née [P]",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 %, pendant 2 tours, sur tous les alliés lorsque les PV de n'importe quel allié tombent sous 50 %. Place également un buff ${BUFFS.BLOCK_DAMAGE} sur cette Championne pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "936",
        "DEF": "1 365",
        "VIT": "94",
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
