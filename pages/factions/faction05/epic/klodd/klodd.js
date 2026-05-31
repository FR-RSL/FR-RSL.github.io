const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nouvelle Main Violente",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.CRATE} de 30 % pendant 2 tours.`,
          damage: "0.24*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Derrière Moi",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Esquive Bestiale",
          description: `Place un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Délicieux Abats [P]",
          description: `Au début du tour de ce Champion, soigne l'allié ayant le moins de PV de 10 % de ses PV MAX.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "815",
        "DEF": "1 046",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
