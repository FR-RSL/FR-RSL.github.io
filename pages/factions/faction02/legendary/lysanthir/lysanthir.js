const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carreau écho",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe a 75% de chances de placer un débuff ${DEBUFFS.HEX} sur la cible pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 2 tours.`,
          damage: "1.55*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chasseur rusé",
          description: `Attaque 2 fois un ennemi. A 20% de chances de répéter l'attaque.${RETURN}${RETURN}

Lorsque ce Champion contre-attaque ou fait équipe avec des alliés pour rejoindre une attaque, utilisera cette compétence au lieu de sa compétence par défaut. Les dégâts infligés par cette compétence augmenteront de 10% à chaque fois qu'un allié se fait dévorer (s'accumule jusqu'à 50%).`,
          damage: "2.5*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Collets à runes",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

Chaque frappe a 75% de chances de placer un débuff ${DEBUFFS.SPD} de 30% et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Si une cible se trouve sous débuff ${DEBUFFS.HEX}, place ces débuffs avant d'attaquer.`,
          damage: "1.9*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Survivaliste suprême [P]",
          description: `Ignorera les buffs ${BUFFS.LIFE_BARRIER} et ${BUFFS.ALLY_PROTECT}.${RETURN}${RETURN}

Augmente la DÉF de ce Champion de 5% pour chaque buff actif sur ce Champion (s'accumule jusqu'à 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "837",
        "DEF": "1 542",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 28%`,
};
