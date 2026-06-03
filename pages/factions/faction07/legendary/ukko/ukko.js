const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracas d'Ukko",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Furie d'Ukko",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 75 % de chances de retirer 2 buffs aléatoires de la cible.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours sur les cibles qui n'ont pas de buff après l'attaque.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clémence d'Ukko",
          description: `Ranime tous les alliés morts avec 40 % de PV, puis place un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour.${RETURN}${RETURN}

Place également un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours. Placera le buff ${BUFFS.SPD} même s'il n'y a pas d'alliés morts.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien de totem [P]",
          description: `Possède 50 % de chances de voler 1 buff aléatoire à un ennemi aléatoire chaque fois qu'un buff est placé sur l'équipe ennemie. Ne tentera de voler qu'un buff pour chaque type de buff placé simultanément (par exemple, un seul buff aléatoire peut être volé si 3 buffs ${BUFFS.SHIELD} sont placés en même temps). Tous les buffs volés deviennent protégés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 233",
        "DEF": "1 112",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
