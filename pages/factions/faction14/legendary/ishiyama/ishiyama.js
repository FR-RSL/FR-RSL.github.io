const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Comete ardente",
          description: `
            Attaque 2 fois un ennemi.<br><br>
			Chaque frappe transfere un débuff aleatoire de
			ce Champion sur la cible.<br><br>
			Si ce Champion est afflige d'un débuff
			lorsqu'il se fait attaquer,
			contre-attaque avec cette compétence.
          `,
          damage: "0.14*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Salve calculee",
          description: `
            Attaque tous les ennemis.<br><br>
			A 75% de chances de placer un débuff <span class='gbt'>Peur</span>,
			un débuff <span class='gbt'>Reduction des DEG C.</span> de 25% et
			un débuff <span class='gbt'>Reduction du TAUX C.</span> de 30% 
			sur tous les ennemis pendant 2 tours.
			Il est impossible de resister a ces débuffs pour les ennemis qui 
			sont dega affliges de 2 débuffs ou plus.
          `,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Finis-les",
          description: `
            Attaque un ennemi. Ignorera 25% de la DEF de la cible.
			Ignorera au lieu de ca 50% de la DEF de la cible
			si cette derniere est affligee de 2 débuffs ou plus.<br><br>
			Place un buff <span class='gbt'>Blocage des Degats</span>
			sur ce Champion pendant 2 tours si cette attaque tue un ennemi.
          `,
          damage: "0.34*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "L'inflexible [P]",
          description: `
            Des qu'un ennemi resiste a une tentative de débuffs de ce Champion
			il est impossible de resister au prochain débuff place par ce Champion.<br><br>
			Chaque débuff place par ce Champion augmente ses PV MAX de 3%
			(s'accumule jusqu'a 30%).
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "22 800",
        ATQ: "892",
        DEF: "1 167",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 28%.
    `,
  };

