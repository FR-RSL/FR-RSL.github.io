// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
          {
            img: "assets/sort1.webp",
            name: "Entaille éclair",
            description: `
              Attaque un ennemi. Place un débuff
              <span class='gbt'>Réduction de DEF</span> de 60% pendant 2 tours.<br><br>
              Place également un buff <span class='gbt'>Voile Parfait</span> sur ce Champion pendant 1 tour.
            `,
            damage: "3.9*ATQ",
            levelInfo: ["Dégâts +20%"],
          },
          {
            img: "assets/sort2.webp",
            name: "Sombres dards",
            description: `
              Attaque tous les ennemis. Avant d'attaquer, place un buff
              <span class='gbt'>Augmentation d'ATQ</span> de 50% 
              sur tous les alliés pendant 2 tours.<br><br>
              Ignorera 25% de la DEF de la cible si elle ne se trouve pas sous débuff
              <span class='gbt'>Brulure de PV</span>.
              Ignorera 50% de la DEF de la cible si elle se trouve sous débuff
              <span class='gbt'>Brulure de PV</span>.<br><br>
              Augmente ensuite d'1 tour la durée de tous les débuffs ennemis.
            `,
            damage: "4*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort3.webp",
            name: "Horde de bêtes-cloques",
            description: `
              Attaque tous les ennemis.
              Les degats augmentent de 25% contre les cibles qui sont affligees de débuffs.<br><br>
              Avancer instantanément tout débuff <span class='gbt'>Brûlure de PV</span> sur chaque ennemi.<br><br>
              Si un ennemi ne se trouve pas sous débuff <span class='gbt'>Brûlure de PV</span>, 
              lui inflige un débuff <span class='gbt'>Brûlure de PV</span> pendant 2 tours
              `,
            damage: "4*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/meta1.webp",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion à sa Forme alternative.
              Accorde ensuite un tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.webp",
            name: "Brûle-chair [P]",
            description: `
              Chaque fois que ce Champion place un débuff <span class='gbt'>Brûlure de PV</span>, réduit la DÉF de la cible de 3% (s'accumule jusqu'à 30%).<br><br>
			        Pour chaque débuff <span class='gbt'>Brûlure de PV</span> sur l'équipe ennemie, augmente les DÉG. C. de ce Champion de 10% (s'accumule jusqu'à 100%).<br><br>
              Dès que le débuff <span class='gbt'>Brûlure de PV</span> d'un ennemi s'active, augmente l'ATQ de ce Champion de 5% (s'accumule jusqu'à 50%).
              Se Réinitialise à chaque round.
            `,
            isPassive: true,
          },
        ],
        stats: {
          PV: "17 010",
          ATQ: "1 586",
          DEF: "1 134",
          VIT: "103",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          RÉS: "30",
          PRÉ: "20",
        },
      },
      form2: {
        type: "Defense",
        spells: [
          {
            img: "assets/sort4.webp",
            name: "Pinces écrasantes",
            description: `
              Attaque un ennemi. Place un buff <span class='gbt'>Augmentation de PRÉ</span> de 50% 
              sur l'allié ayant la PRÉ la plus élevée pendant 2 tours
              et remplit son Compteur de Tour de 10%.
            `,
            damage: "3.7*DEF",
            levelInfo: ["Dégâts +20%"],
          },
          {
            img: "assets/sort5.webp",
            name: "Cocon putride",
            description: `
              Attaque tous les ennemis. Place un débuff <span class='gbt'>Étourdissement</span> 
              sur tous les ennemis pendant 1 tour.<br><br>
              Place également deux buffs <span class='gbt'>Soins continus</span> de 15%
              sur tous les alliés pendant 2 tours.
            `,
            damage: "2.5*DEF",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.webp",
            name: "Et voici la Bête",
            description: `
              Place un débuff <span class='gbt'>Provocation</span> sur tous les ennemis pendant 1 tour.<br><br>
              Place également un buff <span class='gbt'>Renforcer</span> de 25% et un buff 
              <span class='gbt'>Augmentation de DÉF</span> de 60% sur tous les alliés pendant 2 tours.
            `,
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1",
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
            name: "Entomophobie [P]",
            description: `
              Lorsque le Champion est attaqué, 
              possède 100% de chances de placer un débuff <span class='gbt'>Affaiblissement</span> de 25% 
              et 40% de chances de placer un débuff <span class='gbt'>Étourdissement</span> sur l'assaillant.<br><br>
              Augmente d'1 point la DÉF de ce Champion par tranche de 2 points d'ATQ lorsqu'il est sous sa Forme alternative.`,
            isPassive: true,
          },
        ],
        stats: {
          PV: "18 165",
          ATQ: "1 145",
          DEF: "1 498",
          VIT: "100",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          RÉS: "50",
          PRÉ: "20",
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/attack.webp",
      description: `
        Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%.
      `,
    };
