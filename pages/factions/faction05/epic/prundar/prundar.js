const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pique-Porc Flamboyant",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.${RETURN}${RETURN}

Sinon, possède 30 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour lors d'une contre-attaque avec cette compétence.`,
          damage: "2.65*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Caprice Balourd",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Place un buff ${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.`,
          damage: "3*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Force de Géant",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Moquerie [P]",
          description: `Subis 20 % de dégâts en moins de la part d'ennemis sous débuff ${DEBUFFS.PROVOKE}.${RETURN}${RETURN}

Possède 25 % de chances de contre-attaquer dès qu'un ennemi sous débuff ${DEBUFFS.PROVOKE} attaque ce Champion ou un allié.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "683",
        "DEF": "1 409",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de la Tour du Malheur de 30%`,
};
