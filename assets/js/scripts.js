$(document).ready(function() {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    // scrollOverflow: true,
    // fixedElements: "#footer",
    // offsetSections: true,
    fitToSection: true,
    animateAnchor: true,
    recordHistory: true,
    slidesNavigation: true,
    slidesNavPosition: "bottom",
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ["about", "servicios", "instalaciones", "clientes", "contacto"],
    onLeave: function() {},
    afterLoad: function(index, nextIndex) {
      // var currentSlide = nextIndex.anchor;
    }
    // fadingEffect: "slides"
  });
  // fullpage_api.setAllowScrolling(true);
});
