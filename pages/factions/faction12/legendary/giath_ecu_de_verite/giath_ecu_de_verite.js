const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance de révélation",
          description: `Attaque un ennemi. Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.CRATE} ou ${DEBUFFS.CDAM} placés par cette Championne. La frappe supplémentaire est toujours une frappe normale et ignorera 50% de la DÉF de chaque cible.${RETURN}${RETURN}

Place également un buff ${BUFFS.DEF} de 60% sur cette Championne pendant 2 tours.`,
          damage: "3.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Vérité contemplée",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, augmente d'1 tour la durée de tous les buffs des alliés.${RETURN}${RETURN}

Les dégâts infligés par cette compétence augmentent de 5% pour chaque buff dont la durée a été augmentée.`,
          damage: "3.7*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Barrière d'encensoir",
          description: `Place pendant 2 tours un buff ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés et un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf cette Championne.${RETURN}${RETURN}

Place également un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.RES} de 50% sur cette Championne pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Gueule dissuasive [P]",
          description: `Dès qu'un allié sous buff ${BUFFS.REFLECT_DAM} est attaqué, place un débuff ${DEBUFFS.CRATE} de 30% et un débuff ${DEBUFFS.CDAM} de 25% sur l'assaillant pendant 2 tours. Il est impossible de résister à cet effet.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "18 495",
        "ATQ": "925",
        "DEF": "1 421",
        "VIT": "104",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%.`
};
