const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dynamo Ésotérique",
          description: `Attaque un ennemi. Remplit le Compteur de Tour de ce Champion de 10 %. Remplit le Compteur de Tour de 20 % si cette attaque passe en critique.`,
          damage: "4.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Saut dans le Temps",
          description: `Attaque un ennemi. Attaque également tous les autres ennemis si la première attaque passe en critique. La seconde frappe possède 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Après l'attaque, réduit de 20 % le Compteur de Tour de chaque ennemi ne souffrant pas de débuff ${DEBUFFS.STUN}.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Aide Psychique",
          description: `Place un buff ${BUFFS.SPD} de 30 %, un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chrono Isolation [P]",
          description: `Immune to Turn Meter reduction effects from enemies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "925",
        "DEF": "1 123",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 17%`,
};
