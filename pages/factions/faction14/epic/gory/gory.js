const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Froide Consolation",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si un ennemi se trouve sous débuff ${DEBUFFS.GEL}. Soigne ce Champion à hauteur de 10 % des dégâts infligés.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Jutsu Gelé",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "2.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brise-Gel",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.DEF} et ${BUFFS.SHIELD}. Ignorera également 50 % de la DÉF de la cible si elle est sous débuff ${DEBUFFS.GEL}.${RETURN}${RETURN}

Place sur ce Champion un buff ${BUFFS.COUNTER} et un buff ${BUFFS.ATK} de 50 % pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "5.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dignité [P]",
          description: `Contre-attaque avec la compétence Froide Consolation dès qu'un ennemi place un débuff ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION} sur un allié.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 476",
        "DEF": "859",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
