const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Prise venimeuse",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Duc des Mouches",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          damage: "5*ATQ",
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Essaim d'Horreurs",
          description: `Attaque tous les ennemis. Possède 80 % de chances d'augmenter d'1 tour la durée de tous les débuffs ennemis. 

Lorsque tu frappes des ennemis sous débuffs ${DEBUFFS.HEX}, possède également 60 % de chances de placer une de leurs compétences en temps de recharge.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pestiféré [P]",
          description: `Possède 10 % de chances de voler le soin chaque fois qu'un ennemi sous débuff ${DEBUFFS.HEX} est sur le point d'être soigné.
 
[Ne fonctionne pas contre les Boss. La quantité soignée sera la même qu'elle l'aurait été sur la cible originale du soin, sauf si le soin est basé sur les PV de la cible, auquel cas il s'étalonnera sur les PV de [Vildrax].]`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "738",
        "DEF": "1 255",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
