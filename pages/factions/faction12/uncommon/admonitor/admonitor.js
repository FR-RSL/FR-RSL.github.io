const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mur de Boucliers",
          description: `Attaque un ennemi. Place 1 tour de buff de ${BUFFS.SHIELD} sur ce Champion, égal à 10% des dégâts infligés.`,
          damage: "5.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Couvrir",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50% sur une cible alliée.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "617",
        "DEF": "870",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
