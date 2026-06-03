const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tétaniser",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 20% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours.`,
          damage: "1.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Transe de Combat",
          description: `Retire tous les débuffs dont ce Champion est affligé. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 740",
        "ATQ": "1 288",
        "DEF": "749",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
