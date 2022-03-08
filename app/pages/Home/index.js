import Page from "components/Page";
import FontFaceObserver from "fontfaceobserver";
import Prefix from "prefix";

import { delay } from "utils/math";

export default class extends Page {
  constructor() {
    super({
      classes: {
        active: "home--active",
      },
      element: ".home",
      elements: {
        section: ".home__section",
        wrapper: ".home__wrapper",
        items: ".home__item",
      },
      isScrollable: true,
    });

    this.transformPrefix = Prefix("transform");

    this.create();
  }

  /**
   * Create.
   */
  create() {
    super.create();

    const font = new FontFaceObserver("Neue Montreal Bold", 10000);

    font
      .load()
      .then((_) => {
        this.onResize();
      })
      .catch((_) => {
        this.onResize();
      });
  }

  /**
   * Animations.
   */
  async show() {
    this.element.classList.add(this.classes.active);

    return super.show();
  }

  async hide() {
    this.element.classList.remove(this.classes.active);

    await delay(400);

    this.scroll.position = 0;
    this.scroll.current = 0;
    this.scroll.target = 0;

    this.transform(this.elements.wrapper, this.scroll.current);

    return super.hide();
  }

  /**
   * Loop.
   */
  update() {
    super.update();
  }
}
