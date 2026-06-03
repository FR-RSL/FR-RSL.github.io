const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe de fierté",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place une frappe supplémentaire si la cible se trouve sous débuff ${DEBUFFS.DEF}.${RETURN}${RETURN}

Réduit le Compteur de Tour de la cible de 10 %.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Part du superprédateur",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_REA} si la cible est tuée.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 30 %.`,
          damage: "6.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Aspirante de Theosomi",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Ignorera 15 % de la DÉF de la cible si elle est d'Affinité Esprit. Ignorera 25 % de la DÉF de la cible si elle est d'une autre Affinité.${RETURN}${RETURN}

Active la compétence Part du superprédateur sur un ennemi aléatoire dont les PV ont été réduits de plus de 50 % par cette compétence. Se produit une fois par compétence.`,
          damage: "3.8*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Leçons de Garde-Lion [P]",
          description: `Avant d'attaquer, a 25 % de chances de retirer les débuffs ${DEBUFFS.ATK} sur cette Championne et de les remplacer par leur buff miroir équivalent. A également 25 % de chances de retirer les buffs ${BUFFS.DEF} sur les ennemis et de les remplacer par leur débuff miroir équivalent.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 321",
        "DEF": "881",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
