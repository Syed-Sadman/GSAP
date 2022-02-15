gsap.from(".left", {
  delay: 0.6,
  width: 0,
  ease: "expo.inOut",
});

gsap.from(".right", {
  delay: 0.6,
  width: 0,
  ease: "expo.inOut",
});

gsap.from(".logo", {
  delay: 1,
  opacity: 0,
  x: -20,
  ease: "expo.inOut",
});

gsap.from(".menu", {
  delay: 1,
  opacity: 0,
  y: -20,
  ease: "expo.inOut",
});

gsap.from(".product-img", {
  delay: 2,
  opacity: 0,
  x: 50,
  ease: "expo.inOut",
});
