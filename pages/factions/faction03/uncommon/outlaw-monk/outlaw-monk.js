const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lancé de Dague",
          description: `Attaque 1 ennemi. Possède 10 % de chances d'accorder un Tour Supplémentaire.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Homicide",
          description: `Place, pour 2 tours, deux débuffs de ${DEBUFFS.POISON} de 5 % sur la cible.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 244",
        "DEF": "694",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
