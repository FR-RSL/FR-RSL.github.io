const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Lance en bois",
          description: `
            Attaque un ennemi.<br><br>
			Place un débuff <span class='gbt'>Reduction d'ATQ</span> de 50%
			et un débuff <span class='gbt'>Reduction du TAUX C.</span> de 30% sur la cible pendant 2 tours.
			A 50% de chances qu'il soit impossible de resister a ces débuffs et de les bloquer.
          `,
          damage: "4.1*DEF",
          levelInfo: [
			"Chance de Buff/débuff +10%",
            "Dégâts +15%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Gardienne ceruleenne",
          description: `
            Attaque un ennemi.
			Si la cible a 50% de PV ou moins, cette attaque est toujours critique
			et ignorera 50% de la DEF de la cible.<br><br>
			Place un buff <span class='gbt'>Bouclier</span> sur tous les alliés pendant 2 tours.
			La valeur du <span class='gbt'>Bouclier</span> est egale a la difference entre les PV actuels
			de la cible et les PV MAX de la cible.
			Si la cible est un Boss, La valeur du ${BUFFS.SHIELD} est equivalent a 400% de la DEF de cette Championne.${RETURN}${RETURN}
			Si la cible est tuee, reduit également de 2 tours les temps de recharge de toutes les compétences alliées.
          `,
          damage: "5.4*DEF",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Feuille ornee",
          description: `
            Soigne tous les alliés.
			La valeur est equivalent a 400% de la DEF de cette Championne.<br><br>
			Place également un buff <span class='gbt'>Blocage des débuffs</span> et un buff <span class='gbt'>Protection d'allié</span>
			de 50% sur tous les alliés pendant 2 tours.
          `,
          cooldown: 4,
          levelInfo: [
            "Soins +15%",
            "Soins +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Maitresse-bouclier [P]",
          description: `
            Place un buff <span class='gbt'>Blocage des Degats</span> sur tous les alliés pendant 1 tour
			au debut de la Manche et chaque fois que les PV de cette Championne tombent sous 50%.<br><br>
			Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 990",
        ATQ: "782",
        DEF: "1 531",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/defence.png",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%.
    `,
  };

