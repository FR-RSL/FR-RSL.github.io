const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Infestation mordante",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.${RETURN}${RETURN}

Vole 5 % du Compteur de Tour de chaque ennemi. Vole au lieu de ça 10 % du Compteur de Tour de chaque ennemi qui se trouve sous débuff ${DEBUFFS.SPD}.`,
          damage: "4.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maître de battue",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place toutes les compétences de la cible en recharge.${RETURN}${RETURN}

A 75 % de chances de réduire de 15 % les Compteurs de Tour de tous les ennemis sous débuff ${DEBUFFS.SLEEP}. A au lieu de ça 75 % de chances de réduire de 30 % les Compteurs de Tour de tous les ennemis sans débuff ${DEBUFFS.SLEEP}.`,
          damage: "7.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dards de sommeil",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} sur tous les ennemis pendant 1 tour. Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS}.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          damage: "5.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Désherbage [P]",
          description: `${PASSIVE}

Dès qu'un ennemi essaie d'augmenter son Compteur de Tour, réduit de 25 % la valeur de cet effet de remplissage du Compteur de Tour. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.${RETURN}${RETURN}

${ACTIVE}

Dès qu'un débuff ${DEBUFFS.SLEEP} est retiré ou expire sur une cible, active instantanément la compétence [Maître de battue] sur cette cible. Ne fonctionne pas si un débuff ${DEBUFFS.SLEEP} est retiré par des dégâts. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "837",
        "DEF": "1 266",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des batailles d'Arène de 80`,
};
