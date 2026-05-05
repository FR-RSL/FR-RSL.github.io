const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Corruption",
          description: `
            Attaque un ennemi. Possède 50 % de chances de placer un débuff <span class='gbt'>Réduction d’ATQ</span> de 50 % pendant 2 tours. Possède également 25 % de chances de placer un débuff <span class='gbt'>Réduction d’ATQ</span> de 50 % sur tous les ennemis pendant 2 tours si cette attaque passe en critique.
		`,
          damage: "3.3*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Punition purgative",
          description: `
            Attaque 3 fois un ennemi. Chaque frappe réduit la DÉF de la cible de 5 % (s’accumule jusqu’à 30 %). Chaque frappe augmente également la DÉF de cette Championne de 5 % (s’accumule jusqu’à 100 %).<br><br>
			Active instantanément la compétence <span class='gbt'>Terreur céleste</span> si cette compétence tue un ennemi.
          `,
          damage: "1.6*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Terreur céleste",
          description: `
            Attaque tous les ennemis. Place un débuff <span class='gbt'>Provocation</span> pendant 1 tour. Il est impossible de bloquer ou de résister à ce débuff si le Champion ciblé fait partie de la Faction des Rejetons Démoniaques.
          `,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Tueuse de demons [P]",
          description: `
            Les effets Ignorer la DÉF de l’ennemi sont réduits de 50 %.<br><br>
			Les Champions de la Faction des Rejetons Démoniaques ne peuvent pas infliger de coups critiques à cette Championne.<br><br>
			Cette Championne ne peut pas placer de coups faibles sur les Champions de la Faction des Rejetons Démoniaques.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 845",
        ATQ: "925",
        DEF: "1 531",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/defence.png",
    description: `
      Augmente la statistique RES des Alliés dans les batailles d'Arene de 80.
    `,
  };

