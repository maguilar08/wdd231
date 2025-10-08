// spotlight.js
const spotlightContainer = document.getElementById('spotlight-cards');

async function loadSpotlights() {
  try {
    const resp = await fetch('data/members.json');
    if(!resp.ok) throw new Error('Members file not found');
    const members = await resp.json();

    // filter gold or silver (account for numeric or different casing)
    const filtered = members.filter(m => {
      if (!m.membershipLevel) return false;
      const lvl = String(m.membershipLevel).toLowerCase();
      return lvl === 'gold' || lvl === 'silver';
    });

    if (filtered.length === 0) {
      spotlightContainer.innerHTML = '<p>No eligible members for spotlight.</p>';
      return;
    }

    // shuffle
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    // choose 2 or 3 randomly
    const chooseCount = Math.random() > 0.5 ? 3 : 2;
    const chosen = shuffled.slice(0, Math.min(chooseCount, shuffled.length));

    spotlightContainer.innerHTML = '';
    chosen.forEach(m => {
      const card = document.createElement('div');
      card.className = 'spotlight-card';
      card.innerHTML = `
        <img src="images/${m.image}" alt="${m.name} logo" onerror="this.src='images/placeholder.png'">
        <div class="meta">
          <h5>${m.name}</h5>
          <p>${m.address}</p>
          <p><strong>PHONE:</strong> ${m.phone}</p>
          <p><a href="${m.website}" target="_blank" rel="noopener">${m.website.replace(/^https?:\/\//,'')}</a></p>
          <p><strong>Membership:</strong> ${m.membershipLevel}</p>
        </div>
      `;
      spotlightContainer.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    if (spotlightContainer) spotlightContainer.innerHTML = '<p>Failed to load spotlights.</p>';
  }
}

loadSpotlights();
