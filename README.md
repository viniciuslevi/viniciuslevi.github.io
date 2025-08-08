# Site pessoal — pronto para GitHub Pages

Arquivos incluídos:
- `index.html`
- `style.css`
- `script.js`
- `favicon.svg`

## Instruções rápidas para publicar

### Opção 1 — Repositório com nome `viniciuslevi.github.io` (recomendado)
1. Crie um repositório no GitHub chamado `viniciuslevi.github.io`.
2. Faça clone local ou envie os arquivos deste pacote para o repositório.
3. Commit e push para a branch `main` (ou `master`) — o GitHub Pages servirá automaticamente em `https://viniciuslevi.github.io`.

Exemplo de comandos:
```bash
git init
git add .
git commit -m "Site pessoal — landing page"
git branch -M main
git remote add origin https://github.com/viniciuslevi/viniciuslevi.github.io.git
git push -u origin main
```

### Opção 2 — Repositório qualquer + branch `gh-pages`
1. Crie um repositório (por exemplo `portfolio-site`).
2. Coloque os arquivos no repositório.
3. No GitHub vá em *Settings > Pages* e selecione a branch `gh-pages` como fonte, ou use uma ação para publicar na branch `gh-pages`.

### Personalizações importantes
- Troque o e‑mail `vinicius.levi@example.com` pelo seu e‑mail real no `index.html` e em `script.js`.
- Substitua os links de projetos nas seções de *Projetos* pelos repositórios corretos se necessário.
- Se quiser um domínio próprio, adicione um arquivo `CNAME` com o domínio na raiz.

Se quiser que eu já faça o commit e abra um repositório com esse conteúdo no seu GitHub, eu posso preparar os passos (você só precisará me fornecer permissões ou executar os comandos locais).