import './style.css';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { Style, Circle, Fill } from 'ol/style';
import TileLayer from 'ol/layer/Tile.js';
import Feature from 'ol/Feature';

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: [-13432000, 4204600],
    zoom: 8
  })
});


var slo = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: 'EPSG:4326',
    // radius = 4000 meters
    features: [new ol.Feature(new ol.geom.Circle([-13432000, 4204600], 4000))]
  }),
  style: [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'blue',
        width: 3
      }),
      fill: new ol.style.Fill({
        color: 'rgba(0, 100, 255, 1)'
      })
    })
  ]
});

var carp = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: 'EPSG:4326',
    // radius = 4000 meters
    features: [new ol.Feature(new ol.geom.Circle([-13304490, 4082033], 4000))]
  }),
  style: [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'green',
        width: 3
      }),
      fill: new ol.style.Fill({
        color: 'rgba(0, 255, 100, 1)'
      })
    })
  ]
});

var sac = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: 'EPSG:4326',
    // radius = 4000 meters
    features: [new ol.Feature(new ol.geom.Circle([-13461874, 4673979], 4000))]
  }),
  style: [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'red',
        width: 3
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255, 100, 0, 1)'
      })
    })
  ]
});

map.addLayer(slo);
map.addLayer(carp);
map.addLayer(sac);
