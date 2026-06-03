const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteaux jumelés",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50% de chances de réduire le Compteur de Tour de la cible de 10% et 50% de chances de remplir le Compteur de Tour de ce Champion de 10%.`,
          damage: "0.14*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rallier la Tribu",
          description: `Attaque tous les ennemis. Soigne tous tes alliés à hauteur de 20% des PV MAX de ce Champion. Sinon, soigne de 30% tous les alliés sous buffs ${BUFFS.HEALS}.`,
          damage: "0.27*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mentor de Clan",
          description: `Retire tous les débuffs ${DEBUFFS.BLOCK_BUFFS} et ${DEBUFFS.HEALS} sur tous les alliés, puis place deux buffs ${BUFFS.HEALS} de 15% et un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours. Possède également 75% de chances de retirer 1 débuff aléatoire sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Paternel [P]",
          description: `Chaque fois qu'un buff ${BUFFS.HEALS} soigne un allié, remplit le Compteur de Tour de cet allié de 10%.${RETURN}${RETURN}

Si plusieurs Champions dans l'équipe disposent de cette Compétence, une seule sera activée.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "870",
        "DEF": "1 211",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = null;
