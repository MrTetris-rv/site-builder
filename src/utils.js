export function row(content, styles = '') {
  return `<div class="row marginRow" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
  if (typeof styles === 'string') {
    return styles;
  }
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
  let placeholder = '';
  switch (type) {
    case 'image':
      placeholder = 'img url';
      break;
    case 'video':
      placeholder = 'video url';
      break;
    case 'columns':
      placeholder = '1-st col;2-st col;';
      break;
    default:
      placeholder = 'value';
      break;
  }
  return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" name="value" placeholder="${placeholder}">
  </div>

  <div class="form-group">
    <input class="form-control form-control-sm" name="styles" placeholder="styles">
  </div>
  <button type="submit" class="btn btn-primary btn-sm">Add</button>
</form>
<hr>`;
}