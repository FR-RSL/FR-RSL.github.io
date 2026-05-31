const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Glaive Profane",
          description: `Attaque 2 fois un ennemi. Possède 40 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lames de Sang",
          description: `Attaque tous les ennemis. Offre 50 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "3.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Récolte de Tourment",
          description: `Attaque tous les ennemis. Place, pendant 3 tours, un buff d'${BUFFS.SPD} de 30 % sur ce Champion si cette attaque tue 4 ennemis ou plus.
Soigne ce Champion de 50 % de ses PV MAX si cette attaque tue 6 ennemis ou plus.
Accorde un Tour Supplémentaire si cette attaque tue 10 ennemis ou plus.`,
          damage: "3.65*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 465",
        "DEF": "925",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 20%`,
};
