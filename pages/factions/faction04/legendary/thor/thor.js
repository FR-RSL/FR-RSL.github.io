const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Courroux de Mjolnir",
          description: `
            Attaque 2 fois un ennemi.
            Possède 20% de chances de repeter l'attaque.<br><br>
			Chaque coup reduit le Compteur de Tour de la cible de 10%.
          `,
          damage: "1.9*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Ricochet fulminant",
          description: `
            Attaque tous les ennemis.<br><br>
			Apres avoir frappe l'ennemi selectionne initialement, tous les autre
			ennemis seront frappes dans un ordre aleatoire. Chaque frappe suivant
			la frappe initiale augmentera les degats infliges de 25%
			(s'accumule jusqu'a 100%).<br><br>
			Ignorera les buffs <span class='gbt'>Blocage des Degats</span> et <span class='gbt'>Invincible</span>.
			Cet effet ne fonctionne pas contre les Boss.
          `,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Marteau des cieux",
          description: `
            Attaque tous les ennemis.
            Avant d'attaquer, place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%
			et un buff <span class='gbt'>Augmentation des DEG C.</span> de 30% 
			sur ce Champion pendant 2 tours.<br><br>
			Possède 75% de chances de reduire la RES de chaque ennemi de 10% 
			de maniere permanente (s'accumule jusqu'a 50%).<br><br>
			Possède également 75% de chances de placer un débuff 
			<span class='gbt'>Reduction de VIT</span> de 30% sur tous les ennemis pendant 2 tours.
          `,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Rupture celeste [P]",
          description: `
            A chaque fois que ce Champion inflige des degats, augmente le 
			compteur de Tonnerre d'1 point (s'accumule jusqu'a 10).<br><br>
			Chaque pile de Tonnerre augmente les DEG de ce Champion de 3%
			(s'accumule jusqu'a 30%).<br><br>
			Une fois que le compteur de Tonnerre atteint 10, attaque tous les
			ennemis et place un débuff <span class='gbt'>Etourdissement</span>
			pendant 1 tour. Apres l'attaque, le compteur de Tonnerre se reinitialise a 0.
          `,
          damage: "3.8*ATQ",
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 690",
        ATQ: "1 553",
        DEF: "980",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

