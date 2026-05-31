const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faucheur d'ivraie",
          description: `Attaque un ennemi. Ignorera 25 % de la DÉF de la cible. 

Soigne tous tes alliés qui ont moins de 50 % de PV de 10 % des PV MAX de ce Champion.`,
          damage: "0.23*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Abatteur des faibles",
          description: `Attaque 2 fois tous les ennemis. 

Chaque frappe ignorera 25 % de la DÉF contre les cibles qui ont moins de 50 % de PV. La première frappe a 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % sur chaque ennemi pendant 2 tours. La seconde frappe a 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur chaque ennemi pendant 2 tours. Chaque frappe ignorera 25 % de la RÉS contre les cibles qui ont moins de 50 % de PV.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cri de guerre de dragon",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ambition féroce [P]",
          description: `Si un allié a plus de 50 % de PV et bénéficie d'un buff placé par ce Champion, cet allié inflige 10 % de dégâts supplémentaires. Si un allié a moins de 50 % de PV et est attaqué par un ennemi affligé d'un débuff placé par ce Champion, cet allié reçoit 10 % de dégâts en moins. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "826",
        "DEF": "1 244",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 28%`,
};
