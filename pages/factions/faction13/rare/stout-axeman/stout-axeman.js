const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plus un Pas",
          description: `Attaque un ennemi.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Repousse la Horde",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.REFLECT_DAM} de 15 % sur ce Champion.${RETURN}
Possède 85 % de chances de placer, pendant 2 tours, un buff de ${BUFFS.REFLECT_DAM} de 15 % sur un allié pris au hasard.${RETURN}
Possède également 35 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour sur deux ennemis pris au hasard.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nourri au Danger [P]",
          description: `Soigne ce Champion de 50 % des dégâts subis quand il bénéficie d'un buff de ${BUFFS.REFLECT_DAM}. Possède également 25 % de chances d'augmenter d'1 tour la durée de tous les débuffs de l'attaquant lorsqu'il frappe en bénéficiant d'un buff de ${BUFFS.REFLECT_DAM}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "859",
        "DEF": "892",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = null;
