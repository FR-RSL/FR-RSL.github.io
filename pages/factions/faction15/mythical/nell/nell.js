// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort1.webp",
            name: "Capture",
            description: `
              Attaque un ennemi.<br><br>
              Vole 10% du Compteur de Tour de la cible.
              Vole 5% de Compteur de Tour supplémentaires pour chaque débuff
              sur l'ennemi.<br><br>
              Possède également 75% de chances de placer un débuff
              <span class='gbt'>Peur Absolue</span> pendant 1 tour.
            `,
            damage: "5*ATQ",
            levelInfo: [
              "Ignorer la RES +15%"
            ]
          },
          {
            img: "assets/sort2.webp",
            name: "Musc soporifique",
            description: `
              Vole tous les buffs dont beneficient les ennemis.<br><br>
              Reduit le Compteur de Tour de chaque cible de 10%.
              Reduit le Compteur de Tour de toutes les cibles
              de 5% supplémentaires pour chaque débuff dont elles sont affligees.<br><br>
              Active également instantanement tous les débuffs <span class='gbt'>Poison</span>
              sur tous les ennemis.<br><br>
              Place ensuite un débuff <span class='gbt'>Sommeil</span> pendant 1 tour
              sur tous les ennemis sans débuff <span class='gbt'>Poison</span>.
            `,
            cooldown: 4,
            levelInfo: [
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/sort3.webp",
            name: "Faucille de corruption",
            description: `
              Attaque tous les ennemis.<br><br>
              Place un débuff <span class='gbt'>Reduction de DEF</span> de 60% et un débuff
              <span class='gbt'>Affaiblissement</span> de 25% sur tous les ennemis pendant 2 tours.<br><br>
              Remplit le Compteur de Tour de tous les alliés de 20%.
            `,
            damage: "5.2*ATQ",
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
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
            name: "Buffet de Dents-noires [P]",
            description: `
              Des qu'un ennemi recoit un buff, est soigne ou voit son Compteur de Tour
              augmente grace a une compétence, place un débuff <span class='gbt'>Poison</span>
              de 5% sur cet ennemi pendant 2 tours. Ignorera les buffs <span class='gbt'>Blocage des débuffs</span>.<br><br>
              Augmente le Compteur de Tour de cette Championne de 5% pour chaque débuff
              <span class='gbt'>Poison</span> place par cette compétence.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 130",
          "ATQ": "1 013",
          "DEF": "1 299",
          "VIT": "112",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort4.webp",
            name: "Coupe-ventre",
            description: `
              Attaque 4 fois un ennemi.
              Chaque frappe ignorera 30% de la DEF de la cible.
              Chaque frappe reduira également les PV MAX de la cible
              de 25% des degats infliges.<br><br>
              Si la cible n'est pas un boss, place également un buff
              <span class='gbt'>Bouclier</span> egal a 
              25% des PV MAX de la cible sur cette Championne.
            `,
            damage: "1*ATQ",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.webp",
            name: "Decoupage",
            description: `
              Attaque 2 fois un ennemi.
              Inflige 100% de degats supplémentaires aux ennemis sous débuffs
              <span class='gbt'>Etourdissement</span>,
              <span class='gbt'>Sommeil</span>,
              <span class='gbt'>Gel</span>,
              <span class='gbt'>Provocation</span>,
              <span class='gbt'>Peur</span>,
              <span class='gbt'>Peur Absolue</span> ou
              <span class='gbt'>Petrification</span>.<br><br>
              Si la cible est tuee, active instantanement la compétence
              <span class='gbt'>Festin de terreur</span>.
            `,
            damage: "3*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort6.webp",
            name: "Festin de terreur",
            description: `
              Attaque tous les ennemis.<br><br>
              Place un débuff <span class='gbt'>Peur Absolue</span> pendant 2 tours.
              Les ennemis ayant 50% de PV ou moins ne peuvent pas resister a ce débuff
              ni le bloquer.
            `,
            damage: "3.9*ATQ",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
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
            name: "Faim de loup [P]",
            description: `
              Des que cette Championne tue un ennemi a l'aide d'une
              compétence active, accorde un Tour supplémentaire
              a cette Championne.<br><br>
              Chaque débuff place par cette Championne sous n'importe
              quelle forme augmente les PV, l'ATQ et la DEF de cette
              Championne de 2% (s'accumule jusqu'a 50%) et sa VIT
              de 2 points (s'accumule jusqu'a 50) sous sa Forme alternative.
            `,
            cooldown: 2,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "17 340",
          "ATQ": "1 542",
          "DEF": "1 156",
          "VIT": "112",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/acc.webp",
      description: `
        Augmente la statistique PRE des Alliés dans les batailles d'Arene de 100.
      `,
    };
