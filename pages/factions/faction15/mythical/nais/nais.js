// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Perce-tout",
            description: `
              Attaque un ennemi.<br><br>
              Ignorera les buffs <span class='gbt'>Bouclier</span>, 
              <span class='gbt'>Invincible</span> et 
              <span class='gbt'>Blocage des Degats</span>.
            `,
            damage: "0.26*PV + 1.2*ATQ",
            levelInfo: [
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Barrage de plumes noires",
            description: `
              Attaque tous les ennemis.
              Cette attaque ne declenchera pas de contre-attaques 
              et ignore les buffs <span class='gbt'>Bouclier</span>.<br><br>
              Vole également 20% du Compteur de Tour de chaque ennemi.
              Les ennemis avec plus de 50% de Compteur de Tour 
              ne peuvent pas resister a cet effet.
            `,
            damage: "0.3*PV + 1.85*ATQ",
            cooldown: 4,
            levelInfo: [
            "Dégâts +15%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Presage du voleur",
            description: `
              Attaque un ennemi. Inflige deux fois plus de degats aux Boss.<br><br>
              Detruit les PV MAX de la cible et reduit son ATQ, sa DEF, sa VIT,
              sa RES et sa PRE de 10% lorsque cette compétence est utilisee
              contre elle pour la premiere fois.
              Cette effet ne fonctionne pas contre les Boss.<br><br>
              Augmente également les PV MAX, l'ATQ, la DEF, la VIT, la RES et la PRE 
              de ce Champion de 10% chaque fois que ce Champion reduit des stats ennemies
              avec cette compétence.<br><br>
              Enfin, place un débuff <span class='gbt'>Blocage de reanimation</span> si la cible
              est tuee par cette compétence.
            `,
            damage: "0.47*PV + 2.5*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
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
              Inflige 5% de degats en plus par tranche de 10% de PV que la cible a perdus.<br><br>
              Empeche également la mort de ce Champion et le garde vivant avec 1 PV
              lorsqu'il recoit des degats mortels, puis le fait passer a sa Forme alternative.
            `,
            cooldown: 4,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "19 980",
          "ATQ": "1 663",
          "DEF": "859",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "0"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Serres d'Etre feerique",
            description: `
              Attaque 2 fois un ennemi.
              Chaque frappe soigne ce Champion de 7,5% de ses PV MAX.<br><br>
              Si les PV de ce Champion sont pleins, chaque frappe remplit
              au lieu de ca le Compteur de Tour de ce Champion de 15%.
            `,
            damage: "0.13*PV",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Nuee de corbeaux",
            description: `
              Attaque tous les ennemis.
              Place un débuff <span class='gbt'>Provocation</span>
              pendant 1 tour si ce Champion Possède plus de 50% de PV.
              Il est impossible de resister a ce débuff si ce Champion Possède plus de 75% de PV.<br><br>
              Si ce Champion Possède 50% de PV ou moins, place au lieu de ca un débuff
              <span class='gbt'>Etourdissement</span> pendant 1 tour. Il est impossible de resister a ce débuff.
            `,
            damage: "0.45*PV",
            cooldown: 4,
            levelInfo: [
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Bouclier de plumes",
            description: `
              Retire tous les débuffs dont ce Champion est afflige.
              Place un certain nombre de buffs <span class='gbt'>Soins continus</span>
              de 15% sur ce Champion, equivalent a la quantite de débuffs retires par cette compétence.<br><br>
              Place également un buff <span class='gbt'>Contre-attaque</span> et un buff
              <span class='gbt'>Blocage des Degats</span> sur ce Champion pendant 2 tours.
              Il est impossible de retirer, de voler et de transferer ces buffs.
            `,
            cooldown: 6,
            levelInfo: [
              "Temps de recharge -1",
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
            name: "Intervention feerique [P]",
            description: `
              Augmente les PV MAX, la DEF, la VIT, la RES et la PRE de ce Champion
              de 15% pour chaque ennemi et allié mort, dont les Boss et leurs sbires,
              lors d'un combat (s'accumule jusqu'a 100%).<br><br>
              Ranime également 1 allié aleatoire avec 50% de PV et 50% de Compteur de Tour
              chaque fois que ce Champion tue un ennemi.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "24 780",
          "ATQ": "881",
          "DEF": "1 321",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/hp.png",
      description: `
        Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.
      `,
    };
