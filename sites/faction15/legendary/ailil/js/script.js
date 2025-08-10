// Champion Légendaire - script.js

const forms = {
  form1: {
    stats: {
      HP: 18765,
      ATK: 881,
      DEF: 1576,
      SPD: 109,
      C_RATE: "15%",
      C_DMG: "50%",
      RESIST: 40,
      ACC: 10,
    },
    spells: [
      { name: "Éclat du Néant", img: "sort1.png", description: "Attaque un ennemi. Inflige 50% de dégâts supplémentaires si la cible est sous un affaiblissement." },
      { name: "Voile Obscur", img: "sort2.png", description: "Confère un voile parfait à tous les alliés pendant 2 tours." },
      { name: "Jugement d’Éther", img: "sort3.png", description: "Attaque tous les ennemis. Ignore 25% de la DEF si la cible est sous un effet de sommeil ou de peur." },
      { name: "Présence Spectrale", img: "passive1.png", description: "Réduit de 15% les dégâts subis par les alliés sous voile. Confère +10 de vitesse à tous les alliés sous voile." },
    ]
  }
};

const aura = {
  img: "cooldown-icon.png",
  description: "Augmente la VIT de l'équipe de 19% dans l'Arène."
};

function showTooltip(event, content) {
  const tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = content;
  tooltip.style.left = event.pageX + 15 + "px";
  tooltip.style.top = event.pageY + 15 + "px";
  tooltip.classList.remove("hidden");
  tooltip.style.display = 'block';
}

function hideTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.classList.add("hidden");
  tooltip.style.display = 'none';
}

function showAuraTooltip(event) {
  showTooltip(event, `<h4>Aura</h4><p>${aura.description}</p>`);
}

function renderForm(form) {
  const stats = forms[form].stats;
  const spells = forms[form].spells;

  const statsSection = document.getElementById("stats-section");
  statsSection.innerHTML = `
    <div class="stats">
      <h3>Stats</h3>
      <div class="stat-block">
        ${Object.entries(stats).map(([key, value]) => `
          <div class="stat-name">${key}</div>
          <div class="stat-value">${value}</div>
        `).join('')}
      </div>
    </div>
  `;

  const spellsSection = document.getElementById("spells-section");
  spellsSection.innerHTML = "";

  spells.forEach((spell, index) => {
    const div = document.createElement("div");
    div.className = index === 3 ? "spell passive" : "spell";
    div.innerHTML = `<img src="${spell.img}" alt="${spell.name}" />`;
    div.addEventListener("mouseover", (e) => showTooltip(e, `<h4>${spell.name}</h4><p>${spell.description}</p>`));
    div.addEventListener("mouseout", hideTooltip);
    spellsSection.appendChild(div);
  });

  const auraImg = document.getElementById("aura-img");
  auraImg.src = aura.img;
  auraImg.alt = "Aura";
  auraImg.addEventListener("mouseout", hideTooltip);
}

document.addEventListener("DOMContentLoaded", () => renderForm("form1"));
