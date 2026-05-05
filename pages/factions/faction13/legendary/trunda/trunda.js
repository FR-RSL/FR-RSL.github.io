const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Maillet Dore",
          description: `
            Attaque 2 fois un ennemi.
            Chaque frappe a 50% de chances de placer un débuff
            <span class='gbt'>Etourdissement</span> pendant 1 tour.`,
          damage: "1.85*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chances de Buff/débuff +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Voile Seculaire",
          description: `
            Attaque un ennemi. puis attaque tous les autres ennemis avec une seconde frappe,
            infligeant 60% des degats infliges lors de la premiere frappe et ignorant 50% de la DEF de la cible.<br><br>
            Seule la seconde frappe de la compétence ignore 50% de la DEF de la cible.
            Cette seconde frappe est toujours un coup normal.
          `,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Rythme de Forge",
          description: `
            Attaque tous les ennemis.
            Possède 70% de chances de placer un débuff <span class='gbt'>Etourdir</span> pendant 1 tour.<br><br>
            Place également un débuff <span class='gbt'>Brulure de PV</span> pendant 2 tours.
            Place une frappe supplémentaire sur les ennemis qui ne sont pas affliges de débuff
            <span class='gbt'>Etourdir</span>. Les deux frappes de cette compétence infligent 50%
            de degats en plus a un bouclier <span class='gbt'>Peau de Pierre</span>. 
          `,
          damage: "3*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Justice Expeditive [P]",
          description: `
            L'ATQ de cette Championne augmente de 10% pour chaque débuff
            <span class='gbt'>Etourdir</span> ou <span class='gbt'>Brulure de PV</span>
            que cette Championne place sur des ennemis (s'accumule jusqu'a 50% par Manche).<br><br>
            La VIT de cette Championne augmente de 5 points pour chaque ennemi actuellement sous débuff
            <span class='gbt'>Brulure de PV</span> ou <span class='gbt'>Etourdir</span> (s'accumule jusqu'a 15).
            Ne compte que les débuffs <span class='gbt'>Brulure de PV</span> ou <span class='gbt'>Etourdir</span> actifs.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "22 800",
        ATQ: "1 608",
        DEF: "980",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "80",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.png",
    description: `
      Augmente la statistique ATQ des Alliés de Magie lors de toutes les Batailles de 36%.
    `,
  };

