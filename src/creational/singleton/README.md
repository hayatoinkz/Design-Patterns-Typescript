# Singleton - :classical_building: Creational

## Propósito

>O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

Alexander Shvets. “Mergulho nos Padrões de Projeto.”

## Aplicabilidade

O Singleton deve ser usado quando:

- Uma classe necessita de uma instância disponível em todo o seu programa;
- Precisar de um controle mais estrito sobre as variáveis globais para manter partes importantes do programa;

## Prós e Contras

As consequências do uso do Singleton:

**Prós**

- A classe só terá uma instância;
- Acesso controlado por encapsulamento à instância única;
- Usa *lazy instantiation*, ou seja, o Singleton é inicializado somente quando for pedido pela primeira vez;

**Contras**

- É mais difícil de testar;
- Viola o princípio da responsabilidade única;
- Normalmente associado a um design ruim;
- Requer tratamento especial em casos de multithreaded;
- Erich Gamma(autor) mencionou que este seria o único padrão que ele removeria, se fosse reescrever o livro;

## Créditos

- [Refactoring.Guru](https://refactoring.guru/pt-br/design-patterns/singleton)
