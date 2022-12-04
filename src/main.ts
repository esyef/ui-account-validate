import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`;

const codes: NodeListOf<Element> = document.querySelectorAll('.code')!;

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    if (
      Number((e as KeyboardEvent).key) >= 0 &&
      Number((e as KeyboardEvent).key) <= 9
    ) {
      (codes[index] as HTMLInputElement).value = '';

      setTimeout(() => (codes[index + 1] as HTMLElement)?.focus(), 1);
    } else if ((e as KeyboardEvent).key === 'Backspace') {
      setTimeout(() => (codes[index - 1] as HTMLElement)?.focus(), 1);
    }
  });
});
