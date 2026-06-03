const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déluge de flammes",
          description: `Attaque 3 fois un ennemi. Place une frappe supplémentaire si la cible possède moins de 50% de PV après la troisième frappe.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Phase d'attaque",
          description: `Attaque 3 fois un ennemi. Ignorera les buffs ${BUFFS.SHIELD} et 30% de la DÉF de la cible.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.LOCK_PASSIF} pendant 2 tours avant d'attaquer. Il est impossible de résister à ce débuff.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours après l'attaque. Il est impossible de résister à ce débuff.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frisson de furie",
          description: `Attaque 2 fois tous les ennemis. Les dégâts augmentent de 30% si cette Championne a plus de 50% de PV.${RETURN}${RETURN}

${PASSIVE}

Immunisée contre les effets de réduction du Compteur de Tour utilisés par les ennemis quand cette compétence n'est pas en temps de recharge.${RETURN}${RETURN}

Réduit de 50% tous les effets de réduction du Compteur de Tour que les ennemis utilisent contre cette Championne lorsque cette compétence est en temps de recharge.`,
          damage: "1.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "De ton côté",
          description: `Possède 15% de chances de rejoindre une attaque dès qu'un allié attaque un ennemi. Cette Championne attaquera avec sa compétence par défaut.${RETURN}${RETURN}

Au début de chaque round, place sur cette Championne un buff ${BUFFS.SHIELD} équivalent à 40% de ses PV MAX pendant 2 tours.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 542",
        "DEF": "1 046",
        "VIT": "101",
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
