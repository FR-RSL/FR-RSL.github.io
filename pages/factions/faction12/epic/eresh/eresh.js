const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Adversaire méticuleuse",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tourbillon de couteaux",
          description: `Attaque tous les ennemis. Possède 20% de chances d'accorder un Tour supplémentaire. Si un Tour supplémentaire n'est pas accordé, remplit le Compteur de Tour de cette Championne de 10% pour chaque ennemi en vie.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rite mortuaire",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur cette Championne pendant 3 tours, puis accorde un Tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Slip Between [P]",
          description: `Places a ${BUFFS.PERFECT_VEIL} buff on this Champion for 2 turns whenever their HP drops below 50%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 365",
        "DEF": "936",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
