// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Morsure du loup",
            description: `
              Attaque 2 fois un ennemi. Chaque frappe a 50% de chances de placer un débuff 
              <span class='gbt'>Gel</span> pendant 1 tour. Il est impossible de resister a ce debuff et de le bloquer si le Champion cible fait partie du Pacte Gaellen.<br><br>
              Si la cible ne se trouve pas sous débuff <span class='gbt'>Gel</span>, 
              repetera une fois l'attaque.
            `,
            damage: "2.6*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Grand Capitaine",
            description: `
              Place un buff <span class='gbt'>Blocage des débuffs</span> et un buff
              <span class='gbt'>Augmentation de VIT</span> de 30% sur tous les alliés pendant 2 tours.<br><br>
              Reduit d'1 tour le temps de recharge de toutes les compétences des alliés, sauf celles de ce Champion.
            `,
            cooldown: 4,
            levelInfo: ["Temps de recharge -1"]
          },
          {
            img: "assets/sort3.png",
            name: "Rage du Coeur-de-loup",
            description: `
              Attaque tous les ennemis.<br><br>
              Place un débuff <span class='gbt'>Gel</span> sur tous les ennemis
              pendant 1 tour et un débuff <span class='gbt'>Réduction de la VIT</span> de 30%
              sur tous les ennemis pendant 2 tours. Si un ennemi appartient au Pacte Gaellen, place au lieu
              de ca un débuff <span class='gbt'>Gel</span> de 2 tours, et il est impossible de bloquer ce debuff et d'y resister.<br><br>
Reduit egalement le Compteur de Tour de la cible de 30%. Si l'ennemi fait partie du Pacte Gaellen, reduit son Compteur de Tour de 50%.${RETURN}${RETURN}
              Accorde un Tour supplémentaire.
            `,
            damage: "5.6*ATQ",
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
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
            name: "Se mange froid [P]",
            description: `
            Des que ce Champion ou un allie recoit un débuff d'un ennemi, a 30% de chances de placer un débuff
            <span class='gbt'>Gel</span> sur cet ennemi pendant 1 tour.
            Ces chances augmentent jusqu'a 100%, et il est impossible de bloquer ce debuff et d'y resister si la cible appartient au Pacte Gaellen.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 635",
          "ATQ": "1 068",
          "DEF": "1 277",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Fente de givre",
            description: `
              Attaque un ennemi.${RETURN}${RETURN}
              Ignorera 15% de la DEF de la cible. Si la cible se trouve sous debuff ${DEBUFFS.GEL}, ignorera au lieu de cela 35% de la DEF de la cible.${RETURN}${RETURN}
              Si cette attaque tue un ennemi, reinitialise le temps de recharge d'une compétence aleatoire de ce Champion.
            `,
            damage: "0.28*PV",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Seisme de glacier",
            description: `
              Attaque tous les ennemis. Inflige une frappe supplémentaire aux ennemis sous débuffs
              <span class='gbt'>Gel</span>,
              <span class='gbt'>Etourdissement</span>,
              <span class='gbt'>Peur</span>,
              <span class='gbt'>Peur Absolue</span>,
              <span class='gbt'>Provocation</span> ou
              <span class='gbt'>Petrification</span>.<br><br>
              Chaque frappe reduit les PV MAX de chaque cible de 25% des 
              degats infliges (s'accumule jusqu'a 50%).<br><br>
              Chaque frappe reduit également le Compteur de Tour de chaque cible de 25%.
              Il est impossible de resister a cet effet si un ennemi se trouve sous débuff
              <span class='gbt'>Gel</span>,
              <span class='gbt'>Etourdissement</span>,
              <span class='gbt'>Peur</span>,
              <span class='gbt'>Peur Absolue</span>,
              <span class='gbt'>Provocation</span> ou
              <span class='gbt'>Petrification</span>.
            `,
            damage: "0.3*PV",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Disciple de Tormin",
            description: `
              Attaque un ennemi.<br><br>
              Ignorera 50% de la DEF de la cible. Si la cible se trouve sous débuff
              <span class='gbt'>Gel</span>, Ignorera au lieu de ca 100% de la DEF de la cible et les buffs ${BUFFS.BLOCK_DAMAGE}.<br><br>
              Si la cible est tuee lorsqu'elle se trouve sous débuff
              <span class='gbt'>Gel</span>, place également un débuff <span class='gbt'>Blocage de reanimation</span> sur elle et place un debuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}
Il est impossible pour les ennemis du Pacte Gaellen de bloquer le debuff ${DEBUFFS.GEL} et d'y resister.
            `,
            damage: "0.33*PV",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
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
          name: "Resolution glaciale [P]",
          description: `
            Contre-attaque avec la compétence <span class='gt'>Fente de givre</span>
            des qu'un ennemi augmente le temps de recharge d'une des compétences de ce Champion.${RETURN}${RETURN}
Lorsqu'un allie est tue, a 50% de chances de placer un debuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Ces changes augmentent jusqu'a 100% et il est impossible pour les ennemis du Pacte Gaellen de le bloquer ou d'y resister.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 635",
          "ATQ": "925",
          "DEF": "1 421",
          "VIT": "100",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/acc.png",
      description: `
        Augmente la statistique PRE des Alliés lors de toutes les Batailles de 80.
      `,
    };
