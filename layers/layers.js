var wms_layers = [];

var lyr_Area_SelectAgric_Abaet_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Area_SelectAgric_Abaeté",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Area_SelectAgric_Abaet_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5082941.992912, -2192529.788545, -5018300.085295, -2140240.102616]
                            })
                        });
var format_propried_Abaet_1 = new ol.format.GeoJSON();
var features_propried_Abaet_1 = format_propried_Abaet_1.readFeatures(json_propried_Abaet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_propried_Abaet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_propried_Abaet_1.addFeatures(features_propried_Abaet_1);
var lyr_propried_Abaet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_propried_Abaet_1, 
                style: style_propried_Abaet_1,
                popuplayertitle: "propried_Abaeté",
                interactive: true,
                title: '<img src="styles/legend/propried_Abaet_1.png" /> propried_Abaeté'
            });

lyr_Area_SelectAgric_Abaet_0.setVisible(true);lyr_propried_Abaet_1.setVisible(true);
var layersList = [lyr_Area_SelectAgric_Abaet_0,lyr_propried_Abaet_1];
lyr_propried_Abaet_1.set('fieldAliases', {'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'cod_imovel', 'mod_fiscal': 'mod_fiscal', 'num_area': 'num_area', 'ind_status': 'ind_status', 'ind_tipo': 'ind_tipo', 'des_condic': 'des_condic', 'municipio': 'municipio', 'cod_estado': 'cod_estado', });
lyr_propried_Abaet_1.set('fieldImages', {'cod_tema': 'TextEdit', 'nom_tema': 'TextEdit', 'cod_imovel': 'TextEdit', 'mod_fiscal': 'TextEdit', 'num_area': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo': 'TextEdit', 'des_condic': 'TextEdit', 'municipio': 'TextEdit', 'cod_estado': 'TextEdit', });
lyr_propried_Abaet_1.set('fieldLabels', {'cod_tema': 'no label', 'nom_tema': 'no label', 'cod_imovel': 'inline label - visible with data', 'mod_fiscal': 'no label', 'num_area': 'inline label - visible with data', 'ind_status': 'no label', 'ind_tipo': 'no label', 'des_condic': 'no label', 'municipio': 'no label', 'cod_estado': 'no label', });
lyr_propried_Abaet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});