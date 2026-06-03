const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée bondissante",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de réduire le Compteur de Tour de la cible de 10%.`,
          damage: "1.95*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Front uni",
          description: `Fait équipe avec un allié pris au hasard pour attaquer un seul ennemi. Remplit également le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rappel de la Mort",
          description: `Ranime un allié avec 50% de PV et 50% de Compteur de Tour. Place également un buff ${BUFFS.DEF} de 60% sur cet allié pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 079",
        "DEF": "1 013",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
