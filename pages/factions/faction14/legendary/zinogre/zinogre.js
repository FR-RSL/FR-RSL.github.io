const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Combo de lames",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "1.2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe de lames",
          description: `Attaque 4 fois un ennemi. Chaque coup augmente le Compteur de Tour de cette Championne de 5 %. 

Place également un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          damage: "1.4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Tournoiement de lames",
          description: `Attaque 4 fois un ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur cette Championne pendant 2 tours. 

La première et la deuxième frappe possèdent chacune 75 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. 

La troisième et la quatrième frappe possèdent chacune 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "1.5*ATQ",
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
          img: "assets/passif1.webp",
          name: "Essence de Zinogre [P]",
          description: `${PASSIVE}

Augmente les dégâts infligés par cette Championne de 1 % par tranche de 1 % de PV perdus (s'accumule jusqu'à 50 %). Les dégâts augmentés doublent si une cible se trouve sous débuff ${DEBUFFS.DEF}.

${ACTIVE}

Empêche la mort de cette Championne et la garde vivante avec 1 PV lorsqu'elle est frappée par un coup fatal.

Si cette compétence évite la mort de cette Championne, la soigne de 50 % de ses PV MAX.

N'empêchera pas la mort de cette Championne si elle est affligée d'un débuff ${DEBUFFS.HEALS}.`,
          isPassive: true,
          cooldown: 4,
        },
      ],
      stats: {
        PV: "17 340",
        ATQ: "1 465",
        DEF: "958",
        VIT: "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans les Donjons de 30%.
    `,
  };

