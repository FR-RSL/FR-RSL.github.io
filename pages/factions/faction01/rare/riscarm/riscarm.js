const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Impact tonnant",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.45*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Surplomber",
          description: `Attaque tous les ennemis. Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 20 % de ses PV MAX pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fière allure",
          description: `Place un buff ${BUFFS.COUNTER} sur une cible alliée pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "705",
        "DEF": "1 211",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 20%`,
};
