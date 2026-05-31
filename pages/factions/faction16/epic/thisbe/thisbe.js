const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Yeux de granite",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Possede 25% de chances de placer un debuff ${DEBUFFS.ATQ} de 50% pendant 2 tours.${RETURN}${RETURN}
Vole 10% du Compteur de Tour de la cible.`,
          damage: "4.95*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Crocs de quartz",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
A 75% de chances de placer un debuff ${DEBUFFS.HEX} et un debuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours.`,
          damage: "4.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Coeur de silex",
          description: `Reduit d'1 tour la duree de tous les debuffs des allies.${RETURN}${RETURN}
Soigne tous les allies a hauteur de 15% de leurs PV MAX.${RETURN}${RETURN}
Remplit le Compteur de Tour de tous les allies de 20%.`,
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Heritiere de la Gorgone [P]",
          description: `Les allies infligent 10% de degats supplementaires aux ennemis affliges de debuffs places par cette Championne.${RETURN}
Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de cette Championne si cette Championne specifique est morte.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "18 165",
        "ATQ": "958",
        "DEF": "1 134",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 40.`
};
