const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chef Épéiste",
          description: `Attaque un ennemi. Place, pendant 1 tour, un buff d'${BUFFS.CRATE} de 30% sur tous les alliés si l'attaque passe en critique.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Insurmontable",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Il est impossible de résister à ces débuffs lorsque Zavia se trouve dans la même équipe.${RETURN}${RETURN}

Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          damage: "4.2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Surarmement",
          description: `Attaque un ennemi. Si cette attaque tue un ennemi, attaquera l'ennemi ayant le moins de PV avec l'excédent de dégâts. Les dégâts excédentaires ne peuvent pas passer en critique.`,
          damage: "Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Partenaire Tactique",
          description: `Active la compétence Surarmement de ce Champion.${RETURN}${RETURN}

Active également la compétence Pluie de Poison de Zavia.${RETURN}${RETURN}

[Uniquement disponible lorsque Zavia se trouve dans la même équipe.]`,
          damage: "Remaining Damage Amount",
          cooldown: 4,
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 520",
        "DEF": "1 046",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 24%`,
};
