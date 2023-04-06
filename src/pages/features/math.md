---
title: Math Formulas
layout: ~/layouts/MainLayout.astro
---

## KaTeX

The template is integrated with $\KaTeX$. You can write math formulas with $\KaTeX$. 

$$
\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

The source code is

```tex
$$
\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```

## AsciiMath

You can write formulas with the syntax of asciimath.

```am
int_0^+oo "e"^-x dx = 1
```

The source code is

~~~
```am
int_0^+oo "e"^-x dx = 1
```
~~~

Inlne formula `$[a, b; c, d]$`. The source code is

```
Inlne formula `$[a, b; c, d]$`.
```

For more information, please refer to https://asciimath.widcard.win.
