const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe à Travers",
          description: `Attaque 2 fois un ennemi. Possède 20% de chances de répéter l'attaque. Ignorera les buffs de ${BUFFS.BLOCK_DAMAGE} et de ${BUFFS.SHIELD}.`,
          damage: "1.78*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Réprimande Austère",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "7.1*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Seigneur Protecteur",
          description: `Place un buff d'${BUFFS.DEF} de 30% et un buff de ${BUFFS.HEALS} de 7,5% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "804",
        "DEF": "1 112",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 19%`,
};
