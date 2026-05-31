const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Drain de Puissance",
          description: `Attaque 1 ennemi. Possède 50 % de chances de réduire de 10 % le Compteur de Tours de la cible. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Contrôle des Dégâts",
          description: `Place, pendant 2 tours, un buff ${BUFFS.UNKILLABLE} et un buff d'${BUFFS.ATK} de 25 % sur une cible alliée.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Fers de Vie",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % et un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "2.6*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "14 370",
        "ATQ": "958",
        "DEF": "1 112",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
