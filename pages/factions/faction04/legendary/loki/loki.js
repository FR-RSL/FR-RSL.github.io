const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Flammes de malice",
          description: `
            Attaque tous les ennemis.<br><br>
			Possède 30% de chances d'augmenter d'1 tour la durée de tous les débuffs ennemis.<br><br>
			Si ce Champion est sous buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>,
			les chances passent a 50%.
          `,
          damage: "3.6*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Stratageme de trompeur",
          description: `
            Selectionne une cible.<br><br>
			Si la cible est un ennemi, Possède 75% de chances de placer un débuff
			<span class='gbt'>Blocage des compétences Actives</span> et un débuff <span class='gbt'>Blocage des Buffs</span> pendant 2 tours.
			Si le Champion utilise cette compétence alors qu'il beneficie d'un buff
			<span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>, applique également un effet
			de <span class='gbt'>Propagation de débuffs</span>, qui prend 2 débuffs aleatoires a la cible
			pour les placer sur tous les ennemis.<br><br>
			Si la cible est un allié ou Champion, le soigne de 50% de ses PV MAX de ce Champion
			et lui accord un buff <span class='gbt'>Voile parfait</span> pendant 2 tours.
			Si ce Champion se trouve sous buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>,
			applique également un effet de <span class='gbt'>Propagation de Buffs</span>, qui prend un buff aleatoire
			a la cible et le place sur tous les alliés.
          `,
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Eclair de bandit",
          description: `
            Possède 75% de chances de voler tous les buffs d'une cible ennemi
			et 100% de son Compteur de Tour. Il est impossible de resister a ces effets
			si ce champion se trouve sous buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>.<br><br>
			Si le Compteur de Tour de la cible n'a pas ete vole, remplit au lieu de ca les Compteurs
			de Tour de tous les alliés de 15%.<br><br>
			Place également un buff <span class='gbt'>Augmentation d'ATQ</span> de 50% sur tous les alliés pendant 2 tours.
          `,
          cooldown: 5,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Pas brumeux [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
			Au debut de chaque round, place un buff <span class='gbt'>Voile parfait</span>
			sur ce Champion pendant 2 tours.<br><br>
			Place également un buff <span class='gbt'>Voile parfait</span> sur ce Champion
			pendant 1 tour lorsque ses PV tombent sous 50%.<br><br>
			Possède 15% de chances d'<span class='gt'>Esquiver</span> une compétence
			ennemi et tous les effets qui l'accompagnent.
			Si ce champion est sous buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>,
			les chances d'<span class='gt'>Esquiver</span> passent a 30%.<br><br>
			<span class='gbt'>Effet Actif</span><br><br>
			Si les PV de ce Champion se trouvent sous 50% lorsqu'il se fait cibler par
			une compétence ennemie, Possède 100% de chances d'<span class='gt'>Esquiver</span>
			cette compétence et tous les effets qui l'accompagnent, Cette <span class='gt'>Esquive</span>
			garantie passe ensuite en temps de recharge.
          `,
		  cooldown: 4,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 155",
        ATQ: "980",
        DEF: "1 321",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.
    `,
  };

