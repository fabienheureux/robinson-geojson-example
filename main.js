import "./style.css";
import "leaflet";
import "proj4";
import "proj4leaflet";

import geojson from "./world.json";

const crs = new L.Proj.CRS(
	"ESRI:54030",
  "+proj=robin +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
	{
		resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
		origin: [0, 0],
	}
);

const map = L.map("map", { crs }).setView([39.74739, -105], 0);

const myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojson);
