const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Vrille de racine",
          description: `Attaque un ennemi.

Augmente la valeur de tous les buffs ${BUFFS.SHIELD} sur ce Champion de 25 %. Augmente également la valeur des buffs ${BUFFS.SHIELD} sur l'allié ayant le moins de PV de 25 %.

La valeur augmentée du buff ${BUFFS.SHIELD} ne peut pas dépasser 10 000 PV.`,
          damage: "0.24*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Tremble-vigne",
          description: `Attaque tous les ennemis. 

Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours. 

Réduit d'1 tour le temps de recharge de toutes les compétences des alliés, sauf celles de ce Champion.`,
          damage: "0.27*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Sanctuaire du Coeur-Tronc",
          description: `Place un buff ${BUFFS.UNKILLABLE} sur tous les alliés pendant 2 tours. 

Place également un buff ${BUFFS.TAUNT} et un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 30 % des PV MAX de ce Champion.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Enchevêtrement [P]",
          description: `Lorsque le Champion est attaqué alors qu'il bénéficie d'un buff ${BUFFS.SHIELD}, possède 50 % de chances d'augmenter de 2 tours le temps de recharge d'une compétence aléatoire de l'assaillant. Ne se produit qu'une fois par attaque. 

Dès que les PV d'un allié tombent sous 20 %, augmente les dégâts infligés par cet allié de 20 %.`,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "23 130",
        ATQ: "848",
        DEF: "1 189",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%.
    `,
  };

