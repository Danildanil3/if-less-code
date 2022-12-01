# Код без зайвих if-ів

Початкова версія коду `src/game.js` з усіма тестами `src/game.spec.js`.

## Розгортання

```
git clone https://github.com/alexanderko/if-less-code
cd if-less-code
npm i
```

## Запуск гри з консолі

Команда виведе номер переможця або нічию

```
node src/main.js stone paper
```

## Тести

Запуск тестів з кореневої директорії проекту.

```
./node_modules/.bin/jest --watchAll
```

Тести розширеної функціональності будуть пропущенні. Що б їх включити, приберіть `x` перед викликом `describe` відповідного боку.

```diff
- xdescribe('game for 2 players - extended', () => {
+ describe('game for 2 players - extended', () => {
```
