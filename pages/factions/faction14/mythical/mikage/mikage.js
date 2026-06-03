const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Fouet fantôme",
          description: `Attaque un ennemi avec un allié de la Faction du Clan de l'Ombre aléatoire. L'allié qui rejoint l'attaque utilisera sa compétence par défaut.${RETURN}${RETURN}

Place pendant 2 tours un buff ${BUFFS.SHIELD} équivalent à 10% des PV MAX de cette Championne sur l'allié ayant les PV les plus bas.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Piège de soie",
          description: `Attaque tous les ennemis. Réduit d'1 tour la durée de tous les buffs des ennemis et de tous les débuffs des alliés.${RETURN}${RETURN}

Augmente ensuite d'1 tour la durée de tous les débuffs des ennemis et de tous les buffs des alliés.`,
          damage: "3.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Décret impérial",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 2 tours, puis fait équipe avec eux pour attaquer un seul ennemi. Les alliés qui rejoignent l'attaque utilisent leurs compétences par défaut.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
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
          name: "Volonté de Mikage [P]",
          description: `Au début du tour de cette Championne, retire tous les débuffs sur l'allié ayant l'ATQ la plus élevée.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 645",
        "ATQ": "1 200",
        "DEF": "1 211",
        "VIT": "115",
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
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Araignée de cauchemar",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.SLEEP} pendant 1 tour.${RETURN}${RETURN}

Réduit également le Compteur de Tour de la cible de 15%.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Mort fuyante",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Réduit également le Compteur de Tour de tous les ennemis de 30%.`,
          damage: "3.8*ATQ",
          cooldown: 3,
          levelInfo: ["Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Ruine de Yakai",
          description: `Place un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Retire également tous les buffs sur tous les ennemis, puis leur place un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
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
          name: "Regard démoniaque [P]",
          description: `Au début du tour de cette Championne, réduit de 15% le Compteur de Tour de l'ennemi ayant l'ATQ la plus élevée.`,
          levelInfo: ["Ignorer la RES +20%"],
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 645",
        "ATQ": "1 200",
        "DEF": "1 211",
        "VIT": "115",
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
};
