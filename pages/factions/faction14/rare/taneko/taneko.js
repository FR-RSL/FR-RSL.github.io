const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faucille rapide",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 25% de chances de voler 5% du Compteur de Tour de la cible.`,
          damage: "1.9*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lames sifflantes",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 25% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède également 50% de chances de réduire les Compteurs de Tour de tous les ennemis de 15%.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fil de détente",
          description: `Retire un buff aléatoire à chaque ennemi.${RETURN}${RETURN}

Possède ensuite 50% de chances de placer un débuff ${DEBUFFS.SPD} de 15% sur tous les ennemis pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "749",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
