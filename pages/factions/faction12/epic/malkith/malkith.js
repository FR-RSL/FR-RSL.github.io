const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plume mortelle",
          description: `Attaque un ennemi. Possède 50 % de chances de voler un buff aléatoire à la cible.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hémo-bombe",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de réduire d'1 tour la durée de tous les buffs ennemis. Possède également 75 % de chances d'augmenter d'1 tour la durée de tous les buffs alliés.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Transfusion sanguine",
          description: `Ranime 2 alliés aléatoires avec 30 % de PV et 30 % de Compteur de Tour.${RETURN}${RETURN}

Place sur tous les alliés ranimés un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 079",
        "DEF": "1 123",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 50`,
};
