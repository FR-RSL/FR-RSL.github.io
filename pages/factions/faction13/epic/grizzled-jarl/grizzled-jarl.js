const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Énorme Hallebarde",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 35 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bouclier Ancestral",
          description: `Place un buff d'${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place un buff de ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Écrase-Sol",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % sur tous les ennemis pendant 2 tours.${RETURN}
Détruit les PV MAX de chaque cible de 30 % des dégâts infligés.`,
          damage: "3.3*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "760",
        "DEF": "1 288",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "75",
        "PRÉ": "0"
      },
};

const aura = null;
