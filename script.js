
function iniciarJornada() {
  const nome = document.getElementById("nome").value;
  let cosmo = +document.getElementById("cosmo").value;
  const sacrificar = document.getElementById("sacrificio").checked;

  const log = document.getElementById("log");
  log.innerHTML = "";

  if (sacrificar) {
    cosmo *= 2;
    log.innerHTML += `🔥 ${nome} elevou seu cosmo ao máximo!<br>`;
  }

  const casas = [
    "Áries ♈", "Touro ♉", "Gêmeos ♊", "Câncer ♋",
    "Leão ♌", "Virgem ♍", "Libra ♎", "Escorpião ♏",
    "Sagitário ♐", "Capricórnio ♑", "Aquário ♒", "Peixes ♓"
  ];

  let dano = 100;

  for (let i = 0; i < casas.length; i++) {
    log.innerHTML += `<br>🏛️ Entrando na Casa de ${casas[i]}...<br>`;

    if (cosmo >= dano) {
      cosmo -= dano;
      log.innerHTML += `⚔️ Vitória! Cosmo restante: ${cosmo}<br>`;
    } else {
      log.innerHTML += `💀 Derrotado na Casa de ${casas[i]}...<br>`;
      log.innerHTML += `<br><span class="derrota">Fim da jornada.</span>`;
      return;
    }
  }

  log.innerHTML += `<br><span class="vitoria">✨ ${nome} salvou Athena! Cosmo final: ${cosmo}</span>`;
}
