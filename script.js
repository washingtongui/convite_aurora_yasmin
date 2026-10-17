const modal=document.getElementById("modal");document.getElementById("open").addEventListener("click",()=>modal.showModal());document.getElementById("copy").addEventListener("click",()=>{const nome=document.getElementById("nome").value.trim();const qtd=document.getElementById("qtd").value;const fb=document.getElementById("feedback");if(!nome){document.getElementById("nome").focus();fb.textContent="Por favor, informe seu nome.";return;}const mensagem=`Olá! Confirmo minha presença no aniversário da Aurora e da Yasmin! 🎉\n\n👤 *Nome:* ${nome}\n👥 *Pessoas:* ${qtd}\n\n🖼️ *Cartão de Confirmação:*\nhttps://washingtongui.github.io/convite_aurora_yasmin/assets/Confirmacao.png`;const urlWhatsapp=`https://wa.me/5563991283569?text=${encodeURIComponent(mensagem)}`;window.open(urlWhatsapp, '_blank');fb.replaceChildren(document.createTextNode("O WhatsApp foi aberto com sua mensagem. Baixe a imagem e anexe-a à conversa: "));const imageLink=document.createElement("a");imageLink.href="assets/Confirmacao.png";imageLink.download="Confirmacao.png";imageLink.textContent="baixar imagem de confirmação";imageLink.style.color="var(--gold)";fb.append(imageLink);});
const scene = document.getElementById("scene");
const envelope = document.getElementById("open-letter");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
  letter.scrollTop = 0;
  scene.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  letter.setAttribute("aria-hidden", "false");
});