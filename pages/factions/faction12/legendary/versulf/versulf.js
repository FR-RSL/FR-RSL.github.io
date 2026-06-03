const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sévère Admonition",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 10 % de ses PV MAX pendant 2 tours.`,
          damage: "0.23*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Règne de Tristesse",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} et ${DEBUFFS.PETRIFICATION}. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "0.25*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sbires de Qualité",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Furie Infectieuse [P]",
          description: `Lorsque ce Champion est frappé, possède 20 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur l'assaillant pendant 1 tour. Se produit une fois par frappe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "870",
        "DEF": "1 200",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
