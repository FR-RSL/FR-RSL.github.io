const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feu Sacré",
          description: `Attaque 1 ennemi. Possède 15% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soin Rapide",
          description: `Soigne, à hauteur de 40% des PV de ce Champion, l'allié ayant le moins de PV. Remplit totalement le Compteur de Tours de la cible si l'allié possède toute sa vie. Le Compteur de Tours de ce Champion ne peut pas être rempli par cette Compétence.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "936",
        "DEF": "771",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
