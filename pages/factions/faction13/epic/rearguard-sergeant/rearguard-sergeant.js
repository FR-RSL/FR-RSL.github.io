const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Impact Écrasant",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maître du Fléau",
          description: `Attaque tous les ennemis. Offre 50% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours.${RETURN}${RETURN}

Soigne ce Champion à hauteur de 25% des dégâts infligés.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Repousse-les",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50% et un buff de ${BUFFS.HEALS} de 15% sur tous les alliés, sauf ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "859",
        "DEF": "1 211",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "75",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés Force lors de toutes les Batailles de 33%`,
};
