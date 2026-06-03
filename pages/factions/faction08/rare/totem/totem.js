const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Évocation Empoisonnée",
          description: `Attaque un ennemi. Possède 20% de chances de placer, pendant 2 tours, un débuff de ${DEBUFFS.POISON} de 2,5% sur la cible.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction",
          description: `Attaque un ennemi. Possède 50% de chances de retirer un buff aléatoire sur la cible. Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 15% sur ce Champion si le buff est retiré.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Broitempête",
          description: `Attaque tous les ennemis. Place, pendant 2 tours, un débuff de ${DEBUFFS.DEF} de 30% sur la cible.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 002",
        "DEF": "1 046",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
