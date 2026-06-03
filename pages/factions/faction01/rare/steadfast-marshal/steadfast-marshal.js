const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Beigne Fracassante",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour si le pourcentage de PV de la cible est inférieur à celui de ce Champion.`,
          damage: "0.15*HP",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tiens Fermement",
          description: `Place un buff d'${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.${RETURN}
Accorde un Tour Supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Retraite Protégée",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.VEIL} sur tous les alliés, sauf sur ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "870",
        "DEF": "782",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
