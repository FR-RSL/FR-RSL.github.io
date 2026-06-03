const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance zéphyr",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne également tous tes alliés à hauteur de 5 % des PV MAX de ce Champion.${RETURN}${RETURN}

Chaque frappe a également 75 % de chances de remplir de 10 % le Compteur de Tour de l'allié dont le Compteur de Tour est le plus bas.`,
          damage: "0.13*PV",
          levelInfo: ["Soins +10%", "Chances de Buff/Debuff +10%", "Soins +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sur des ailes bleues",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs de tous les ennemis.${RETURN}${RETURN}

Ensuite, a 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.SPD} de 30 % sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Remplit également les Compteurs de Tour de tous les alliés de 15 %.`,
          damage: "0.21*PV",
          cooldown: 6,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mirage céleste",
          description: `Place un buff ${BUFFS.RES} et un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés, sauf ce Champion, pendant 2 tours.${RETURN}${RETURN}

Réduit de 3 tours le temps de recharge de toutes les compétences alliées actives, sauf celles de ce Champion. Le temps de recharge de cette compétence ne peut être ni réduit ni réinitialisé.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Draco-vitesse [P]",
          description: `Les effets de remplissage du Compteur de Tour dont bénéficient les alliés sous débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION} ou ${DEBUFFS.SLEEP} sont 30 % plus efficaces.${RETURN}${RETURN}

Dès qu'un débuff ${DEBUFFS.SHEEP} est retiré ou expire sur un allié, soigne cet allié de 25 % de ses PV MAX et lui accorde un buff ${BUFFS.SPD} de 30 % pendant 1 tour.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "958",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
};
