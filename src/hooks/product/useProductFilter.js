import { useEffect, useState, useCallback } from "react";

const productProps = [
  //  "id",
  "name",
  "slug",
  "permalink",
  "type",
  "featured",
  "catalog_visibility",
  "description",
  "short_description",
  "sku",
  "price",
  "regular_price",
  "sale_price",
  "on_sale",
  "purchasable",
  "external_url",
  "button_text",
  "tax_status",
  "tax_class",
  "stock_quantity",
  "stock_status",
  "backorders",
  "backorders_allowed",
  "backordered",
  "sold_individually",
  "weight",
  "shipping_required",
  "shipping_taxable",
  "shipping_class",
  "shipping_class_id",
  "reviews_allowed",
  "average_rating",
  "rating_count",
  "related_ids",
  "upsell_ids",
  "cross_sell_ids",
  "parent_id",
  "purchase_note",
  "tags",
  "attributes",
  "default_attributes",
  "variations",
  "grouped_products",
];

const productObjects = {
  categories: ["name", "slug"],
  images: ["src", "name", "alt"],
};

const useProductFilter = productData => {
  const [data, setData] = useState({});

  const allowedProps = [...productProps, ...Object.keys(productObjects)];
  const filterData = useCallback(async data => {
    let properties = {};

    for (const [prop, value] of Object.entries(data)) {
      if (allowedProps.indexOf(prop) < 0) continue;
      if (Object.keys(productObjects).indexOf(prop) >= 0) {
        const _object = [];
        for (const [key, _obj] of Object.entries(value)) {
          const _properties = {};
          for (const [_prop, _value] of Object.entries(_obj)) {
            if (productObjects[prop].indexOf(_prop) < 0) continue;
            _properties[_prop] = _value;
          }
          _object.push(_properties);
        }
        properties[prop] = _object;
        continue;
      }
      properties[prop] = value;
    }
    return properties;
  });

  return { productFilter: filterData };
};

export default useProductFilter;
