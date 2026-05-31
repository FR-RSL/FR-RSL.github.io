const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Attaque de Désarroi",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "0.23*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fermement Ancré",
          description: `Retire tous les débuffs d'un allié, puis place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur cet allié pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ailes de Faucon",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "947",
        "DEF": "1 101",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de la Tour du Malheur de 25%`,
};
