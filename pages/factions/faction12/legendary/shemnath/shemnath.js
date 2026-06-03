const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Provoquer la ruine",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sort de cariatide",
          description: `Transfère tous les débuffs de cette Championne sur une cible ennemie, puis attaque 3 fois cet ennemi.${RETURN}${RETURN}

La première frappe augmente d'1 tour la durée de tous les débuffs de la cible.${RETURN}${RETURN}

La seconde frappe réduit d'1 tour la durée de tous les buffs de la cible.${RETURN}${RETURN}

Augmente également d'1 tour la durée de tous les buffs de cette Championne après l'attaque.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Humilié et brisé",
          description: `Attaque 2 fois tous les ennemis. La première frappe retire tous les buffs. La seconde frappe ignorera 20% de la DÉF de la cible contre les cibles n'ayant aucun buff actif.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Chercheuse de mana [P]",
          description: `Augmente la PRÉ de cette Championne de 10 pour chaque buff sur chaque ennemi.${RETURN}${RETURN}

Augmente les DÉG C. de cette Championne de 5% pour chaque débuff sur chaque ennemi. S'accumule jusqu'à 100%.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 553",
        "DEF": "958",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = null;
