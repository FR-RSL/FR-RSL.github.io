const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe éclairante",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 25 % de chances de voler un buff aléatoire à la cible. Si cette attaque est critique, a au lieu de ça 100 % de chances de voler un buff aléatoire sur la cible.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup aveuglant",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 75 % de chances de voler 15 % du Compteur de Tour de la cible. Si une frappe est critique, a au lieu de ça 75 % de chances de voler 30 % du Compteur de Tour de la cible.`,
          damage: "2.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rafale resplendissante",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.CRATE} de 30 % sur cette Championne pendant 2 tours.${RETURN}${RETURN}

Augmente d'1 tour la durée de tous les buffs de cette Championne si cette attaque est critique.`,
          damage: "3.85*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bénédiction de pupille [P]",
          description: `Augmente l'ATQ de cette Championne de 2 % pour chaque buff qu'elle reçoit (s'accumule jusqu'à 30 %).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 509",
        "DEF": "749",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 15%`,
};
