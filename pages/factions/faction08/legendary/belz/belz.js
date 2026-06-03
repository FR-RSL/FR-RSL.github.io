const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Abatteur de monstre",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Ignorera 5 % de la DÉF de la cible pour chaque débuff dont elle est affligée.`,
          damage: "0.22*HP",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cadeau de douleur",
          description: `Attaque un ennemi. Avant d'attaquer, vole tous les buffs de la cible.${RETURN}${RETURN}

Répétera l'attaque contre tous les ennemis si la cible initiale se trouve sous débuff ${DEBUFFS.LEECH}.`,
          damage: "0.3*HPMultiplier: 0.25*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brèche terrestre",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Remplit également le Compteur de Tour de ce Champion de 5 % pour chaque débuff placé par cette compétence.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Marche de représailles [P]",
          description: `Augmente les PV MAX de ce Champion de 5 % (s'accumule jusqu'à 50 %) et ses DÉG C. de 5 % (s'accumule jusqu'à 50 %) pour chaque débuff placé par ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 295",
        "ATQ": "749",
        "DEF": "1 277",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
