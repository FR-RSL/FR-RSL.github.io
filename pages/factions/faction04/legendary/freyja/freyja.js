const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance heitt",
          description: `Attaque tous les ennemis. Possède 25% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Active cette compétence lorsqu'un buff ${BUFFS.SHIELD} placé par cette Championne est retiré par des dégâts. Se produit une fois par tour.`,
          damage: "2.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +5%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Égide prismatique",
          description: `Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion et aux PV MAX de chaque cible de ce Champion.`,
          cooldown: 4,
          levelInfo: [
            "Bouclier +10%",
            "Bouclier +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Tresse d'or",
          description: `Retire tous les débuffs sur tous les alliés et leur accorde un buff ${BUFFS.BLOCK_DEBUFFS} pendant 2 tours.${RETURN}${RETURN}

Remplit également le Compteur de Tour de tous les alliés de 20%.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Prescience divine [P]",
          description: `${PASSIVE}

Augmente la DÉF de cette Championne de 5% chaque fois qu'un allié inflige un coup critique (s'accumule jusqu'à 50%).${RETURN}${RETURN}

${ACTIVE}

Empêche la mort de l'allié ayant les DÉG C. les plus élevés, sauf cette Championne, et le garde en vie avec 1 PV lorsqu'il est touché par une frappe critique. Si plusieurs Champions de l'équipe disposent de cette Compétence, cet effet ne sera activé qu'une fois.${RETURN}${RETURN}

Soigne ensuite cet allié de 20% de ses PV MAX et active un effet ${INSTANT} sur lui.`,
		  cooldown: 5,
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 310",
        ATQ: "815",
        DEF: "1 409",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/defence.webp",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

