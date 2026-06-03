const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Attaque éclair de corsaire",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 75 % de chances de réduire le Compteur de Tour de la cible de 15 %. Chaque frappe réduira au lieu de cela le Compteur de Tour de la cible de 25 % si l'attaque passe en critique. Il est impossible de résister à cet effet si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "1.35*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Actionner le chien",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

La première frappe vole tous les buffs de tous les ennemis et réduit de 20 % le Compteur de Tour de chaque ennemi. Il est impossible de résister à cet effet si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

La seconde frappe a 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} sur tous les ennemis pendant 1 tour. Ce débuff ignorera les buffs ${BUFFS.BLOCK_DEBUFFS} si l'attaque est critique. Il est impossible de résister à cet effet si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "2.15*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Cooldown -"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Entre les deux yeux",
          description: `Attaque un ennemi. Avant d'attaquer, place pendant 2 tours un buff ${BUFFS.PERFECT_VEIL} sur ce Champion ainsi que sur les autres Assassins de l'équipe.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.STONE_SKIN} et ${BUFFS.BLOCK_DAMAGE}.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_REA} si la cible est tuée.`,
          damage: "6.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tout est permis [P]",
          description: `Dès que les PV d'un ennemi tombent sous 25 % après qu'il a reçu des dégâts de n'importe quel Assassin, il reçoit des dégâts bonus supplémentaires proportionnels à l'ATQ de ce Champion ou cette Championne. Ces dégâts bonus ignoreront 100 % de la DÉF de la cible et ne peuvent pas être critiques.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Sous la quille [P]",
          description: `Chaque frappe infligée par ce Champion a 50 % de chances de placer un débuff ${DEBUFFS.TRAP} de 100 % sur sa cible pendant 2 tours. Dès que ce Champion tue un ennemi, place un débuff ${DEBUFFS.TRAP} de 100 % sur tous les autres ennemis pendant 2 tours et réduit de 20 % leur Compteur de Tour. Il est impossible de résister à ces effets si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Ce Champion inflige 20 % de dégâts supplémentaires contre les cibles affligés de débuffs ${DEBUFFS.TRAP}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 575",
        "DEF": "991",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
