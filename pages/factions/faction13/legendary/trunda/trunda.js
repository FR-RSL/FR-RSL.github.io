const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Maillet Doré",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "1.85*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chances de Buff/débuff +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Voile Séculaire",
          description: `Attaque un ennemi, puis attaque tous les autres ennemis avec une seconde frappe, infligeant 60 % des dégâts infligés lors de la première frappe et ignorant 50 % de la DÉF de la cible.

Seule la seconde frappe de la compétence ignore 50 % de la DÉF de la cible. Cette seconde frappe est toujours un coup normal.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Rythme de Forge",
          description: `Attaque tous les ennemis. Possède 70 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.

Place également un débuff ${DEBUFFS.BURN} pendant 2 tours. Place une frappe supplémentaire sur les ennemis qui ne sont pas affligés de débuffs ${DEBUFFS.STUN}. Les deux frappes de cette compétence infligent 50 % de dégâts en plus à un bouclier ${BUFFS.STONE_SKIN}.`,
          damage: "3*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Justice Expéditive [P]",
          description: `L'ATQ de cette Championne augmente de 10 % points pour chaque débuff ${DEBUFFS.STUN} ou ${DEBUFFS.BURN} que cette Championne place sur des ennemis (s'accumule jusqu'à 50 % par Manche).

La VIT de cette Championne augmente de 5 points pour chaque ennemi actuellement sous débuff ${DEBUFFS.BURN} ou ${DEBUFFS.STUN} (s'accumule jusqu'à 15). Ne compte que les débuffs ${DEBUFFS.BURN} ou ${DEBUFFS.STUN} actifs.`,
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
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés de Magie lors de toutes les Batailles de 36%.
    `,
  };

