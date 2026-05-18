// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.webp",
            name: "Fouet fantome",
            description: `
              Attaque un ennemi avec un allié aleatoire de la Faction du Clan de l'Ombre
              aleatoire. L'allié qui rejoint l'attaque utilisera sa compétence par defaut.<br><br>
              Place pendant 2 tours un buff ${BUFFS.SHIELD} equivalent a 10% des PV MAX
              de cette Championne sur l'allié ayant les PV les plus bas.
            `,
            damage: "3.9*ATQ",
            levelInfo: [
              "Dégâts +10%"
            ]
          },
          {
            img: "assets/sort2.webp",
            name: "Piege de soie",
            description: `
              Attaque tous les ennemis. Reduit d'1 tour la durée de tous 
              les buffs des ennemis et de tous les débuffs des alliés.<br><br>
              Augmente ensuite d'1 tour la durée de tous les débuffs des ennemis
              et de tous les buffs des alliés.
            `,
            damage: "3.8*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort3.webp",
            name: "Decret imperial",
            description: `
              Place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%
              et un buff <span class='gbt'>Augmentation des DEG C.</span> de 30% sur tous les alliés pendant 2 tours,
              puis fait equipe avec eux pour attaquer un seul ennemi.
              Les alliés qui rejoignent l'attaque utilisent leurs compétences par defaut.
            `,
            cooldown: 5,
            levelInfo: [
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta1.webp",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme alternative.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.webp",
            name: "Volonte de Mikage [P]",
            description: `
              Au debut du tour de cette Championne,
              retire tous les débuffs sur l'allié ayant l'ATQ la plus elevee.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "21 645",
          "ATQ": "1 200",
          "DEF": "1 211",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort4.webp",
            name: "Araignee de cauchemar",
            description: `
              Attaque un ennemi.
              Place un débuff <span class='gbt'>Sommeil</span> pendant 1 tour.<br><br>
              Reduit également le Compteur de Tour de la cible de 15%.
            `,
            damage: "3.9*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort5.webp",
            name: "Mort fuyante",
            description: `
              Attaque tous les ennemis. 
              Place un débuff <span class='gbt'>Etourdissement</span> pendant 1 tour.<br><br>
              Reduit également le Compteur de Tour de tous les ennemis de 30%.
            `,
            damage: "3.8*ATQ",
            cooldown: 3,
            levelInfo: [
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort6.webp",
            name: "Ruine de Yakai",
            description: `
              Place un buff <span class='gbt'>Augmentation de PRE</span> de 50% 
              sur tous les alliés pendant 2 tours.<br><br>
              Retire également tous les buffs sur tous les ennemis, 
              puis place un débuff <span class='gbt'>Affaiblissement</span> 
              de 25% pendant 2 tours.
            `,
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta2.webp",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme de base.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif2.webp",
          name: "Regarde demoniaque [P]",
          description: `
              Au debut du tour de cette Championne, reduit de 15%
              le Compteur de Tour de l'ennemi ayant l'ATQ la plus elevee.
            `,
            isPassive: true,
            levelInfo: [
              "Ignorer la RES +20%"
            ]
          },
        ],
        stats: {
          "PV": "21 645",
          "ATQ": "1 200",
          "DEF": "1 211",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../assets/images/auras/acc.webp",
      description: `
        Augmente la statistique PRE des Alliés lors de toutes les Batailles de 80.
      `,
    };
