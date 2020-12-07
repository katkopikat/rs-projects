/* eslint-disable linebreak-style */
export default [
  {
    htmlCode: `
    <pre class="language-html"><code class="code code--deathstar">&lt;deathstar> Death Star &lt/deathstar&gt;</code></pre>
    <pre class="language-html"><code class="code code--mercury">&lt;planet> Mercury &lt/planet&gt;</code></pre>
    <pre class="language-html"><code class="code code--venus">&lt;planet> Venus &lt/planet&gt;</code></pre>
    <pre class="language-html"><code class="code code--earth">&lt;planet> Earth &lt/planet&gt;</code></pre>
    <pre class="language-html"><code class="code code--mars">&lt;planet> Mars &lt/planet&gt;</code></pre>
    <pre class="language-html"><code class="code code--jupiter">&lt;planet> Jupiter &lt/planet&gt;</code></pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="solar-system"&gt;
    &lt;div class="deathstar"> Death Star &lt;/div&gt;
    &lt;div class="star"> Sun &lt;/div&gt;
    &lt;div class="planet"> Mercury &lt;/div&gt;
    &lt;div class="planet"> Venus &lt;/div&gt;
    &lt;div class="planet"> Earth &lt;/div&gt;
&lt;/div&gt;</code>
</pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="solar-system"&gt;
   &lt;div class="deathstar"> Death Star &lt;/div&gt;
   &lt;div id="star"> Sun &lt;/div&gt;
   &lt;div class="planet"> Venus &lt;/div&gt;
   &lt;div class="planet"> Earth &lt;/div&gt;
   &lt;div class="planet"> Saturn &lt;/div&gt;
&lt;/div&gt;</code>
</pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="solar-system"&gt;
   &lt;div class="deathstar"> Death Star &lt/div&gt;
   &lt;div class="planet"> Mercury &lt/div&gt;
   &lt;div class="planet"> Mars &lt/div&gt;
   &lt;div class="planet"> Earth
       &lt;div> Moon &lt/div&gt;
   &lt/div&gt;
&lt;/div&gt;</code></pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">
  &lt;div class="deathstar"> Death Star &lt/div&gt;
  &lt;div class="solar-system"&gt;
    &lt;div class="planet"> Saturn/div&gt;
    &lt;div class="planet"> Uranus &lt/div&gt;
    &lt;div class="planet"> Neptun &lt/div&gt;
    &lt;div class="planet"> Pluto &lt/div&gt;
&lt;/div&gt;</code></pre>`,
  },
  {
    htmlCode:
`<pre class="language-html"><code class="code">
&lt;div class="deathstar"> Death Star &lt/div&gt;
  &lt;div class="solar-system"&gt;
    &lt;div class="planet"> Saturn &lt/div&gt;
    &lt;div class="planet"> Uranus &lt/div&gt;
    &lt;div class="planet"> Neptun &lt/div&gt;
    &lt;div class="planet or-not-planet" id="who-am-I"
        [desire="want-to-be-planet"]> Pluto &lt/div&gt;
&lt;/div&gt;</code></pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="solar-system"&gt;
  &lt;div class="deathstar"> Death Star &lt/div&gt;
  &lt;div class="planet"> Mercury &lt/div&gt;
  &lt;div class="planet"> Earth &lt/div&gt;
  &lt;div class="planet"> Mars &lt/div&gt;
&lt;/div&gt;</code></pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="solar-system"&gt;
  &lt;div class="deathstar"> Death Star &lt/div&gt;
  &lt;div class="planet"> Venus &lt/div&gt;
  &lt;div class="planet"> Mars &lt/div&gt;
  &lt;div class="planet"> Jupiter &lt/div&gt;
&lt;/div&gt;</code></pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="solar-system"&gt;
  &lt;div class="deathstar"> Death Star &lt/div&gt;
  &lt;div class="planet"> Mercury &lt/div&gt;
  &lt;div class="planet" [life="i-have"]> Earth &lt/div&gt;
  &lt;div class="planet"> Mars &lt/div&gt;
&lt;/div&gt;</code></pre>`,
  },
  {
    htmlCode: `<pre class="language-html"><code class="code">&lt;div class="deathstar"> Death Star &lt/div&gt;
  &lt;div class="solar-system"&gt;
    &lt;div id="star"> Sun &lt;/div&gt;
    &lt;div class="planet"> Mercury &lt/div&gt;
    &lt;div class="planet"> Venus &lt/div&gt;
    &lt;div class="planet"> Earth &lt/div&gt;
    &lt;div class="planet"> Mars &lt/div&gt;
    &lt;div class="planet"> Jupiter &lt/div&gt;
    &lt;div class="planet"> Saturn &lt/div&gt;
    &lt;div class="planet"> Uranus &lt/div&gt;
    &lt;div class="planet"> Neptune &lt/div&gt;
    &lt;div class="planet"> Pluto &lt/div&gt;
&lt;/div&gt;</code>
</pre>`,
  },
];
