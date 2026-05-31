const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rétablir l'Équilibre",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.

Sinon, si ce Champion possède un buff ${BUFFS.VEIL}, attaque 2 fois tous les ennemis.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vitesse Déroutante",
          description: `Attaque un ennemi. Place un buff ${BUFFS.PERFECT_VEIL} de 3 tours sur ce Champion si cette attaque passe en critique. Accorde un Tour Supplémentaire.`,
          damage: "6.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Jugement Elfique",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.SHIELD}.

Retire les buffs ${BUFFS.SHIELD} des cibles si ce Champion dispose d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, puis inflige des dégâts supplémentaires équivalents à 15 % de la valeur des buffs ${BUFFS.SHIELD} retirés.`,
          damage: "3.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 487",
        "DEF": "1 057",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
