const championData = {
  type: "PV",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Stigmates",
			description: `Attaque 1 ennemi. Possède 60% de chances de placer un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
			damage: "4.8*ATQ",
          	levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Dégâts +15%",
				"Chance de Buff/débuff +15%",
          	],
        },
        {
			img: "assets/sort2.webp",
			name: "Tombé en Disgrâce",
			description: `Attaque 2 fois tous les ennemis. Place un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours sur les cibles affligées de débuffs de ${DEBUFFS.HEALS}. Chaque frappe possède 50% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours contre les cibles non affligées de débuffs de ${DEBUFFS.HEALS}.`,
			damage: "1*ATQ + 0.1*PV",
          	levelInfo: [
				"Dégâts +10%",
				"Chance de Buff/débuff +5%",
				"Dégâts +10%",
				"Chance de Buff/débuff +5%",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
		{
			img: "assets/passif1.webp",
			name: "Rage Ardente [P]",
			description: `Possède 10% de chances de débloquer une Compétence secrète, Péril, pendant 1 tour. Possède également 20% de chances de remplir le Compteur de Tour de ce Champion de 25% lorsqu'il se fait attaquer.`,
			  isPassive: true,
		},
        {
			img: "assets/sort3.webp",
			name: "Péril",
			description: `Attaque 2 fois 1 ennemi. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}, ainsi que la DÉF. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
			damage: "0.2*PV",
        },
      ],
      stats: {
        PV: "23 130",
        ATQ: "1 145",
        DEF: "892",
        VIT: "94",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
  };

