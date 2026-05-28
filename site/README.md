# Site Remisio's Pizza

Arquivos do site estático gerados para a pizzaria Remisio.

Como abrir:

1. No Windows, abra o arquivo `site/index.html` em um navegador (duplo-clique ou arraste para a janela do navegador).
2. Para desenvolvimento rápido, você pode servir com um servidor estático (ex.: `Live Server` no VS Code ou `npx http-server site`).

Arquivos:
- `index.html` — página principal com seções: Início, Rodízio, Sabores, Contato.
- `styles.css` — estilos e paleta de cores.
- `script.js` — interações mínimas (menu móvel, envio de formulário simulado).

Novidades adicionadas:
- Botão de contato rápido via WhatsApp (atualize o número em `index.html`).
- Flyers vetoriais em `site/flyers/` prontos para export (PNG/PDF). See `site/flyers/README.md`.

Exportar flyers (Inkscape):
```bash
inkscape site/flyers/flyer-social-1080.svg --export-type=png --export-filename=site/flyers/flyer-social-1080.png
```

Observações:
- A imagem do logo `logo16.jpg` foi referenciada a partir da pasta pai; deixe o arquivo na raiz do projeto.
- Posso gerar versões PDF/PNG do flyer, ou integrar um formulário real com backend se desejar.
