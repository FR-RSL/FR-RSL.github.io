const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tambour de guerre",
          description: `Attaque 2 fois un ennemi. Soigne cette Championne de 5 % de ses PV MAX après chaque frappe.${RETURN}${RETURN}

Chaque frappe a également 25 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur la cible pendant 1 tour.`,
          damage: "0.13*PV",
          levelInfo: ["Soins +5%", "Soins +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mère de clan",
          description: `Réduit d'1 tour la durée de tous les débuffs des alliés.${RETURN}${RETURN}

Place un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.TAUNT} et un buff ${BUFFS.UNKILLABLE} sur cette Championne pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Force maternelle",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 25 % des PV MAX de cette Championne pendant 2 tours.${RETURN}${RETURN}

Dès qu'un buff ${BUFFS.SHIELD} placé par cette Championne expire ou est retiré par des dégâts, soigne l'allié concerné de 15 % de ses PV MAX et lui accorde un buff ${BUFFS.STRENGTHEN} de 25 % pendant 1 tour.`,
          damage: "0.27*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Refuge anti-douleur [P]",
          description: `Les alliés sous buff ${BUFFS.SHIELD} reçoivent 10 % de dégâts en moins.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "969",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%`,
};
