const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir à Blanc",
          description: `Attaque un ennemi. Possède 30 % de chances de porter un coup supplémentaire. Cette attaque passe toujours en critique.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cible de Choix",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible si ses PV MAX sont plus élevés que les PV MAX de ce Champion.`,
          damage: "6.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Désorienter",
          description: `Attaque tous les ennemis. Possède 75 % de chances d'augmenter de 2 tours les temps de recharge de toutes les compétences des ennemis.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sur Dévouée [P]",
          description: `Ranime cette Championne avec 75 % de PV lorsqu'elle est tuée.

[Uniquement disponible lorsque Sikara se trouve dans la même équipe.]`,
          cooldown: 7,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 354",
        "DEF": "892",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
