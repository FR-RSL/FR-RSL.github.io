const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Lance heitt",
          description: `
            Attaque tous les ennemis. Possède 25% de chances de placer un 
			débuff <span class='gbt'>Provocation</span> pendant 1 tour.<br><br>
			Active cette compétence lorsqu'un buff <span class='gbt'>Bouclier</span>
			place par cette Championne est retire par des degats. Se produit une fois par tour.
          `,
          damage: "2.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +5%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Egide prismatique",
          description: `
            Place un buff <span class='gbt'>Augmentation de DEF</span> de 60% 
			sur tous les alliés pendant 2 tours.<br><br>
			Place également un buff <span class='gbt'>Bouclier</span> sur tous les alliés pendant 2 tours.
			La valeur du ${BUFFS.SHIELD} est equivalent a 250% de la DEF de cette Championne et a 10% des PV MAX de chaque cible.
          `,
          cooldown: 4,
          levelInfo: [
            "Bouclier +10%",
            "Bouclier +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Tresse d'or",
          description: `
            Retire tous les débuffs sur tous les alliés et leur accorde un buff
			<span class='gbt'>Blocage des débuffs</span> pendant 2 tours.<br><br>
			Remplit également le Compteur de Tour de tous les alliés de 20%.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Prescience divine [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
			Augmente la DEF de cette Championne de 5% chaque fois qu'un allié 
			inflige un coup critique (s'accumule jusqu'a 50%).<br><br>
			<span class='gbt'>Effet Actif</span><br><br>
			Empeche la mort de l'allié ayant les DEG C. les plus eleves,
			sauf cette Championne, et le garde en vie avec 1 PV lorsqu'il est touche
			par un frappe critique. Si plusieurs Champions de l'equipe disposent de cette
			compétence, cet effet ne sera active qu'une fois.<br><br>
			Soigne ensuite cet allié de 20% de ses PV MAX et active un effet
			<span class='gbt'>Tour instantane</span> sur lui.
          `,
		  cooldown: 5,
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 310",
        ATQ: "815",
        DEF: "1 409",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/defence.png",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

