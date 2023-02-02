export const mouseAnimation = () => {
  const card = document.querySelector(".card") as HTMLElement;
  let bounds: DOMRect;

  if (!card) return;

  const rotateToMouse = (e: MouseEvent) => {
    if (!card) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
                scale3d(1.01, 1.01, 1.01)
                rotate3d(
                  ${center.y / 100},
                  ${-center.x / 100},
                  0,
                  ${Math.log(distance) * 2}deg
                )
              `;

    const glow = card.querySelector(".glow") as HTMLElement;
    glow.style.backgroundImage = `
                radial-gradient(
                  circle at
                  ${center.x * 2 + bounds.width / 2}px
                  ${center.y * 2 + bounds.height / 2}px,
                  #0141ff55,
                  #0000000f
                )
              `;
  };

  card.addEventListener("mouseenter", () => {
    bounds = card.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  });

  card.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", rotateToMouse);
    card.style.transform = "";
    card.style.background = "";
  });
};
