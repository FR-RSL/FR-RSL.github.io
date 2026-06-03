const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fendoirs Géants",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Possède 50% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Ces chances passent à 75% si le Compteur de Tour de la cible est supérieur ou égal à 50%.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Couper en Morceaux",
          description: `Attaque 4 fois un ennemi.${RETURN}${RETURN}

Chaque frappe ignorera 20% de la DÉF de la cible. Chaque coup critique offre 50% de chances de réduire d'1 tour le temps de recharge de la compétence Faiseur de Carnage.`,
          damage: "1.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Faiseur de Carnage",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Ignorera 20% de la DÉF de chaque cible. Ignorera 5% de DÉF supplémentaires pour chaque buff sur ce Champion.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "War Machine [P]",
          description: `Increases this Champion's SPD by 6 (stacks up to 30) and C. DMG by 7% (stacks up to 35%) for each enemy this Champion kills in a Round. Will not reset if this Champion is killed.<br><br>Whenever an enemy Champion is revived, fills this Champion's Turn Meter by 30% for each revived enemy, then places a 50% ${BUFFS.ATK} buff and a 30% ${BUFFS.CDAM} buff on this Champion for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 564",
        "DEF": "947",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
