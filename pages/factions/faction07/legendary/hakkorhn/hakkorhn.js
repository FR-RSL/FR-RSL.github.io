const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Force Inhumaine",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri de Ralliement",
          description: `Retire tous les débuffs de tous les alliés, puis les soigne à hauteur de 15 % des PV de ce Champion. Soigne chaque allié de 10 % des PV MAX de ce Champion supplémentaires pour chaque débuff retiré.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Offrande de Sang",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 20 % des dégâts infligés.`,
          damage: "0.28*HP",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "23 790",
        "ATQ": "848",
        "DEF": "1 145",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 33%`,
};
