const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rasoir Sorcier",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mange-Malédiction",
          description: `Attaque un ennemi. Si ce Champion est affligé d'1 débuff ou plus, cette attaque ignorera 30 % de la DÉF ennemie. Si ce Champion est affligé de 2 débuffs ou plus, les ennemis tués par cette Compétence ne peuvent pas être ranimés. Si ce Champion est affligé de 3 débuffs ou plus, cette attaque passe toujours en critique. Si ce Champion est affligé de 4 débuffs ou plus, ce Champion soigne à hauteur de 30 % des dégâts infligés. Si ce Champion est affligé de 5 débuffs ou plus, il reçoit un Tour supplémentaire. Retire tous les débuffs de ce Champion après l'attaque.`,
          damage: "6.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rituel de Ruine [P]",
          description: `Place, au début de chaque tour et pendant 4 tours, un débuff de ${DEBUFFS.POISON} de 2,5 % sur ce Champion.${RETURN}${RETURN}

Possède 70 % de chances de placer, au début de chaque tour et pendant 4 tours, un débuff de ${DEBUFFS.POISON} de 5% sur un ennemi choisi au hasard.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "1 101",
        "DEF": "826",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
