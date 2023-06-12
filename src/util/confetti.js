import confetti from "canvas-confetti";

export const initializeConfetti = () => {
  /*
  *show confetti for 4 seconds
  */
  const duration = 4 * 1000;
  const end = Date.now() + duration;
  const colors = ['#007bb5', '#bb0000'];
  (function frame() {

    /*
    * show confetti from the left edge
    */
    confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });

    /*
    * show confetti from the right edge
    */
    confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    /*
    * run confetti until we run out of time
    */
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};