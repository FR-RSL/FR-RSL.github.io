const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Avant-goût d'oubli",
          description: `Attaque un ennemi. Possède 35% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour.${RETURN}${RETURN}

Cette attaque passera toujours en critique si la cible se trouve sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.`,
          damage: "3*DEF",
          levelInfo: [
            "Dégâts +5%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Horreurs de l'au-delà",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. Les cibles sous débuff ${DEBUFFS.FEAR} ne peuvent pas résister à ce débuff.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Terreurs astrales",
          description: `Attaque tous les ennemis. Ignorera 30% de la DÉF de chaque cible contre les cibles sous débuffs ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}. Cette attaque passera toujours en critique contre les cibles sous débuffs ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.${RETURN}${RETURN}

Les dégâts de cette compétence sont augmentés de 10% chaque fois qu'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR} est placé sur un ennemi.${RETURN}${RETURN}

[Cette compétence possède 40% de chances d'être débloquée pendant 1 tour dès qu'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR} est placé sur un ennemi.]`,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Étoiles alignées [P]",
          description: `${PASSIVE}

Augmente de 15% les chances que les compétences des ennemis échouent lorsqu'ils sont sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.${RETURN}${RETURN}

${ACTIVE}

Empêche la mort de ce Champion et le maintient en vie avec 1 PV lorsqu'il est frappé par un coup fatal, puis retire tous les buffs et débuffs de ce Champion. Après avoir empêché la mort de ce Champion, le soigne totalement et épuise totalement son Compteur de Tour.${RETURN}${RETURN}

Possède ensuite 80% de chances de placer un débuff ${DEBUFFS.FEAR} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

Place enfin un débuff ${DEBUFFS.SLEEP} sur ce Champion pendant 1 tour. Il est impossible de résister à ce débuff ou de le bloquer.`,
          cooldown: 4,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 980",
        ATQ: "859",
        DEF: "1 387",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/crit.webp",
    description: `
      Augmente la statistique TAUX C. des Alliés dans les batailles d'Arene de 25%.
    `,
  };

