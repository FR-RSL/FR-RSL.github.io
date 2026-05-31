const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ignobles Flèches",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Transfère un débuff aléatoire de ce Champion sur la cible si la cette dernière se trouve sous débuff ${DEBUFFS.HEX}.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Déclencher la Chasse",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.HEX}.

Ignorera 25 % de la DÉF de chaque cible s'il y a 4 ennemis ou plus sous débuffs ${DEBUFFS.HEX}.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Traquer la Proie",
          description: `Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours, puis place un débuff ${DEBUFFS.HEX} sur tous les ennemis pendant 2 tours.

Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours, puis remplit son Compteur de Tour de 50 %.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Gibier Marqué",
          description: `Réduit de 5 % la VIT des ennemis sous débuffs ${DEBUFFS.HEX} et réduit de 10 % la RÉS de ces ennemis.

Augmente également de 10 % les dégâts reçus par les ennemis sous débuffs ${DEBUFFS.HEX} et réduit de 30 % la valeur des soins qu'ils reçoivent.

Ces effets ne s'accumulent pas si plusieurs Ruel se trouvent dans la même équipe.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 696",
        "DEF": "980",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX C. des Allies lors de toutes les Batailles de 20%.`
};
