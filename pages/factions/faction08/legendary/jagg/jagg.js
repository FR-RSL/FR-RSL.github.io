const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Roue-rasoir",
          description: `Attaque un ennemi. Vole 10% du Compteur de Tour de la cible.${RETURN}${RETURN}

Possède 25% de chances de répéter cette compétence.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Déchirer la chair",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, transfère tous les débuffs de ce Champion sur la cible. Les dégâts de la première frappe augmentent de 10% pour chaque débuff transféré.${RETURN}${RETURN}

Applique ensuite un effet ${PROP_DEBUFF}, qui prend 2 débuffs aléatoires de la cible pour les placer sur tous les ennemis. Les dégâts de la deuxième frappe augmentent de 5% pour chaque débuff transféré et chaque débuff appliqué grâce à l'effet ${PROP_DEBUFF}.`,
          damage: "3*ATQ+(3*ATQ*0.1*Debuffs Transffered)Multiplier: 3*ATQ+(3*ATQ*0.05*Debuffs Applied to Enemy Team (Current Turn))",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tempête lacérante",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs de tous les ennemis. Les dégâts augmentent de 5% pour chaque buff retiré.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 15% pour chaque ennemi tué par cette compétence.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Relancer la scie [P]",
          description: `Au début du tour de ce Champion, lui accorde un buff ${BUFFS.PRE} de 50% et un buff ${BUFFS.CDAM} de 30% pendant 1 tour.${RETURN}${RETURN}

À la fin du tour de ce Champion, place sur l'ennemi ayant les DÉG C. les plus élevés un débuff ${DEBUFFS.CRATE} de 30% et un débuff ${DEBUFFS.CDAM} de 25% pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 531",
        "DEF": "1 002",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
