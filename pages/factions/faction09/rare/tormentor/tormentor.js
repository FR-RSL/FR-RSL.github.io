const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Agonies Interminables",
          description: `Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique. La frappe supplémentaire est toujours un coup normal.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Miasme Infernal",
          description: `Attaque 2 fois au hasard. Chaque frappe possède 50% de chances de placer un débuff de ${DEBUFFS.PRE} de 25% pendant 2 tours.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ruine Insidieuse",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50% de chances d'appliquer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours. Place un débuff d'${DEBUFFS.STUN} d'1 tour si la cible souffre d'un débuff de ${DEBUFFS.BLOCK_BUFFS}.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 156",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
