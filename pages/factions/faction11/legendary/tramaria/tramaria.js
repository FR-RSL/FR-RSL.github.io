const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bourbe de cauchemar",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Possède également 30% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour sur les ennemis ayant 50% de Compteur de tour ou moins.`,
          damage: "3.5*ATQ",
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Maladie stagnante",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Après l'attaque, possède également 80% de chances de réduire le Compteur de Tour de chaque cible de 30%.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Au-delà des émotions",
          description: `Retire tous les débuffs sur tous les alliés, puis remplit les Compteurs de tour de tous les alliés de 15%.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de tour de chaque allié de 10% supplémentaires pour chaque débuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} retiré.${RETURN}${RETURN}

Remplit le Compteur de tour de chaque allié de 5% supplémentaires pour tout autre débuff retiré.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Étrange [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR} et ${DEBUFFS.TRUE_FEAR}.${RETURN}${RETURN}

Remplit le Compteur de tour de cette Championne de 20% dès qu'un ennemi essaie de placer un débuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur cette Championne.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "21 645",
        "ATQ": "892",
        "DEF": "1 244",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies lors de toutes les Batailles de 23%.`
};
