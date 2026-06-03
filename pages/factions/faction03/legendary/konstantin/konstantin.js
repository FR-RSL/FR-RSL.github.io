const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épées solaires",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Il est impossible de résister à ce débuff si Vlad le Nocturne se trouve dans la même équipe.${RETURN}${RETURN}

Place une frappe supplémentaire si la cible se trouve sous un débuff.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fracas de Runes",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe ignorera 15 % de la DÉF de chaque cible.${RETURN}${RETURN}

Chaque frappe ignorera 10 % supplémentaires de la DÉF de chaque cible pour chaque débuff ${DEBUFFS.LEECH}, ${DEBUFFS.DEF} et ${DEBUFFS.LOCK_ACTIVE} dont elle est affligée.${RETURN}${RETURN}

Si une cible est sous débuffs ${DEBUFFS.LEECH}, ${DEBUFFS.DEF} et ${DEBUFFS.LOCK_ACTIVE} simultanément, chaque frappe ignorera au lieu de ça 75 % de sa DÉF.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Quiétude",
          description: `Attaque un ennemi. Avant d'attaquer, vole tous les buffs de la cible et transfère tous les débuffs de ce Champion sur la cible. Il est impossible de résister à cet effet si Vlad le Nocturne se trouve dans la même équipe.${RETURN}${RETURN}

Réinitialise le temps de recharge de cette compétence si la cible est tuée.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Exalté [P]",
          description: `Les ennemis des Factions des Morts-vivants, Rejetons Démoniaques et Revenants Chevaliers tués par ce Champion ne peuvent pas être ranimés.${RETURN}${RETURN}

[Les ennemis tués par ce Champion ne peuvent pas être ranimés lorsque Vlad le Nocturne se trouve dans la même équipe.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 421",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 35%`,
};
