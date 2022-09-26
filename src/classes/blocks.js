import {
  col,
  css,
  row
} from '../utils';
class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error('Method toHTML should be realised');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const {
      tag = 'h1', styles
    } = this.options;

    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const {
      imageStyles,
      alt,
      styles
    } = this.options;
    return row(
      `<img src='${this.value}' alt="${alt}" style="${css(imageStyles)}"/>`,
      css(styles)
    );
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    if (typeof this.value === 'string') {
      this.value = this.value.split(';');
    }
    const html = this.value.map(col).join('');

    return row(html, css(this.options.styles));
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}

export class VideoBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const {
      styles,
      videoStyles
    } = this.options;
    return row(`<iframe src="${this.value}" style=" width: 800px;
    height: 400px; ${css(videoStyles)}" 
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`, css(styles));
  }
}