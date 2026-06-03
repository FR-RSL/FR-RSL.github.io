const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Terrible Force",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 30 % de chances d'augmenter d'1 tour la durée d'1 débuff de la cible pris au hasard.`,
          damage: "0.07*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague de Révulsion",
          description: `Attaque tous les ennemis. Possède 60 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Possède également 60 % de chances de placer pendant 2 tours un débuff ${DEBUFFS.ATK} de 50 % sur les cibles affligés d'un débuff |Provocation] grâce à cette compétence.`,
          damage: "0.2*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dynamo Fétide [P]",
          description: `Lorsque ce Champion se fait attaquer, soigne tous les alliés à hauteur de 50 % des dégâts reçus.${RETURN}${RETURN}

[Soigne de 25 % des dégâts reçus seulement lors des attaques de Boss. Ce Champion ne reçoit que la moitié des soins reçus par les autres alliés.]`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Présence Étrange [P]",
          description: `Lorsque ce Champion est attaqué, place un débuff ${DEBUFFS.LEECH} de 2 tours sur l'assaillant.${RETURN}${RETURN}

Si l'assaillant est affligé d'un débuff ${DEBUFFS.PROVOKE} placé par ce Champion, possède également 70 % de chances d'augmenter de 2 tours le temps de recharge d'une compétence aléatoire de l'assaillant. Ne se produit qu'une fois par attaque.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 211",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
