const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pirouette de hache",
          description: `Attaque 3 fois un ennemi. 

Chaque frappe ignorera 10 % de la DÉF de la cible. Chaque frappe critique a 75 % de chances de voler un buff aléatoire à la cible.`,
          damage: "1.25*ATQ",
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fracasse-membres",
          description: `Attaque 2 fois un ennemi. 

Les dégâts infligés par cette compétence augmentent de 10 % pour chaque débuff sur la cible (s'accumule jusqu'à 100 %). 

Chaque frappe a 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "3.4*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pour Hrothglime !",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours. 

A 40 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.7*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Combat déloyal [P]",
          description: `Les alliés infligent 15 % de dégâts en plus aux cibles affligées d'un débuff ${DEBUFFS.HEALS} ou ${DEBUFFS.STUN} placé par cette Championne. 

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 421",
        "DEF": "837",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 20%`,
};
