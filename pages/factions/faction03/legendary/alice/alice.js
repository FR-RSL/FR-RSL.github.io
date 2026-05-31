const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée vorpaline",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si la cible a des compétences actives en recharge. 

Chaque frappe a 80 % de chances de réduire d'1 tour la durée d'un buff aléatoire de la cible.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cyclone mécanique",
          description: `Attaque tous les ennemis. 

Possède 75 % de chances d'augmenter de 2 tours les temps de recharge de toutes les compétences des ennemis. 

Possède également 75 % de chances de réduire le Compteur de Tour de chaque cible de 15 %. Si au moins une des compétences de la cible voit son temps de recharge augmenté au maximum, réduit au lieu de ça son Compteur de Tour de 30 %.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tueuse de reine",
          description: `Attaque un ennemi. Ignorera 20 % de la DÉF de la cible. 

Si la cible initiale est tuée, attaque également l'ennemi qui a les PV les plus bas. Ignorera également 20 % de la DÉF de la cible.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tic-tac [P]",
          description: `${PASSIVE}

Dès que cette Championne attaque, inflige 3 % de dégâts supplémentaires à chaque cible pour chaque tour restant sur les temps de recharge de toutes leurs compétences. Ces dégâts supplémentaires sont comptés individuellement pour chaque cible. 

${ACTIVE}

Réinitialise le temps de recharge des compétences de cette Championne à chaque fois qu'elle tue un ennemi. Se produit une fois par compétence.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 443",
        "DEF": "1 068",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
