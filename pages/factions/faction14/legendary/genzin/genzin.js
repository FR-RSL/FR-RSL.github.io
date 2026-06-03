const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entailles Gracieuses",
          description: `Attaque 3 fois un ennemi. Chaque coup remplit le Compteur de Tour de ce Champion de 6%.`,
          damage: "1.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Raie d'Acier",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Chaque coup critique remplit le Compteur de Tour de ce Champion de 10%.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vengeance Prédestinée",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.SHIELD}. Remplit le Compteur de Tour de ce Champion de 30%.${RETURN}
Sinon, remplit le Compteur de Tour de ce Champion de 60% si la cible possède 50% de PV ou moins après cette attaque. Réduit également d'1 tour le temps de recharge des compétences Raie d'Acier et Vengeance Prédestinée si cette attaque tue un ennemi.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bushido [P]",
          description: `Augmente la VIT de ce Champion de 10 et sa RÉS de 50 si le nombre de Champions dans l'équipe du Champion est inférieur ou égal au nombre d'ennemis dans l'équipe ennemie.${RETURN}${RETURN}

[Cet effet fonctionne toujours lors des combats contre les Boss.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 553",
        "DEF": "859",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
