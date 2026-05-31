const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sérum Hémorragique",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Liens de Jambe",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède également 50 % de chances de réduire le Compteur de Tour de la cible de 10 %. La troisième frappe possède 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "2.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Corps de Diamant",
          description: `Place sur ce Champion un buff ${BUFFS.VEIL} pendant 1 tour et un buff ${BUFFS.REFLECT_DAM} de 30 %, pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 145",
        "DEF": "727",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
