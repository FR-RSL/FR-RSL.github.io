const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames hématiques",
          description: `Attaque 3 fois un ennemi. 

Chaque frappe a 33 % de chances d'accorder un Tour supplémentaire. Ne peut pas gagner plus d'un Tour supplémentaire. Ne peut pas gagner de Tour supplémentaire si la cible est un Boss.`,
          damage: "0.7*ATQ",
          levelInfo: ["Dégâts +15%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fissure sanguine",
          description: `Attaque un ennemi. 

Ignorera 33 % de la DÉF de la cible. Ignorera au lieu de cela 99 % de la DÉF de la cible, ainsi que les buffs ${BUFFS.STONE_SKIN} et ${BUFFS.BLOCK_DAMAGE}, si cette compétence est utilisée lors d'un Tour dont le nombre est divisible par 3. 

Si la cible est tuée, augmente de 3 tours les temps de recharge de toutes les compétences ennemies. Il est impossible de résister à cet effet si cette compétence est utilisée lors d'un Tour dont le nombre est divisible par 3.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cri de carnage",
          description: `Attaque un ennemi. Avant d'attaquer, retire tous les buffs de tous les ennemis. Les ennemis qui ont un nombre de buffs divisible par 3 ne peuvent pas résister à cet effet. Attaquera tous les ennemis restants qui ont moins de 66 % de PV.  

Accorde un Tour supplémentaire si cette Championne bénéficie d'un nombre de buffs divisible par 3.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dis son nom [P]",
          description: `Chaque frappe suivante de cette Championne inflige 33 % de dégâts supplémentaires (s'accumule jusqu'à 99 %). Se réinitialise lorsque le bonus de dégâts de 99 % est appliqué. 

Chaque frappe suivante que cette Championne reçoit inflige 33 % de dégâts en moins (11 % contre les Boss). S'accumule jusqu'à 3 fois. Se réinitialise lorsque la réduction des dégâts est appliquée pour la troisième fois.

Dès qu'un ennemi est ranimé, ranime cette Championne avec 33 % de PV et 66 % de Compteur de Tour. Après qu'elle est ranimée, place un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 2 tours. Il est impossible de bloquer ce débuff et d'y résister.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 520",
        "DEF": "1 024",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
