const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tisseur d'Infortunes",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 25% de chances d'activer instantanement un declenchement de 2 debuffs ${DEBUFFS.POISON} ou 1 debuff ${DEBUFFS.POISON} et 1 debuff ${DEBUFFS.BURN}.`,
          damage: "1.35*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Tenebres Indefectibles",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer un debuff ${DEBUFFS.ATK} de 50% pendant 2 tours. Chaque frappe critique possede egalement 75% de chances d'augmenter d'1 tour la duree de tous les debuffs de la cible.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Realite Acide",
          description: `Possede 75% de chances de placer sur la cible trois debuffs ${DEBUFFS.POISON} de 5% et un debuff ${DEBUFFS.POISON_S} de 25% pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Delire [P]",
          description: `Reduit de 15% le TAUX C. des ennemis qui se trouvent sous 2 debuffs ${DEBUFFS.POISON} ou plus.`,
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
