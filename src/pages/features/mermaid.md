---
title: Mermaid-js Support
layout: ~/layouts/MainLayout.astro
---

## Mermaid Diagrams

The diagrams are rendered in client side with html inline script. As a result, sometimes it is really slow.

```mermaid
graph LR
    A --> B
    A --> C
    B --> D
    D --> E
    C --> E
```

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

## Dark mode

Now it supports light and dark color mode! You can switch the color mode at the bottom of the TOC.
I tried to render each diagram twice, and then set the opacity of them based on the color mode.
