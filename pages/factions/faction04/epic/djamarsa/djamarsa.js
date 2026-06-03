const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doigt de la nuit",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour.${RETURN}${RETURN}

Si Crohnam se trouve dans la même équipe et que le débuff ${DEBUFFS.SLEEP} a été bloqué ou qu'on lui a résisté, place un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours à la place. Il est impossible de bloquer ce débuff.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lune rayonnante",
          description: `Soigne une cible alliée de 30 % de ses PV max et remplit son Compteur de Tour de 30 %.${RETURN}${RETURN}

Si cette compétence est utilisée sur Crohnam, Crohnam activera instantanément sa compétence Régal de berserker.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Marche clair de lune",
          description: `Ranime tous les alliés morts avec 30 % de PV et 30 % de Compteur de Tour.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Synchronisme [P]",
          description: `Dès qu'un allié utilise une Compétence Active, possède 20 % de chances de réduire d'1 tour le temps de recharge de cette compétence.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "936",
        "DEF": "1 079",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 20%`,
};
