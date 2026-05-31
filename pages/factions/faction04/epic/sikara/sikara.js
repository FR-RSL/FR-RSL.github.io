const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Volée de Suivi",
          description: `Attaque un ennemi. Remplit de 25 % le Compteur de Tour de ce Champion si l'attaque passe en critique.`,
          damage: "5.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Perce-Aura",
          description: `Attaque 3 fois tous les ennemis. Chaque frappe possède 40 % de chances de retirer un buff aléatoire de la cible.`,
          damage: "1.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pointes de Faiblesse",
          description: `Attaque tous les ennemis. Possède 60 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "4.3*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sur Dévouée [P]",
          description: `Ranime cette Championne avec 75 % de PV lorsqu'elle est tuée.

[Uniquement disponible lorsque Alika se trouve dans la même équipe.]`,
          cooldown: 7,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "804",
        "DEF": "1 200",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
