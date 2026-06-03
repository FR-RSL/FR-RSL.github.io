const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Écraser et broyer",
          description: `Attaque un ennemi. A 70% de chances d'appliquer un effet ${PROP_BUFF}, prenant un buff aléatoire sur chaque allié pour le placer sur tous les alliés.`,
          damage: "5.7*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "À table !",
          description: `Soigne tous tes alliés à hauteur de 20% des PV MAX de ce Champion.${RETURN}${RETURN}

Place un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.HEALS} de 15% et un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Générosité fraternelle",
          description: `Retire tous les débuffs sur tous les alliés. Augmente le Compteur de Tour de tous les alliés de 20%, puis de 2% supplémentaires pour chaque débuff retiré.${RETURN}${RETURN}

Place ensuite un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ventres pleins [P]",
          description: `Augmente les dégâts infligés par les alliés de 10% s'ils ont actuellement moins de PV que leur cible. Si les PV d'un allié sont supérieurs ou égaux à ceux de sa cible, augmente au lieu de cela les dégâts infligés de 20%.${RETURN}${RETURN}

Augmente de 10% les PV MAX de ce Champion et de chaque allié chaque fois que ce Champion utilise une compétence active (s'accumule jusqu'à 50%). Se réinitialise à chaque Manche.${RETURN}${RETURN}

Augmente également les PV MAX de tous les alliés de 5% chaque fois qu'ils utilisent une compétence active (s'accumule jusqu'à 50%). Se réinitialise à chaque Manche. N'augmentera pas les PV MAX des Boss.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 315",
        "ATQ": "958",
        "DEF": "1 200",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
