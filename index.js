function t(n) {
    n = Number(n);
    if (n < 2) return 0;
    if (n == 2 || n == 3) return 1;
    if (n % 2 == 0 || n % 3 == 0) return 0;
    for (var m = 5; m * m <= n; m += 6) {
      if (n % m == 0 || n % (m + 2) == 0) {
        return 0;
      }
    }
    return 1;
  }
  
  function g(s) {
    for (;;) {
      s = s.slice(1);
      if (s == '') return 1;
      if (!t(s)) return 0;
    }
  }
  
  function f(s) {
    if (t(s)) {
      if (s.length >= 2 && g(s)) {
        ans = ans + Number(s);
      }
      f(s + '1');
      f(s + '3');
      f(s + '7');
      f(s + '9');
    }
  }
  
  ans = 0;
  f('2');
  f('3');
  f('5');
  f('7');
  