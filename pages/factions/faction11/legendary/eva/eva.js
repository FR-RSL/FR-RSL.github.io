const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cautériser",
          description: `Attaque 1 ennemi. Possède 50% de chances de placer un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%", "Dégâts +20%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction Ancestrale",
          description: `Attaque 2 fois un ennemi. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "2.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Drain Énergétique",
          description: `Attaque tous les ennemis. Réduit de 20% le Compteur de Tours. Réinitialise les temps de recharge de chacune des Compétences de ce Champion si une cible est tuée. Possède 15% de chances supplémentaires de porter un coup critique.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 696",
        "DEF": "837",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`
};
