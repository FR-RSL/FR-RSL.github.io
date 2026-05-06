// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Massacre faucheur",
            description: `
              Attaque 2 fois un ennemi. Chaque frappe a 20% de chances
              supplémentaires de porter un coup critique.<br><br>
              Chaque frappe restaure les PV MAX detruits de ce Champion
              a hauteur des degats infliges. Chaque frappe soigne également
              ce Champion a hauteur de 30% des degats infliges.<br><br>
              Accorde un Tour supplémentaire si cette attaque tue un ennemi.
            `,
            damage: "2.1*ATQ",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Horde de calamite",
            description: `
              Attaque 4 fois un ennemi. Chaque frappe a 20% de chances
              supplémentaires de porter un coup critique.<br><br>
              La premiere frappe ignorera 10% de la DEF de la cible.
              Chaque frappe suivante ignorera 5% supplémentaires de la DEF de la cible.<br>
              La premiere frappe place un débuff 
              <span class='gbt'>Blocage des Buffs</span> pendant 2 tours.<br>
              La deuxieme frappe place un débuff 
              <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours.<br>
              La troisieme frappe place un débuff 
              <span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.<br>
              La quatrieme frappe place un débuff 
              <span class='gbt'>Reduction de VIT</span> de 30% pendant 2 tours.
            `,
            damage: "1.8*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Necroclysme",
            description: `
              Attaque tous les ennemis. Cette attaque est toujours critique
              et ignorera 20% de la DEF de chaque ennemi.<br><br>
              Si cette attaque tue un ennemi, place un buff 
              <span class='gbt'>Invincible</span> sur ce Champion pendant 1 tour.<br><br>
              Si cette attaque tue deux ennemis ou plus, place au lieu de ca un buff
              <span class='gbt'>Invincible</span> sur ce Champion pendant 2 tours.
            `,
            damage: "4.8*ATQ",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
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
            name: "Creation immortelle [P]",
            description: `
              Au debut du tour de ce Champion, lui accorde un buff
              <span class='gbt'>Bouclier</span> equivalent a 50% de ses PV MAX pendant 1 tour.
              Place également un buff <span class='gbt'>Augmentation d'ATQ</span> de 50% 
              sur ce Champion pendant 1 tour.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "16 845",
          "ATQ": "1 553",
          "DEF": "1 178",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Faux cruelle",
            description: `
              Attaque un ennemi. Possède 20% de chances supplémentaires de porter un coup critique.<br><br>
              Apres l'attaque, transfere tous les débuffs de ce Champion sur la cible.<br><br>
              Si la cible se trouve sous débuff <span class='gbt'>Malediction</span> avant l'attaque,
              transfere au lieu de ca tous les débuffs de ce Champion sur la cible avant l'attaque.`,
            damage: "4*ATQ",
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Ultime testament",
            description: `
              Attaque tous les ennemis. Possède 20% de chances supplémentaires de porter un coup critique. 
              Avant d'attaquer, retire tous les débuffs sur ce Champion.<br><br>
              Ignorera 20% de la DEF de chaque ennemi.
              Ignorera au lieu ce ca 35% de la DEF de la cible si elle se trouve sous débuff
              <span class='gbt'>Malediction</span>.<br><br>
              Les degats augmentent de 10% pour chaque débuff sur chaque cible.
            `,
            damage: "4.2*ATQ",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Extinction",
            description: `
              Attaque tous les ennemis. Possède 20% de chances supplémentaires de porter un coup critique.
              Avant d'attaquer, place un débuff <span class='gbt'>Malediction</span>
              et un débuff <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours.<br><br>
              Ignorera les buffs <span class='gbt'>Barriere de Vie</span>,
              <span class='gbt'>Nuage de Poison</span> et 
              <span class='gbt'>Protection d'allié</span>.
            `,
            damage: "4.4*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
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
          name: "Banquet de la mort [P]",
          description: `
            Des que ce Champion attaque un ennemi sous débuff <span class='gbt'>Malediction</span>,
            soigne ce Champion de 30% des degats infliges.<br><br>
            Augmente l'ATQ de ce Champion de 20% pour chaque ennemi sous débuff
            <span class='gbt'>Malediction</span>.
          `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "16 845",
          "ATQ": "1 553",
          "DEF": "1 178",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/attack.png",
      description: `
        Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%.
      `,
    };
