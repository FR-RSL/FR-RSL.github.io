const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Bourbe de cauchemar",
          description: `Attaque tous les ennemis. Possede 50% de chances de placer un debuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}
Possede egalement 30% de chances de placer un debuff ${DEBUFFS.FEAR} pendant 1 tour sur les ennemis ayant 50% de Compteur de Tour ou moins.`,
          damage: "3.5*ATQ",
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Maladie stagnante",
          description: `Attaque tous les ennemis. Possede 80% de chances de placer un debuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}
Apres l'attaque, possede également 80% de chances de reduire le Compteur de Tour de chaque cible de 30%.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Au-dela des emotions",
          description: `Retire tous les debuffs sur tous les allies, puis remplit les Compteurs de Tour de tous les allies de 15%.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les allies pendant 2 tours.${RETURN}${RETURN}
Remplit le Compteur de Tour de chaque allie de 10% supplementaires pour chaque debuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} retire.${RETURN}${RETURN}
Remplit le Compteur de Tour de chaque allie de 5% supplementaires pour tout autre debuff retire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Etrange [P]",
          description: `Immunise contre les debuffs ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR} et ${DEBUFFS.TRUE_FEAR}.${RETURN}${RETURN}
Remplit le Compteur de Tour de cette Championne de 20% des qu'un ennemi essaie de placer un debuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur cette Championne.`,
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
  img: "../../../../../assets/images/auras/speed.png",
  description: `Augmente la statistique VIT des Allies lors de toutes les Batailles de 23%.`
};
