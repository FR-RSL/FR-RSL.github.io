const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance en bois",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.ATK} de 50% et un débuff ${DEBUFFS.CRATE} de 30% sur la cible pendant 2 tours. A 50% de chances qu'il soit impossible de résister à ces débuffs et de les bloquer.`,
          damage: "4.1*DEF",
          levelInfo: [
			"Chance de Buff/débuff +10%",
            "Dégâts +15%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Gardienne céruléenne",
          description: `Attaque un ennemi. Si la cible a 50% de PV ou moins, cette attaque est toujours critique et ignorera 50% de la DÉF de la cible.${RETURN}${RETURN}

Place un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à la différence entre les PV actuels de la cible et les PV MAX de la cible. Si la cible est un Boss, la valeur du ${BUFFS.SHIELD} est equivalente a 400% de la DEF de cette Championne.${RETURN}${RETURN}

Si la cible est tuée, réduit également de 2 tours les temps de recharge de toutes les compétences alliées.`,
          damage: "5.4*DEF",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Feuille ornée",
          description: `Soigne tous les alliés. La valeur du soin est equivalent a 400% de la DEF de cette Championne.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: [
            "Soins +15%",
            "Soins +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Maîtresse-bouclier [P]",
          description: `Place un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés pendant 1 tour au début de la Manche et chaque fois que les PV de cette Championne tombent sous 50%.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 990",
        ATQ: "782",
        DEF: "1 531",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/defence.webp",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%.
    `,
  };

