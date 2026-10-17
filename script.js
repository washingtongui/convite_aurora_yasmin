// Link direto da imagem no GitHub Pages (garante a miniatura no WhatsApp)
const imageUrl = "https://washingtongui.github.io/convite_aurora_yasmin/assets/confirmacao%20(2).png";

// Emojis em código Unicode seguro para evitar erros de codificação
const eEstrela = "\u{1F31F}";
const eLaco = "\u{1F380}";
const eBrilho = "\u{2728}";
const eConvidado = "\u{1F464}";
const eQuantidade = "\u{1F465}";
const eData = "\u{1F4C5}";
const eHorario = "\u{23F0}";
const eCidade = "\u{1F3D9}";
const eVarinha = "\u{1FA84}";

const modal = document.getElementById("modal");

document.getElementById("open").addEventListener("click", () => modal.showModal());

document.getElementById("copy").addEventListener("click", () => {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();
  const qtd = document.getElementById("qtd").value;
  const fb = document.getElementById("feedback");

  // Regex para permitir apenas letras (incluindo acentos) e espaços
  const apenasLetrasRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  // 1. Validação de campo vazio
  if (!nome) {
    nomeInput.focus();
    fb.textContent = "Por favor, informe seu nome.";
    return;
  }

  // 2. Validação contra números e caracteres especiais
  if (!apenasLetrasRegex.test(nome)) {
    nomeInput.focus();
    fb.textContent = "O nome deve conter apenas letras (sem números ou caracteres especiais).";
    return;
  }

  // Montagem da mensagem
  const mensagem = 
    `${eEstrela} *Confirmação de Presença* ${eEstrela}\n\n` +
    `Olá! Confirmo minha presença no aniversário da Aurora e da Yasmin! ${eLaco}${eBrilho}\n\n` +
    `${eConvidado} *Convidado:* ${nome}\n` +
    `${eQuantidade} *Quantidade:* ${qtd}\n` +
    `${eData} *Data:* Domingo, 15 de Novembro\n` +
    `${eHorario} *Horário:* 19:00h\n` +
    `${eCidade} *Local:* Espaço More (201 Norte, Palmas - TO) ${eVarinha}\n\n` +
    `${imageUrl}`;

  const urlWhatsapp = `https://wa.me/5563992171502?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsapp, '_blank');

  fb.textContent = "O WhatsApp foi aberto com sua mensagem de confirmação!";
});

// Animação da carta/envelope
const scene = document.getElementById("scene");
const envelope = document.getElementById("open-letter");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
  letter.scrollTop = 0;
  scene.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  letter.setAttribute("aria-hidden", "false");
});