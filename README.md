# Controle de Frota — Troca de Caminhão

Protótipo de **layout** (estático, sem back-end) para avaliação visual.

## O que é

Sistema para os motoristas registrarem a troca de caminhão e fazerem o checklist
do kit básico (macaco, chave de roda, extintor, cabo de força, triângulo, estepe,
para-brisa, retrovisores, faixas refletivas laterais e do para-choque), com foto
das placas do cavalo mecânico e das carretas engatadas. O administrador acompanha
tudo por uma página web restrita e é avisado a cada troca.

## Telas

| Arquivo | Descrição |
|---|---|
| `index.html` | Página inicial — mostra o app do motorista numa moldura de celular e o painel numa moldura de notebook |
| `motorista.html` | App do motorista (celular) — fluxo completo da troca |
| `admin.html` | Painel do administrador (web) — trocas recentes, detalhe, notificações |

## Ver online

Publicado no GitHub Pages: **https://gianlucals50-ai.github.io/pessoal-gestao-frota-equipamentos/**

Para testar no celular, abra esse endereço no navegador do telefone.

## Status

- [x] Protótipo de layout (esta entrega)
- [ ] Back-end em Python (Flask) — login real, banco de dados, upload de fotos
- [ ] Notificação por e-mail / Telegram ao administrador
- [ ] App instalável (PWA)

## Rodar localmente

É só abrir o `index.html` no navegador. Ou servir a pasta:

```bash
python -m http.server 8000
# abrir http://localhost:8000
```
