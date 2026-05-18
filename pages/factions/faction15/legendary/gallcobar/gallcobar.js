const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Baton emmele",
          description: `
            Attaque un ennemi.
            Place un buff <span class='gbt'>Bouclier</span> pendant 2 tours
            sur l'allié ayant le moins de PV.
            La valeur du <span class='gbt'>Bouclier</span> est egale a
            15% des PV MAX de l'allié.
          `,
          damage: "3.75*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Bouclier +10%",
            "Dégâts +10%",
            "Bouclier +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Epines vitrioliques",
          description: `
            Attaque tous les ennemis.
            Possède 80% de chances de retirer tous les buffs.
            Place sur chaque ennemi un débuff <span class='gbt'>Poison</span> de 5%
            pendant 2 tours pour chaque buff qui lui a ete retire.
            Possède également 80% de chances de placer un débuff
            <span class='gbt'>Blocage des Buffs</span> sur tous les ennemis pendant 1 tour.
          `,
          cooldown: 4,
          damage: "4.2*ATQ",
          levelInfo: [
          "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Hypertrophie",
          description: `
            Retire tous les débuffs sur tous les alliés.
            Place sur chaque allié un buff <span class='gbt'>Soins continus</span> de 15%
            pendant 1 toir pour chaque débuff qui lui a ete retire.<br><br>
            Place également un buff <span class='gbt'>Bouclier</span> sur
            tous les alliés pendant 2 tours.
            La valeur du <span class='gbt'>Bouclier</span> est egale a 25%
            des PV MAX de ce Champion.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Chamane des ronces [P]",
          description: `
            Des qu'un ennemi sous débuff <span class='gbt'>Poison</span>
            attaque un allié sous buff <span class='gbt'>Soins continus</span>, 
            active instantanement 1 débuff <span class='gbt'>Poison</span>
            sur cet ennemi.
            Active également instantanement 1 buff <span class='gbt'>Soins continus</span>
            sur l'allié attaque.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 970",
        ATQ: "903",
        DEF: "1 277",
        VIT: "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "15",
      },
    };

  	const aura = null; // Mettre null si pas d'aura, ou garder l'objet aura existant si il y en a une

