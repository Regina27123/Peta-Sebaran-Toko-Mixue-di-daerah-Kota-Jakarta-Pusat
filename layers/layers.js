var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TokooMixue_1 = new ol.format.GeoJSON();
var features_TokooMixue_1 = format_TokooMixue_1.readFeatures(json_TokooMixue_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TokooMixue_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TokooMixue_1.addFeatures(features_TokooMixue_1);
var lyr_TokooMixue_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TokooMixue_1, 
                style: style_TokooMixue_1,
                popuplayertitle: 'Tokoo Mixue',
                interactive: true,
                title: '<img src="styles/legend/TokooMixue_1.png" /> Tokoo Mixue'
            });

lyr_EsriDarkGray_0.setVisible(true);lyr_TokooMixue_1.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_TokooMixue_1];
lyr_TokooMixue_1.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_TokooMixue_1.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_TokooMixue_1.set('fieldLabels', {'id': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_TokooMixue_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});