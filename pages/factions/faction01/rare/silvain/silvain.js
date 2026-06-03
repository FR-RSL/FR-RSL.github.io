const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pique de l'amoureux",
          description: `Attaque 3 fois un ennemi. Chaque frappe critique ignorera 5 % de la DÉF de la cible.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Élégance du ribaud",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "I Fight For Love!",
          description: `Places a 25% ${BUFFS.ATK} and a 15% ${BUFFS.CRATE} buff on this Champion for 2 turns.<br><br>Grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 321",
        "DEF": "716",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
