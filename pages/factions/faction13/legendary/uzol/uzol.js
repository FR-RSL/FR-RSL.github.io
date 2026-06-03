const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Maître-hache impitoyable",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 20% de chances d'accorder un Tour supplémentaire. Si cette attaque tue un ennemi, accorde un Tour supplémentaire.`,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Coeur de pierre",
          description: `Attaque tous les ennemis. Avant d'attaquer, réduit de 100% la valeur des buffs ${BUFFS.SHIELD} sur tous les ennemis et leur inflige un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Il est impossible de résister à ces effets si la compétence est utilisée lors d'un Tour supplémentaire.${RETURN}${RETURN}

A 20% de chances d'accorder un Tour supplémentaire. Ces chances augmentent de 10% pour chaque coup critique.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Fureur royale",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}.${RETURN}${RETURN}

Ignore également les buffs ${BUFFS.STONE_SKIN} et 100% de la DÉF de la cible si cette compétence est utilisée lors d'un Tour supplémentaire ou d'un Tour instantané.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Roi de jade [P]",
          description: `Si un allié a des chances de gagner un Tour supplémentaire, augmente ces chances de 5%. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.${RETURN}${RETURN}

Ce Champion inflige 25% de dégâts en plus lors des Tours supplémentaires.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 195",
        ATQ: "1 498",
        DEF: "1 068",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés dans les batailles d'Arene de 33%.
    `,
  };

