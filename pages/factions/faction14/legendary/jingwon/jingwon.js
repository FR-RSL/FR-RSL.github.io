const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Echange tragique",
          description: `
            Attaque un ennemi.
			Transfere tous les débuffs de ce Champion sur la cible.<br><br>
			Possède également 50% de chancesde placer un débuff 
			<span class='gbt'>Etourdissement</span> pendant 1 tour.
          `,
          damage: "0.23*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Calamite aggravee",
          description: `
            Attaque tous les ennemis.
			Possède 75% de chances d'augmenter d'1 tour la durée de tous les débuffs sur tous les ennemis.<br><br>
			Place également un débuff <span class='gbt'>Blocage des compétences Actives</span> et un débuff 
			<span class='gbt'>Blocage des Buffs</span> pendant 2 tours.
          `,
          damage: "0.28*PV",
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Eclat de puissance",
          description: `
            Attaque 2 fois tous les ennemis.<br><br>
			La premiere frappe Possède 80% de chances de retirer tous les buffs de tous les ennemis.<br><br>
			La seconde frappe Possède 80% de chances de placer un débuff 
			<span class='gbt'>Reduction de PRE</span> de 50% et un débuff <span class='gbt'>Reduction des DEG C.</span> de 25% pendant 2 tours.<br><br>
			Place également un buff <span class='gbt'>Renforcer</span> de 25% sur tous les alliés pendant 2 tours.
          `,
          damage: "0.14*PV",
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Dechaine [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
			Ce Champion est immunise contre les débuffs <span class='gbt'>Peur</span>,
			<span class='gbt'>Peur Absolue</span>,
			<span class='gbt'>Gel</span>,
			<span class='gbt'>Provocation</span>,
			<span class='gbt'>Sommeil</span>,
			<span class='gbt'>Etourdissement</span> et
			<span class='gbt'>Petrification</span>.<br><br>
			<span class='gbt'>Effet Actif</span><br><br>
			A la fin de chaque tour ennemi ou allié, retire tous les débuffs <span class='gbt'>Peur</span>,
			<span class='gbt'>Peur Absolue</span>,
			<span class='gbt'>Gel</span>,
			<span class='gbt'>Provocation</span>,
			<span class='gbt'>Sommeil</span>,
			<span class='gbt'>Etourdissement</span> et
			<span class='gbt'>Petrification</span> sur tous les alliés et place un buff
			<span class='gbt'>Blocage des débuffs</span> pendant 1 tour sur tous les alliés dont les débuffs ont ete retires.
          `,
          isPassive: true,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "22 800",
        ATQ: "925",
        DEF: "1 134",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%.
    `,
  };

