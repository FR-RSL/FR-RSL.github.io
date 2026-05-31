const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Masse d'Immondice",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 1 tour.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Attise Feu d'âme",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.BOMB} qui détonera après 1 tour.`,
          damage: "4.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mange-Malédiction",
          description: `Retire tous les débuffs de tous les alliés, puis place pendant 1 tour un buff ${BUFFS.HEALS} de 15 % sur chaque allié pour chaque débuff retiré sur eux.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Écervelé [P]",
          description: `Remplit le Compteur de Tour de tous les alliés de 10 % dès qu'une débuff ${DEBUFFS.BOMB} détonne sur un ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "969",
        "DEF": "1 134",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
