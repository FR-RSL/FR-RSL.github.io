const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gourdin sévère",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.CDAM} de 25 % pendant 2 tours.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +15%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Prison spirituelle",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour si la cible ne possède aucun buff actif. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 2 tours si la cible possède des buffs actifs.`,
          damage: "5.7*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Justice pointue",
          description: `Attaque tous les ennemis. Possède 75 % de chances de réduire de 2 tours la durée de tous les buffs sur les ennemis. 

Augmente d'1 tour la durée de tous les buffs ${BUFFS.DEF} sur les alliés.`,
          damage: "3.7*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Coeur-fort [P]",
          description: `Au début de chaque tour, place sur l'allié ayant le moins de PV MAX un buff ${BUFFS.ALLY_PROTECT} de 50 % pendant 2 tours. Ne sera pas placé sur cette Championne.

Place également un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.DEF} de 60 % sur cette Championne pendant 2 tours.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "793",
        "DEF": "1 288",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
