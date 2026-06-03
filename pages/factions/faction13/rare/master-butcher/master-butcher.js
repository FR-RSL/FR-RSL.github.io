const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Écrabouiller",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ordres Aboyés",
          description: `Place un débuff de ${DEBUFFS.PROVOKE} sur la cible ennemie pendant 2 tours. Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 15% sur tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25% sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Échange de Chaleur [P]",
          description: `Lorsque ce Champion se fait attaquer, soigne tous les alliés de la quantité de dégâts subis.${RETURN}
[Ne fonctionne pas contre les Boss.]`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Bûcher [P]",
          description: `Ranime un allié choisi au hasard avec tous ses PV si ce Champion est tué.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "848",
        "DEF": "947",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
