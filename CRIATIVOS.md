# Sistema de Tags de Criativos

## Como funciona

O sistema agora suporta URLs com tags de criativos para rastreamento de campanhas do Facebook Ads.

## URLs disponíveis

- `https://seudominio.com/` - Acesso direto (tag: "direct")
- `https://seudominio.com/cr1` - Criativo 1
- `https://seudominio.com/cr2` - Criativo 2
- `https://seudominio.com/cr3` - Criativo 3
- `https://seudominio.com/cr4` - Criativo 4
- `https://seudominio.com/cr5` - Criativo 5
- `https://seudominio.com/cr6` - Criativo 6
- `https://seudominio.com/cr7` - Criativo 7
- `https://seudominio.com/cr8` - Criativo 8
- `https://seudominio.com/cr9` - Criativo 9
- `https://seudominio.com/cr10` - Criativo 10

## O que acontece

1. Quando um usuário acessa qualquer URL com tag (ex: `/cr1`), o sistema captura automaticamente a tag
2. Quando o formulário é enviado, a tag é incluída nos dados enviados ao webhook
3. O webhook recebe todos os dados do formulário + o campo `creative` com a tag

## Exemplo de dados enviados ao webhook

```json
{
  "name": "João Silva",
  "phone": "+55 11 99999-9999",
  "email": "joao@email.com",
  "niche": "tipster",
  "revenue": "Até 100k",
  "creative": "cr1"
}
```

## Para usar no Facebook Ads

Configure cada anúncio com uma URL diferente:
- Anúncio 1: `https://seudominio.com/cr1`
- Anúncio 2: `https://seudominio.com/cr2`
- E assim por diante...

Dessa forma você consegue rastrear qual criativo gerou cada lead!
