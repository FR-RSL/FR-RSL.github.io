const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame d'obsidienne",
          description: `Attaque un ennemi. 

A 50 % de chances d'augmenter de 2 tours le temps de recharge d'une compétence active aléatoire sur la cible. 

Remplit également le Compteur de Tour de tous les alliés de 10 %.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Magie d'Ireth",
          description: `A 75 % de chances de retirer tous les buffs sur tous les ennemis. 

Réduit de 20 % les Compteurs de Tour de tous les ennemis dont le Compteur de Tour est inférieur ou égal à 50 %. Si le Compteur de Tour d'un ennemi est rempli à plus de 50 %, le réduit à 50 %. 

A 75 % de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour sur les ennemis dont le Compteur de Tour a été réduit à 50 %.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "À la mort, sans capituler",
          description: `Fait équipe avec tous les alliés pour attaquer un seul ennemi. Les alliés qui rejoignent l'attaque utiliseront leurs compétences par défaut. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.SHATTER} de 7,5 % sur tous les alliés pendant 2 tours. 

Réduit d'1 tour les temps de recharge de toutes les compétences actives des alliés, sauf ce Champion, si la cible est tuée.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sombres murmures [P]",
          description: `${PASSIVE}

Les alliés infligent 20 % de dégâts supplémentaires contre les ennemis sous débuffs ${DEBUFFS.STUN}. 

${ACTIVE}

Dès qu'un allié est tué, active instantanément la compétence Magie d'Ireth. Ne placera pas cette compétence en temps de recharge. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 156",
        "DEF": "1 101",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 28%`,
};
