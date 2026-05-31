const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coups Paralysants",
          description: `Attaque 3 fois un ennemi. Place, pendant 2 tours, un débuff de ${DEBUFFS.SPD} de 30 % sur la cible si l'attaque passe en critique.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rafale Mortelle",
          description: `Attaque un ennemi. Possède 70 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours. Si le coup passe en critique, possède 70 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plaie",
          description: `Réduit de 100 % le Compteur de Tour de tous les ennemis ayant moins de 50 % de PV. Possède 80 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % sur tous les ennemis pendant 2 tours. Possède également 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. Obtiens un Tour Supplémentaire si le Compteur de Tour d'un ennemi est réduit par cette Compétence.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 387",
        "DEF": "980",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de la Tour du Malheur de 70`,
};
