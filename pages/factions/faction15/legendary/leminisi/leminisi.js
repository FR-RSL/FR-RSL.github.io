const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Serres auriques",
          description: `
            Attaque 2 fois un ennemi.<br><br>
			Si la cible se trouve sous buff <span class='gbt'>Bouclier</span>, chaque frappe a 25% de chances de reduire la valeur du <span class='gbt'>Bouclier</span>
			de 10%. Ignorera également 50% de la RES de la cible si la cible fait partie de l'Alliance corrompue. Si la cible ne se trouve pas sous
			buff <span class='gbt'>Bouclier</span>, chaque frappe ignorera 10% de la DEF de la cible.
          `,
          damage: "2.1*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Intercepter la menace",
          description: `
            Attaque 2 fois un ennemi.<br><br>
			Chaque frappe Possède 100% de chances de retirer 2 buffs aleatoires a la cible. Ignorera également 50% de la RES de la cible
			fait partie de l'Alliance corrompue. Cette compétence inflige une quantite de degats supplémentaires equivalente a la valeur du
			Compteur de Tour actuel de la cible (s'accumule jusqu'a 100%).
          `,
          damage: "3*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Guerriere veneree",
          description: `
            Attaque 2 fois tous les ennemis.<br><br>
			La premiere frappe a 75% de chances de placer un débuff <span class='gbt'>Reduction des Soins</span> de 100% pendant 2 tours.
			La seconde frappe a 50% de chances de placer un débuff <span class='gbt'>Blocage des Buffs</span> pendant 2 tours.
			Ignorera également 50% de la RES de la cible si la cible fait partie de l'Alliance corrompue.
          `,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +20%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Fleau du mal [P]",
          description: `
            Recoit 15% de degats en moins de la part des ennemis sous débuff <span class='gbt'>Reduction des Soins</span>.<br><br>
			Remplit le Compteur de Tour de cette Championne de 5% des qu'un ennemi recoit un buff <span class='gbt'>Bouclier</span> ou est soigne.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 515",
        ATQ: "1 520",
        DEF: "958",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%.
    `,
  };

