const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lancière",
          description: `Attaque un ennemi. Possède 30% de chances de voler un buff aléatoire à la cible.`,
          damage: "0.25*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lumière d'excoriation",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, possède 50% de chances de retirer les buffs ${BUFFS.BLOCK_DEBUFFS} de tous les ennemis.${RETURN}${RETURN}

Possède également 50% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours après avoir attaqué.`,
          damage: "0.24*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bouclier d'Aravia",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20% des PV MAX de cette Championne pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.STRENGTHEN} de 15% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Noblesse inviolable [P]",
          description: `Soigne cette Championne à hauteur de 30% de ses PV MAX dès qu'un buff ${BUFFS.SHIELD} qui lui a été accordé par la compétence Bouclier d'Aravia expire, est retiré ou est brisé par une attaque ennemie.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "749",
        "DEF": "1 123",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
