const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Échange équivalent",
          description: `Attaque un ennemi. Possède 50 % de chances de transférer 1 débuff aléatoire de cette Championne sur la cible. Possède également 50 % de chances de voler 1 buff aléatoire à la cible.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Texte de guérison",
          description: `Rétablit 25 % des PV MAX détruits de chaque allié, puis soigne tous les alliés de 25 % des PV MAX de cette Championne.`,
          cooldown: 4,
          levelInfo: ["Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Décret de sommeil",
          description: `Possède 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} sur une cible pendant 1 tour.${RETURN}${RETURN}

Possède également 75 % de chances de placer sur la cible un débuff ${DEBUFFS.SPD} de 30 % et un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.${RETURN}${RETURN}

Les débuffs placés par cette compétence ignoreront les débuffs ${BUFFS.BLOCK_DEBUFFS}.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Percevoir la faiblesse [P]",
          description: `Les alliés infligent 3 % de dégâts en plus aux cibles pour chaque débuff que cette Championne a placé sur elles.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 013",
        "DEF": "1 255",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
