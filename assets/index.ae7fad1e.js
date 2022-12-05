(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
<main class="container">
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to cool_quy@email.com <br />
        Enter the code bellow to confirm your email addres.
      </p>

      <section class="code-container">
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
      </section>

      <small class="info">
        This is design only. We didn't actually send you an email as we don't
        have your email, right?
      </small>
    </main>
`;const n=document.querySelectorAll(".code");n.forEach((l,t)=>{l.addEventListener("keydown",i=>{Number(i.key)>=0&&Number(i.key)<=9?(n[t].value="",setTimeout(()=>{var r;return(r=n[t+1])==null?void 0:r.focus()},1)):i.key==="Backspace"&&setTimeout(()=>{var r;return(r=n[t-1])==null?void 0:r.focus()},1)})});
