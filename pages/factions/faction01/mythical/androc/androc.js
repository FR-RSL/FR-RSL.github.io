// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Defense",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Morsure de la meute",
            description: `
              Attaque un ennemi. Place un buff ${BUFFS.DEF} de 60% sur tous les allies pendant 1 tour.
            `,
            damage: "3.3*DEF",
            levelInfo: [
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Griffe rayonnante",
            description: `
              Attaque tous les ennemis.<br><br>
			  Augmente d'1 tour la duree de tous les buffs allies. Soigne egalement tous les allies de 4% de leurs PV MAX pour chaque buff dont la duree a ete augmentee.
            `,
            damage: "3.5*DEF",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Rocher de Werinbur",
            description: `
              Place un buff ${BUFFS.RES} de 50%, un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.HEALS} de 15% sur tous les allies pendant 2 tours.<br><br>
			  Place pendant 2 tours un buff ${BUFFS.HEALS} de 15% sur tous les allies qui ont moins de 50% de PV.<br><br>
			  Remplit egalement le Compteur de Tour de tous les allies de 15%.
            `,
            cooldown: 5,
            levelInfo: [
              "Temps de recharge -1",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta1.png",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme alternative.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.png",
            name: "Sauveur etincelant [P]",
            description: `
              Augmente la RES de chaque allie de 10 pour chaque buff sur tous les allies.<br><br>
			  Les coups critiques infliges par les allies remplissent les Compteurs de Tour de tous les allies de 5%. Se produit une fois par competence.<br><br>
			  Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "20 640",
          "ATQ": "859",
          "DEF": "1 619",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
      form2: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Assaut d'Epine-doree",
            description: `
              Attaque un ennemi. Possede 50% de chances de placer un debuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 1 tour.
            `,
            damage: "3.6*DEF",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Brise-palissade",
            description: `
              Attaque tous les ennemis. Place un debuff ${DEBUFFS.RES} de 50%, un debuff ${DEBUFFS.WEAKEN} de 25% et un debuff ${DEBUFFS.UNFEEBLE} sur tous les ennemis pendant 2 tours.<br><br>
			  Si les ennemis possedent 50% de PV ou moins, il est impossible de retirer le debuff ${DEBUFFS.UNFEEBLE}.<br><br>
			  Reduit egalement le Compteur de Tour de tous les ennemis de 15%.
            `,
            damage: "4*DEF",
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Rugissement de Kitherus",
            description: `
              Attaque tous les ennemis.
			  Avant d'attaquer, retire tous les buffs de tous les ennemis et place un debuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis sans buff pendant 2 tours.
			  Si la cible est un Boss, les degats infliges sont equivalents a 10% de ses PV MAX.
            `,
            damage: "4.4*DEF",
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta2.png",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme de base.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif2.png",
            name: "Coeur-de-lion [P]",
            description: `
              Augmente la PRE de chaque allie de 10 pour chaque buff sur tous les ennemis.<br><br>
			  Chaque coup critique inflige par les allies reduit les Compteurs de Tour de tous les ennemis de 5%.<br><br>
			  Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 955",
          "ATQ": "859",
          "DEF": "1 398",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/defence.png",
      description: `
        Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%.
      `,
    };
