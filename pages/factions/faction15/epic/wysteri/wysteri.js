const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèches vigne-drain",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 50% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% sur la cible pendant 2 tours.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carreau creusant",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.DEF} et ${BUFFS.SHIELD}, ainsi que 20% de la DÉF de la cible.${RETURN}${RETURN}

Si cette attaque tue un ennemi, augmente d'1 tour la durée de tous les buffs de cette Championne.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Présentez arme, en joue...",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur cette Championne pendant 3 tours. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Feuille mortelle [P]",
          description: `Augmente l'ATQ de cette Championne de 10% pour chaque ennemi qui a 50% de PV ou moins (s'accumule jusqu'à 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 310",
        "DEF": "892",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%`,
};
