const championData = {
  type: "PV",
  spells: [
    {
      img: "assets/sort1.png",
      name: "Lames dissimulées",
      description: `
        Attaque 2 fois un ennemi.<br><br>
        Chaque frappe a 75% de chances de voler un buff aléatoire.
        Il est impossible de résister à cet effet si ce Champion se trouve
        sous un buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>.
      `,
      damage: "0.14*PV",
      levelInfo: [
        "Dégâts +10%",
        "Chance de Buff/débuff +10%",
        "Dégâts +10%",
        "Chance de Buff/débuff +15%",
      ],
    },
    {
      img: "assets/sort2.png",
      name: "Assassin nautique",
      description: `
        Attaque un ennemi.<br><br>
        Ignorera 25% de la DEF de la cible, ainsi que les buffs
        <span class='gbt'>Bouclier</span> et <span class='gbt'>Renforcer</span>.
        Ignorera également les buffs <span class='gbt'>Peau de Pierre</span> si
        ce Champion se trouve sous un buff 
        <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>.
      `,
      damage: "0.34*PV",
      cooldown: 5,
      levelInfo: [
        "Dégâts +10%",
        "Temps de recharge -1",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.png",
      name: "Assaut du Ressac",
      description: `
        Attaque tous les ennemis.
        Avant d'attaquer, place un buff <span class='gbt'>Voile parfait</span>
        et un buff <span class='gbt'>Augmentation des DÉG C.</span> de 30%
        sur ce Champion pendant 2 tours.<br><br>
        Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique
        plutôt que des dégâts de zone. Ignorera 15% de la DÉF du premier ennemi.
        Après avoir frappé le premier ennemi, frappera chacun des autres ennemis.
        Après la première frappe, chaque frappe successive ignore 5% supplémentaires de la DÉF
        de la cible (s'accumule jusqu'à 35%).<br><br>
        Pour chaque ennemi tué par cette attaque, augmente les PV de ce Champion de 5%
        (s'accumule jusqu'à 30%).
      `,
      damage: "0.32*PV",
      cooldown: 6,
      levelInfo: [
        "Dégâts +10%",
        "Temps de recharge -1",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.png",
      name: "Seigneur pirate [P]",
      description: `
        <span class='gbt'>Effet Passif</span><br><br>
        Au début de chaque Round, place un buff <span class='gbt'>Voile parfait</span>
        sur ce Champion pendant 1 tour.<br><br>
        Possède 20% de chances de renvoyer sur l'assaillant tous les dégâts et débuffs que
        reçoit ce Champion. Ne fonctionnera que sur les compétences qui infligent des dégâts
        ou qui infligent des dégâts et placent des débuffs.
        Ne fonctionne pas contre les Boss.<br><br>
        <span class='gbt'>Effet Actif</span><br><br>
        Si les dégâts renvoyés tuent un ennemi, remplit le Compteur de Tour de ce Champion
        de 30% et place un buff <span class='gbt'>Voile parfait</span> sur ce Champion pendant 1 tour.
      `,
      cooldown: 4,
      levelInfo: [
        "Temps de recharge -1",
        "Temps de recharge -1",
      ],
      isPassive: true,
    },
  ],
  stats: {
    "PV": "23 955",
    "ATQ": "793",
    "DÉF": "1 189",
    "VIT": "100",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    "RÉS": "40",
    "PRÉ": "0",
  },
};

const aura = {
  img: "../../../../../assets/images/auras//speed.png",
  description: `Augmente la statistique VIT des Alliés dans les batailles d'Arène de 28%.`,
};

