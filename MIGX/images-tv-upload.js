{
  "formtabs":[
    {
      "MIGX_id":2,
      "caption":"\u0418\u043d\u0444\u043e",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":4,
          "field":"image",
          "caption":"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
          "description":"",
          "description_is_code":"0",
          "inputTV":"image",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"tv",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":1
        },
        {
          "MIGX_id":5,
          "field":"text",
          "caption":"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"richtext",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "pos":2
        },
        {
          "MIGX_id":6,
          "field":"active",
          "caption":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439==1||\u0421\u043a\u0440\u044b\u0442\u044b\u0439==0",
          "default":1,
          "pos":3
        }
      ],
      "pos":1
    }
  ],
  "contextmenus":"",
  "actionbuttons":"",
  "columnbuttons":"",
  "filters":"",
  "extended":{
    "migx_add":"",
    "disable_add_item":"",
    "add_items_directly":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "multiple_formtabs_label":"",
    "multiple_formtabs_field":"",
    "multiple_formtabs_optionstext":"",
    "multiple_formtabs_optionsvalue":"",
    "actionbuttonsperrow":4,
    "winbuttonslist":"",
    "extrahandlers":"this.handleColumnSwitch",
    "filtersperrow":4,
    "packageName":"",
    "classname":"",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "sortconfig":"",
    "gridpagesize":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "hooksnippets":"",
    "cmpmaincaption":"",
    "cmptabcaption":"",
    "cmptabdescription":"",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"id",
      "dataIndex":"MIGX_id",
      "show_in_grid":"no"
    },
    {
      "MIGX_id":4,
      "header":"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
      "dataIndex":"image",
      "width":70,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderImage",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":""
    },
    {
      "MIGX_id":2,
      "header":"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f",
      "dataIndex":"text",
      "width":230,
      "sortable":1,
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":"this.textEditor"
    },
    {
      "MIGX_id":2,
      "header":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439",
      "dataIndex":"active",
      "width":50,
      "sortable":1,
      "show_in_grid":1,
      "renderer":"this.renderSwitchStatusOptions",
      "clickaction":"switchOption",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":[
        {
          "MIGX_id":1,
          "name":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439",
          "value":1,
          "clickaction":"",
          "handler":"",
          "image":"assets\/img\/tick.png"
        },
        {
          "MIGX_id":2,
          "name":"\u0421\u043a\u0440\u044b\u0442\u044b\u0439",
          "value":"0",
          "clickaction":"",
          "handler":"",
          "image":"assets\/img\/empty-tick.png"
        }
      ]
    }
  ]
}