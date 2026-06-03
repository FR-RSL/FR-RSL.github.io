const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déstabilise",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Possède 35% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Faux Maudite",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 80% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "6.5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Salve Temporelle",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 90% de chances d'augmenter de 2 tours le temps de recharge d'une des Compétences de la cible prise au hasard.`,
          damage: "7.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 156",
        "DEF": "958",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
