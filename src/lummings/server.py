"""HTTP API for the Lummings. Open browser, talk to a Lumming."""




HTML = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>The Lummings — Playground</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root {
    --yellow:#FFD23F;--purple:#7B5CFF;--green:#2ECC71;--teal:#1ABC9C;--pink:#FF5CA7;
    --ink:#1a1a2e;--paper:#fff8e7;--shadow:0 6px 0 rgba(0,0,0,.18);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:'Comic Sans MS','Chalkboard SE',system-ui,sans-serif;
    background:var(--paper);color:var(--ink);
    background-image:
      radial-gradient(circle at 10% 10%,rgba(255,210,63,.18) 0,transparent 25%),
      radial-gradient(circle at 90% 30%,rgba(123,92,255,.15) 0,transparent 30%),
      radial-gradient(circle at 30% 80%,rgba(255,92,167,.12) 0,transparent 25%);
    min-height:100vh;padding:24px 18px 60px;
  }
  header.hero{text-align:center;max-width:760px;margin:0 auto 28px}
  .hero .badge{display:inline-block;background:var(--ink);color:var(--yellow);padding:6px 16px;border-radius:999px;font-size:12px;letter-spacing:2px;margin-bottom:14px;transform:rotate(-1deg)}
  .hero h1{font-size:clamp(36px,6vw,64px);line-height:.95;background:linear-gradient(135deg,#FFD23F 0%,#FF5CA7 45%,#7B5CFF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:4px 4px 0 var(--ink);letter-spacing:-1px;transform:rotate(-2deg)}
  .hero p{font-size:14px;color:#444;margin-top:10px;font-style:italic}

  .starter-row{display:flex;justify-content:center;flex-wrap:wrap;gap:12px;margin:24px auto 30px;max-width:880px}
  .starter{
    background:#fff;border:3px solid var(--ink);border-radius:18px;padding:14px 18px;
    box-shadow:var(--shadow);cursor:pointer;display:flex;align-items:center;gap:10px;
    font-weight:800;font-size:14px;min-width:140px;transition:transform .15s,box-shadow .15s;
  }
  .starter:hover{transform:translateY(-3px);box-shadow:0 10px 0 rgba(0,0,0,.18)}
  .starter .ico{font-size:32px}
  .starter .meta{text-align:left}
  .starter .meta small{display:block;font-size:10px;font-weight:600;color:#888;letter-spacing:1.2px;margin-bottom:2px}
  .starter.active{outline:4px solid var(--ink);outline-offset:-2px}
  .starter[data-p="lumo"].active{background:var(--yellow)}
  .starter[data-p="lila"].active{background:var(--purple);color:#fff}
  .starter[data-p="pip"].active{background:var(--green);color:#fff}
  .starter[data-p="nori"].active{background:var(--teal);color:#fff}
  .starter[data-p="moki"].active{background:var(--pink);color:#fff}

  .playground{max-width:920px;margin:0 auto;background:#fff;border:4px solid var(--ink);border-radius:28px;box-shadow:var(--shadow);padding:24px;position:relative;overflow:hidden}
  .playground::before{content:"";position:absolute;top:-60px;right:-60px;width:200px;height:200px;border-radius:50%;opacity:.18;pointer-events:none;background:var(--accent,var(--yellow));transition:background .3s}
  .playground > *{position:relative;z-index:1}

  .pg-header{display:flex;align-items:center;gap:18px;border-bottom:3px dashed var(--ink);padding-bottom:18px;margin-bottom:18px}
  .pg-avatar{width:96px;height:96px;border-radius:18px;border:4px solid var(--ink);display:flex;align-items:center;justify-content:center;font-size:54px;flex-shrink:0}
  [data-theme="lumo"] .pg-avatar{background:linear-gradient(135deg,#FFE17A,var(--yellow))}
  [data-theme="lila"] .pg-avatar{background:linear-gradient(135deg,#B8A8FF,var(--purple));color:#fff}
  [data-theme="pip"]  .pg-avatar{background:linear-gradient(135deg,#6FE89E,var(--green));color:#fff}
  [data-theme="nori"] .pg-avatar{background:linear-gradient(135deg,#5BD9C5,var(--teal));color:#fff}
  [data-theme="moki"] .pg-avatar{background:linear-gradient(135deg,#FF8FC4,var(--pink));color:#fff}
  .pg-meta h2{font-size:34px;letter-spacing:-1px;line-height:1;margin-bottom:4px}
  .pg-meta .tagline{font-size:13px;font-style:italic;color:#555}
  .pg-meta .mood{display:inline-block;margin-top:8px;background:var(--ink);color:var(--yellow);padding:4px 10px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:1px}

  #log{background:#fff8e7;border:3px solid var(--ink);border-radius:18px;padding:16px;height:46vh;overflow-y:auto;margin-bottom:16px;font-size:14px;line-height:1.55}
  .msg-user{background:#1a1a2e;color:var(--yellow);border-radius:14px 14px 4px 14px;padding:10px 14px;margin:8px 0 8px auto;max-width:78%;display:block;width:fit-content;font-weight:600}
  .msg-bot{background:#fff;border:3px solid var(--ink);border-radius:14px 14px 14px 4px;padding:10px 14px;margin:8px auto 8px 0;max-width:78%;display:block;width:fit-content;white-space:pre-wrap}
  .msg-bot .ts{display:block;font-size:10px;color:#888;margin-top:4px;letter-spacing:1px;font-weight:700}
  .msg-bot .face{display:inline-block;margin-right:6px;font-size:18px}

  .input-row{display:flex;gap:8px}
  #input{flex:1;background:#fff8e7;border:3px solid var(--ink);border-radius:18px;padding:14px 18px;font-size:15px;font-family:inherit;outline:none}
  #input:focus{background:#fff}
  button.send{background:var(--ink);color:var(--yellow);border:3px solid var(--ink);border-radius:18px;padding:0 24px;font-weight:800;font-size:14px;cursor:pointer;letter-spacing:1px;box-shadow:0 4px 0 #000}
  button.send:hover{transform:translateY(-1px)}
  button.send:active{transform:translateY(2px);box-shadow:0 1px 0 #000}
  button.send[disabled]{opacity:.5;cursor:not-allowed}

  .facts{margin-top:14px;display:flex;flex-wrap:wrap;gap:6px}
  .fact-pill{background:var(--yellow);border:2px solid var(--ink);border-radius:999px;padding:3px 10px;font-size:11px;font-weight:700}

  .quicks{margin-top:14px;display:flex;flex-wrap:wrap;gap:8px}
  .quick{background:#fff;border:2px solid var(--ink);border-radius:999px;padding:6px 14px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit}
  .quick:hover{background:var(--ink);color:var(--yellow)}

  footer{text-align:center;margin-top:40px;font-size:12px;color:#666}
  footer a{color:var(--ink);font-weight:800}

  @media (max-width:640px){
    .pg-header{flex-direction:column;text-align:center}
    .starter{min-width:120px;font-size:12px;padding:10px 12px}
    .starter .ico{font-size:24px}
    .pg-meta h2{font-size:26px}
  }
</style></head><body>

<header class="hero">
  <span class="badge">★ THE LUMMINGS · PLAYGROUND ★</span>
  <h1>CHOOSE YOUR LUMMING</h1>
  <p>Click a starter. Say hello. Watch them listen back.</p>
</header>

<div class="starter-row" id="starterRow">
  <div class="starter active" data-p="lumo"><span class="ico">⚡</span><span class="meta"><small>CURIOUS</small>LUMO</span></div>
  <div class="starter" data-p="lila"><span class="ico">📖</span><span class="meta"><small>STORY</small>LILA</span></div>
  <div class="starter" data-p="pip"><span class="ico">🧩</span><span class="meta"><small>BRAVE</small>PIP</span></div>
  <div class="starter" data-p="nori"><span class="ico">🌙</span><span class="meta"><small>WISE</small>NORI</span></div>
  <div class="starter" data-p="moki"><span class="ico">🎈</span><span class="meta"><small>FUNNY</small>MOKI</span></div>
</div>

<div class="playground" id="pg" data-theme="lumo" style="--accent:#FFD23F">
  <div class="pg-header">
    <div class="pg-avatar" id="pgAvatar">⚡</div>
    <div class="pg-meta">
      <h2 id="pgName">LUMO</h2>
      <div class="tagline" id="pgTag">"Wait — what if we tried it backwards?"</div>
      <span class="mood" id="mood">MOOD · CURIOUS</span>
    </div>
  </div>
  <div id="log"></div>
  <div class="quicks" id="quicks"></div>
  <div class="input-row">
    <input id="input" placeholder="Say hi to your Lumming..." autofocus />
    <button class="send" onclick="send()">SEND ✦</button>
  </div>
  <div class="facts" id="facts"></div>
</div>

<footer>
  ★ THE LUMMINGS ★ · <a href="https://optimusio.github.io/lummings/marketing/character-codex.html" target="_blank">FULL CHARACTER CODEX</a>
</footer>

<script>
const PERSONAS={
  lumo:{name:'LUMO',icon:'⚡',tag:'"Wait — what if we tried it backwards?"',accent:'#FFD23F',
    quicks:['Why is the sky blue?','I tried a tiny experiment!','I had an idea!','Tell me a curious thing']},
  lila:{name:'LILA',icon:'📖',tag:'"Every word is a tiny door. Let\\'s open one."',accent:'#7B5CFF',
    quicks:['Once upon a time...','What\\'s a new word for brave?','I\\'m sad. Help?','Make up a story about a cloud']},
  pip:{name:'PIP',icon:'🧩',tag:'"Try it! Try it! Try it again, but weirder!"',accent:'#2ECC71',
    quicks:['Bim bam pop!','I can\\'t solve this puzzle','AGAIN!','Quick, what should I try next?']},
  nori:{name:'NORI',icon:'🌙',tag:'"Hush. Listen. Did you hear that?"',accent:'#1ABC9C',
    quicks:['What\\'s the weather inside you?','I feel lonely','Tell me a quiet truth','What is time?']},
  moki:{name:'MOKI',icon:'🎈',tag:'"I have a joke! ...It\\'s terrible. Wait — better one!"',accent:'#FF5CA7',
    quicks:['Bwonk!','I\\'m having a bad day','Knock knock!','Mistake → discovery!']}
};
let current='lumo';
const log=document.getElementById('log'),input=document.getElementById('input'),
  pg=document.getElementById('pg'),pgAvatar=document.getElementById('pgAvatar'),
  pgName=document.getElementById('pgName'),pgTag=document.getElementById('pgTag'),
  moodEl=document.getElementById('mood'),quicksEl=document.getElementById('quicks'),
  factsEl=document.getElementById('facts');

function applyPersona(){
  const p=PERSONAS[current];
  pg.dataset.theme=current;pg.style.setProperty('--accent',p.accent);
  pgAvatar.textContent=p.icon;pgName.textContent=p.name;pgTag.textContent=p.tag;
  moodEl.textContent='MOOD · '+(moodEl.textContent.split('·')[1]||'curious').trim().toUpperCase();
  quicksEl.innerHTML=p.quicks.map(q=>`<button class="quick" onclick="quickSend('${q.replace(/'/g,"\\\\'")}')">${q}</button>`).join('');
}
function quickSend(q){input.value=q;send();}
document.querySelectorAll('.starter').forEach(el=>{
  el.addEventListener('click',()=>{
    document.querySelectorAll('.starter').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    current=el.dataset.p;
    log.innerHTML='';
    factsEl.innerHTML='';
    applyPersona();
    append(`<b>★ ${PERSONAS[current].name}</b> appeared! Try saying hi.`, 'msg-bot');
  });
});
input.addEventListener('keydown',e=>{if(e.key==='Enter')send();});
async function send(){
  const m=input.value.trim();if(!m)return;
  append(m,'msg-user');input.value='';
  const btn=document.querySelector('.send');btn.disabled=true;btn.textContent='...';
  try{
    const r=await fetch('/chat',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({persona:current,message:m})});
    const j=await r.json();
    if(j.error){append('⚠ '+j.error,'msg-bot');}
    else{
      append(`<span class="face">${j.face||'( ^_^ )'}</span>${escapeHtml(j.reply)}<span class="ts">${j.elapsed.toFixed(1)}s</span>`,'msg-bot');
      moodEl.textContent='MOOD · '+j.mood.toUpperCase();
    }
  }catch(e){append('⚠ connection failed','msg-bot');}
  btn.disabled=false;btn.textContent='SEND ✦';
  log.scrollTop=log.scrollHeight;
}
function append(t,c){const d=document.createElement('div');d.className=c;d.innerHTML=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c])}
applyPersona();
append(`<b>★ LUMO</b> appeared! Try saying hi.`, 'msg-bot');
</script>
</body></html>
"""


def main():
    import argparse
    import os

    from .http_app import make_server
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8511)
    ap.add_argument("--db", default=None, help="Creator memory database (separate from legacy/family data)")
    ap.add_argument("--base-url", default=os.environ.get("LUMMINGS_OLLAMA_URL", "http://127.0.0.1:11434/v1"))
    args = ap.parse_args()
    server = make_server(args.port, args.db, args.base_url)
    print(f"Lummings creator app: http://127.0.0.1:{server.server_port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
