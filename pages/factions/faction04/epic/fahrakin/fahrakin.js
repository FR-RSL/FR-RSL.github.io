const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Crépitante",
          description: `Attaque un ennemi. Offre 40 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fer de Honte",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} et deux débuffs ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "7.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Matraquage",
          description: `Place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur tous les alliés, sauf ce Champion, pendant 3 tours. Puis, tous les alliés sauf ce Champion attaqueront 1 ennemi ciblé.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blocage Corporel [P]",
          description: `Renvoie sur tous les alliés 20 % de tous les dégâts en approche que reçoit ce Champion. Les dégâts seront propagés de manière équitable sur tous les alliés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 244",
        "DEF": "1 090",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
