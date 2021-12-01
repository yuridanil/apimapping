function getProperty(object, prop) {
  return prop.split('.').reduce((acc, part) => acc && acc[part], object) || prop;
}

class Dataset {

  draw = (container) => {
    container.innerHTML = null;

    this.items.forEach (item => {

      let img = document.createElement("img");
      img.src = item.thumbnail;

      let a = document.createElement("a");
      a.href = item.src;
      a.target = "blank";
      a.title = item.desc;
      a.appendChild(img);

      let p = document.createElement("p");
      p.innerHTML = item.title;

      let div = document.createElement("div");
      div.appendChild(a);
      div.appendChild(p);

      container.appendChild(div);
    });
  }

  constructor(object, schema) {
    this.name = "";
    this.desc = "";
    schema.ds_name.forEach(e => { this.name += getProperty(object, e); });
    schema.ds_desc.forEach(e => { this.desc += getProperty(object, e); });
    this.items = getProperty(object, schema.items).map(
      i => new Item(i, schema)
    );
  }
}

class Item {
  constructor(object, schema) {
    this.id = getProperty(object, schema.item_id);
    this.title = getProperty(object, schema.item_title);
    this.desc = getProperty(object, schema.item_desc);
    this.thumbnail = getProperty(object, schema.item_thumbnail);
    this.src = getProperty(object, schema.item_src);
  }
}

export {Dataset}