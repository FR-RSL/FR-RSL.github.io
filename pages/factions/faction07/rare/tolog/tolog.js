const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe irrégulière",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne ce Champion de 2 % de ses PV MAX.`,
          damage: "0.11*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloc de boucher",
          description: `Place sur tous les alliés un buff ${BUFFS.DEF} de 30 % pendant 2 tours et un buff ${BUFFS.HEALS} de 15 % pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ragoût revigorant",
          description: `Ranime un allié avec 30 % de PV et 30 % de Compteur de Tour. Place un buff ${BUFFS.HEALS} de 15 % sur l'allié ranimé pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nourrir le troupeau [P]",
          description: `Dès qu'un buff ${BUFFS.HEALS} de 15 % placé par un allié de la Faction des Marcheurs de Peau expire, est retiré ou est volé, place un buff ${BUFFS.HEALS} de 7,5 % sur cet allié pendant 1 tour.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "672",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
