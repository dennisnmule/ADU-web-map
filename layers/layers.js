var wms_layers = [];


        var lyr_Googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'Google satellite hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KEN_adm1_1 = new ol.format.GeoJSON();
var features_KEN_adm1_1 = format_KEN_adm1_1.readFeatures(json_KEN_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEN_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEN_adm1_1.addFeatures(features_KEN_adm1_1);
var lyr_KEN_adm1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEN_adm1_1, 
                style: style_KEN_adm1_1,
                popuplayertitle: "KEN_adm1",
                interactive: true,
                title: '<img src="styles/legend/KEN_adm1_1.png" /> KEN_adm1'
            });
var format_CentralKenya_2 = new ol.format.GeoJSON();
var features_CentralKenya_2 = format_CentralKenya_2.readFeatures(json_CentralKenya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralKenya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralKenya_2.addFeatures(features_CentralKenya_2);
var lyr_CentralKenya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralKenya_2, 
                style: style_CentralKenya_2,
                popuplayertitle: "Central Kenya",
                interactive: true,
                title: '<img src="styles/legend/CentralKenya_2.png" /> Central Kenya'
            });
var format_Kiambucounty_3 = new ol.format.GeoJSON();
var features_Kiambucounty_3 = format_Kiambucounty_3.readFeatures(json_Kiambucounty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kiambucounty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kiambucounty_3.addFeatures(features_Kiambucounty_3);
var lyr_Kiambucounty_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kiambucounty_3, 
                style: style_Kiambucounty_3,
                popuplayertitle: "Kiambu county",
                interactive: true,
                title: '<img src="styles/legend/Kiambucounty_3.png" /> Kiambu county'
            });
var format_kikuyudivision_4 = new ol.format.GeoJSON();
var features_kikuyudivision_4 = format_kikuyudivision_4.readFeatures(json_kikuyudivision_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kikuyudivision_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kikuyudivision_4.addFeatures(features_kikuyudivision_4);
var lyr_kikuyudivision_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kikuyudivision_4, 
                style: style_kikuyudivision_4,
                popuplayertitle: "kikuyu division",
                interactive: true,
                title: '<img src="styles/legend/kikuyudivision_4.png" /> kikuyu division'
            });
var format_JooiCentre_5 = new ol.format.GeoJSON();
var features_JooiCentre_5 = format_JooiCentre_5.readFeatures(json_JooiCentre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JooiCentre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JooiCentre_5.addFeatures(features_JooiCentre_5);
var lyr_JooiCentre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JooiCentre_5, 
                style: style_JooiCentre_5,
                popuplayertitle: "Jooi Centre",
                interactive: true,
                title: '<img src="styles/legend/JooiCentre_5.png" /> Jooi Centre'
            });

lyr_Googlesatellitehybrid_0.setVisible(true);lyr_KEN_adm1_1.setVisible(true);lyr_CentralKenya_2.setVisible(true);lyr_Kiambucounty_3.setVisible(true);lyr_kikuyudivision_4.setVisible(true);lyr_JooiCentre_5.setVisible(true);
var layersList = [lyr_Googlesatellitehybrid_0,lyr_KEN_adm1_1,lyr_CentralKenya_2,lyr_Kiambucounty_3,lyr_kikuyudivision_4,lyr_JooiCentre_5];
lyr_KEN_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_CentralKenya_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Kiambucounty_3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_kikuyudivision_4.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', });
lyr_JooiCentre_5.set('fieldAliases', {'id': 'id', });
lyr_KEN_adm1_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_CentralKenya_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Kiambucounty_3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_kikuyudivision_4.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', });
lyr_JooiCentre_5.set('fieldImages', {'id': '', });
lyr_KEN_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_CentralKenya_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Kiambucounty_3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_kikuyudivision_4.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', });
lyr_JooiCentre_5.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_JooiCentre_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});