const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Volute de sommeil",
          description: `
            Attaque un ennemi.<br><br>
			Possède 50% de chances de placer un débuff
			<span class='gbt'>Sommeil</span> pendant 1 tour.<br><br>
			Si la cible se trouve sous un débuff 
			<span class='gbt'>Reduction de VIT</span> ou <span class='gbt'>Affaiblissement</span>
			place par cette Championne, Possède au lieu de ca 75%
			de chances de placer un débuff <span class='gbt'>Sommeil</span>
			pendant 1 tour.
          `,
          damage: "5.4*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Eclat printanier",
          description: `
            Attaque tous les ennemis.<br><br>
			Possède 75% de chances de placer un débuff <span class='gbt'>Reduction de VIT</span>
			de 30% et un débuff <span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.<br><br>
			Reduit également les Compteurs de Tour de tous les ennemis de 15%.
          `,
		  damage: "4.9*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Chant-reve beni",
          description: `
            Place un buff <span class='gbt'>Augmentation de VIT</span> de 30%
			et un buff <span class='gbt'>Augmentation d'ATQ</span> de 50% 
			sur tous les alliés pendant 3 tours.
			Remplit également le Compteurs de Tour de tous les alliés de 15%.<br><br>
			Accorde ensuite un Tour supplémentaire.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Floraison de vie [P]",
          description: `
            Des que cette Championne ou un allié voit son Compteur de Tour augmente,
			soigne tous les alliés en fonction de leurs PV MAX.
			La valeur du soin en pourcentage est egale a la moitie
			de l'augmentation du Compteur de Tour.
          `,
		  cooldown: 1,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 135",
        ATQ: "1 035",
        DEF: "1 134",
        VIT: "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/speed.png",
    description: `
      Augmente la statistique VIT des Alliés dans les batailles d'Arene de 28%.
    `,
  };

