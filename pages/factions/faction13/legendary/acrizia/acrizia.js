const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Assaut infatigable",
          description: `
            Attaque un ennemi. Possède 45% de chances de placer un débuff
            <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours.<br><br>
            Les degats de cette compétence augmentent de 10% chaque fois qu'elle est
            utilisee. S'accumule jusqu'a 100%.
          `,
          damage: "2.5*ATQ | 2% PV MAX ennemis",
          levelInfo: [
            "Dégâts +5%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Dominer le terrain",
          description: `
            Attaque 2 fois tous les ennemis.
            Place un buff <span class='gbt'>Bouclier</span> sur ce Champion
            pendant 2 tours. La valeur <span class='gbt'>Bouclier</span> est
            egale a 5% des PV MAX de ce Champion pour chaque coup critique.
          `,
          damage: "2*ATQ | 5% PV MAX ennemis",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Demanteler",
          description: `
            Attaque 2 fois un ennemi.
            Possède 80% de chances de voler 100% du Compteur de Tour de la cible
            avant d'attaquer. Il est impossible de resister a cet effet
            si la cible Possède des PV MAX plus eleves que ce Champion.
          `,
          damage: "3*ATQ | 5% PV MAX ennemis",
          cooldown: 4,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Grandeur [P]",
          description: `
            Reduit les degats subis de 50% lors des attaques de zone.<br><br>
            Si les PV MAX d'une cible sont superieurs au double de ceux de ce Champion,
            l'attaque de ce Champion infligera des degats en fonction des PV MAX de la cible,
            au lieu de l'ATQ de ce Champion.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 855",
        ATQ: "1 476",
        DEF: "1 046",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/crit.png",
    description: `
      Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 19%.
    `,
  };

