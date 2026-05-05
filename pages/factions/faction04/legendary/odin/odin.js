const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Dard de Gungnir",
          description: `
            Attaque un ennemi.
            Possède 50% de chances de placer un débuff <span class='gbt'>Fou furieux</span> pendant 2 tours.<br><br>
			Il est impossible de placer ce débuff sur les Boss.
          `,
          damage: "5*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Tempete de familiers",
          description: `
            Retire tous les buffs dont disposent les ennemis.<br><br>
			Possède 80% de chances de placer un débuff <span class='gbt'>Reduction de DEF</span> de 60% sur tous les ennemis pendant 2 tours.
			Possède également 80% de chances de placer un débuff <span class='gbt'>Etourdissement</span> sur tous les ennemis pendant 1 tour.
          `,
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Jugement asgardien",
          description: `
            Attaque un ennemi.
			Avant d'attaquer, vole tous les buffs de la cible.
			Les degats infliges par cette compétence dependent du Type de la cible :<br><br>
			ATQ : Infligera des degats bases sur l'ATQ de la cible.<br><br>
			DEF : Infligera des degats bases sur la DEF de la cible.<br><br>
			PV/Soutien/Boss : Infligera des degats bases sur les PV MAX de la cible.<br><br>
			Cette attaque ignorera également 100% de la DEF de la cible.<br><br>
			Si la cible a ete tuee par cette compétence, ranime un allié mort aleatoire
			avec 50% de PV et 50% de Compteur de Tour.
          `,
		  damage: "5*(ATQ Ennemie) | 5*(DEF Ennemie) | 0.35*(PV MAX Ennemie) | 0.1*(PV MAX Ennemie) (Boss)",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Sagesse d'Odin [P]",
          description: `
            Tous les 9 tours, place un buff <span class='gbt'>Blocage des Degats</span>
			sur ce Champion pendant 1 tour, puis applique également un effet
			<span class='gbt'>Propagation de Buff</span>, prenant tous les buffs
			de ce Champion pour les placer sur tous les alliés.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 825",
        ATQ: "1 002",
        DEF: "1 321",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.png",
    description: `
      Augmente la statistique VIT des Alliés du Neant dans les batailles d'Arene de 40%.
    `,
  };

