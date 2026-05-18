const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Tron cogneur",
          description: `
            Attaque un ennemi.
            Possède 80% de chances de placer un débuff
            <span class='gbt'>Reduction de VIT</span> de 30% pendant 2 tours.<br><br>
            Si la cible est un Boss, ignorera 20% de la RES de la cible.
          `,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Croissance boreale",
          description: `
            Attaque tous les ennemis. Possède 75% de chances de placer un débuff
            <span class='gbt'>Reduction de PRE</span> de 50% 
            et un débuff <span class='gbt'>Blocage des Buffs</span> pendant 2 tours.<br><br>
            Si la cible est un Boss, ignorera 20% de la RES de la cible.
          `,
          damage: "3.6*DEF",
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
          name: "Cape d'aurore",
          description: `
            Place un buff <span class='gbt'>Augmentation de RES</span> de 50%
            sur tous les alliés pendant 3 tours.<br><br>
            Place également un buff <span class='gbt'>Voile Parfait</span>
            sur tous les alliés sauf ce Champion pendant 2 tours.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Esprit du nord [P]",
          description: `
            Si un allié Possède 2 buffs ou plus,
            augmente sa RES de 50.<br><br>
            Si un allié Possède 3 buffs ou plus,
            augmente également sa PRE de 50.<br><br>
            Si un allié Possède 4 buffs ou plus,
            augmente également ses degats de 20%.<br><br>
            Si plusieurs Champion de l'equipe disposent de cette compétence,
            une seule sera activee.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 330",
        ATQ: "859",
        DEF: "1 498",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "10",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/res.webp",
    description: `
      Augmente la statistique RES des Alliés lors de toutes les Batailles de 60.
    `,
  };

