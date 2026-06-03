const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup vivifiant",
          description: `Attaque un ennemi. Rétablit les PV MAX détruits de cette Championne ou de l'allié ayant le plus de PV détruits de 25 % de ses PV MAX détruits.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe de chant",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Havre de guérison",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Ensuite, soigne tous les alliés à hauteur de 30 % de leurs PV MAX.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Flux rythmique [P]",
          description: `A 12 % de chances d'activer un effet ${INSTANT} sur cette Championne ou un allié après avoir utilisé n'importe quelle compétence active. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "1 123",
        "DEF": "980",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
