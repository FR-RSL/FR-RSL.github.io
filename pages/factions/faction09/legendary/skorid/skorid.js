const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Bûcher sortilège",
          description: `Attaque un ennemi. 

Possède 50 % de chances d'appliquer un effet [Propagation de Débuffs], prenant un débuff ${DEBUFFS.HEX} et le plaçant sur tous les ennemis. 

Si la cible ne se trouve pas sous débuff ${DEBUFFS.HEX}, propagera un autre débuff aléatoire.`,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Salve d'anathèmes",
          description: `Attaque un ennemi. 

Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours. Répète l'attaque sur tous les ennemis sous débuff ${DEBUFFS.HEX}. 

Cette attaque ignorera les buffs ${BUFFS.SHIELD} contre les cibles sous débuff ${DEBUFFS.HEX}.`,
          cooldown: 4,
          damage: "3.8*ATQ",
          levelInfo: [
          	"Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Malédiction infernale",
          description: `Attaque tous les ennemis. 

Avant d'attaquer, place un débuff ${DEBUFFS.HEX} sur tous les ennemis pendant 2 tours. Les dégâts infligés par cette compétence augmentent de 20 % pour chaque débuff ${DEBUFFS.HEX} placé. S'additionne jusqu'à 100 %.

Soigne ce Champion de 20 % de ses PV MAX pour chaque débuff ${DEBUFFS.HEX} auquel l'ennemi a résisté ou qu'il a bloqué.`,
          cooldown: 4,
          damage: "4*ATQ",
          levelInfo: [
          	"Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Semi-engendré [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 10 % lorsqu'il attaque des cibles sans débuff ${DEBUFFS.HEX}. 

Ignorera 15 % de la DÉF d'une cible si elle se trouve sous débuff ${DEBUFFS.HEX}.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 515",
        ATQ: "1 498",
        DEF: "980",
        VIT: "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  	const aura = null;

