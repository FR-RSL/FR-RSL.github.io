const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bête Borgne",
          description: `Attaque un ennemi. Placera 3 frappes si la cible est affligée de 3 débuffs ou plus. Chaque frappe possède 40 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Glacer le Sang",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.${RETURN}${RETURN}
 
Après l'attaque, possède 80 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours sur tous les ennemis sur lesquels cette compétence n'a pas placé de débuff ${DEBUFFS.ATK}.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Horde de Kyoku",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf cette Championne pendant 2 tours. Place également un buff ${BUFFS.BLOCK_DAMAGE} sur cette Championne pendant 3 tours, puis accorde un tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Source [P]",
          description: `Chaque fois que cette Championne subit une frappe critique, soigne tous les alliés de 15 % de leurs PV MAX, puis place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 487",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
