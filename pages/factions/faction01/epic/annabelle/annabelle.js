const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ongles envieux",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne cette Championne de 3 % de ses PV MAX.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Séductrice",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. Possède également 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours sur les cibles ayant 50 % de Compteur de Tour ou moins.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Échange sanguin",
          description: `Échange ses PV avec l'allié ciblé. Si les PV de cette Championne sont supérieurs ou égaux à ceux de la cible après l'échange, place un buff ${BUFFS.REVIVE_ON_DEATH} sur la cible alliée pendant 2 tours. Si les PV de cette Championne sont inférieurs à ceux de la cible après l'échange, place un buff ${BUFFS.REVIVE_ON_DEATH} sur cette Championne pendant 2 tours.

Place également un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "The Red Lady [P]",
          description: `Heals this Champion by 50% of their MAX HP whenever an ally or an enemy dies.<br><br>Heal Multiplier: 0.5*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "881",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
