const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Amollir la Volonté",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Assaut Chargé",
          description: `Attaque un ennemi. Avant d'attaquer, place sur ce Champion un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CRATE} de 30% pendant 2 tours si la cible possède des PV MAX plus élevés que ceux de ce Champion. Ignorera la DÉF si la cible se trouve sous débuff ${DEBUFFS.WEAKEN}.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déluge Inflexible",
          description: `Attaque 2 fois un ennemi. Accorde un Tour Supplémentaire si la cible est affligée de débuffs ${DEBUFFS.DEF} et ${DEBUFFS.WEAKEN}.`,
          damage: "2.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Implacable [P]",
          description: `Possède 10% de chances d'accorder un Tour Supplémentaire dès que ce Champion porte un coup critique. Augmente de 20% les dégâts infligés sur les Boss.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 443",
        "DEF": "793",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 29%`,
};
