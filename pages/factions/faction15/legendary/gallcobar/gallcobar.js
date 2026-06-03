const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton emmêlé",
          description: `Attaque un ennemi. Place un buff ${BUFFS.SHIELD} de 2 tours sur l'allié ayant le moins de PV. La valeur du ${BUFFS.SHIELD} est égale à 15 % des PV MAX de l'allié.`,
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
          name: "Épines vitrioliques",
          description: `Attaque tous les ennemis. Possède 80 % de chances de retirer tous les buffs. Place sur chaque ennemi un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours pour chaque buff qui lui a été retiré. Possède également 80 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 1 tour.`,
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
          description: `Retire tous les débuffs sur tous les alliés. Place sur chaque allié un buff ${BUFFS.HEALS} de 15 % pendant 1 tour pour chaque débuff qui lui a été retiré.${RETURN}${RETURN}

Place également un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 25 % des PV MAX de ce Champion.`,
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
            Des qu'un ennemi sous débuff <span class='gbt'>Poison</span>${RETURN}
            attaque un allié sous buff <span class='gbt'>Soins continus</span>,${RETURN}
            active instantanement 1 débuff <span class='gbt'>Poison</span>${RETURN}
            sur cet ennemi.${RETURN}
            Active également instantanement 1 buff <span class='gbt'>Soins continus</span>${RETURN}
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

