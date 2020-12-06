export const levels = [
    {
      level: 'Level 1 of 10',
      doThis : "Destroy all planets",
      selector : "planet",
      selectorName : "Type Selector",
      helpTitle : "Select elements by their type",
      syntax : "A",
      describe : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
      examples : [
        '<strong>div</strong> selects all <tag>div</tag> elements.',
        '<strong>p</strong> selects all <tag>p</tag> elements.',
      ],
     hoverHint: `
      <planet/>
      <planet/>
      `,
  },

    {
      level: 'Level 2 of 10',
      doThis : "Destroy all planets, but not star",
      selector : "planet",
      selectorName : "Type Selector",
      helpTitle : "Select elements by their type",
      syntax : "A",
      describe : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
      examples : [
        '<strong>div</strong> selects all <tag>div</tag> elements.',
        '<strong>p</strong> selects all <tag>p</tag> elements.',
      ],
     hoverHint: `
      <planet/>
      <planet/>
      `,
      htmlCode : `<pre class="language-html"><code>&lt;section class="solar-system"&gt;
      &lt;div class="death-star"> Death Star &lt/div&gt;
      &lt;div class="star"> Sun &lt/div&gt;
      &lt;div class="planet"> Venus &lt/div&gt;
      &lt;div class="planet"> Earth &lt/div&gt;
      &lt;div class="planet"> Mars &lt/div&gt;
    &lt;/section&gt;</code>
    </pre>`
    },
]