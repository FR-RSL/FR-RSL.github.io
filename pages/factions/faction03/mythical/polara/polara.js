// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Zele brulant",
            description: `
              Attaque un ennemi.
			  Place une frappe supplémentaire si la cible est affligee de débuffs.<br><br>
			  A 25% de chances d'accorder un Tour supplémentaire.
            `,
            damage: "4*DEF + 1.2*ATQ",
            levelInfo: ["Dégâts +20%"],
          },
          {
            img: "assets/sort2.png",
            name: "Conflagration fidele",
            description: `
              Attaque 3 fois un ennemi.<br><br>
			  Chaque frappe ignorera 25% de la DEF de la cible.
			  Chaque frappe ignorera au lieu de ca 50% de la DEF de la cible
			  si la cible est affligee d'un débuff <span class='gbt'>Brulure de PV</span> 
			  ou <span class='gbt'>Gel</span>.<br><br>
			  Chaque frappe detruit également la DEF et la RES de la cible de 3%
			  (s'accumule jusqu'a 30%).<br><br>
			  Place un débuff <span class='gbt'>Brulure de PV</span> sur tous les ennemis pendant 2 tours
			  si la cible est tuee par cette compétence. Il est impossible de resister a ce débuff.
            `,
            damage: "1.8*DEF + 1.2*ATQ",
            cooldown: 4,
            levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          },
          {
            img: "assets/sort3.png",
            name: "Pyro Maxima",
            description: `
              Attaque tous les ennemis.
			  Cette attaque inflige a chaque chaque cible individuelle des degats sur cible unique
			  plutot que des degats de zone. Ignorera les buffs <span class='gbt'>Bouclier</span>,
			  <span class='gbt'>Blocage des Degats</span> et <span class='gbt'>Invincible</span>.<br><br>
			  Active instantanement les débuffs <span class='gbt'>Brulure de PV</span> sur tous les ennemis.<br><br>
              Place un débuff <span class='gbt'>Blocage de reanimation</span> sur les cibles tuees lorsqu'elles sont affligees
			  d'un débuff <span class='gbt'>Brulure de PV</span> et <span class='gbt'>Gel</span>.
            `,
            damage: "4*DEF + 1.2*ATQ",
            cooldown: 4,
            levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          },
          {
            img: "assets/meta1.png",
            name: "Metamorphe [P]",
            description: `
              Fait passer ce Champion à sa Forme alternative.
              Accorde ensuite un tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.png",
            name: "Maitresse elementaire [P]",
            description: `
              Cette Championne inflige 25% de degats en plus aux ennemis 
			  affliges d'un débuff <span class='gbt'>Brulure de PV</span> ou <span class='gbt'>Gel</span>.
			  Cette Championne inflige 100% de degats en plus contre les ennemis affliges
			  simultanement de débuffs <span class='gbt'>Brulure de PV</span> et <span class='gbt'>Gel</span>.<br><br>
			  Cette Championne ignore la reduction des degats accordee par les débuffs <span class='gbt'>Gel</span>.
            `,
            isPassive: true,
          },
        ],
        stats: {
          PV: "15 195",
          ATQ: "1 509",
          DEF: "1 332",
          VIT: "104",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          RÉS: "30",
          PRÉ: "0",
        },
      },
      form2: {
        type: "Defense",
        spells: [
          {
            img: "assets/sort4.png",
            name: "Decoupe glaciale",
            description: `
              Attaque un ennemi.<br><br>
			  Place un buff <span class='gbt'>Protection d'allié</span> de 50% sur un allié aleatoire,
			  sauf cette Championne, pendant 2 tours. Si l'allié se trouve deja sous buff
			  <span class='gbt'>Protection d'allié</span>, le place sur un autre allié choisi de maniere aleatoire.<br><br>
			  Soigne également cette Championne et les alliés sous buffs <span class='gbt'>Protection d'allié</span>.
			  La valeur du soin est proportionnelle a la DEF de cette Championne.
            `,
            damage: "3*DEF + 0.8*ATQ",
            levelInfo: [
				"Dégâts +20%",
				"Soins +20%"
			],
          },
          {
            img: "assets/sort5.png",
            name: "Vrilles gelees",
            description: `
              Place un buff <span class='gbt'>Blocage des débuffs</span> et un buff
			  <span class='gbt'>Renforcer</span> de 25% sur tous les alliés pendant 2 tours.<br><br>
			  Place un débuff <span class='gbt'>Piege</span> de 100% sur tous les ennemis pendant 2 tours.
			  Les ennemis affliges d'un débuff <span class='gbt'>Brulure de PV</span> ou <span class='gbt'>Gel</span>
			  ne peuvent pas resister a ce débuff.
            `,
            cooldown: 4,
            levelInfo: ["Temps de recharge -1"],
          },
          {
            img: "assets/sort6.png",
            name: "Tempete de lame-glace",
            description: `
              Attaque tous les ennemis. Avant d'attaquer, place une pile
			  d'<span class='gbt'>Interception</span> sur tous les alliés.<br><br>
			  Place un débuff <span class='gbt'>Gel</span> sur tous les ennemis
			  pendant 1 tour. Il est impossible de resister a ce débuff.
            `,
            damage: "3*DEF + 0.8*ATQ",
            cooldown: 4,
            levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
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
            name: "Reveil cryomantique [P]",
            description: `
              <span class='gbt'>Effet Passif</span><br><br>
			  Les alliés affliges d'un débuff <span class='gbt'>Gel</span> recoivent 90% de degats en mois.
			  Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.<br><br>
			  <span class='gbt'>Effet Actif</span><br><br>
			  Une fois par Manche, ranime chaque allié, dont cette Championne, avec 100% de PV.
			  Place un débuff <span class='gbt'>Gel</span> sur l'allié ranime pendant 1 tour.
			  Il est impossible de bloquer ce débuff et d'y resister.
            `,
            isPassive: true,
          },
        ],
        stats: {
          PV: "17 835",
          ATQ: "1 123",
          DEF: "1 542",
          VIT: "106",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          RÉS: "50",
          PRÉ: "0",
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/attack.png",
      description: `
        Augmente la statistique ATQ des Alliés dans les batailles d'Arene de 40%.
      `,
    };
