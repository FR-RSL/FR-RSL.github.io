const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cycle de la Nature",
          description: `Attaque un ennemi. Possède 30 % de chances d'augmenter d'1 tour la durée d'un buff aléatoire d'un allié choisi au hasard.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Prolifération",
          description: `Soigne tous les alliés de 15 % de leurs PV MAX, puis place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 15 % de leurs PV MAX pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Bouclier +5%", "Soins +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Harmonisation",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.ATK} de 50 % pendant 2 tours sur tous les alliés dont l'ATQ est plus élevée que la DÉF. 
 
Place un buff ${BUFFS.BLOCK_DEBUFFS} pendant 1 tour et un buff ${BUFFS.DEF} de 60 % pendant 2 tours sur tous les alliés dont la DÉF est plus élevée que l'ATQ.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "903",
        "DEF": "1 222",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
