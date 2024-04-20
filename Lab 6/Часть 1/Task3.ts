/*Использя generic-параметры, типизируйте функции, чтобы не было ошибок компиляции. Возможно, потребуется дописать типы в теле функции*/

function zip<F,S>(first:F[],second: S[]):Array<[F,S]> {
    const minLength = Math.min(first.length, second.length);
    const result:Array<[F,S]>=[] ;
    for (let i = 0; i < minLength; i++) {
      result.push([first[i], second[i]])
    }
    return result
  }
  
  const q1: Array<[number, string]> = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
  const q2: Array<[boolean, boolean]> = zip([true], [false, false]);
  console.log(q1, q2);
  
  function groupBy<S,K,V>(source:S[], keySelector: (item: S, index: number) => K,  valueSelector: (item: S, index: number) => V): Map<K, V[]> {
    const result: Map<K, V[]> = new Map();
    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      const key = keySelector(item, i);
      const value = valueSelector(item, i);
      if (!result.has(key)) {
        result.set(key, []);
      }
      result.get(key)?.push(value);
    }
  
    return result;
  }
  
  const q3: Map<number, number[]> = groupBy([1, 2, 3, 4], x => x % 2, x => x + 1);
  const q4: Map<boolean, {x: string, i: number}[]>  = groupBy(["aaa", "bbb", "cc", "q", "lalaka"], (_, i) => i%2 === 0, (x, i) => ({i, x}))
  console.log(q1, q2);
  