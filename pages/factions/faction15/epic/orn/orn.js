const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton de spores",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "0.1*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Croissances éruptives",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 75% de chances d'activer instantanément un débuff ${DEBUFFS.POISON} de 5% sur la cible.`,
          damage: "0.2*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "La colonie se propage",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer deux débuffs ${DEBUFFS.POISON} de 5% et un débuff ${DEBUFFS.POISON_S} de 25% pendant 2 tours. Soigne ce Champion de 1% de ses PV MAX pour chaque débuff ${DEBUFFS.POISON} placé par cette compétence.`,
          damage: "0.25*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mycélium [P]",
          description: `Dès qu'un débuff ${DEBUFFS.POISON} est activé sur un ennemi, augmente les PV et la DÉF de ce Champion de 5%. S'accumule jusqu'à 25%. Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "760",
        "DEF": "1 189",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
