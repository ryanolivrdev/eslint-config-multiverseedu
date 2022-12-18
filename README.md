# Multiverse ESLint config

## O que está incluído??

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Instale as dependências

```
npm i -D eslint @ryanolivrdev/multiverse-eslint-config || yarn add -D eslint @ryanolivrdev/multiverse-eslint-config
```

2. Crie um arquivo `.eslintrc.json` estendendo a configuração:

- Se você estiver usando React

```
{
  "extends": " @ryanolivrdev/multiverse-eslint-config/react"
}
```

- Se você estiver usando node

```
{
  "extends": " @ryanolivrdev/multiverse-eslint-config/node"
}
```

> Você também pode usar um `.eslintrc.js` em vez de JSON, se preferir.

## Licença

Este projeto está sob a licença do MIT.
