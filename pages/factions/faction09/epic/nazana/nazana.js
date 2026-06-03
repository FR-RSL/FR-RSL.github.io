const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sombre Lance",
          description: `Attaque tous les ennemis.`,
          damage: "2.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Contrat Impie",
          description: `Place un buff de ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés pendant 2 tours. Place un buff de ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 40% des PV MAX de ce Champion.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Briseur d'Acier",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "859",
        "DEF": "1 013",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 28%`,
};
