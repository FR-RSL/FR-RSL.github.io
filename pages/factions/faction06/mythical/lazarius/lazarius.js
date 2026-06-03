const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Cobra fantôme",
          description: `Attaque un ennemi. Place un buff ${BUFFS.SHIELD} sur l'allié ayant le moins de PV pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à l'ATQ de ce Champion.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nid de vipères",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours. Réduit également de 2 tours la durée de tous les buffs sur tous les ennemis.${RETURN}${RETURN}

Après l'attaque, place un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Le regard de la faille",
          description: `Remplit le Compteur de Tour de tous les alliés de 20 %. Réduit également le Compteur de Tour de tous les ennemis de 20 %.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Réalité modifiée [P]",
          description: `${PASSIVE}

Au début du tour de ce Champion, lui accorde un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.PRE} de 50 % pendant 2 tours. Ce Champion reçoit également 3 % de dégâts en moins par tranche de 750 ATQ qu'il possède (s'accumule jusqu'à 30 %).${RETURN}${RETURN}

${ACTIVE}

À la fin du tour de ce Champion, ranime un allié aléatoire avec 50 % de PV et 50 % de Compteur de Tour. Place également un buff ${BUFFS.PERFECT_VEIL} sur l'allié ranimé pendant 2 tours.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 980",
        "ATQ": "1 233",
        "DEF": "1 288",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Trident lumineux",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe augmente l'ATQ de ce Champion de 3 % (s'accumule jusqu'à 30 %). La seconde frappe réduit 3 % de l'ATQ ou la DÉF de la cible ou détruit 3 % des PV MAX de la cible, en fonction de son Type (s'accumule jusqu'à 30 %).${RETURN}${RETURN}

[Cet effet ne fonctionne pas contre les Champions de Type Soutien]`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Flot de destruction",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.DEF}.${RETURN}${RETURN}

Avant d'attaquer, retire tous les débuffs sur ce Champion. Augmente les dégâts de cette attaque de 15 % pour chaque débuff retiré.${RETURN}${RETURN}

Si aucun débuff n'a été retiré sur ce Champion, augmente les dégâts de cette attaque de 15 % pour chaque allié en vie.`,
          damage: "3.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Vulcan de flammes",
          description: `Attaque 2 fois un ennemi. Ignorera les buffs ${BUFFS.ALLY_PROTECT}, ${BUFFS.STRENGTHEN} et ${BUFFS.SHIELD}, ainsi que 30 % de la DÉF de la cible.${RETURN}${RETURN}

Avant d'attaquer, vole 50 % du Compteur de Tour de la cible. Il est impossible de résister à cet effet.`,
          damage: "2.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Pouvoir écrasant [P]",
          description: `${PASSIVE}

Au début du tour de ce Champion, lui accorde un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % pendant 2 tours.${RETURN}${RETURN}

${ACTIVE}

Dès que ce Champion tue un ennemi, augmente de 2 tours le temps de recharge de toutes les compétences ennemies.${RETURN}${RETURN}

Si ce Champion tue deux ennemis ou plus en une seule attaque, cet effet ne s'activera qu'une fois. Il est impossible de résister à cet effet.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 010",
        "ATQ": "1 597",
        "DEF": "1 123",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%`,
  },
  },
};
