const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Acier brise-éclats",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe possède 30% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. La seconde frappe possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brise-barrière",
          description: `Attaque tous les ennemis. Ignorera 20% de la DÉF de chaque cible.${RETURN}${RETURN}

Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Il est impossible de résister à ce débuff si Alsgor Corne-Pourpre se trouve dans la même équipe.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Force imposante",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur cette Championne pendant 2 tours.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi lorsque Alsgor Corne-Pourpre se trouve dans la même équipe.`,
          damage: "1.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Aucun abri [P]",
          description: `Inflige 20% de dégâts supplémentaires contre les cibles sous buffs ${BUFFS.SHIELD}.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.SHIELD} si Alsgor Corne-Pourpre se trouve dans la même équipe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 586",
        "DEF": "969",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
