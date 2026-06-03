const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe en Fusion",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.CRATE} de 30% pendant 2 tours.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pyroclasme",
          description: `Attaque tous les ennemis. Possède 20% de chances de placer un débuff ${DEBUFFS.BURN} de 2 tours. Les chances de placer un débuff augmentent de 20% pour chaque ennemi vivant.`,
          damage: "3.5*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Libération Pyrétique",
          description: `Attaque tous les ennemis. Possède 50% de chances d'augmenter de 2 tours les temps de recharge de toutes les compétences des ennemis sous débuff ${DEBUFFS.BURN}. Place également, sur tous les alliés, un buff ${BUFFS.SHIELD} équivalent à 20% des PV MAX de ce Champion pendant 2 tours.${RETURN}${RETURN}

[Active instantanément cette compétence lorsque ce Champion est ranimé par Rian l'Illusionniste.]`,
          damage: "3.5*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Bouclier +5%", "Chances de Buff/Debuff +5%", "Bouclier +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ravage Ardent [P]",
          description: `Possède 10% de chances de placer un débuff ${DEBUFFS.FEAR} d'1 tour sur un ennemi lorsqu'il subit des dégâts dus à un débuff ${DEBUFFS.BURN}.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "892",
        "DEF": "1 299",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
