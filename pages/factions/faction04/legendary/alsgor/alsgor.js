const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Merlin tonnant",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 20 % des dégâts infligés. 

Possède 40 % de chances d'augmenter d'1 tour la durée de 2 débuffs aléatoires dont le Champion ciblé est affligé.`,
          damage: "0.26*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fissurer le ciel",
          description: `Attaque tous les ennemis. Possède 75 % de chances de retirer 2 buffs aléatoires sur tous les ennemis. 

Possède 75 % de chances de retirer tous les buffs sur tous les ennemis, même si cette attaque est une frappe faible, si Jetni la Géante est dans la même équipe. 

Place également un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Appel retentissant",
          description: `Soigne totalement une cible alliée. 

Place également un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Entrave",
          description: `Lorsque le Champion est attaqué, possède 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % sur l'assaillant pendant 2 tours. 

Les chances passent à 100 % si Jetni la Géante se trouve dans la même équipe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "936",
        "DEF": "1 178",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
