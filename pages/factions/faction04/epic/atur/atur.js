const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bond Rugissant",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "4.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Taureau Enragé",
          description: `Attaque deux fois au hasard. Chaque frappe possède 50 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "3.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Adrénaline [P]",
          description: `Soigne ce Champion à hauteur de 15 % de ses PV MAX, puis place un buff de ${BUFFS.COUNTER} sur ce Champion pendant 2 tours lorsque la frappe passe en critique.`,
          cooldown: 2,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Compère Alerte ${PASSIVE}",
          description: `Immunisé contre les débuffs d'${DEBUFFS.STUN}, de ${DEBUFFS.GEL} et de ${DEBUFFS.SLEEP}.

[Uniquement disponible lorsque Kallia se trouve dans la même équipe.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "826",
        "DEF": "1 145",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
