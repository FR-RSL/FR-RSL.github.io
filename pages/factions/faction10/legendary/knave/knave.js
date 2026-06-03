const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame épineuse",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 30% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Chaque frappe soigne également l'allié qui a le moins de PV à hauteur de 3% des PV MAX de ce Champion.`,
          damage: "0.1*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vaillant valet",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75% de chances de voler 2 buffs aléatoires à chaque cible.${RETURN}${RETURN}

Place un buff ${BUFFS.HEALS} de 15% sur tous les alliés sauf ce Champion pendant 2 tours. Place également un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.`,
          damage: "0.24*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Défense robuste",
          description: `Échange ses PV avec une cible ennemie, puis place une ${DEBUFFS.HEALS} de 100% sur cet ennemi pendant 2 tours. Il est impossible de retirer et de transférer ce débuff, et de voir sa durée réduite par des ennemis.${RETURN}${RETURN}

Équilibre ensuite les niveaux de PV de tous les alliés. Les niveaux de PV de tous les alliés seront amenés au niveau de l'allié qui a le plus de PV.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Eternal Sentinel [P]",
          description: `At the start of this Champion’s turn, fully restores this Champion’s destroyed MAX HP. <br><br>When attacked, destroys the attacker's MAX HP by 20% of the damage received (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "892",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%`,
};
