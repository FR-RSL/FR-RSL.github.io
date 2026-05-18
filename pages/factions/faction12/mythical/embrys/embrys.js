// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort1.webp",
            name: "Glaive fetide",
            description: `
              Attaque tous les ennemis. Detruit les PV MAX de chaque cible de 3% (s'accumule jusqu'a 30%).<br><br>
              Reduit également d'1 tour la durée d'1 buff aleatoire sur tous les ennemis.
              Il est impossible de resister a cet effet si les ennemis sont affliges de piles de 
              <span class='gbt'>Necrose</span>.
            `,
            damage: "0.19*PV",
            levelInfo: [
              "Dégâts +10%",
              "Dégâts +10%",
            ]
          },
          {
            img: "assets/sort2.webp",
            name: "Regard vide",
            description: `
              Place un débuff <span class='gbt'>Peur Absolue</span> sur tous les ennemis pendant 1 tour
              et un débuff <span class='gbt'>Reduction d'ATQ</span> de 50% sur tous les ennemis pendant 2 tours.
              Il est impossible de resister a ces effets si les ennemis sont affliges de piles de <span class='gbt'>Necrose</span>.<br><br>
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/sort3.webp",
            name: "La demolition",
            description: `
              Attaque tous les ennemis.<br><br>
              Retire tous les buffs <span class='gbt'>Peau de Pierre</span> et les remplaces par un débuff <span class='gbt'>Peur Absolue</span>.
              Les buffs <span class='gbt'>Blocage des débuffs</span> seront remplaces par des débuffs <span class='gbt'>Blocage des Buffs</span>.<br><br>
              Retire également les buffs affectant positivement les stats et les remplace par leur débuff miroir equivalent.
              Par exemple, <span class='gbt'>Augmentation d'ATQ</span> sera remplace par <span class='gbt'>Reduction d'ATQ</span>.
              Les buffs tels que <span class='gbt'>Soins continus</span> et <span class='gbt'>Renforcer</span>
              seront remplaces, respectivement, par des débuffs <span class='gbt'>Reduction des Soins</span> et <span class='gbt'>Affaiblissement</span>.
              Les débuffs miroir auront la meme durée que les buffs avant qu'ils soient remplaces.<br><br>
              Ensuite, vole 5% du Compteur de Tour de chaque cible pour chaque buff converti en débuff par cette compétence.
              Reduit également le Compteur de Tour de tous les ennemis de 20%.<br><br>
              Il est impossible de resister a ces effets si les ennemis sont affliges de piles de <span class='gbt'>Necrose</span>.
            `,
            damage: "0.27*PV",
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ],
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
            name: "Existence injustifiee [P]",
            description: `
              Des qu'un ennemi est tue, place une pile de <span class='gbt'>Necrose</span>
              sur tous les autres ennemis. Il est impossible de resister aux piles de <span class='gbt'>Necrose</span>
              et de les bloquer. Les piles de <span class='gbt'>Necrose</span> ne peuvent etre retirees qu'en ranimant des alliés morts.
              Cet effet ne fonctionne pas contre les Boss et leurs sbires.
              Si plusieurs Champions de l'equipe disposent de cette compétence, cet effet ne sera active qu'une fois.<br><br>
              Au debut et a la fin du tour de ce Champion, active instantanement les piles de <span class='gbt'>Necrose</span>
              sur tous les ennemis.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 140",
          "ATQ": "1 101",
          "DEF": "1 277",
          "VIT": "111",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.webp",
            name: "Lame du demolisseur",
            description: `
              Attaque un ennemi. Place une frappe supplémentaire si la cible est
              affligee d'une pile de <span class='gbt'>Necrose</span>.<br><br>
              Place également un débuff <span class='gbt'>Blocage de reanimation</span> 
              si cette attaque tue un ennemi.
            `,
            damage: "PV*(0.25+(PRE/10000))",
            levelInfo: [
              "Dégâts +10%",
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.webp",
            name: "Atomiser",
            description: `
              Attaque tous les ennemis.<br><br>
              Inflige le double de degats aux ennemis dont la PRE est inferieure a celle de ce Champion.
              Ignore 50% de la DEF de chaque ennemi dont la PRE est superieure ou egale a la PRE de ce Champion.
            `,
            damage: "PV*(0.28+(PRE/10000))",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.webp",
            name: "Ta vie est perdue !",
            description: `
              Echange ses PV avec un ennemi. 
              Si la cible est un Boss, retablit totalement les PV MAX detruits de ce Champion
              et soigne totalement ce Champion.<br><br>
              Chaque fois que cette compétence est utilisee, augmente l'effet Ignorer la DEF
              de ce Champion de 10% lorsqu'il se trouve sous sa Forme alternative (s'accumule jusqu'a 50%).<br><br>
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 5,
            levelInfo: [
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
            name: "Degenerateur [P]",
            description: `
              <span class='gbt'>Effet Passif</span><br><br>
              Lorsque ce ce Champion meurt, renvoie des degats equivalent a 50% 
              du coup fatal sur l'assaillant, dont les degats en surplus eventuels.<br><br>
              Des qu'un ennemi est tue, place une pile de <span class='gbt'>Necrose</span>
              sur tous les autres ennemis. Il est impossible de resister aux piles de <span class='gbt'>Necrose</span>
              et de les bloquer. Les piles de <span class='gbt'>Necrose</span> ne peuvent etre retirees qu'en ranimant des alliés morts.
              Cet effet ne fonctionne pas contre les Boss et leurs sbires.<br><br>
              Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.<br><br>
              <span class='gbt'>Effet Actif</span><br><br>
              Si ce Champion est en passe d'etre tue par un coup fatal, anticipe ce Coup
              et place instantanement un buff <span class='gbt'>Ranimation apres la Mort</span> d'1 tour 
              avant que des degats ne soient subis.
            `,
            cooldown: 5,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "24 615",
          "ATQ": "991",
          "DEF": "1 222",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/hp.webp",
      description: `
        Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.
      `,
    };
