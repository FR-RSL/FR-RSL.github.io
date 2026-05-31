const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lamedeuil",
          description: `Attaque un ennemi. 

Soigne ce Champion à hauteur de 50 % des dégâts infligés. S'il y a un excédent de soin, place un buff ${BUFFS.SHIELD} équivalent au soin excédentaire sur ce Champion pendant 2 tours. 

Attaquera au lieu de ça avec la compétence Courage ardent si la cible est issue de l'Alliance des Corrompus.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Au nom de Lumaya",
          description: `Attaque tous les ennemis. 

Les dégâts infligés par cette compétence augmentent de 5 % pour chaque buff et débuff sur la cible. Ignorera 25 % de la DÉF des cibles qui ne disposent pas de buffs.`,
          damage: "3.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Courage ardent",
          description: `Attaque un ennemi. Avant d'attaquer, retire tous les buffs sur la cible. Les dégâts augmentent de 20 % pour chaque buff retiré.`,
          damage: "6*ATQ+(0.2*6*ATQ*HeroCounterWithId(2))Multiplier: Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Jusqu'au dernier soupir [P]",
          description: `Réduit les dégâts des frappes subies par ce Champion de 10 % pour chaque tour joué par un allié ou un ennemi avant le prochain tour de ce Champion. Se réinitialise à la fin du prochain tour de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 564",
        "DEF": "1 046",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%

(ne s'applique qu'à la Faction de l'Ordre Sacré)

Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 15%`,
};
