const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tape-Âme",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. Les chances passent à 50% si cette attaque passe en critique.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Étrangeté du Vagabond",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.SPD} de 15% pendant 2 tours. Place également un buff ${BUFFS.SPD} de 15% sur ce Champion pendant 2 tours si l'attaque passe en critique.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dépérir",
          description: `Attaque un ennemi. Détruit les PV MAX de l'ennemi de 30% des dégâts infligés si l'attaque passe en critique.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 354",
        "DEF": "760",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
