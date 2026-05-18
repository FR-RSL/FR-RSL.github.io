const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ignobles Fleches",
          description: `Attaque un ennemi. Possède 50% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Transfere un debuff aleatoire de ce Champion sur la cible si cette derniere se trouve sous debuff ${DEBUFFS.HEX}.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Declencher la Chasse",
          description: `Attaque tous les ennemis. Place une frappe supplementaire sur les ennemis sous debuffs ${DEBUFFS.HEX}.${RETURN}${RETURN}
Ignorera 25% de la DEF de chaque cible s'il y a 4 ennemis ou plus sous debuffs ${DEBUFFS.HEX}.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Traquer la Proie",
          description: `Place un debuff ${BUFFS.PRE} de 50% sur tous les allies pendant 2 tours, puis place un debuff ${DEBUFFS.HEX} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours, puis remplit son Compteur de Tour de 50%.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Gibier Marqué [P]",
          description: `Réduit de 5% la VIT et de 10% la RES des ennemis sous debuffs ${DEBUFFS.HEX}.${RETURN}${RETURN}
Augmente egalement de 10% les degats recus par les ennemis sous debuffs ${DEBUFFS.HEX} et reduit de 30% la valeur des soins qu'ils recoivent.${RETURN}${RETURN}Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
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
