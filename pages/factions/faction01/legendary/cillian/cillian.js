const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Croche-pied",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 35% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours. Chaque frappe possède également 35% de chances de voler 30% du Compteur de Tour actuel de la cible.`,
          damage: "1.6*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
			"Chance de Buff/débuff +5%",
			"Chance de Buff/débuff +5%",
			"Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Coup de Malchance",
          description: `Attaque tous les ennemis. Possède 85% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "4.3*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
			"Chance de Buff/débuff +5%",
			"Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Sonne-tête",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 2 tours et de voler 50% du Compteur de Tour actuel de la cible. Réinitialise le temps de recharge de cette Compétence si la cible est tuée.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: [
			"Chance de Buff/débuff +10%",
			"Chance de Buff/débuff +15%",
            "Dégâts +20%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Vie Bienheureuse [P]",
          description: `Au début de chaque tour, place deux des buffs suivants sur ce Champion pendant 2 tours : ${BUFFS.ATK} de 50%, ${BUFFS.CDAM} de 30%, ${BUFFS.CRATE} de 30%, ${BUFFS.STRENGTHEN} de 25%, ${BUFFS.BLOCK_DAMAGE} ou ${BUFFS.PRE} de 50%.`,
		  isPassive: true,
        },
      ],
      stats: {
        PV: "13 215",
        ATQ: "1 432",
        DEF: "1 266",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%.
    `,
  };

