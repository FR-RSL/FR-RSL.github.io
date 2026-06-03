const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Faux tordue",
          description: `Attaque un ennemi. Vole tous les buffs de la cible la première fois que ce Champion les frappe avec cette compétence. Il est impossible de résister à cet effet.${RETURN}${RETURN}

Toutes les fois suivantes où cette attaque frappe un ennemi, aucun buff ne sera volé. À la place, les dégâts seront augmentés de 10 % pour chaque buff se trouvant sur la cible.`,
          damage: "3.1*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Percer la carapace",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.STRENGTHEN}, ${BUFFS.STONE_SKIN}, ${BUFFS.DEF} et ${BUFFS.ALLY_PROTECT}, ainsi que 25 % de la DÉF de la cible.${RETURN}${RETURN}

Si cette attaque tue un ennemi, soigne totalement ce Champion et lui accorde un buff ${BUFFS.STONE_SKIN} pendant 1 tour.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Vent frais d'automne",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, retire tous les buffs ${BUFFS.DEF} sur chaque cible et les remplace par un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Retire également tous les buffs ${BUFFS.STRENGTHEN} sur chaque cible et les remplace par un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_BUFFS} d'1 tour sur les ennemis qui ne sont pas affligés de buffs ${BUFFS.DEF} ou ${BUFFS.STRENGTHEN} avant l'attaque.${RETURN}${RETURN}

Il est impossible de résister au retrait des buffs et au placement des débuffs.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Force de la nature [P]",
          description: `Augmente les PV de ce Champion de 2 000 et sa DÉF de 100 par tranche de 1 000 ATQ qu'il possède.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 10 % dès qu'il reçoit un buff.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 690",
        ATQ: "1 630",
        DEF: "903",
        VIT: "105",
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

