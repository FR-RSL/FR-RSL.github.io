const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Briseur d'exorcisme",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si la cible bénéficie d'un buff. Place 2 frappes supplémentaires si la cible bénéficie d'un buff et appartient à la Faction des Hordes Mortes-vivantes.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi. Se produit une fois par compétence.`,
          damage: "1.8*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Purification violente",
          description: `Attaque 2 fois un ennemi. Avant chaque frappe, détruit les PV MAX de la cible de 10 % (s'accumule jusqu'à 50 %). Cet effet ne fonctionne pas contre les Boss.${RETURN}${RETURN}

Les dégâts infligés par cette compétence augmentent de 10 % pour chaque buff et débuff sur la cible (s'accumule jusqu'à 100 %).${RETURN}${RETURN}

Si la cible est tuée par cette compétence, place un débuff ${DEBUFFS.BLOCK_REA}.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Vengeance finale",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Ignorera 50 % de la DÉF de la cible ainsi que les buffs ${BUFFS.STONE_SKIN}, ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN}.`,
          damage: "2.4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Devoir d'Onryo [P]",
          description: `Dès qu'un Champion attaque, tous les ennemis, sauf la cible initiale, reçoivent des dégâts équivalents à 25 % des dégâts infligés à la cible initiale.${RETURN}${RETURN}

Ces dégâts supplémentaires ignoreront 100 % de la DÉF de chaque ennemi. Les dégâts supplémentaires ne peuvent pas passer en critique et ne déclencheront pas de contre-attaques.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 205",
        ATQ: "1 630",
        DEF: "1 002",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés dans les batailles d'Arene de 35%.
    `,
  };

