Reveal.initialize({

  // Display controls in the bottom right corner
  controls: true,

  // Display a presentation progress bar
  progress: true,

  // Push each slide change to the browser history
  history: true,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Apply a 3D roll to links on hover
  rollingLinks: true,

  // Transition style
  transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
//  width: 960,
//  height: 700,

  // Factor of the display size that should remain empty around the content
//  margin: 0.1,

  // Bounds for smallest/largest possible scale to apply to content
//  minScale: 1.0,
//  maxScale: 1.0,

  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    { src: '../components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },

    // Interpret Markdown in <section> elements
    { src: '../components/reveal.js/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

    // Syntax highlight for <code> elements
    { src: '../components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

    // Zoom in and out with Alt+click
    { src: '../components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});