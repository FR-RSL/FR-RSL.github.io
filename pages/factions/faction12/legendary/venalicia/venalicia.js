const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Atroces vis",
          description: `Attaque 3 fois un ennemi. 

Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Purger l'impur",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs de tous les ennemis. 

A 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Maman a raison",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour. Si tous les autres alliés sont morts, les ranime au lieu de cela avec 75 % de PV et 75 % de Compteur de Tour, et réduit d'1 tour le temps de recharge de toutes les compétences des alliés ranimés. 

Augmente également de 2 tours les temps de recharge de toutes les compétences des ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bienfaisance pervertie [P]",
          description: `Remplit le Compteur de Tour de cette Championne de 20 % dès qu'un allié meurt. 

Soigne cette Championne de 20 % de ses PV MAX dès qu'elle est attaquée par un ennemi sous débuff ${DEBUFFS.PAIN_LINK}. Se produit une fois par tour. 

Place un débuff ${DEBUFFS.PAIN_LINK} pendant 2 tours sur les ennemis qui infligent des dégâts équivalents à 25 % ou plus des PV MAX d'un allié avec une seule compétence. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "892",
        "DEF": "1 211",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
