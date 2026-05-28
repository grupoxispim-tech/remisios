# Site Premium Remisio's — Pizza & Churrascaria

Site moderno, responsivo e otimizado para conversão de pedidos e eventos.

## 🚀 Iniciar

Abra `premium.html` no navegador:
- Duplo-clique no arquivo, ou
- Arraste para a janela do navegador, ou
- Use um servidor estático:
```bash
npx http-server site -p 8000
```
Depois acesse: `http://localhost:8000/premium.html`

## 📱 Responsivo

- ✅ Desktop (1200px+)
- ✅ Tablet (768px-1200px)
- ✅ Mobile (até 768px)
- ✅ Navegação colapsável

## 🎨 Características

### 1. Hero Section
- Background com imagem profissional (hero-fundo.jpeg)
- CTA duplo: Ver Cardápio + WhatsApp
- Badges de horário, delivery, avaliação

### 2. Sobre Pizzaria
- Foto da equipe (equipe-ingredientes.jpeg)
- Destaques: forno a lenha, ingredientes, massa artesanal

### 3. Cardápio Digital
- Abas interativas: Tradicionais, Especiais, Doces, Bebidas
- Cada pizza com descrição, preço, botão direto WhatsApp
- Badges: ⭐ Popular, ✨ Gourmet, 🌶️ Picante, 🌱 Vegetariana

### 4. Rodízio de Pizza
- 3 cards com informações: Inclui, Condições, Observações
- Botão CTA para orçamento

### 5. Buffet de Churrasco
- Layout com carnes, acompanhamentos, sobremesa
- Condições claras (4h, 25-200 pessoas, até 9 anos grátis)
- Botão para orçamento

### 6. Galeria
- 8 fotos do produto/ambiente
- Hover zoom
- Lazy loading

### 7. Diferenciais
- 6 cards com ícones: Forno, Ingredientes, Equipe, Rapidez, Eventos, Qualidade

### 8. Contato
- Formulário de solicitação
- Info: WhatsApp, localização, horário
- FAB (flutuante) com link WhatsApp

## ⚙️ Personalização

### 1. Atualizar Número WhatsApp

Busque por `55SEUNUMEROAQUI` em `premium.html` e substitua pelo número real (formato: 5511999999999)

```bash
# Linux/Mac
sed -i 's/55SEUNUMEROAQUI/SEU_NUMERO_AQUI/g' site/premium.html

# Windows (PowerShell)
(Get-Content site/premium.html) -replace '55SEUNUMEROAQUI', 'SEU_NUMERO_AQUI' | Set-Content site/premium.html
```

### 2. Atualizar Endereço/Horário

Edite `premium.html`:
- Linha ~450: substitua "Rua da Pizzaria, 123" pelo endereço real
- Linha ~455: horário real

### 3. Adicionar Mais Fotos

Edite a seção Galeria (linha ~430):
```html
<img src="../equipe-prepara-pizzas.jpeg" alt="Pizza" loading="lazy">
```

### 4. Mudar Cores

Edit `premium-styles.css` (linhas 1-7):
```css
:root{
  --mustard: #C99B1F;
  --brand-red: #B21B1B;
  --cream: #F7E9D2;
  --dark: #2B2118;
  /* ajuste conforme desejado */
}
```

## 📊 SEO & Performance

- ✅ Meta tags: title, description, OG (Open Graph)
- ✅ Lazy loading em imagens
- ✅ Mobile-first responsive
- ✅ CSS inline otimizado
- ✅ JS sem dependências externas

## 🚀 Publicar Online

### GitHub Pages (Gratuito)

1. Crie um repositório no GitHub: `seu-usuario/remisios`
2. Coloque os arquivos na pasta `site/`
3. Ative GitHub Pages em Settings > Pages > Branch: main
4. Acesse: `https://seu-usuario.github.io/remisios/premium.html`

### Vercel (Recomendado - Ainda Mais Rápido)

1. Faça upload para GitHub
2. Conecte em vercel.com
3. Deploy automático

### Andere (FTP)

Upload via FTP direto para seu servidor

## 📲 Links Úteis

- Formulário envia alert (edite `premium.js` para integrar com email real)
- WhatsApp links: clique para abrir conversa pré-pronta
- FAB WhatsApp: sempre acessível (inferior direito)

## 📝 Estrutura de Arquivos

```
site/
├── premium.html          ← Página principal
├── premium-styles.css    ← Estilos
├── premium.js            ← Interatividade
└── README.md             ← Este arquivo
```

## 🔗 Próximos Passos

- [ ] Atualizar número WhatsApp (5551999999999)
- [ ] Publicar no GitHub Pages / Vercel
- [ ] Verificar em celular / tablet
- [ ] Integrar formulário com email (backend)
- [ ] Adicionar Google Analytics
- [ ] Otimizar imagens (WebP)
- [ ] Traduzir cardápio para EN / ES (se necessário)

## ❓ Suporte

- Edite direto no VS Code
- Use Live Preview para testar
- Teste em múltiplos dispositivos (DevTools F12)

**Bom negócio! 🍕**
