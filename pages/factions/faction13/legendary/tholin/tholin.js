const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Brise-démon",
          description: `Attaque tous les ennemis. Avant d'attaquer, a 25% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}

A 50% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours si la cible est membre de l'Alliance corrompue, un Boss ou un sbire. Les ennemis de l'Alliance corrompue, les Boss et les sbires ne peuvent pas résister à cet effet.${RETURN}${RETURN}

Accorde un Tour supplémentaire si un débuff ${DEBUFFS.WEAKEN} a été placé sur tous les ennemis par cette compétence.`,
          damage: "2.5*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Retour dans l'abîme",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe ignorera 25% de la DÉF de la cible. Si la cible est membre de l'Alliance corrompue, un Boss ou un sbire, chaque frappe ignore au lieu de ça 50% de la DÉF de la cible.${RETURN}${RETURN}

Chaque frappe réduit l'ATQ de la cible de 5% (s'accumule jusqu'à 25%). Chaque frappe augmente également l'ATQ de ce Champion de 5% (s'accumule jusqu'à 50%).`,
          damage: "2.4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Fureur enragée",
          description: `Attaque 2 fois tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50% sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Pour chaque coup critique porté par la première frappe, augmente les dégâts infligés par la seconde frappe de 10%. Ignorera les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.SHIELD}.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Cauchemar du mal [P]",
          description: `Active la compétence Brise-démon  tous les cinq tours joués par ce Champion.${RETURN}${RETURN}

Les ennemis de l'Alliance corrompue, les Boss et les sbires ne peuvent pas porter de coup critique sur ce Champion.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 865",
        ATQ: "1 674",
        DEF: "914",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

