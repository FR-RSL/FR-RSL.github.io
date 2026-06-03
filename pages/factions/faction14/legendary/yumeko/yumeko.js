const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes-garous",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe vole 7,5% du Compteur de tour de la cible si ce Champion possède 50% de PV ou moins.${RETURN}${RETURN}

Chaque frappe soigne ce Champion de 30% des dégâts infligés si ce Champion possède moins de 50% de PV.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Miroir du Destin",
          description: `Attaque un ennemi. Possède 80% de chances de placer un débuff ${DEBUFFS.HEX} pendant 3 tours.${RETURN}${RETURN}

${PASSIVE}

Dès qu'un ennemi essaie de placer des débuffs sur ce Champion ou sur un allié, possède 55% de chances de transférer ces débuffs sur un ennemi aléatoire sous débuff ${DEBUFFS.HEX} placé par ce Champion. Cela survient avant que des débuffs ne soient placés sur la cible initiale.${RETURN}${RETURN}

Sinon, possède 30% de chances contre les Boss.${RETURN}${RETURN}

Dès que quelqu'un remplit le Compteur de Tour d'un ennemi sous débuff ${DEBUFFS.HEX} placé par ce Champion, le Compteur de Tour de ce Champion sera rempli à la place. Uniquement disponible lorsque Karato le Chasseur se trouve dans la même équipe.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Danse du Temps",
          description: `Réduit de 3 tours les temps de recharge de toutes les compétences des alliés et augmente de 3 tours les temps de recharge de toutes les compétences des ennemis.${RETURN}
Ne réduira pas les temps de recharge des compétences de cette Championne. Cette compétence peut voir son temps de recharge réinitialisé ou réduit par d'autres compétences.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sous Couverture [P]",
          description: `Au début de chaque round, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Ce Champion est immunisé contre tous débuffs des ennemis s'il se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Dès qu'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL} est placé sur un ennemi, possède 75% de chances de voler le buff. Cela survient avant que le buff ne soit placé sur la cible initiale. Uniquement disponible lorsque Karato le Chasseur se trouve dans la même équipe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 315",
        "ATQ": "870",
        "DEF": "1 288",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
