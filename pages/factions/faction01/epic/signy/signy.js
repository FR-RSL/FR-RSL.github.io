const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brise-plaque",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 25 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % pendant 2 tours.${RETURN}${RETURN}

Chaque frappe soigne également cette Championne à hauteur de 20 % des dégâts infligés.`,
          damage: "0.12*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rébellion du Bouclier",
          description: `Attaque tous les ennemis. Avant d'attaquer, a 75 % de chances de retirer 1 débuff aléatoire à tous les alliés.${RETURN}${RETURN}

Après l'attaque, a 75 % de chances de retirer 1 buff aléatoire à tous les ennemis.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cause juste",
          description: `Place un buff ${BUFFS.RES} de 50 % et un buff ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Héroïne du peuple [P]",
          description: `Lorsque cette Championne se trouve sous buff ${BUFFS.REFLECT_DAM} et qu'un ennemi essaie de placer un débuff, a 20 % de chances de renvoyer le débuff sur l'assaillant.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "749",
        "DEF": "1 178",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
