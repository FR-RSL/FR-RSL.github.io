const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Buveur d'Âmes",
          description: `Attaque un ennemi. Accorde un Tour Supplémentaire si cette attaque tue un ennemi.`,
          damage: "3.8*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Gel du Sang",
          description: `Attaque un ennemi. Vole 100% du Compteur de Tour de la cible.${RETURN}${RETURN}

Réduit d'1 tour le temps de recharge de [Rage d'Oni] si la cible est immunisée contre les effets de réduction du Compteur de Tour.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Rage d'Oni",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}

Attaquera 5 fois au lieu d'1 à chaque 4e utilisation de cette compétence contre la même cible au cours d'un round.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Vigoureux [P]",
          description: `Tous les effets de réduction de Compteur de Tour sont augmentés de 50% lorsqu'ils sont utilisés sur ce Champion.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 360",
        ATQ: "1 487",
        DEF: "1 068",
        VIT: "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés de toutes les Batailles de 29%.
    `,
  };

