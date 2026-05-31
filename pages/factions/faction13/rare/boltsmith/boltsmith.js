const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carreau Estropiant",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "il Averti",
          description: `Place un buff ${BUFFS.CRATE} de 15 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours. Accorde un Tour Supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Munitions Perçantes",
          description: `Attaque un ennemi. Ignorera 30 % de la DÉF de la cible.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 465",
        "DEF": "562",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 20%`,
};
