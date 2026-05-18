const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Eclair Fracassant",
          description: `
            Attaque un ennemi. Possède 40% de chances de reduire d'1 tour la duree de 2 buffs aleatoires de la cible.<br><br>
			Si la cible se trouve sous debuff <span class='gbt'>class<>
          `,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Deluge Brulant",
          description: `
            Attaque 3 fois au hasard. Chaque frappe Possède 75% de chances de placer un débuff <span class='gbt'>Brulure de PV</span> pendant 3 tours.
            Place également un buff <span class='gbt'>Voile Parfait</span> sur ce Champion pendant 2 tours.<br><br>
            Lorsqu'elle est utilisee contre les Boss, activera instantanement les débuffs <span class='gbt'>Brulure de PV</span>, ont
            les débuffs <span class='gbt'>Brulure de PV</span> places par cette compétence.
          `,
          cooldown: 4,
          damage: "2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Entaille Cyan",
          description: `
            Attaque tous les ennemis. Possède 75% de chances de placer un débuff <span class='gbt'>Gel</span> pendant 1 tour.<br><br>
            Lorsqu'elle cible un Boss, n'attaquera que le Boss et ignorera 50% de la DEF de la cible. Reduira également d'1 tour le
            temps de recharge de la compétence <span class='gt'>Deluge Brulant</span>.
          `,
          cooldown: 5,
          damage: "3*ATQ (Zone) | 3.9*ATQ (Monocible)",
          levelInfo: [
            "Dégâts +15%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Escalade [P]",
          description: `
            Augmente l'ATQ de Ninja de 10% (jusqu'a 100%) et ses DEG C. de 5% (jusqu'a 25%) chaque fois qu'un seul ennemi se fait frapper par les trois
            compétences Actives de Ninja lors d'un meme Round. Cet effet peut survenir plusieurs fois contre le meme ennemi.<br><br>
            Lors de combats contre les Boss, augmentera par contre l'ATQ de Ninja de 20% (jusqu'a 100%) et ses DEG C. de 10% (jusqu'a 25%).
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 865",
        ATQ: "1 553",
        DEF: "1 035",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = null;

