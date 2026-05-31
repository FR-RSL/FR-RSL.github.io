const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Brûlant",
          description: `Attaque un ennemi. Offre 60% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mur de Flammes",
          description: `Attaque un ennemi. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60 % sur tous les alliés. Place, pendant 2 tours, un buff de ${BUFFS.SHIELD} égal à 20 % de leurs PV MAX. sur tous les alliés si cette attaque tue un ennemi.`,
          damage: "5.6*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Réveil Ardent [P]",
          description: `Ranime un allié choisi au hasard avec 30 % de PV à chaque fois que ce Champion tue un ennemi. Réinitialise les temps de recharge des Compétences de ce Champion si ce Champion tue un ennemi et que tous les alliés sont en vie.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "837",
        "DEF": "1 398",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
