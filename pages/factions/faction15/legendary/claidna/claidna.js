const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Touche de sommeil",
          description: `
            Attaque un ennemi.
            Possède 80% de chances de placer un débuff
            <span class='gbt'>Sommeil</span> pendant 1 tour.<br><br>
            Remplit le Compteur de Tour de cette Championne de 15%
            si le débuff <span class='gbt'>Sommeil</span> est place.
          `,
          damage: "0.28*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Perdue dans les bois",
          description: `
            Possède 75% de chances de placer un débuff
            <span class='gbt'>Reduction de VIT</span> de 30% et un débuff
            <span class='gbt'>Sangsue</span> sur tous les ennemis pendant 2 tours.<br><br>
            Retablit 100% des PV MAX detruits de chaque allié,
            puis soigne tous les alliés de 20% des PV MAX de cette Championne.
          `,
          cooldown: 4,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Infusion d'outre-tombe",
          description: `
            Retire tous les débuffs de tous les alliés,
            puis leur accorde un buff
            <span class='gbt'>Blocage des débuffs</span> et un buff
            <span class='gbt'>Ranimer apres la Mort</span> pendant 2 tours.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Monarque fee [P]",
          description: `
            Possède 30% de chances de totalement bloquer les degats en approche
            de la premiere frappe d'une attaque sur un allié aleatoire.
            Ne peut se produire qu'une fois par tour.
          `,
          cooldown: 1,
          levelInfo: [
            "Chance de Buff/débuff +15%",
            "Chance de Buff/débuff +15%",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 315",
        ATQ: "804",
        DEF: "1 354",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés dans les Donjons de 40%.
    `,
  };

