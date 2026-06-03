const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Violence Exaltante",
          description: `Attaque un ennemi. Possède 50% de chances de retirer 1 débuff pris au hasard sur un allié choisi au hasard.${RETURN}${RETURN}

Impossible de retirer un débuff dont ce Champion est affligé.`,
          damage: "0.15*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pur Courage",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20% des PV MAX de ce Champion pendant 2 tours. Place également un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Retour Glorieux",
          description: `Ranime 2 alliés choisis au hasard avec 20% de PV et 20% de Compteur de Tour. Place également sur les alliés ranimés un buff ${BUFFS.SHIELD} valant 30% de leurs PV MAX pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "947",
        "DEF": "991",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
