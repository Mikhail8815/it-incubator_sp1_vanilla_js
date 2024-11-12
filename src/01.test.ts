import {sum} from "./01";

test("kkk", () => {
   const a = 1;
   const b = 2;
   const c = 3;

   const result1 = sum(a, b);
   const result2 = sum(b, c);

   expect(result1).toBe(3);
   expect(result2).toBe(5);
})

export {}