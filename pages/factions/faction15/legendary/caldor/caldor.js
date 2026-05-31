const championData = {
type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Chant de dague",
          description: `Attaque tous les ennemis. 

A 15 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Ignorera 20 % de la RÉS de chaque cible pour chaque buff ${BUFFS.HEALS} sur ce Champion.`,
          damage: "2.4*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +15%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Orchestre de guerre",
          description: `Sélectionne une cible.

Si la cible est un ennemi, réduit d'1 tour la durée de tous les buffs sur tous les ennemis. Place un débuff ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours et un ${DEBUFFS.POISON} de 5 % supplémentaire pendant 2 tours pour chaque buff ${BUFFS.HEALS} sur ce Champion. Il est impossible de résister à ces débuffs. Ensuite, active instantanément un déclenchement de tous les débuffs ${DEBUFFS.POISON} sur tous les ennemis. 

Si la cible est un allié, augmente d'1 tour la durée de tous les buffs, puis active instantanément un déclenchement de tous les buffs ${BUFFS.HEALS} sur tous les alliés. Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours. Place également un buff ${BUFFS.HEALS} de 15 % sur ce Champion pendant 2 tours et un autre buff ${BUFFS.HEALS} de 15 % pendant 2 tours pour chaque allié vivant. 

Enfin, remplit le Compteur de Tour de ce Champion de 15 % pour chaque buff ou débuff placé par cette compétence.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Crescendo rythmique",
          description: `Attaque un ennemi. Avant d'attaquer, a 100 % de chances de retirer tous les buffs de la cible et de placer un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.WEAKEN} de 25 % sur la cible pendant 2 tours. Ignorera 20 % de la RÉS de la cible pour chaque buff ${BUFFS.HEALS} sur ce Champion.`,
          damage: "5*ATQ | PV MAX Ennemi*(0.2 + 0.1*Poisons)",
          cooldown: 4,
          factions: [
            `Retire tous les buffs de tous les ennemis si la cible initiale est tuee.
            Il est impossible de resister a ce retrait de buffs.`,
            `Ignorera 5% de la DEF de la cible pour chaque débuff
            <span class='gbt'>Poison</span> dont elle est affligee et chaque buff
            <span class='gbt'>Soins continus</span> sur ce Champion.`,
            `Si la cible initiale se trouve sous débuff <span class='gbt'>Poison</span>,
            attaque également tous les autres ennemis. Les degats infliges sont
            proportionnels aux PV MAX de la cible initiale et au nombre de débuffs
            <span class='gbt'>Poison</span> dont elle est affligee.
            Si la cible initiale est un Boss ou un sbire, les degats infliges
            sont equivalent a 10% de ses PV MAX.`,
          ],
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Dégâts +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Symphonie de Sylvains [P]",
          description: `Ignore 15 % de la DÉF de la cible lorsque ce Champion attaque en se trouvant sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. 

Ce Champion reçoit 30 % de dégâts en moins contre les ennemis qui ne se trouvent pas sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          factions: [
            `Chaque buff <span class='gbt'>Soins continus</span> 
            sur ce Champion augmente son TAUX C. de 20%.`,
            `A chaque fois qu'un buff <span class='gbt'>Soins continus</span>
            s'active sur ce Champion, remplit également son Compteur de Tour de 8%.`,
            `A chaque fois qu'un buff <span class='gbt'>Soins continus</span>
            s'active sur ce Champion ou un allié, augmente les degats de ce Champion
            de 5% (s'accumule jusqu'a 150%).`,
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 855",
        ATQ: "1 663",
        DEF: "859",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
  img: "../../../../../../assets/images/auras/sup-crit.webp",
  description: `
    Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 25%.<br><br>
    Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%.<br>
    (ne s'applique qu'a la Faction des Gardes Sylvains).
  `,
};

