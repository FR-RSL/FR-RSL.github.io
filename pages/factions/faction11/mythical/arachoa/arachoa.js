const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.png",
          name: "Crocs hypnotiques",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Chaque frappe reduit le Compteur de Tour de la cible de 5%. Chaque frappe reduit le Compteur de Tour de la cible de 5% supplementaires si la cible est affligee de debuffs places par cette Championne.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
        },
        {
          img: "assets/sort2.png",
          name: "Machoire d'araignee-lune",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Reduit les Compteurs de Tour de tous les ennemis de 50%. Reduit au lieu de cela les Compteurs de Tour de tous les ennemis de 100% si cette competence est utilisee lors d'un Tour supplementaire ou d'un Tour instantane.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. Place au lieu de cela un debuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours contre les ennemis dont le Compteur de Tour est totalement reduit par cette competence et contre les Boss.`,
          damage: "5.3*ATQ",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Sombre transe",
          description: `Retire tous les buffs dont disposent les ennemis.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.DEF} de 60% et un debuff ${DEBUFFS.LOCK_ACTIVE} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}
Accorde un Tour supplementaire si 8 debuffs ou plus ont ete places par cette competence.`,
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Metamorphe",
          description: `Fait passer cette Championne a sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
        },
        {
          img: "assets/sort5.png",
          name: "Fuite d'araignee [P]",
          description: `Augmente la VIT de cette Championne de 4 points pour chaque debuff place par cette Championne et de 2 points pour chaque debuff auquel l'ennemi resiste lorsque cette Championne essaie de placer des debuffs (s'accumule jusqu'a 100).
Ne comptabilise que les debuffs places par les competences de cette Championne.`,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "22 635",
          "ATQ": "881",
          "DEF": "1 465",
          "VIT": "110",
          "TAUX C.": "15%",
          "DEG C.": "50%",
          "RES": "30",
          "PRE": "20"
    }
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort_f2_1.png",
          name: "Ravage astral",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Remplit le Compteur de Tour de cette Championne de 5% pour chaque frappe critique. Remplit le Compteur de Tour de cette Championne de 5% supplementaire si la cible se trouve sous debuff ${DEBUFFS.LOCK_ACTIVE} ou ${DEBUFFS.DEF}.${RETURN}${RETURN}
Si cette attaque tue un ennemi, accorde un Tour supplementaire.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +20%"],
        },
        {
          img: "assets/sort_f2_2.png",
          name: "Tissage de fil mortel",
          description: `Attaque 3 fois un ennemi. Utilisera toujours cette competence au lieu de la competence par defaut lors d'une contre-attaque. Cette competence ne peut pas etre bloquee par les debuffs ${DEBUFFS.LOCK_ACTIVE}.${RETURN}${RETURN}
Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}. De plus, ignore les buffs ${BUFFS.UNKILLABLE} si la cible se trouve sous debuff ${DEBUFFS.LOCK_ACTIVE} ou ${DEBUFFS.DEF}.${RETURN}${RETURN}
Remplit le Compteur de Tour de cette Championne de 15% pour chaque frappe critique.`,
          damage: "1.7*ATQ +  (0.05*PV MAX ennemi)",
          cooldown: 3,
          levelInfo: ["Dégâts +20%"],
        },
        {
          img: "assets/sort_f2_3.png",
          name: "Execution arachneenne",
          description: `Attaque 4 fois un ennemi.${RETURN}${RETURN}
Chaque frappe ignorera 15% de la DEF de la cible. Chaque frappe ignorera 30% de la DEF si la cible se trouve sous debuff ${DEBUFFS.LOCK_ACTIVE} ou ${DEBUFFS.DEF}.${RETURN}${RETURN}
Remplit le Compteur de Tour de cette Championne de 20% pour chaque frappe critique.
Ensuite, place un buff ${BUFFS.PERFECT_VEIL} sur cette Championne pendant 2 tours.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort_f2_4.png",
          name: "Metamorphe",
          description: `Fait passer cette Championne a sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
        },
        {
          img: "assets/sort_f2_5.png",
          name: "Maitresse de la toile [P]",
          description: `Cette Championne est immunisee contre les debuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.GEL} et ${DEBUFFS.PETRIFICATION} lorsqu'elle se trouve sous buff ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}
Cette Championne ne peut pas non plus recevoir de frappes critiques lorsqu'elle se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "18 825",
          "ATQ": "1 498",
          "DEF": "1 101",
          "VIT": "105",
          "TAUX C.": "15%",
          "DEG C.": "63%",
          "RES": "30",
          "PRE": "0"
    }
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 80.`
};
