const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton Biotique",
          description: `Attaque 2 fois un ennemi. Place, pendant 1 tour, un buff ${BUFFS.HEALS} de 15% sur tous les alliés souffrant de débuffs ${DEBUFFS.POISON}.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bénédiction Druidique",
          description: `Retire tous les débuffs, sauf les débuffs ${DEBUFFS.POISON} d'un allié, puis le soigne de 30% de ses PV MAX avant de placer sur la cible un buff de ${BUFFS.SHIELD} de 2 tours équivalent à 20% de ses PV MAX.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Bouclier +5%", "Soins +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Nuage de Spores",
          description: `Place trois débuffs ${DEBUFFS.POISON} de 2,5% sur tous les alliés pendant 3 tours. Il est impossible de résister à ces débuffs ou de les bloquer.${RETURN}
Possède également 80% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} de 2 tours sur tous les ennemis.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Symbiotes [P]",
          description: `Les alliés affligés de débuffs ${DEBUFFS.POISON} infligent 7,5% de dégâts supplémentaires pour chaque débuff ${DEBUFFS.POISON} dont ils souffrent, s'additionnant jusqu'à un maximum de 30%. Cette augmentation des dégâts s'applique à toutes leurs compétences.${RETURN}${RETURN}

Augmente également de 15 la RÉS de chaque allié pour chaque débuff ${DEBUFFS.POISON} dont ils sont affligés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 079",
        "DEF": "1 244",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 50`,
};
