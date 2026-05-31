const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fléau Terrifiant",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Possède également 25 % de chances d'accorder un Tour Supplémentaire.`,
          damage: "1.9*ATQ+0.19*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pillage de Vitalité",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 20 %, puis ajoute cette quantité de PV aux PV MAX de ce Champion.

[Ne peut pas détruire les PV MAX d'un seul Champion de plus de 60 % lors d'une Bataille. Ne peut pas augmenter les PV MAX de ce Champion de plus de 60 000. Détruit les PV MAX des Boss de 30 % des dégâts infligés. Les PV MAX de ce Champion seront augmentés de 15 000 lorsque cette Compétence est utilisée contre les Boss.]`,
          damage: "3.5*ATQ+0.3*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Perte Prédestinée",
          description: `Attaque un ennemi. Ignorera 60 % de la DÉF de la cible. Ignorera également les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.BLOCK_DAMAGE}. Les ennemis tués par cette compétence ne peuvent pas être ranimés si ce Champion a gagné la quantité maximum de PV grâce à la compétence Pillage de Vitalité. Accorde un Tour supplémentaire si cette compétence tue un ennemi.`,
          damage: "2.1*ATQ+0.19*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Oubli de l'Éconduit [P]",
          description: `Réduira les dégâts des frappes ennemies pour que les dégâts réalisés par une frappe unique ne dépassent pas 50 % des PV MAX de ce Champion. Accorde un Tour Supplémentaire si la réduction des dégâts survient. 

[Ne fonctionne pas contre les Boss.] 

Réduit de 15 % les dégâts infligés par les Boss. Réduit de 30 % les dégâts infligés par les Boss si Siphi la Mariée Égarée se trouve dans la même équipe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 520",
        "DEF": "1 266",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
