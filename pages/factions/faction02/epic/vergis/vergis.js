const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Transpercer",
          description: `Attaque un ennemi. Possède 40 % de chances de placer, pour 2 tours, un buff de ${BUFFS.REFLECT_DAM} sur un allié pris au hasard.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Égide",
          description: `Place un buff ${BUFFS.HEALS} de 15 %, un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.REFLECT_DAM} de 30 % sur une cible alliée pendant 3 tours.${RETURN}${RETURN}

Place également, pendant 2 tours, un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf sur ce Champion. Place un buff ${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Second Vent [P]",
          description: `${PASSIVE}

Place, pendant 2 tours, sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 10 % de ses PV MAX dès que ce Champion perd 10 %, ou plus, de ses PV MAX lors d'une seule frappe.${RETURN}${RETURN}

${ACTIVE}

Place, pendant 2 tours, un buff ${BUFFS.HEALS} de 15 % sur ce Champion à chaque fois que ses PV tombent en-dessous de 50 %.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "925",
        "DEF": "1 310",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 33%`,
};
