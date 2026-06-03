const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe a mon signal",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Place un buff ${BUFFS.FERVEUR} de 2 tours sur un allie aleatoire qui n'est pas cette Championne. Si l'allie selectionne aleatoirement se trouve deja sous buff ${BUFFS.FERVEUR}, le place sur un autre allie selectionne aleatoirement.${RETURN}${RETURN}${PASSIVE}${RETURN}
Les allies sous buff ${BUFFS.FERVEUR} ont 50% de chances de rejoindre les attaques des autres allies sous buff ${BUFFS.FERVEUR}. Cette Championne ne rejoindra aucune attaque. Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de cette Championne si cette Championne specifique est morte.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Nexus de soie",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.RES} de 50% sur tous les allies pendant 2 tours.${RETURN}${RETURN}
Equilibre egalement les niveaux des PV de tous les allies. Les niveaux de PV de tous les allies seront amenes au niveau de l'allie qui a le plus de PV.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Les toiles murmurent",
          description: `Ranime un allie avec 50% de PV et 50% de Compteur de Tour.${RETURN}${RETURN}
Place ensuite un buff ${BUFFS.PERFECT_VEIL} sur tous les allies sauf cette Championne pendant 2 tours. Place egalement un buff ${BUFFS.UNKILLABLE} sur cette Championne pendant 2 tours. Ces buffs seront places meme si aucun allie n'a ete ranime.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Visions theridines [P]",
          description: `Pour tous les 8 buffs recus par l'equipe ennemie, augmente de 20% les Compteurs de Tour de tous les allies.${RETURN}${RETURN}
Pour tous les 16 buffs recus par cette Championne et ses allies, soigne tous les allies de 20% de leurs PV MAX.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 305",
        "ATQ": "892",
        "DEF": "1 200",
        "VIT": "110",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies dans les batailles d'Arene de 28%.`
};
