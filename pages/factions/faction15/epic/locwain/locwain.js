const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Attrape-aubaine",
          description: `Attaque un ennemi. Possède 30% de chances de voler 1 buff aléatoire.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Révélation",
          description: `Attaque tous les ennemis. Possède 25% de chances de retirer tous les buffs ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL} sur tous les ennemis.${RETURN}${RETURN}

Possède également 75% de chances de retirer 1 buff aléatoire sur tous les ennemis.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Force focalisée",
          description: `Attaque 2 fois un ennemi. Ignorera les buffs ${BUFFS.SHIELD}.${RETURN}${RETURN}

Réinitialise le compteur de tour de cette compétence si cette attaque tue un ennemi.`,
          damage: "2.9*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chasse le hautain [P]",
          description: `Augmente la PRÉ de ce Champion de 10 points pour chaque buff sur chaque ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 409",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 20%`,
};
