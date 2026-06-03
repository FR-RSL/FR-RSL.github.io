const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Accroc",
          description: `Attaque 1 ennemi. Possède 15 % de chances de placer les compétences de la cible en recharge.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Marque du Chasseur",
          description: `Attaque 1 ennemi. Possède 50 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 1 tour.`,
          damage: "5.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement Effrayant",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

[Uniquement disponible lorsque Rejeton de Cabot est dans la même équipe.]`,
          damage: "3.5*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 233",
        "DEF": "837",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 21%`,
};
