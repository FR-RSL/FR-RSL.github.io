const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maillet Furieux",
          description: `Attaque un ennemi.${RETURN}
Place sur ce Champion un buff de ${BUFFS.SHIELD} équivalent à 10% de ses PV MAX pendant 2 tours.`,
          damage: "0.1*PV+0.1*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Bouclier +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sans Retour",
          description: `Attaque un ennemi.${RETURN}
Place un débuff de ${DEBUFFS.HEALS} de 50% pendant 2 tours.`,
          damage: "0.2*PV+1.5*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Assumer le Poids",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 25% sur tous les alliés.${RETURN}
Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 30% sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "804",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 25%`,
};
