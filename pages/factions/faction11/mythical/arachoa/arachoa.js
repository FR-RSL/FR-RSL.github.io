const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Crocs hypnotiques",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe réduit le Compteur de Tour de la cible de 5%. Chaque frappe réduit le Compteur de Tour de la cible de 5% supplémentaires si la cible est affligée de débuffs placés par cette Championne.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mâchoire d'araignée-lune",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Réduit les Compteurs de Tour de tous les ennemis de 50%. Réduit au lieu de cela les Compteurs de Tour de tous les ennemis de 100% si cette compétence est utilisée lors d'un Tour supplémentaire ou d'un Tour instantané.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. Place au lieu de cela un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours contre les ennemis dont le Compteur de Tour est totalement réduit par cette compétence et contre les Boss.`,
          damage: "5.3*ATQ",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sombre transe",
          description: `Retire tous les buffs dont disposent les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.LOCK_ACTIVE} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Accorde un Tour supplémentaire si 8 débuffs ou plus ont été placés par cette compétence.`,
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fuite d'araignée [P]",
          description: `Augmente la VIT de cette Championne de 4 points pour chaque débuff placé par cette Championne et de 2 points pour chaque débuff auquel l'ennemi résiste lorsque cette Championne essaie de placer des débuffs (s'accumule jusqu'à 100). Ne comptabilise que les débuffs placés par les compétences de cette Championne.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "881",
        "DEF": "1 465",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Ravage astral",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 5% pour chaque frappe critique. Remplit le Compteur de Tour de cette Championne de 5% supplémentaires pour chaque frappe critique si la cible se trouve sous débuff ${DEBUFFS.LOCK_ACTIVE} ou ${DEBUFFS.DEF}.${RETURN}${RETURN}

Si cette attaque tue un ennemi, accorde au lieu de cela un Tour supplémentaire.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Tissage de fil mortel",
          description: `Attaque 3 fois un ennemi. Utilisera toujours cette compétence au lieu de la compétence par défaut lors d'une contre-attaque. Cette compétence ne peut pas être bloquée par les débuffs ${DEBUFFS.LOCK_ACTIVE}.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}. De plus, ignore les buffs ${BUFFS.UNKILLABLE} si la cible se trouve sous débuff ${DEBUFFS.LOCK_ACTIVE} ou ${DEBUFFS.DEF}.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 15% pour chaque frappe critique.`,
          damage: "1.7*ATQ+0.05*TRG_HP",
          cooldown: 3,
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Exécution arachnéenne",
          description: `Attaque 4 fois un ennemi.${RETURN}${RETURN}

Chaque frappe ignorera 15% de la DÉF de la cible. Chaque frappe ignorera 30% de DÉF si la cible se trouve sous débuff ${DEBUFFS.LOCK_ACTIVE} ou ${DEBUFFS.DEF}.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 20% pour chaque frappe critique.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.PERFECT_VEIL} sur cette Championne pendant 2 tours.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Maîtresse de la toile [P]",
          description: `Cette Championne est immunisée contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.GEL} et ${DEBUFFS.PETRIFICATION} lorsqu'elle se trouve sous buff ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Cette Championne ne peut pas non plus recevoir de frappes critiques lorsqu'elle se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 825",
        "ATQ": "1 498",
        "DEF": "1 101",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
  },
  },
};
