const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Craquement de Pic",
          description: `Attaque un ennemi.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Destruction Absolue",
          description: `Attaque un ennemi. Les ennemis tués par cette compétence ne peuvent pas être ranimés.${RETURN}${RETURN}

Place, pendant 2 tours, un buff de ${BUFFS.BLOCK_DEBUFFS} sur ce Champion si cette attaque tue un ennemi.`,
          damage: "5.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Victime Impuissante",
          description: `Attaque un ennemi. Dégâts augmentés de 15% si la cible ne possède aucun buff actif.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 277",
        "DEF": "815",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 21%`,
};
