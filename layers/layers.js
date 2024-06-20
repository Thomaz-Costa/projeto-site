var wms_layers = [];

var format_propried_0 = new ol.format.GeoJSON();
var features_propried_0 = format_propried_0.readFeatures(json_propried_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_propried_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_propried_0.addFeatures(features_propried_0);
var lyr_propried_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_propried_0, 
                style: style_propried_0,
                popuplayertitle: "propried",
                interactive: true,
                title: '<img src="styles/legend/propried_0.png" /> propried'
            });
var lyr_Area_SelectAgric_SeteLagoas_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Area_SelectAgric_Sete Lagoas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Area_SelectAgric_SeteLagoas_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4949286.005590, -2225736.146614, -4912173.482712, -2189429.293935]
                            })
                        });

lyr_propried_0.setVisible(true);lyr_Area_SelectAgric_SeteLagoas_1.setVisible(true);
var layersList = [lyr_propried_0,lyr_Area_SelectAgric_SeteLagoas_1];
lyr_propried_0.set('fieldAliases', {'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'cod_imovel', 'mod_fiscal': 'mod_fiscal', 'num_area': 'num_area', 'ind_status': 'ind_status', 'ind_tipo': 'ind_tipo', 'des_condic': 'des_condic', 'municipio': 'municipio', 'cod_estado': 'cod_estado', });
lyr_propried_0.set('fieldImages', {'cod_tema': '', 'nom_tema': '', 'cod_imovel': '', 'mod_fiscal': '', 'num_area': '', 'ind_status': '', 'ind_tipo': '', 'des_condic': '', 'municipio': '', 'cod_estado': '', });
lyr_propried_0.set('fieldLabels', {'cod_tema': 'no label', 'nom_tema': 'no label', 'cod_imovel': 'inline label - visible with data', 'mod_fiscal': 'no label', 'num_area': 'inline label - visible with data', 'ind_status': 'no label', 'ind_tipo': 'no label', 'des_condic': 'no label', 'municipio': 'no label', 'cod_estado': 'no label', });
lyr_propried_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});