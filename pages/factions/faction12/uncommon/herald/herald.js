const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rupture fulminante",
          description: `Attaque un ennemi. 

A 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE}et un débuff ${DEBUFFS.UNFEEBLE} sur la cible pendant 1 tour. A également 25 % de chances qu'il soit impossible de résister à ces débuffs. 

Si chaque ennemi possède un nombre de buffs inférieur ou égal à ceux de ce Champion, attaque au lieu de cela tous les ennemis. Cette attaque est toujours critique. A 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} et un débuff ${DEBUFFS.UNFEEBLE} sur tous les ennemis pendant 1 tour. A également 25 % de chances qu'il soit impossible de résister à ces débuffs.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "il de la tempête",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.DEF} de 60 % pendant 2 tours et 1 pile d'Invoque-orage sur tous les alliés. Cette attaque est toujours critique si le nombre de buffs de la cible est inférieur ou égal à ceux de ce Champion. 

Ignorera le buff ${BUFFS.STONE_SKIN} et 50 % de la DÉF de la cible si le nombre de buffs sur la cible est inférieur ou égal à ceux de ce Champion. 

Si l'attaque tue la cible, réduit les Compteurs de Tour de tous les autres ennemis d'une quantité égale au Compteur de Tour dont dispose la cible.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "782",
        "DEF": "848",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
