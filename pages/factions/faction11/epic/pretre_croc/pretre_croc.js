const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Crocs Conduits",
          description: `Attaque un ennemi. Possede 75% de chances de transferer sur la cible un debuff aleatoire de ce Champion.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Sombres Benedictions",
          description: `Soigne un allie a hauteur de 20% des PV MAX de ce Champion. Remplit egalement le Compteur de Tour de la cible de 30% si cette Competence la soigne entierement. Place un buff ${BUFFS.VEIL} sur la cible pendant 1 tour si cette Competence ne la soigne pas entierement.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Retour dans les Rangs",
          description: `Ranime un allie avec 30% de PV et 30% de Compteur de Tour.${RETURN}${RETURN}
Place un buff ${BUFFS.UNKILLABLE} pendant 1 tour et un buff ${BUFFS.HEALS} de 15% pendant 2 tours sur l'allie ranime.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 330",
        "ATQ": "903",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.png",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%.`
};
