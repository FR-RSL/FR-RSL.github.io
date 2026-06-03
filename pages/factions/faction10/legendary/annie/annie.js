const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jolis Ongles",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "1.3*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poupée Creuse",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur cette Championne pendant 2 tours. Ignorera 25 % de la DÉF de la cible.${RETURN}${RETURN}

Place également un buff ${BUFFS.PERFECT_VEIL} sur cette Championne pendant 2 tours.${RETURN}${RETURN}

Ensuite, remplit le Compteur de Tour de cette Championne de 30 %.`,
          damage: "2.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Goûter",
          description: `Attaque un ennemi. Ignorera 25 % de la DÉF de la cible. Détruit les PV MAX de la cible de 25 % des dégâts infligés.${RETURN}${RETURN}

Répétera l'attaque si la DÉF et les PV MAX de la cible sont plus élevés que ceux de cette Championne.${RETURN}${RETURN}

Place un buff ${BUFFS.REVIVE_ON_DEATH} sur cette Championne pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "5.7*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Jouets Immortels [P]",
          description: `Lorsque ce Champion est ranimé, attaque l'ennemi qui l'a tué avec la Compétence par défaut. Remplit également le Compteur de Tour de ce Champion de 25 % et place un buff ${BUFFS.SHIELD} équivalent à 50 % de ses PV MAX pendant 2 tours.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Magical Heart [P]",
          description: `Each hit has a 50% chance of decreasing the target's Turn Meter by 10% and a 100% chance of destroying the target's MAX HP by 10% of the damage inflicted when attacking enemies under ${DEBUFFS.HEALS} or ${DEBUFFS.DEF} debuffs.<br><br>Also heals this Champion by 10% of the damage inflicted when attacking enemies under ${DEBUFFS.HEALS} or ${DEBUFFS.DEF} debuffs.<br><br>[Will not heal from damage inflicted by Masteries.]<br><br>Heal Multiplier: 0.1*Damage Dealt`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 597",
        "DEF": "793",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
