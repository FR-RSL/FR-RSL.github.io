const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Magnifique spectre",
          description: `Attaque un ennemi. Possede 30% de chances de retirer 1 debuff aleatoire sur un allie pris au hasard. Ne retirera pas de debuff sur cette Championne.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Retour eternel",
          description: `Attaque un ennemi. Place un buff ${BUFFS.REVIVE_ON_DEATH} sur cette Championne pendant 2 tours.`,
          damage: "0.3*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Noble puissance",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.SHIELD} equivalent a 20% des PV MAX de cette Championne sur tous les allies pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Grand pilier [P]",
          description: `Augmente de 15% la valeur de tous les buffs ${BUFFS.SHIELD} sur tous les allies lorsque les buffs sont places.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 475",
        "ATQ": "749",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = null;
