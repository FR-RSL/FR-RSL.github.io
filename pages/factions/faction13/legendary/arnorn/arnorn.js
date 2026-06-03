const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente éclatante",
          description: `Attaque 2 fois un ennemi. Les dégâts augmentent de 5 % pour chaque buff sur la cible.${RETURN}${RETURN}

Chaque frappe a 35 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "1.75*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Force de miroitement",
          description: `Attaque 2 fois un ennemi. Les dégâts infligés par cette compétence augmentent de 10 % par tranche de 10 % de PV perdus par ce Champion.${RETURN}${RETURN}

Si la cible bénéficie de 2 buffs ou plus, ignorera également 35 % de la DÉF de la cible.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "2.7*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Temps de recharge -1",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Courroux de Hrothglime",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.DEF}, ${BUFFS.STRENGTHEN} et ${BUFFS.SHIELD}.${RETURN}${RETURN}

Si cette attaque tue au moins 1 ennemi, réduit le Compteur de Tour de tous les ennemis de 50 %. Il est impossible de résister à cet effet.`,
          damage: "3.4*ATQ",
          cooldown: 6,
          levelInfo: [
            "Dégâts +10%",
            "Temps de recharge -1",
            "Dégâts +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Roi doré [P]",
          description: `${PASSIVE}

Augmente l'ATQ de ce Champion de 5 % pour chaque buff actif sur l'équipe ennemie (s'accumule jusqu'à 100 %).${RETURN}${RETURN}

${ACTIVE}

Empêche la mort de ce Champion et le garde vivant avec 1 PV lorsqu'il est frappé par un coup fatal. Lui accorde un buff ${BUFFS.STONE_SKIN} pendant 1 tour. Active ensuite instantanément la compétence [Courroux de Hrothglime]. Ceci ne placera pas la compétence [Courroux de Hrothglime] en temps de recharge.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, cet effet ne sera activé qu'une fois.`,
          cooldown: 4,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 855",
        ATQ: "1 586",
        DEF: "936",
        VIT: "103",
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

