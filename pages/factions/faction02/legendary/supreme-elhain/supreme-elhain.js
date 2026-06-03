const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Archétype de frappes",
          description: `Attaque 2 fois un ennemi. Chaque frappe transfère un débuff aléatoire de cette Championne sur la cible.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aucun survivant",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 10% pour chaque débuff sur chaque cible.${RETURN}${RETURN}

Réinitialise le compteur de tour de la compétence [Tir fissurant] si cette attaque tue un ennemi.`,
          damage: "4*ATQ*(1+0.1*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tir fissurant",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.ALLY_PROTECT}, ${BUFFS.STRENGTHEN} et ${BUFFS.SHIELD}.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "6*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Implacable [P]",
          description: `Immunisée contre les débuffs ${DEBUFFS.ATK}. Inflige 20% de dégâts en plus contre les cibles dont l'ATQ est inférieure à celle de cette Championne.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 509",
        "DEF": "1 145",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
