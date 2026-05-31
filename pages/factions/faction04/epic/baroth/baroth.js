const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Armes Dorées",
          description: `Attaque 2 fois un ennemi. La première frappe possède 20 % de chances de remplir le Compteur de Tour de ce Champion de 10 %. La seconde frappe possède 20 % de chances de réduire le Compteur de Tour de la cible de 10 %.`,
          damage: "0.12*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coupes Éclaboussantes",
          description: `Attaque 2 fois un ennemi. La première frappe place sur tous les alliés un ${BUFFS.SHIELD} équivalent à 25 % des dégâts infligés pendant 2 tours. La seconde frappe soigne tous les alliés à hauteur de 10 % des dégâts infligés.`,
          damage: "0.17*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Haches Serpents",
          description: `Attaque 2 fois un ennemi. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours et 75 % de chances de retirer les buffs ${BUFFS.ATK} sur la cible.

La seconde frappe possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours et 75 % de chances de retirer les buffs ${BUFFS.DEF} sur la cible.`,
          damage: "0.18*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "826",
        "DEF": "1 112",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
