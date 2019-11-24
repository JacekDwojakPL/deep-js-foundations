# deep-js-foundations

For FrontendMasters course

### Typy podstawowe

Specyfikacja języka JavaScript wyszególnia poniższe typy podstawowe:

1. `undefined`
2. `string`
3. `number`
4. `boolean`
5. `object`
6. `symbol`

Typy określą operacje, które można wykonywać na wartościach przechowywanych w zmiennych, a także sposób w jaki komputer przechowuje w pamięci zmienne różnych typów. Ciąg znaków składający się na liczbę `"42"` jest różny od faktycznej liczby `42`. W JavaScript to nie zmienna ma określony typ, tylko wartość przechowywana w zmiennej.

Do sprawdzana typu wartości w JavaScript, służy operator `typeof`. Operator `typeof` zwraca nazwę typu wartości jako `string`.

```javascript
var v; // undefined
v = '1'; // string
v = 2; // number
v = true; // boolean
v = {}; // object
v = Symbol(); // symbol
```

`undefined` jest pewnego rodzaju typem domyślnym. Nie oznacza to, że w zmiennej nie ma wartości, tylko jest przechowywana.

W JavaScript jest również specjalna wartość służąca do niepoprawnej liczny - `NaN`. Pojawia się ona gdy chcemy zamienić np ciąg znaków na liczbę:

```javascript
var age = Number('42'); // number
var error = Number('n/a'); // NaN

error === error; // false
```

`NaN` jest to jedyna wartość w JavaScript, która przy porownaniu do samej siebie zwraca `false`. Dlatego należy uważać przy sprawdzaniu równości między wartościami, również przy użyciu operatora `===`, który w przypadku porównywania dwóch wartośći `NaN` zwróci `false` mimo, że obie te wartości są takie same.

### Styl pisania kodu

Aby uniknąć niespodziewanych rezultatów powstających przy konwersji z jednego typu na drugi, np `number` na `string`, należy pisać kod w sposób, który klarownie oddaje intencje dotyczące typów. Jednym z niespodziewanych wyników może powstać jako efekt zamiany typu `boolean` na `number` w operacjach porównywania. Przykładowo:

```javascript
1 < 2 == true;
2 < 3 == true;
1 < 2 < 3 == true;
true < 3 == true;
1 < 3 == true;

// ***********
1 > 2 == true;
3 > 2 == true;
3 > 2 > 1 == false; // uwaga!
true > 1 == false; // zamiana boolean na number
1 > 1 == false;
```

Przyjęcie klarownego systemu typów pozwala zminimalizować niespodzianki, tak jak zilustrowano powyżej. W praktyce oznacza to tworzenie funkcji, która przyjmuje wyłącznie parametry określonego typu, a nie dowolnego rodzaju.
