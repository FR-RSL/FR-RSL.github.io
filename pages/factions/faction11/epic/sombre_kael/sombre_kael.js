const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tisseur d'Infortunes",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 25 % de chances d'activer instantanément 2 débuffs ${DEBUFFS.POISON} ou 1 débuff ${DEBUFFS.POISON} et 1 débuff ${DEBUFFS.BURN}.`,
          damage: "1.35*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Ténèbres Indéfectibles",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Chaque frappe en critique possède également 75 % de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Réalité Acide",
          description: `Possède 75 % de chances de placer sur la cible trois débuffs ${DEBUFFS.POISON} de 5 % et un débuff ${DEBUFFS.POISON_S} de 25 % pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Délire [P]",
          description: `Réduit de 15 % le TAUX C. des ennemis qui se trouvent sous 2 débuffs ${DEBUFFS.POISON} ou plus.

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 343",
        "DEF": "1 013",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = null;
