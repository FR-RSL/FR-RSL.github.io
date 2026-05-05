const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Puissance de Nain",
          description: `
            Attaque 3 fois un ennemi.<br><br>
            Chaque frappe Possède 80% de chances de reduire le Compteur de Tour de la cible de 15%.
            Si le Compteur de Tour n'est pas reduit, chaque frappe Possède 80% de chances de placer
            un débuff <span class='gbt'>Gel</span> sur la cible pendant 1 tour.
          `,
          damage: "1.1*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Furie du Roi",
          description: `
            Attaque tous les ennemis.<br><br>
            Possède 75% de chances de placer un débuff <span class='gbt'>Reduction d'ATQ</span> de 50%
            et un débuff <span class='gbt'>Affaiblissement</span> de 25% sur tous les ennemis pendant 2 tours.<br><br>
            Place également un buff <span class='gbt'>Contre-attaque</span> sur ce Champion pendant 2 tours.
          `,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Coup beni",
          description: `
            Attaque 3 fois un ennemi. Chaque frappe reduit la DEF de la cible de 3%
            (s'accumule jusqu'a 30%).<br><br>
            Chaque frappe soigne également ce Champion a hauteur de 30% des degats infliges.
          `,
          damage: "1.5*DEF + 0.1*(PV MAX ennemis)",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Aucune retenue [P]",
          description: `
            Lors d'une contre-attaque, inflige 100% des degats au lieu de 75%.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 650",
        ATQ: "749",
        DEF: "1 520",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.png",
    description: `
      Augmente la statistique PRE des Alliés dans les Donjons de 80.
    `,
  };

