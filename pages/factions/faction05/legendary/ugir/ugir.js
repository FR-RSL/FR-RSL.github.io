const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rage de vouivre",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 80 % de chances de voler un buff aléatoire à l'ennemi. Possède également 80 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur l'ennemi pendant 2 tours.`,
          damage: "0.23*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crève-terre",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de retirer tous les buffs sur tous les ennemis.${RETURN}${RETURN}

Ensuite, possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fortitude d'Ogryn",
          description: `Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également pendant 2 tours un buff ${BUFFS.DEF} de 60 % sur tous les alliés dont la DÉF est supérieure ou égale à leur ATQ.${RETURN}${RETURN}

Si l'ATQ d'un allié est plus élevée que sa DÉF, lui accorde plutôt un buff ${BUFFS.ATK} de 50 % pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fléau des Dragons [P]",
          description: `Dès qu'un ennemi est ranimé, active instantanément [Crève-terre]. Si un ennemi est ranimé par un Champion de la Faction des Hommes Lézards, il est impossible de résister aux effets de [Crève-terre].${RETURN}${RETURN}

L'activation instantanée de [Crève-terre] ne placera pas la compétence en temps de recharge. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          cooldown: 2,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "771",
        "DEF": "1 288",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des batailles d'Arène de 70`,
};
