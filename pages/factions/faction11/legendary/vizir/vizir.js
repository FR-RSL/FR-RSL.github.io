const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Lames Maudites",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}
Chaque frappe possede 35% de chances d'augmenter d'1 tour la duree de tous les debuffs.`,
          damage: "1.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Maitre de la Detresse",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Chaque frappe possede 50% de chances de placer un debuff ${DEBUFFS.BLOCK_BUFFS}, un debuff ${DEBUFFS.ATK} de 50% et un debuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "2.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort3.png",
          name: "Vizir des Poisons",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Applique un effet de <span class="grn-t">[Propagation de Debuff]</span>, prenant 2 debuffs aleatoires sur la cible pour les placer sur tous les ennemis.${RETURN}${RETURN}
Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 3 tours si la cible est affligee de 2 debuffs ou plus.`,
          damage: "6.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Assassin Invisible [P]",
          description: `Au debut de chaque Round, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 476",
        "DEF": "1 013",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.png",
  description: `Augmente la statistique ATQ des Allies dans les Donjons de 34%.`
};
