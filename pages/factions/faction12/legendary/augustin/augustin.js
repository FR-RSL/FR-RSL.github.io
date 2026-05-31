const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames édéniques",
          description: `Attaque un ennemi. 

A 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Vole 5 % du Compteur de Tour de la cible pour chaque buff dont elle bénéficie.`,
          damage: "5.4*ATQ",
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enchaîner les injustes",
          description: `Retire tous les buffs dont disposent les ennemis. 

A 75 % de chances de placer un débuff ${DEBUFFS.TRAP} de 100 % sur tous les ennemis pendant 2 tours. Ce débuff ignorera les buffs ${BUFFS.BLOCK_DEBUFFS} sur les ennemis qui bénéficient de 3 buffs ou plus. 

Réduit également les Compteurs de Tour de tous les ennemis de 25 %. Si un ennemi bénéficie de 3 buffs ou plus, réduira au lieu de cela son Compteur de Tour de 40 %.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction éthérée",
          description: `Place un buff ${BUFFS.PRE} de 50 % pendant 2 tours et une pile d'${BUFFS.INTERCEPT} sur tous les alliés. Remplit également les Compteurs de Tour de tous les alliés de 25 %. 

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Votre Éminence [P]",
          description: `Les alliés reçoivent 25 % de dégâts en moins de la part des ennemis sous buffs ${BUFFS.BLOCK_DAMAGE}, ${BUFFS.UNKILLABLE}, ${BUFFS.VEIL}, ${BUFFS.PERFECT_VEIL} ou ${BUFFS.STONE_SKIN}.

À chaque fois qu'un ennemi reçoit un buff, est soigné ou voit son Compteur de Tour rempli, a 50 % de chances de réduire d'1 tour la durée de tous ses buffs. Se produit une fois par compétence et une fois par cible.

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "947",
        "DEF": "1 178",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 24%`,
};
