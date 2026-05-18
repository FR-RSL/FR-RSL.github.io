const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Bucher sortilege",
          description: `
            Attaque un ennemi.<br><br>
			Possède 50% de chances d’appliquer un effet <span class='gbt'>Propagation de Débuffs</span>, 
			prenant un débuff <span class='gbt'>Malédiction</span> et le plagant sur tous les ennemis.<br><br>
			Si la cible ne se trouve pas sous débuff <span class='gbt'>Malédiction</span>, propagera un autre débuff aléatoire.
          `,
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
          name: "Salves d'anathemes",
          description: `
            Attaque un ennemi.<br><br>
			Avant d’attaquer, place un buff <span class='gbt'>Augmentation d’ATQ</span> de 50%
			sur ce Champion pendant 2 tours. Répéte l’attaque sur tous les ennemis sous débuff
			<span class='gbt'>Malédiction</span>.<br><br> Cette attaque ignorera les buffs
			<span class='gbt'>Bouclier</span> contre les cibles sous débuff
			<span class='gbt'>Malédiction</span>.
          `,
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
          name: "Malediction infernale",
          description: `
            Attaque tous les ennemis.<br><br>
			Avant d'attaquer, place un débuff <span class='gbt'>Malédiction</span>
			sur tous les ennemis pendant 2 tours. Les dégats infligés par cette compétence augmentent de 20%
			pour chaque débuff <span class='gbt'>Malédiction</span> placé. S'additionne jusqu'a 100%.<br><br>
			Soigne ce Champion de 20% de ses PV MAX pour chaque débuff <span class='gbt'>Malédiction</span> auquel
			l'ennemi a résisté ou qu'il a bloqué.
          `,
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
          name: "Semi-engendre [P]",
          description: `
            Remplit le Compteur de Tour de ce Champion de 10% lorsqu’il attaque des cibles sans débuff
			<span class='gbt'>Malédiction</span>.<br><br>
			Ignorera 15% de la DEF d’une cible si elle se trouve sous débuff <span class='gbt'>Malédiction</span>.
          `,
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

