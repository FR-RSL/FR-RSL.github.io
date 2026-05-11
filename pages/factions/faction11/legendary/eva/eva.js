const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Cauteriser",
          description: `Attaque un ennemi. Possède 15% de chances supplémentaires de porter un coup critique.${RETURN}${RETURN}
Possède 70% de chances de placer un debuff ${DEBUFFS.HEALS} et un debuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%", "Dégâts +20%"],
        },
        {
          img: "assets/sort2.png",
          name: "Malediction Ancestrale",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15% de chances supplémentaires de porter un coup critique. Ignorera 50% de la DEF de la cible.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.BLOCK_REA} si la cible est tuee.`,
          damage: "2.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Drain Energetique",
          description: `Attaque tous les ennemis. Possède 15% de chances supplémentaires de porter un coup critique. Reduit le Compteur de Tour de chaque cible de 20%.${RETURN}${RETURN}
Réinitialise les temps de recharge de chacune des Compétences de cette Championne si une cible est tuee.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 696",
        "DEF": "837",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/crit.png",
  description: `Augmente la statistique TAUX C. des Allies lors de toutes les Batailles de 19%.`
};
