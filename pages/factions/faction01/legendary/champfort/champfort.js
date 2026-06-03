const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Annihilation",
          description: `Attaque 1 ennemi. Possède 15% de chances supplémentaires de porter un coup critique.`,
          damage: "0.2*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Trembleterre",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.PRE} de 50% et un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "0.23*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Sphèrépine [P]",
          description: `Au début de chaque tour, place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 10% de ses PV MAX pendant 2 tours. Placera un débuff ${DEBUFFS.SPD} de 15% pendant 1 tour sur tout ennemi attaquant ce Champion.`,
          isPassive: true,
          cooldown: 2,
          levelInfo: [
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "22 305",
        ATQ: "1 079",
        DEF: "1 013",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
  };

