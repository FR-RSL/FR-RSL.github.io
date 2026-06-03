const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vrilles Aspire-âme",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours sur 2 ennemis pris au hasard si ce Champion possède tous ses PV.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Farceur Fatidique",
          description: `Attaque un ennemi. Possède 60 % de chances de voler tous les buffs de la cible.${RETURN}${RETURN}

Possède également 60 % de chances de voler 50 % du Compteur de Tour max. de la cible.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déferlement Sauvage",
          description: `Attaque 2 fois tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. La première frappe sur chaque cible possède également 75 % de chances de réduire le Compteur de Tour de la cible de 10 %.${RETURN}${RETURN}

La seconde frappe sur chaque cible possède également 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours si ce Champion possède tous ses PV.`,
          damage: "2.3*ATQ",
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Enchanteur [P]",
          description: `Dès que 4 buffs ou plus sont placés sur l'équipe ennemie lors d'un même tour, place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 30 % de ses PV MAX pendant 2 tours.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 233",
        "DEF": "1 035",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
