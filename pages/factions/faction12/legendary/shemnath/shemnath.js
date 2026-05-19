const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Provoquer la ruine",
          description: `Attaque 2 fois un ennemi. Chaque frappe possede 30% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sort de cariatide",
          description: `Transfere tous les debuffs ce cette Championne sur une cible ennemi, puis attaque 3 fois cet ennemi.${RETURN}${RETURN}
La premiere frappe augmente d'1 tour la duree de tous les debuffs de la cible.${RETURN}${RETURN}
La seconde frappe reduit d'1 tour la duree de tous les buffs de la cible.${RETURN}${RETURN}
Augmente egalement d'1 tour la duree de tous les buffs de cette Championne apres l'attaque.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Humilie et brise",
          description: `Attaque 2 fois tous les ennemis. La premiere frappe retire tous les buffs. La seconde frappe ignorera 20% de la DEF de la cible contre les cibles n'ayant aucun buff actif.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Chercheuse de mana [P]",
          description: `Augmente la PRE de cette Championne de 10 pour chaque buff sur chaque ennemi.${RETURN}${RETURN}
Augmente les DEG C. de cette Championne de 5% pour chaque debuff sur chaque ennemi. S'accumule jusqu'a 100%.`,
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
