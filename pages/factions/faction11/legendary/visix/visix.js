const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Masse a Bride",
          description: `Attaque 2 fois un ennemi. Chaque frappe possede 80% de chances de voler le Compteur de Tour de la cible de 15%.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sinistres Allies",
          description: `Attaque tous les ennemis. Possede 75% de chances de place un debuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les allies sauf cette Championne pendant 2 tours.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Combat Singulier",
          description: `Attaque tous les ennemis. Place un debuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}
Place sur cette Championne un buff ${BUFFS.SHIELD} equivalent a 20% de ses PV MAX pendant 2 tours.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "17 175",
        "ATQ": "958",
        "DEF": "1 476",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Allies dans les Cryptes de Faction de 37%.`
};
