const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Purger le mal",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}

Si Gretel Fléau-Harpie se trouve dans la même équipe, attaque au lieu de ça tous les ennemis. Possède 25% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% sur tous les ennemis pendant 2 tours. Place également une frappe supplémentaire sur les ennemis affligés de débuffs.`,
          damage: "3.5*ATQMultiplier: 2.3*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Couteaux sanctifiés",
          description: `Attaque 2 fois un ennemi. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.UNKILLABLE}.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Éclat funeste",
          description: `Attaque tous les ennemis. Ignorera 15% de la DÉF de chaque cible. Augmente également de 2 tours le temps de recharge d'une compétence aléatoire sur chaque ennemi.${RETURN}${RETURN}

Si Gretel Fléau-Harpie se trouve dans la même équipe, ignorera au lieu de ça 30% de la DÉF de chaque cible. Augmentera également de 2 tours la durée du temps de recharge de toutes les compétences des ennemis. Il est impossible de résister à cet effet d'augmentation du temps de recharge.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lien fraternel [P]",
          description: `${PASSIVE}

Renvoie tous les débuffs ${DEBUFFS.FEAR} et ${DEBUFFS.TRUE_FEAR} de ce Champion sur l'assaillant.${RETURN}${RETURN}

Si Gretel Fléau-Harpie se trouve dans la même équipe, renvoie également les débuffs ${DEBUFFS.FEAR} et ${DEBUFFS.TRUE_FEAR} placés sur Gretel Fléau-Harpie sur l'assaillant.${RETURN}${RETURN}

${ACTIVE}

Si Gretel Fléau-Harpie se trouve dans la même équipe et qu'elle est tuée par l'ennemi, active instantanément [Éclat funeste].`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 669",
        "DEF": "914",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 33%`,
};
