const championData = {
  type: "Attaque",
  spells: [
    {
      img: "assets/sort1.webp",
      name: "Lacération rapide",
      description: `Attaque un ennemi. 

Remplit le Compteur de Tour de tous les alliés de 10 % si cette attaque est critique.`,
      damage: "3.2*ATQ",
      levelInfo: [
        "Dégâts +10%",
        "Dégâts +10%",
      ],
    },
    {
      img: "assets/sort2.webp",
      name: "Tacticien surnaturel",
      description: `Attaque 2 fois un ennemi. Placera 2 frappes supplémentaires si le Compteur de Tour de la cible est inférieur à 50 %. 

Ignorera un pourcentage de la DÉF de la cible équivalent au Compteur de Tour actuel de la cible. 

Réinitialise le temps de recharge de cette compétence si la cible est tuée.`,
      damage: "2*ATQ",
      cooldown: 4,
      levelInfo: [
        "Dégâts +10%",
        "Dégâts +10%",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.webp",
      name: "Prémonition décisive",
      description: `Attaque un ennemi.

Vole 100 % du Compteur de Tour actuel de la cible et place un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours.`,
      damage: "5*ATQ",
      cooldown: 5,
      factions: [
        `Il est impossible de bloquer et de resister a l'effet de vol
        du Compteur de Tour et au débuff <span class='gbt'>Peur Absolue</span>.`,
        `Augmente les degats infliges par cette compétence en fonction de la difference entre la VIT
        de ce Champion et la VIT de la cible.`,
        `Attaquera également tous les autres ennemis qui ont plus de 50% de Compteur de Tour.
        Vole 100% du Compteur de Tour actuel de chaque cible et leur inflige un débuff <span class='gbt'>Peur Absolue</span> pendant 2 tours.`
      ],
      levelInfo: [
        "Dégâts +10%",
        "Dégâts +10%",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.webp",
      name: "Fléau du Mikage [P]",
      description: `Remplit le Compteur de Tour de ce Champion de 15 % dès qu'un Champion ennemi joue un tour. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
      factions: [
        `
        Les effets d'augmentation du Compteur de Tour sur les alliés sont 20% plus efficaces.
        Les effets d'augmentation du Compteur de Tour utilises sur les ennemis sont 20% moins efficaces.
        Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.
        `,
        `
        Des que ce Champion voit son Compteur de Tour rempli, augmente de 5% les degats
        de sa prochaine attaque. Se reinitialise apres qu'une compétence est utilisee.
        Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.
        `,
        `
        Tous les alliés sont immunises contre les effets de reduction du Compteur de TOur utilises par les ennemis.
        `,
      ],
      isPassive: true,
    },
  ],
  stats: {
    PV: "15 525",
    ATQ: "1 696",
    DEF: "848",
    VIT: "106",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    RÉS: "30",
    PRÉ: "0",
  },
};

const aura = {
  img: "../../../../../../assets/images/auras/sup-speed.webp",
  description: `
    Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.<br><br>
    Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 15%.<br>
    (ne s'applique qu'a la Faction du Clan de l'Ombre).
  `,
};

