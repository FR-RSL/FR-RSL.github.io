const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vengeance Dévastatrice",
          description: `Attaque un ennemi. Possède 50 % de chances de réduire d'1 tour la durée d'un buff aléatoire de la cible.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intimide les Horreurs",
          description: `Attaque 3 fois un ennemi. Ignorera 25 % de la DÉF de la cible. Ignorera 25 % supplémentaires de la DÉF de la cible pour chaque buff dont bénéficie ce Champion. Place un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour sur tous les ennemis si cette attaque tue un ennemi.`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tête Brûlée [P]",
          description: `Chaque coup critique remplit le Compteur de Tour de ce Champion de 7,5 %. Dès qu'un allié reçoit un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR} de la part d'un ennemi, cette compétence retirera instantanément le débuff et remplira le Compteur de Tour du chef d'équipe de 15 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 288",
        "DEF": "903",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de la Tour du Malheur de 60`,
};
