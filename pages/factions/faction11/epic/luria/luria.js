const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée Maudite",
          description: `Attaque 1 ennemi. Possède 50% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% OU un débuff de 100% de ${DEBUFFS.HEALS} OU un débuff de 30% de ${DEBUFFS.SPD} de 2 tours.`,
          damage: "3.55*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Marque de Peur",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Sortilège",
          description: `Attaque 1 ennemi. Retire tous les buffs. Possède 80% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "5.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        }
  ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 487",
        "DEF": "947",
        "VIT": "104",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = null;
