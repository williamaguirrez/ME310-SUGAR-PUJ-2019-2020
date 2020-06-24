TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonCardboardView": [
   {
    "verticalAlign": "middle",
    "maxHeight": 600,
    "paddingLeft": 0,
    "toolTipFontSize": 12,
    "transparencyActive": true,
    "paddingRight": 0,
    "backgroundOpacity": 0,
    "toolTipFontStyle": "normal",
    "mode": "push",
    "toolTipBorderSize": 1,
    "width": 58,
    "toolTipBackgroundColor": "#000000",
    "height": 70,
    "toolTipBorderColor": "#000000",
    "iconURL": "skin/IconButton_E37CA9B7_E983_F12E_41E9_5FA0638D4D8D.png",
    "toolTip": "ACTIVAR MODO VR (PARA MOVILES)",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingRight": 6,
    "minHeight": 47,
    "borderSize": 0,
    "horizontalAlign": "center",
    "toolTipTextShadowColor": "#000000",
    "toolTipTextShadowOpacity": 0,
    "data": {
     "name": "b_vr"
    },
    "toolTipFontFamily": "Arial",
    "paddingTop": 0,
    "toolTipPaddingTop": 4,
    "cursor": "hand",
    "toolTipShadowBlurRadius": 3,
    "toolTipShadowSpread": 0,
    "id": "IconButton_E37CA9B7_E983_F12E_41E9_5FA0638D4D8D",
    "borderRadius": 0,
    "toolTipShadowColor": "#000000",
    "toolTipShadowOpacity": 1,
    "toolTipDisplayTime": 600,
    "maxWidth": 600,
    "toolTipTextShadowBlurRadius": 3,
    "class": "IconButton",
    "minWidth": 50,
    "toolTipShadowHorizontalLength": 0,
    "toolTipBorderRadius": 7,
    "toolTipOpacity": 1,
    "toolTipFontColor": "#CCCCCC",
    "toolTipPaddingBottom": 4,
    "toolTipFontWeight": "normal",
    "paddingBottom": 0,
    "toolTipPaddingLeft": 6,
    "shadow": false
   },
   "this.IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB"
  ],
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true
 },
 {
  "thumbnailUrl": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_t.jpg",
  "label": "INICIO",
  "id": "panorama_FF968E01_E726_9AE0_41AA_EB24178238D8",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1064,
       "width": 2127,
       "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_t.jpg",
    "overlays": [
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF96DE01_E726_9AE0_41C6_D74BC1CC1725",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.02,
        "yaw": 1.2,
        "image": {
         "levels": [
          {
           "height": 54,
           "width": 50,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.16
       }
      ],
      "items": [
       {
        "yaw": 1.2,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.02,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 101,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.16
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF96CE01_E726_9AE0_41EB_5F9C47C635FD",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "INSCR\u00cdBETE"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.07,
        "yaw": 1.64,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 34,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.44
       }
      ],
      "items": [
       {
        "yaw": 1.64,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 26.07,
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 155,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.44
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF962E01_E726_9AE0_41E4_7F13F61EAFDA",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "   DESCUBRE QU\u00c9 \u000dQUIERES ESTUDIAR"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setMediaBehaviour(this.playList_FACEF741_EDF5_6893_41D3_417D2B4D7F9A, 0, this.panorama_FF968E01_E726_9AE0_41AA_EB24178238D8); this.MainViewerPanoramaPlayer.play(); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 38.23,
        "yaw": 45.62,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 32,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.5
       }
      ],
      "items": [
       {
        "yaw": 45.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 38.23,
        "image": {
         "levels": [
          {
           "height": 112,
           "width": 227,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.5
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF961E01_E726_9AE0_41A6_312E32344A8E",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "CONOCE NUESTRO     \u000d       CAMPUS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 37.95,
        "yaw": 92.51,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 33,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.3
       }
      ],
      "items": [
       {
        "yaw": 92.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 37.95,
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 227,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.3
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF967E01_E726_9AE0_41E0_244E277957DA",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.36,
        "yaw": 44.84,
        "image": {
         "levels": [
          {
           "height": 62,
           "width": 59,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 23.99
       }
      ],
      "items": [
       {
        "yaw": 44.84,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.36,
        "image": {
         "levels": [
          {
           "height": 125,
           "width": 118,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 23.99
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF966E01_E726_9AE0_41AD_DA0D71E66D36",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19,
        "yaw": 91.91,
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 60,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 22.01
       }
      ],
      "items": [
       {
        "yaw": 91.91,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19,
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 121,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 22.01
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F7630E35_E76A_EF7D_41B8_2DAC2AF9362F",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Experiencia Vocacional"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 62.62,
        "yaw": 45,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 74,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 43.12
       }
      ],
      "items": [
       {
        "yaw": 45,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 62.62,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 506,
           "url": "media/panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 43.12
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_E6BB7FB8_E92C_E7E3_41B5_B206B2A90E27",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_E6BB7FB8_E92C_E7E3_41B5_B206B2A90E27",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.36,
   "pitch": 16.43
  }
 },
 {
  "thumbnailUrl": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_t.jpg",
  "label": "INSCR\u00cdBETE",
  "id": "panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A",
  "audios": [
   {
    "data": {
     "label": "Estudiar una carrera"
    },
    "id": "audio_FE490A31_E821_82C7_41DB_F4BE4041A566",
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_FE490A31_E821_82C7_41DB_F4BE4041A566.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_FE490A31_E821_82C7_41DB_F4BE4041A566.mp3"
    }
   }
  ],
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_t.jpg",
    "overlays": [
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CEBD90EE_DCF6_48B3_41EB_141136F3DA94",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "FORMULARIO DE INSCRIPCIONES"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 95.07,
        "yaw": -115.26,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 127,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.85
       }
      ],
      "items": [
       {
        "yaw": -115.26,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 95.07,
        "image": {
         "levels": [
          {
           "height": 258,
           "width": 2048,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.85
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CF5F5514_DCD2_4997_41C2_88E28FB5F4C2",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "FORMULARIO PARA\u000d      PREGRADOS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=201",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.63,
        "yaw": -164.27,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 33,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.31
       }
      ],
      "items": [
       {
        "yaw": -164.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 26.63,
        "image": {
         "levels": [
          {
           "height": 234,
           "width": 495,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.31
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CF2D2446_DCDE_4FF3_41E2_9E458CBA07B0",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "FORMULARIO PARA\u000d     POSGRADOS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=221",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 27.78,
        "yaw": -99.99,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 37,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.06
       }
      ],
      "items": [
       {
        "yaw": -99.99,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 27.78,
        "image": {
         "levels": [
          {
           "height": 221,
           "width": 512,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.06
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CFC06A21_DCD6_3BB0_41E2_7B8DA2477E47",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "    FORMULARIO PARA\u000dASIGNATURAS DE LIBRE\u000d    ESCOGENCIA (ALE)"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=242",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 33.29,
        "yaw": -37.93,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.93
       }
      ],
      "items": [
       {
        "yaw": -37.93,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 33.29,
        "image": {
         "levels": [
          {
           "height": 388,
           "width": 631,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.93
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CF172482_DCD2_CF73_41D7_1DBF4AB0B237",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "  FORMULARIOS PARA\u000dPOSGRADOS VIRTUALES"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=241",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 34.79,
        "yaw": 30.6,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 41,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.97
       }
      ],
      "items": [
       {
        "yaw": 30.6,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 34.79,
        "image": {
         "levels": [
          {
           "height": 248,
           "width": 645,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.97
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C51B1297_DD33_4E90_41E5_358CAE4A151E",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "FORMULARIO PARA\u000a      PREGRADOS",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 33.04,
        "yaw": -162.18,
        "image": {
         "levels": [
          {
           "height": 187,
           "width": 200,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.62
       }
      ],
      "items": [
       {
        "yaw": -162.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 33.04,
        "image": {
         "levels": [
          {
           "height": 554,
           "width": 590,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.62
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C54CC7E1_DD37_56B3_41E9_AF2FBF18657B",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "    FORMULARIO PARA\u000aASIGNATURAS DE LIBRE\u000a    ESCOGENCIA (ALE)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 38.37,
        "yaw": -38.09,
        "image": {
         "levels": [
          {
           "height": 194,
           "width": 200,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.68
       }
      ],
      "items": [
       {
        "yaw": -38.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 38.37,
        "image": {
         "levels": [
          {
           "height": 668,
           "width": 686,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.68
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C7408528_DD35_4BB1_41DA_81ACA123CA07",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "  FORMULARIOS PARA\u000aPOSGRADOS VIRTUALES",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 35.3,
        "yaw": 28.84,
        "image": {
         "levels": [
          {
           "height": 161,
           "width": 200,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.89
       }
      ],
      "items": [
       {
        "yaw": 28.84,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 35.3,
        "image": {
         "levels": [
          {
           "height": 511,
           "width": 630,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.89
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C2C8ED2A_DDDD_3BB0_41C0_8F3FF6F5A72B",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "FORMULARIO PARA\u000a     POSGRADOS",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.76,
        "yaw": -100.47,
        "image": {
         "levels": [
          {
           "height": 156,
           "width": 200,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.19
       }
      ],
      "items": [
       {
        "yaw": -100.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 26.76,
        "image": {
         "levels": [
          {
           "height": 375,
           "width": 478,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.19
       }
      ]
     },
     {
      "id": "panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F718FA9A_E7A9_7734_41E7_944C93832132",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INICIO"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.45,
        "yaw": -132.65,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 29.81
       }
      ],
      "items": [
       {
        "yaw": -132.65,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.45,
        "image": {
         "levels": [
          {
           "height": 112,
           "width": 112,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 29.81
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F7774C36_E7DA_F37C_41E1_E3DA060BAC38",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": " DESCUBRE QU\u00c9 \u000aQUIERES ESTUDIAR"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.44,
        "yaw": -123.29,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_11_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 30.04
       }
      ],
      "items": [
       {
        "yaw": -123.29,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.44,
        "image": {
         "levels": [
          {
           "height": 112,
           "width": 112,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 30.04
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F6421C21_E7DE_F314_41E4_98E68881481F",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "CONOCE NUESTRO     \u000a       CAMPUS"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.5,
        "yaw": -114.17,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_12_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 29.67
       }
      ],
      "items": [
       {
        "yaw": -114.17,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.5,
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 113,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_12_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 29.67
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_F58B1EAD_E7F9_2F6C_41E3_E48B79B6A1A4",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, true, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C2A72516_E9E3_86CA_41E2_2A69F1FE0B7F, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.24,
        "yaw": -164.2,
        "image": {
         "levels": [
          {
           "height": 102,
           "width": 102,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_13_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -26.9
       }
      ],
      "items": [
       {
        "yaw": -164.2,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.24,
        "image": {
         "levels": [
          {
           "height": 204,
           "width": 205,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_13_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -26.9
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_F5C9DB03_E7FB_5515_41C3_A9F13A30D541",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, true, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C17D01D4_E9E0_814E_4199_B12238B1BA47, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.3,
        "yaw": -99.55,
        "image": {
         "levels": [
          {
           "height": 102,
           "width": 102,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_14_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.92
       }
      ],
      "items": [
       {
        "yaw": -99.55,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.3,
        "image": {
         "levels": [
          {
           "height": 204,
           "width": 204,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.92
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_F581999F_E7FB_352C_41DA_4DF7C427D848",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, true, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C7F7211D_E820_BEFF_41EA_F151FA466D6A, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.87,
        "yaw": -38.8,
        "image": {
         "levels": [
          {
           "height": 102,
           "width": 102,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_15_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -30.53
       }
      ],
      "items": [
       {
        "yaw": -38.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.87,
        "image": {
         "levels": [
          {
           "height": 204,
           "width": 204,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_15_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -30.53
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_F48BC8FB_E7F9_34F5_41C4_BA14C79359CD",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, true, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C2AEA78F_E9DF_81DA_41B2_8175BB466D39, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.38,
        "yaw": 28.79,
        "image": {
         "levels": [
          {
           "height": 102,
           "width": 102,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_16_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.08
       }
      ],
      "items": [
       {
        "yaw": 28.79,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.38,
        "image": {
         "levels": [
          {
           "height": 204,
           "width": 204,
           "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_0_HS_16_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.08
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120,
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_E6ECD67B_E92C_D965_41E2_C6566691DA23",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_E6ECD67B_E92C_D965_41E2_C6566691DA23",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -131.05,
   "pitch": 2.25
  }
 },
 {
  "thumbnailUrl": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_t.jpg",
  "label": "DESCUBRE QU\u00c9 ESTUDIAR",
  "id": "panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719",
  "audios": [
   {
    "data": {
     "label": "Intro"
    },
    "id": "audio_FC608D83_E820_81CA_41E8_1AC13D061EEE",
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_FC608D83_E820_81CA_41E8_1AC13D061EEE.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_FC608D83_E820_81CA_41E8_1AC13D061EEE.mp3"
    }
   }
  ],
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_t.jpg",
    "overlays": [
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E644DEAE_E938_5D4B_41E4_273E405B2A6B",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "DESCUBRE QU\u00c9 QUIERES ESTUDIAR"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 79.47,
        "yaw": 0.31,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 110,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 30.54
       }
      ],
      "items": [
       {
        "yaw": 0.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 79.47,
        "image": {
         "levels": [
          {
           "height": 238,
           "width": 1648,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 30.54
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E644CEAE_E938_5D4B_41C6_BFEDB877B20C",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "INGENIER\u00cdA Y CIENCIAS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 49.52,
        "yaw": 0.63,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 93,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.09
       }
      ],
      "items": [
       {
        "yaw": 0.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 49.52,
        "image": {
         "levels": [
          {
           "height": 154,
           "width": 898,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.09
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E644BEAE_E938_5D4B_41DE_6FCC37D8E5DC",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INICIO"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5,
        "yaw": -9.33,
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 48,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24
       }
      ],
      "items": [
       {
        "yaw": -9.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 97,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E644AEAE_E938_5D4B_41ED_1BF331F2F097",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INSCR\u00cdBETE"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5,
        "yaw": 0.3,
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 48,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.09
       }
      ],
      "items": [
       {
        "yaw": 0.3,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 97,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.09
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6449EAE_E938_5D4B_41E3_38FB124F08B6",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "CONOCE NUESTRO     \u000a       CAMPUS"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.02,
        "yaw": 9.38,
        "image": {
         "levels": [
          {
           "height": 49,
           "width": 49,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.2
       }
      ],
      "items": [
       {
        "yaw": 9.38,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.02,
        "image": {
         "levels": [
          {
           "height": 98,
           "width": 98,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.2
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6448EAE_E938_5D4B_41D9_45A97302EABD",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "CIENCIAS DE LA SALUD"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 49.39,
        "yaw": -85.58,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 81,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.6
       }
      ],
      "items": [
       {
        "yaw": -85.58,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 49.39,
        "image": {
         "levels": [
          {
           "height": 176,
           "width": 895,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.6
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6477EAE_E938_5D4B_41E3_F6F05F6B0E68",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "   HUMANIDADES Y \u000dCIENCIAS SOCIALES"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 43.62,
        "yaw": 85.55,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 35,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.21
       }
      ],
      "items": [
       {
        "yaw": 85.55,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 43.62,
        "image": {
         "levels": [
          {
           "height": 351,
           "width": 786,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.21
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6476EAE_E938_5D4B_41D1_5F514E5CE8D2",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "CIENCIAS ECON\u00d3MICAS \u000d   Y ADMINISTRATIVAS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 51.75,
        "yaw": 177.2,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 43,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5
       }
      ],
      "items": [
       {
        "yaw": 177.2,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 51.75,
        "image": {
         "levels": [
          {
           "height": 341,
           "width": 928,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6475EAE_E938_5D4B_41E8_C128A664E3F0",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 33.9,
        "yaw": -24.28,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 178,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.25
       }
      ],
      "items": [
       {
        "yaw": -24.28,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 33.9,
        "image": {
         "levels": [
          {
           "height": 695,
           "width": 619,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.25
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6474EAE_E938_5D4B_41BB_864D5397A8EE",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "INGENIER\u00cdA DE SISTEMAS      \u000d       Y COMPUTACI\u00d3N"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 37.23,
        "yaw": -24.46,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 49,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_9_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28
       }
      ],
      "items": [
       {
        "yaw": -24.46,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 37.23,
        "image": {
         "levels": [
          {
           "height": 242,
           "width": 752,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6473EAE_E938_5D4B_41E0_6E49241071DF",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.31,
        "yaw": 21.07,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 200,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_10_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.94
       }
      ],
      "items": [
       {
        "yaw": 21.07,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 26.31,
        "image": {
         "levels": [
          {
           "height": 468,
           "width": 480,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.94
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6471EAE_E938_5D4B_41D8_79600A075141",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "INGENIER\u00cdA \u000dINDUSTRIAL"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.06,
        "yaw": 19.8,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 22,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_11_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.53
       }
      ],
      "items": [
       {
        "yaw": 19.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.06,
        "image": {
         "levels": [
          {
           "height": 259,
           "width": 366,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.53
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6470EAE_E938_5D4B_41C0_BFAAB0276B1F",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.73,
        "yaw": -67.14,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 196,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_12_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.73
       }
      ],
      "items": [
       {
        "yaw": -67.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 25.73,
        "image": {
         "levels": [
          {
           "height": 473,
           "width": 465,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_12_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.73
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E647FEAE_E938_5D4B_41C5_F4F68DD1BACC",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 35.63,
        "yaw": -107.5,
        "image": {
         "levels": [
          {
           "height": 159,
           "width": 199,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_13_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.59
       }
      ],
      "items": [
       {
        "yaw": -107.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 35.63,
        "image": {
         "levels": [
          {
           "height": 515,
           "width": 644,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_13_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.59
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E647EEAE_E938_5D4B_41B9_B080D292D009",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "MEDICINA"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.19,
        "yaw": -66.05,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 35,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_14_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.5
       }
      ],
      "items": [
       {
        "yaw": -66.05,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.19,
        "image": {
         "levels": [
          {
           "height": 146,
           "width": 320,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.5
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E647DEAE_E938_5D4B_41DA_FDF11B379C56",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": " NUTRICI\u00d3N Y DIET\u00c9TICA"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 36.04,
        "yaw": -106.32,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 75,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_15_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.82
       }
      ],
      "items": [
       {
        "yaw": -106.32,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 36.04,
        "image": {
         "levels": [
          {
           "height": 152,
           "width": 714,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_15_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.82
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E647CEAE_E938_5D4B_41C5_75A0302FCEB5",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 29.56,
        "yaw": 62.95,
        "image": {
         "levels": [
          {
           "height": 174,
           "width": 200,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_16_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.34
       }
      ],
      "items": [
       {
        "yaw": 62.95,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 29.56,
        "image": {
         "levels": [
          {
           "height": 470,
           "width": 540,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_16_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.34
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E647AEAE_E938_5D4B_41EC_BEE4EC5D5531",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 29.33,
        "yaw": 98.41,
        "image": {
         "levels": [
          {
           "height": 165,
           "width": 200,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_17_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.33
       }
      ],
      "items": [
       {
        "yaw": 98.41,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 29.33,
        "image": {
         "levels": [
          {
           "height": 445,
           "width": 538,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_17_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.33
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6479EAE_E938_5D4B_41E2_F9D9AE4FD612",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "DERECHO"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.87,
        "yaw": 63.03,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 31,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_18_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.6
       }
      ],
      "items": [
       {
        "yaw": 63.03,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.87,
        "image": {
         "levels": [
          {
           "height": 151,
           "width": 294,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_18_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.6
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6467EAE_E938_5D4B_41E3_6FBC7E074809",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "PSICOLOG\u00cdA"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.18,
        "yaw": 98.95,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 39,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_19_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.73
       }
      ],
      "items": [
       {
        "yaw": 98.95,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.18,
        "image": {
         "levels": [
          {
           "height": 152,
           "width": 379,
           "url": "media/panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_0_HS_19_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.73
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120,
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_t.jpg",
  "label": "SALA SISTEMAS",
  "id": "panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_t.jpg",
    "overlays": [
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F8CA7CFE_E821_873A_41E6_E81940E14136",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "\u00bfPOR QU\u00c9 INGENIER\u00cdA DE SISTEMAS?"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 92,
        "yaw": -159.59,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 145,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.89
       }
      ],
      "items": [
       {
        "yaw": -159.59,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 92,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 1771,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.89
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F8DB2996_E823_81CD_41D5_0BCAE9E3379E",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": " PLAN DE\u000dESTUDIOS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.44,
        "yaw": 163.8,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 21,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.35
       }
      ],
      "items": [
       {
        "yaw": 163.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.44,
        "image": {
         "levels": [
          {
           "height": 243,
           "width": 331,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.35
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F80B9333_E827_82CA_41C0_64701299D772",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Poligon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_F9F19B62_E827_814A_41A4_FA718755055D, {'iconColor':'#000000','rollOverIconHeight':20,'borderColor':'#000000','pressedIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'rollOverIconColor':'#666666','iconWidth':20,'pressedBorderSize':0,'paddingTop':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_FAF9AFE2_E827_8145_41B7_AEBB6E75388F, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.42,
        "yaw": 162.62,
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 129,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.94
       }
      ],
      "items": [
       {
        "roll": 0,
        "yaw": 162.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.42,
        "image": {
         "levels": [
          {
           "height": 221,
           "width": 259,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.94
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 162.62,
      "class": "PopupPanoramaOverlay",
      "hfov": 13.29,
      "showDuration": 500,
      "showEasing": "cubic_in",
      "hideDuration": 500,
      "popupMaxWidth": "100%",
      "id": "popup_F9F19B62_E827_814A_41A4_FA718755055D",
      "popupMaxHeight": "100%",
      "hideEasing": "cubic_out",
      "image": {
       "levels": [
        {
         "height": 517,
         "width": 1024,
         "url": "media/popup_F9F19B62_E827_814A_41A4_FA718755055D_0_2.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "pitch": -18.94
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FCE0DD87_E823_81CA_41BF_FF406261D38B",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "PROYECTOS"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 20.88,
        "yaw": -169.33,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 40,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.88
       }
      ],
      "items": [
       {
        "yaw": -169.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.88,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 380,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.88
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_FD7D88B1_E820_8FC7_41DF_4B0B48BD6D90",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Poligon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, true, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_CEC0A7B0_E821_81C5_41E7_16F1658BCF3E, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 20.03,
        "yaw": -169.89,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 180,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.59
       }
      ],
      "items": [
       {
        "roll": 0,
        "yaw": -169.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.03,
        "image": {
         "levels": [
          {
           "height": 218,
           "width": 361,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.59
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FE8EF309_E821_82C7_41E6_A09F7C1299C4",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "CLASES"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.84,
        "yaw": -116.48,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 32,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.58
       }
      ],
      "items": [
       {
        "yaw": -116.48,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.84,
        "image": {
         "levels": [
          {
           "height": 131,
           "width": 266,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.58
       }
      ]
     },
     {
      "useHandCursor": false,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FE1B7564_E8E1_814D_41E6_5B19908A86E1",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "\u00bfPOR QU\u00c9?"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.45,
        "yaw": -137.89,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 38,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.8
       }
      ],
      "items": [
       {
        "yaw": -137.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.45,
        "image": {
         "levels": [
          {
           "height": 147,
           "width": 353,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.8
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FE719E58_E8E0_8345_41AD_E6814EEDC487",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Poligon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setMediaBehaviour(this.playList_FACEF741_EDF5_6893_41D3_417D2B4D7F9A, 0, this.panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3); this.MainViewerPanoramaPlayer.play()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.29,
        "yaw": -117,
        "image": {
         "levels": [
          {
           "height": 99,
           "width": 92,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_8_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.46
       }
      ],
      "items": [
       {
        "roll": 0,
        "yaw": -117,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.29,
        "image": {
         "levels": [
          {
           "height": 198,
           "width": 184,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.46
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FE3F9254_E823_834E_41EC_F6CEF18E77C3",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INICIO"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.66,
        "yaw": -175.21,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 61,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 13
       }
      ],
      "items": [
       {
        "yaw": -175.21,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.66,
        "image": {
         "levels": [
          {
           "height": 122,
           "width": 122,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 13
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF89A039_E823_FF3A_41E9_21E4216A6A7C",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": " DESCUBRE QU\u00c9 \u000aQUIERES ESTUDIAR"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.67,
        "yaw": -153.03,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 61,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_10_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.91
       }
      ],
      "items": [
       {
        "yaw": -153.03,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.67,
        "image": {
         "levels": [
          {
           "height": 122,
           "width": 122,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.91
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FEABAB8A_E823_81C5_41AE_543800FBDA79",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INSCRIBIRSE"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.67,
        "yaw": -165.03,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 61,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_11_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.91
       }
      ],
      "items": [
       {
        "yaw": -165.03,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.67,
        "image": {
         "levels": [
          {
           "height": 122,
           "width": 122,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.91
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FD374C49_E823_8747_41E5_DBF34A4CF93A",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "CONOCE NUESTRO     \u000a       CAMPUS"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.71,
        "yaw": -140.36,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 61,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_12_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.97
       }
      ],
      "items": [
       {
        "yaw": -140.36,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.71,
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 123,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_12_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.97
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E2CF8B19_EC95_7810_41B7_FFA63752C66C",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Poligon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E26EEF6C_EC95_9830_41E0_786DCDA383A6, {'iconColor':'#000000','rollOverIconHeight':20,'borderColor':'#000000','pressedIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'rollOverIconColor':'#666666','iconWidth':20,'pressedBorderSize':0,'paddingTop':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1]}) } else { this.showPopupMedia(this.window_E6482AC8_ECD5_5991_41E8_58B656977BED, this.video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D, this.PlayList_E24CCF55_ECD7_58B3_41EB_E4A853A4E134, '95%', '95%', true, true); this.PlayList_E24CCF55_ECD7_58B3_41EB_E4A853A4E134.set('selectedIndex', 0); ; this.viewer_uidE2A42F05_ECD7_5893_41D6_E29A75E3AB1AVideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.76,
        "yaw": -137.34,
        "image": {
         "levels": [
          {
           "height": 124,
           "width": 150,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_13_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.5
       }
      ],
      "items": [
       {
        "roll": 0,
        "yaw": -137.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.76,
        "image": {
         "levels": [
          {
           "height": 248,
           "width": 301,
           "url": "media/panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_0_HS_13_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.5
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": -137.34,
      "class": "PopupPanoramaOverlay",
      "hfov": 15.72,
      "showDuration": 500,
      "video": {
       "height": 360,
       "mp4Url": "media/video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "showEasing": "cubic_in",
      "hideDuration": 500,
      "popupMaxWidth": "95%",
      "id": "popup_E26EEF6C_EC95_9830_41E0_786DCDA383A6",
      "autoplay": true,
      "loop": false,
      "popupMaxHeight": "95%",
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": -20.5
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.78,
   "pitch": -11.01
  }
 },
 {
  "thumbnailUrl": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_t.jpg",
  "label": "ENTRADA 1",
  "id": "panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_t.jpg",
    "overlays": [
     {
      "id": "panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E750B232_E91F_B8E7_41DE_57EF1BCFC764",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "TAXIS"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.83,
        "yaw": -81.56,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 124,
           "url": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.44
       }
      ],
      "items": [
       {
        "yaw": -81.56,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.83,
        "image": {
         "levels": [
          {
           "height": 219,
           "width": 249,
           "url": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.44
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E76FBA4B_E924_A8A5_41D5_0F94B0DF9CF9",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INICIO"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.56,
        "yaw": -58.05,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 109,
           "url": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 30.65
       }
      ],
      "items": [
       {
        "yaw": -58.05,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.56,
        "image": {
         "levels": [
          {
           "height": 219,
           "width": 219,
           "url": "media/panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 30.65
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -62.08,
   "pitch": 4.38
  }
 },
 {
  "thumbnailUrl": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_t.jpg",
  "label": "TAXIS",
  "id": "panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_t.jpg",
    "overlays": [
     {
      "id": "panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E7994A42_E925_A8A7_41E6_EF025C5A8F75",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9, this.camera_F5E8CA3E_EDF5_58EE_41A4_A5B103C4CB98); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "ESCALERAS"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.52,
        "yaw": -83.51,
        "image": {
         "levels": [
          {
           "height": 91,
           "width": 103,
           "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.78
       }
      ],
      "items": [
       {
        "yaw": -83.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.52,
        "image": {
         "levels": [
          {
           "height": 183,
           "width": 206,
           "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.78
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E66098AB_E924_69E5_41D1_FCFE7612D946",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.14,
        "yaw": 93.09,
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 127,
           "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.08
       }
      ],
      "items": [
       {
        "yaw": 93.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.14,
        "image": {
         "levels": [
          {
           "height": 221,
           "width": 254,
           "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.08
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6BC8F89_E92B_E7A5_41DB_D0DE46C24635",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Imagen"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "INICIO"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.09,
        "yaw": -53.59,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 109,
           "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 25.36
       }
      ],
      "items": [
       {
        "yaw": -53.59,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.09,
        "image": {
         "levels": [
          {
           "height": 219,
           "width": 219,
           "url": "media/panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 25.36
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_t.jpg",
     "label": "ESCALERAS",
     "id": "panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9",
     "pitch": 0,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_t.jpg",
       "overlays": [
        {
         "id": "panorama_F9790E5D_E939_BDC9_41E3_0B70700A4F4E",
         "angle": 0,
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "image": {
          "levels": [
           {
            "height": 850,
            "width": 850,
            "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "inertia": false
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_F9793E5D_E939_BDC9_41C3_8D9E055C0F07",
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292, this.camera_F5F9FA5D_EDF5_58B2_41E1_34F25B7D3EC5); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "toolTip": "TAXIS"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.94,
           "yaw": 105.17,
           "image": {
            "levels": [
             {
              "height": 109,
              "width": 124,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.09
          }
         ],
         "items": [
          {
           "yaw": 105.17,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 13.94,
           "image": {
            "levels": [
             {
              "height": 219,
              "width": 249,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.09
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_F9796E5D_E939_BDC9_41E1_80E43F6A0851",
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Imagen"
         },
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "toolTip": "INICIO"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.2,
           "yaw": -65.86,
           "image": {
            "levels": [
             {
              "height": 109,
              "width": 109,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 24.14
          }
         ],
         "items": [
          {
           "yaw": -65.86,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.2,
           "image": {
            "levels": [
             {
              "height": 219,
              "width": 219,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 24.14
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_F9797E5D_E939_BDC9_41B8_C63E91871261",
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44, this.camera_F5CB6A7D_EDF5_5973_41E3_7F7BB821EEB4); this.mainPlayList.set('selectedIndex', 10)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "toolTip": "PASILLO"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.37,
           "yaw": -37.29,
           "image": {
            "levels": [
             {
              "height": 73,
              "width": 83,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.92
          }
         ],
         "items": [
          {
           "yaw": -37.29,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.37,
           "image": {
            "levels": [
             {
              "height": 147,
              "width": 167,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.92
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_F979BE5D_E939_BDC9_41E4_684E0C33986E",
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19, this.camera_F5DDBA9C_EDF5_59B1_41D3_DFE77CFA5FA6); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "toolTip": "FRENTE CAPILLA"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.27,
           "yaw": -70.49,
           "image": {
            "levels": [
             {
              "height": 73,
              "width": 83,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 8.78
          }
         ],
         "items": [
          {
           "yaw": -70.49,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.27,
           "image": {
            "levels": [
             {
              "height": 147,
              "width": 167,
              "url": "media/panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 8.78
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "hfovMin": 60,
     "hfov": 360,
     "vfov": 180,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292",
       "backwardYaw": -83.51,
       "yaw": 105.17,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": {
        "thumbnailUrl": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_t.jpg",
        "label": "PASILLO",
        "id": "panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44",
        "pitch": 0,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_FD7B3A5E_E968_65CA_41DE_9C432F8E99B3",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9, this.camera_F504DA00_EDF5_5891_41D0_A9EABD58B058); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "ESCALERAS"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.19,
              "yaw": 138.62,
              "image": {
               "levels": [
                {
                 "height": 62,
                 "width": 73,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.96
             }
            ],
            "items": [
             {
              "yaw": 138.62,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.19,
              "image": {
               "levels": [
                {
                 "height": 125,
                 "width": 146,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.96
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_FA16CA37_E96B_A55A_41EA_E30BA1E3D99C",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C, this.camera_F53399E1_EDF5_5B93_41DC_47085A75B3BC); this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "PASILLO ABC"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.77,
              "yaw": 48.97,
              "image": {
               "levels": [
                {
                 "height": 69,
                 "width": 87,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.9
             }
            ],
            "items": [
             {
              "yaw": 48.97,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.77,
              "image": {
               "levels": [
                {
                 "height": 138,
                 "width": 174,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.9
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_FF2E8A05_E969_E539_41E6_F0CF73ECF43C",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_FA047924_E958_A77E_41EC_96BCA114AC6B, this.camera_F53F79D1_EDF5_5BB3_41E8_F50AA29EB7B0); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "FUENTE"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.18,
              "yaw": -82.45,
              "image": {
               "levels": [
                {
                 "height": 78,
                 "width": 82,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.25
             }
            ],
            "items": [
             {
              "yaw": -82.45,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.18,
              "image": {
               "levels": [
                {
                 "height": 156,
                 "width": 164,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.25
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_FADE7F31_E96F_BB59_41E8_98B761579CAE",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Imagen"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "INICIO"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.5,
              "yaw": 81.82,
              "image": {
               "levels": [
                {
                 "height": 109,
                 "width": 109,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 39.27
             }
            ],
            "items": [
             {
              "yaw": 81.82,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.5,
              "image": {
               "levels": [
                {
                 "height": 219,
                 "width": 219,
                 "url": "media/panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 39.27
             }
            ]
           },
           {
            "id": "panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_tcap0",
            "angle": 0,
            "rotate": false,
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "image": {
             "levels": [
              {
               "height": 850,
               "width": 850,
               "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "inertia": false
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "vfov": 180,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "panorama": {
           "thumbnailUrl": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_t.jpg",
           "label": "FUENTE",
           "id": "panorama_FA047924_E958_A77E_41EC_96BCA114AC6B",
           "pitch": 0,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_FD7D39FA_E979_A6CA_41D7_210F0C523901",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44, this.camera_FAA117DD_EDF5_57B2_41D4_33D40996F0D8); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "PASILLO"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.23,
                 "yaw": -174.53,
                 "image": {
                  "levels": [
                   {
                    "height": 71,
                    "width": 91,
                    "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.25
                }
               ],
               "items": [
                {
                 "yaw": -174.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.23,
                 "image": {
                  "levels": [
                   {
                    "height": 142,
                    "width": 183,
                    "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.25
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_FDDAC9F6_E978_A6DB_41EB_C7F613E0FF21",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293, this.camera_FABAC80C_EDF5_5891_41BE_69D1A28F7608); this.mainPlayList.set('selectedIndex', 13)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "   EDIFICIO\u000aGUAYACANES"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.06,
                 "yaw": 55.23,
                 "image": {
                  "levels": [
                   {
                    "height": 74,
                    "width": 89,
                    "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.25
                }
               ],
               "items": [
                {
                 "yaw": 55.23,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.06,
                 "image": {
                  "levels": [
                   {
                    "height": 148,
                    "width": 179,
                    "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.25
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_FCEFC15B_E979_A7CA_41E1_3F04AD41EE02",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Imagen"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "INICIO"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.53,
                 "yaw": 1.44,
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 72,
                    "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 20.98
                }
               ],
               "items": [
                {
                 "yaw": 1.44,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.53,
                 "image": {
                  "levels": [
                   {
                    "height": 134,
                    "width": 144,
                    "url": "media/panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 20.98
                }
               ]
              },
              {
               "id": "panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_tcap0",
               "angle": 0,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "image": {
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "inertia": false
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "vfov": 180,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44",
             "backwardYaw": -82.45,
             "yaw": -174.53,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "thumbnailUrl": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_t.jpg",
              "label": "EDIFICIO GUAYACANES",
              "id": "panorama_FD431976_E96B_E7DB_41E3_1519541D0293",
              "pitch": 0,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_FDEFF6B1_E968_AD59_41E9_3A935F500D70",
                  "class": "HotspotPanoramaOverlay",
                  "data": {
                   "label": "Poligon"
                  },
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE, this.camera_F569F8F6_EDF5_597E_41BE_583C1BCDC4A5); this.mainPlayList.set('selectedIndex', 15)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "PISO 1 GUAYACANES"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 22.65,
                    "yaw": 20.46,
                    "image": {
                     "levels": [
                      {
                       "height": 159,
                       "width": 200,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_0_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 1.34
                   }
                  ],
                  "items": [
                   {
                    "roll": 0,
                    "yaw": 20.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 22.65,
                    "image": {
                     "levels": [
                      {
                       "height": 326,
                       "width": 410,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 1.34
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_FC5EB314_E96F_AB5E_41EA_8CDCCA0B6B76",
                  "class": "HotspotPanoramaOverlay",
                  "data": {
                   "label": "Poligon"
                  },
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_FDDE4F40_E968_5B36_41C8_28807D74D772, this.camera_F57D8915_EDF5_58B2_4196_2F2873676E9E); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "MERCATERIA"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 17.95,
                    "yaw": -24.35,
                    "image": {
                     "levels": [
                      {
                       "height": 147,
                       "width": 161,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_1_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 3.06
                   }
                  ],
                  "items": [
                   {
                    "roll": 0,
                    "yaw": -24.35,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 17.95,
                    "image": {
                     "levels": [
                      {
                       "height": 295,
                       "width": 323,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 3.06
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_FCCE5F44_E968_7B3E_41BD_D8589AEC2E06",
                  "class": "HotspotPanoramaOverlay",
                  "data": {
                   "label": "Imagen"
                  },
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "INICIO"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.77,
                    "yaw": 0.37,
                    "image": {
                     "levels": [
                      {
                       "height": 56,
                       "width": 56,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 23.45
                   }
                  ],
                  "items": [
                   {
                    "yaw": 0.37,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.77,
                    "image": {
                     "levels": [
                      {
                       "height": 112,
                       "width": 112,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 23.45
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_FF4639DE_E968_A6CB_41DE_63B47AC638E4",
                  "class": "HotspotPanoramaOverlay",
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_FA047924_E958_A77E_41EC_96BCA114AC6B, this.camera_FA94F8C7_EDF5_599E_41E9_239C6E84206A); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "FUENTE"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 20.45,
                    "yaw": 126,
                    "image": {
                     "levels": [
                      {
                       "height": 150,
                       "width": 182,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -0.26
                   }
                  ],
                  "items": [
                   {
                    "yaw": 126,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 20.45,
                    "image": {
                     "levels": [
                      {
                       "height": 301,
                       "width": 365,
                       "url": "media/panorama_FD431976_E96B_E7DB_41E3_1519541D0293_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -0.26
                   }
                  ]
                 },
                 {
                  "id": "panorama_FD431976_E96B_E7DB_41E3_1519541D0293_tcap0",
                  "angle": 0,
                  "rotate": false,
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "image": {
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "inertia": false
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama",
              "hfovMin": 60,
              "hfov": 360,
              "vfov": 180,
              "hfovMax": 120,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_FA047924_E958_A77E_41EC_96BCA114AC6B",
                "backwardYaw": 55.23,
                "yaw": 126,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "thumbnailUrl": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_t.jpg",
                 "label": "PISO 1 GUAYACANES",
                 "id": "panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE",
                 "pitch": 0,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_FF154EE1_E958_5AF6_41D7_51C8FAAA4477",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293, this.camera_F545D964_EDF5_5891_41E1_2C64735F1C5A); this.mainPlayList.set('selectedIndex', 13)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "EDIFICIO GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.12,
                       "yaw": -170.18,
                       "image": {
                        "levels": [
                         {
                          "height": 110,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -9.05
                      }
                     ],
                     "items": [
                      {
                       "yaw": -170.18,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.12,
                       "image": {
                        "levels": [
                         {
                          "height": 221,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -9.05
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_FF1906B3_E959_AD59_41CC_3E88C26F8E87",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Imagen"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 0)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "INICIO"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.16,
                       "yaw": -128.86,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 24.55
                      }
                     ],
                     "items": [
                      {
                       "yaw": -128.86,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 11.16,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 24.55
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_F1E7B3AE_E938_AB4A_41E2_966CF8990566",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "LABORATORIO 2\u000a  GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.27,
                       "yaw": -34.36,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 0.82
                      }
                     ],
                     "items": [
                      {
                       "yaw": -34.36,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.27,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 0.82
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_F0D357E3_E938_AAF9_41C3_4F62B885B300",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "LABORATORIO 4\u000a  GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.27,
                       "yaw": 94.09,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -1.23
                      }
                     ],
                     "items": [
                      {
                       "yaw": 94.09,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.27,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -1.23
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_F02F8395_E939_AB5E_41C4_11B7726CC1CD",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 21)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "LABORATORIO 6\u000a  GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.34,
                       "yaw": 158.73,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 22.5
                      }
                     ],
                     "items": [
                      {
                       "yaw": 158.73,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 11.34,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 22.5
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_F1807A84_E939_E53F_41D0_0C6DB57FAD18",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 20)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "LABORATORIO 5\u000a  GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.9,
                       "yaw": 66.27,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 49.91
                      }
                     ],
                     "items": [
                      {
                       "yaw": 66.27,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.9,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 49.91
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_F0A338B2_E938_655A_41E1_F23F6096B7CD",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 18)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "LABORATORIO 3\u000a  GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 8.23,
                       "yaw": -47.86,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 47.86
                      }
                     ],
                     "items": [
                      {
                       "yaw": -47.86,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.23,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 47.86
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_F058C842_E938_E53A_41D3_802D66520B36",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 16)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "LABORATORIO 1\u000a  GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.27,
                       "yaw": -101.86,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_7_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -1.64
                      }
                     ],
                     "items": [
                      {
                       "yaw": -101.86,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.27,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -1.64
                      }
                     ]
                    },
                    {
                     "id": "panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_tcap0",
                     "angle": 0,
                     "rotate": false,
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "image": {
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "inertia": false
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "class": "Panorama",
                 "hfovMin": 60,
                 "hfov": 360,
                 "vfov": 180,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293",
                   "backwardYaw": 20.46,
                   "yaw": -170.18,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "partial": false
                },
                "backwardYaw": -170.18,
                "yaw": 20.46,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "thumbnailUrl": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_t.jpg",
                 "label": "MERCATERIA",
                 "id": "panorama_FDDE4F40_E968_5B36_41C8_28807D74D772",
                 "pitch": 0,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_FF7A56B3_E968_AD59_41CB_43E066A78921",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293, this.camera_F517CA1F_EDF5_58AF_41E3_33858829B83E); this.mainPlayList.set('selectedIndex', 13)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "EDIFICIO GUAYACANES"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 19.64,
                       "yaw": 180,
                       "image": {
                        "levels": [
                         {
                          "height": 153,
                          "width": 175,
                          "url": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 0.4
                      }
                     ],
                     "items": [
                      {
                       "yaw": 180,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 19.64,
                       "image": {
                        "levels": [
                         {
                          "height": 307,
                          "width": 350,
                          "url": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 0.4
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_FF12F337_E958_6B59_41EA_9B5801937C35",
                     "class": "HotspotPanoramaOverlay",
                     "data": {
                      "label": "Imagen"
                     },
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 0)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "INICIO"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.01,
                       "yaw": -126.82,
                       "image": {
                        "levels": [
                         {
                          "height": 109,
                          "width": 109,
                          "url": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 26.18
                      }
                     ],
                     "items": [
                      {
                       "yaw": -126.82,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 11.01,
                       "image": {
                        "levels": [
                         {
                          "height": 219,
                          "width": 219,
                          "url": "media/panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 26.18
                      }
                     ]
                    },
                    {
                     "id": "panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_tcap0",
                     "angle": 0,
                     "rotate": false,
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "image": {
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "inertia": false
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "class": "Panorama",
                 "hfovMin": 60,
                 "hfov": 360,
                 "vfov": 180,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293",
                   "backwardYaw": -24.35,
                   "yaw": 180,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "partial": false
                },
                "backwardYaw": 180,
                "yaw": -24.35,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "partial": false
             },
             "backwardYaw": 126,
             "yaw": 55.23,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false
          },
          "backwardYaw": -174.53,
          "yaw": -82.45,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "thumbnailUrl": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_t.jpg",
           "label": "PASILLO ABC",
           "id": "panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C",
           "pitch": 0,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_FDEC6CCB_E979_DECA_41D2_6246E3EFD3F3",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44, this.camera_F5716944_EDF5_5892_41E2_066D7514DC2A); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "PASILLO"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.88,
                 "yaw": -143.04,
                 "image": {
                  "levels": [
                   {
                    "height": 93,
                    "width": 124,
                    "url": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -1.41
                }
               ],
               "items": [
                {
                 "yaw": -143.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 13.88,
                 "image": {
                  "levels": [
                   {
                    "height": 187,
                    "width": 248,
                    "url": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -1.41
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_FD5F568D_E978_6D49_41E8_08490092F6F2",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Imagen"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "INICIO"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.7,
                 "yaw": -92.86,
                 "image": {
                  "levels": [
                   {
                    "height": 109,
                    "width": 109,
                    "url": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 17.59
                }
               ],
               "items": [
                {
                 "yaw": -92.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.7,
                 "image": {
                  "levels": [
                   {
                    "height": 219,
                    "width": 219,
                    "url": "media/panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 17.59
                }
               ]
              },
              {
               "id": "panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_tcap0",
               "angle": 0,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "image": {
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "inertia": false
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "vfov": 180,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44",
             "backwardYaw": 48.97,
             "yaw": -143.04,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false
          },
          "backwardYaw": -143.04,
          "yaw": 48.97,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9",
          "backwardYaw": -37.29,
          "yaw": 138.62,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false
       },
       "backwardYaw": 138.62,
       "yaw": -37.29,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": {
        "thumbnailUrl": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_t.jpg",
        "label": "FRENTE CAPILLA",
        "id": "panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19",
        "pitch": 0,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_E6C5A538_E938_6F56_41AA_621894F183D9",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Imagen"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "INICIO"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.37,
              "yaw": -158.73,
              "image": {
               "levels": [
                {
                 "height": 109,
                 "width": 109,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 32.32
             }
            ],
            "items": [
             {
              "yaw": -158.73,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.37,
              "image": {
               "levels": [
                {
                 "height": 219,
                 "width": 219,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 32.32
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_F9AA864D_E938_6DC9_41DA_E46D4F06F033",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Poligon"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0, this.camera_FA8BD86A_EDF5_5891_41C8_DFA5394F1E90); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "CAPILLA"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 17.47,
              "yaw": 152.9,
              "image": {
               "levels": [
                {
                 "height": 138,
                 "width": 157,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_1_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 10.42
             }
            ],
            "items": [
             {
              "roll": 0,
              "yaw": 152.9,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 17.47,
              "image": {
               "levels": [
                {
                 "height": 277,
                 "width": 314,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 10.42
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_F946F41D_E938_6D48_41EC_713DC23669DA",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA, this.camera_FAB4C83B_EDF5_58F7_41E9_1AAFE798C8E8); this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "TERRAZA"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.58,
              "yaw": 23.88,
              "image": {
               "levels": [
                {
                 "height": 68,
                 "width": 94,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -0.37
             }
            ],
            "items": [
             {
              "yaw": 23.88,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.58,
              "image": {
               "levels": [
                {
                 "height": 137,
                 "width": 189,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -0.37
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_F9ECE06E_E938_A5CB_41E3_83937B454A3A",
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9, this.camera_FA803898_EDF5_59B2_41D0_240AEF230D0D); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "ESCALERAS"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.42,
              "yaw": 111.52,
              "image": {
               "levels": [
                {
                 "height": 42,
                 "width": 48,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -0.63
             }
            ],
            "items": [
             {
              "yaw": 111.52,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.42,
              "image": {
               "levels": [
                {
                 "height": 85,
                 "width": 96,
                 "url": "media/panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -0.63
             }
            ]
           },
           {
            "id": "panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_tcap0",
            "angle": 0,
            "rotate": false,
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "image": {
             "levels": [
              {
               "height": 850,
               "width": 850,
               "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "inertia": false
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "vfov": 180,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "panorama": {
           "thumbnailUrl": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_t.jpg",
           "label": "TERRAZA",
           "id": "panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA",
           "pitch": 0,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_F821360C_E928_ED4E_4199_9015DD20ADBC",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Imagen"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "INICIO"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.2,
                 "yaw": -164.86,
                 "image": {
                  "levels": [
                   {
                    "height": 109,
                    "width": 109,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 24.14
                }
               ],
               "items": [
                {
                 "yaw": -164.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.2,
                 "image": {
                  "levels": [
                   {
                    "height": 219,
                    "width": 219,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 24.14
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_F8C77300_E92B_AB37_41EA_EC96971073E2",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Poligon"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "CAPILLA"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.04,
                 "yaw": -167.37,
                 "image": {
                  "levels": [
                   {
                    "height": 62,
                    "width": 89,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_1_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 3.29
                }
               ],
               "items": [
                {
                 "roll": 0,
                 "yaw": -167.37,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.04,
                 "image": {
                  "levels": [
                   {
                    "height": 124,
                    "width": 179,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 3.29
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_F88562DE_E928_6ACB_41E1_8535F7033FDA",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19, this.camera_F52DA9A2_EDF5_5B96_41C4_AA88DD3A402B); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "FRENTE CAPILLA"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.91,
                 "yaw": -138.79,
                 "image": {
                  "levels": [
                   {
                    "height": 46,
                    "width": 52,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 0
                }
               ],
               "items": [
                {
                 "yaw": -138.79,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.91,
                 "image": {
                  "levels": [
                   {
                    "height": 92,
                    "width": 105,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 0
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_FA72DE8E_E928_DD4A_41AF_4DBC0722A3BD",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "ESCALERAS"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.91,
                 "yaw": 148,
                 "image": {
                  "levels": [
                   {
                    "height": 46,
                    "width": 52,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.12
                }
               ],
               "items": [
                {
                 "yaw": 148,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.91,
                 "image": {
                  "levels": [
                   {
                    "height": 92,
                    "width": 105,
                    "url": "media/panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.12
                }
               ]
              },
              {
               "id": "panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_tcap0",
               "angle": 0,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "image": {
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "inertia": false
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "vfov": 180,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19",
             "backwardYaw": 23.88,
             "yaw": -138.79,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false
          },
          "backwardYaw": -138.79,
          "yaw": 23.88,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "thumbnailUrl": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_t.jpg",
           "label": "CAPILLA",
           "id": "panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0",
           "pitch": 0,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_F98FF3C0_E92B_AB36_41B6_1AC2C37AB94E",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Imagen"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "INICIO"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.2,
                 "yaw": -173.05,
                 "image": {
                  "levels": [
                   {
                    "height": 109,
                    "width": 109,
                    "url": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 24.14
                }
               ],
               "items": [
                {
                 "yaw": -173.05,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.2,
                 "image": {
                  "levels": [
                   {
                    "height": 219,
                    "width": 219,
                    "url": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 24.14
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_F80731D0_E928_A6D7_41E9_87848757FA8B",
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Poligon"
               },
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19, this.camera_F558E983_EDF5_5B97_41ED_A31BB50E6AE3); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "FRENTE CAPILLA"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 44.59,
                 "yaw": 19.64,
                 "image": {
                  "levels": [
                   {
                    "height": 113,
                    "width": 200,
                    "url": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_0_HS_1_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 4.32
                }
               ],
               "items": [
                {
                 "roll": 0,
                 "yaw": 19.64,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 44.59,
                 "image": {
                  "levels": [
                   {
                    "height": 477,
                    "width": 839,
                    "url": "media/panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 4.32
                }
               ]
              },
              {
               "id": "panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_tcap0",
               "angle": 0,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "image": {
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "inertia": false
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "vfov": 180,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19",
             "backwardYaw": 152.9,
             "yaw": 19.64,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false
          },
          "backwardYaw": 19.64,
          "yaw": 152.9,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9",
          "backwardYaw": -70.49,
          "yaw": 111.52,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false
       },
       "backwardYaw": 111.52,
       "yaw": -70.49,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false
    },
    "backwardYaw": 105.17,
    "yaw": -83.51,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -47.97,
   "pitch": -3.81
  }
 },
 "this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.23,
   "pitch": -13.34
  }
 },
 "this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.35,
   "pitch": 8.33
  }
 },
 "this.panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.39,
   "pitch": -12.69
  }
 },
 "this.panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -164,
   "pitch": -6.49
  }
 },
 "this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 79.03,
   "pitch": -6.69
  }
 },
 "this.panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -95.1,
   "pitch": -1.5
  }
 },
 "this.panorama_FA047924_E958_A77E_41EC_96BCA114AC6B",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD431976_E96B_E7DB_41E3_1519541D0293_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.34,
   "pitch": 11.8
  }
 },
 "this.panorama_FDDE4F40_E968_5B36_41C8_28807D74D772",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.69,
   "pitch": 0.34
  }
 },
 "this.panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -164.99,
   "pitch": -10.99
  }
 },
 {
  "thumbnailUrl": "media/panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_t.jpg",
  "label": "LABORATORIO 1 GUAY",
  "id": "panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FEDA8CCF_E928_7EC9_41D5_83ED7831B31B",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.4,
        "yaw": -20.86,
        "image": {
         "levels": [
          {
           "height": 169,
           "width": 200,
           "url": "media/panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.34
       }
      ],
      "items": [
       {
        "yaw": -20.86,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 24.4,
        "image": {
         "levels": [
          {
           "height": 372,
           "width": 438,
           "url": "media/panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.34
       }
      ]
     },
     {
      "id": "panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_t.jpg",
  "label": "LABORATORIO 2 GUAY",
  "id": "panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FEC44FD9_E928_7AD6_41D6_1D5CBBDC2377",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.22,
        "yaw": 140.11,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 154,
           "url": "media/panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.43
       }
      ],
      "items": [
       {
        "yaw": 140.11,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.22,
        "image": {
         "levels": [
          {
           "height": 445,
           "width": 343,
           "url": "media/panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.43
       }
      ]
     },
     {
      "id": "panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_t.jpg",
  "label": "LABORATORIO 3 GUAY",
  "id": "panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FE9A2647_E928_6D39_41EB_4B14012F72F4",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 22.4,
        "yaw": 150.75,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 197,
           "url": "media/panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.32
       }
      ],
      "items": [
       {
        "yaw": 150.75,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.4,
        "image": {
         "levels": [
          {
           "height": 409,
           "width": 402,
           "url": "media/panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.32
       }
      ]
     },
     {
      "id": "panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_t.jpg",
  "label": "LABORATORIO 4 GUAY",
  "id": "panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F12D1D93_E928_7F5A_41E2_284C070E84BB",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.67,
        "yaw": -46.23,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 168,
           "url": "media/panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.89
       }
      ],
      "items": [
       {
        "yaw": -46.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 23.67,
        "image": {
         "levels": [
          {
           "height": 504,
           "width": 424,
           "url": "media/panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.89
       }
      ]
     },
     {
      "id": "panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_t.jpg",
  "label": "LABORATORIO 5 GUAY",
  "id": "panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F1045EA7_E938_7D79_41CE_900B31C9EE2A",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.93,
        "yaw": -49.7,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 196,
           "url": "media/panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.45
       }
      ],
      "items": [
       {
        "yaw": -49.7,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 24.93,
        "image": {
         "levels": [
          {
           "height": 453,
           "width": 445,
           "url": "media/panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.45
       }
      ]
     },
     {
      "id": "panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_t.jpg",
  "label": "LABORATORIO 6 GUAY",
  "id": "panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F1B8CCD7_E938_5ED9_41E0_FF0EF55456A0",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "SALIDA"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 28.19,
        "yaw": 106.16,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 191,
           "url": "media/panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.86
       }
      ],
      "items": [
       {
        "yaw": 106.16,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 28.19,
        "image": {
         "levels": [
          {
           "height": 526,
           "width": 504,
           "url": "media/panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.86
       }
      ]
     },
     {
      "id": "panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FF968E01_E726_9AE0_41AA_EB24178238D8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FF968E01_E726_9AE0_41AA_EB24178238D8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E644EEAE_E938_5D4B_41E0_2D5A750C2719_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E72BA7A1_E821_81C7_41E4_E36022536FF3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C8DF5134_DC52_C997_41A2_82B3EDD8B2A0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CA8BB7E9_DC51_C8B1_41E9_686D5F0A9292_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F976DE5D_E939_BDC9_41ED_0E9ECDE8EAE9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E6BA00DA_E938_A6CA_41DA_EE28444B0E19_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F9EB591C_E928_A74F_41E6_DD523D2CEFF0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F839FC12_E92F_BD5B_41C7_D74E15A34CFA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FA8B4E8B_E958_5D49_4197_1A4FB318CE44_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FDEC0CCB_E979_DECA_41E9_B0DDF4B9156C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FA047924_E958_A77E_41EC_96BCA114AC6B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FA047924_E958_A77E_41EC_96BCA114AC6B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD431976_E96B_E7DB_41E3_1519541D0293_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDDE4F40_E968_5B36_41C8_28807D74D772",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FDDE4F40_E968_5B36_41C8_28807D74D772_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FDE0214B_E969_A7C9_41E7_16CBC8CB55DE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FEC6DD10_E929_DF56_41E8_3A0AE6B492B2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FFCE86EA_E928_6ACA_41D8_93180786D6EF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FFFFD611_E928_ED56_41BE_3ECAC7B6FF01_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FFC92651_E92F_EDD9_41D0_BB05B2427F7B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FFBC6D56_E928_DFDB_41E6_46A899912DD0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FFC9E5E8_E928_6EF7_41B1_CE424FF22220_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "id": "DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C_playlist",
  "class": "PlayList"
 },
 {
  "video": [
   {
    "posterURL": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_poster.jpg",
    "type": "application/x-mpegurl",
    "width": 1280,
    "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA.m3u8",
    "class": "Video360Resource",
    "height": 720,
    "framerate": 24
   },
   {
    "posterURL": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_poster.jpg",
    "type": "video/mp4",
    "width": 1280,
    "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA.mp4",
    "class": "Video360Resource",
    "height": 720,
    "framerate": 24,
    "bitrate": 1284
   }
  ],
  "overlays": [
   {
    "id": "media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_tcap0",
    "angle": 0,
    "rotate": false,
    "class": "TripodCapPanoramaOverlay",
    "hfov": 45,
    "image": {
     "levels": [
      {
       "height": 850,
       "width": 850,
       "url": "media/panorama_CEA908D5_DCEE_F891_41B4_8419D71C216A_tcap0.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "inertia": false
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "id": "overlay_F114866F_E820_835A_41E2_167BBFDC399E",
    "class": "HotspotPanoramaOverlay",
    "data": {
     "label": "Imagen"
    },
    "areas": [
     {
      "displayTooltipInTouchScreens": true,
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "INICIO"
     }
    ],
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 76,
         "width": 76,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "hfov": 25.39,
        "yaw": -132.76,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 18.14
       }
      ],
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "hfov": 25.39,
        "yaw": -132.76,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 18.14
       }
      ],
      "image": {
       "levels": [
        {
         "height": 152,
         "width": 152,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "id": "overlay_F4A84425_E827_86CE_41EA_1AE33DFA2183",
    "class": "HotspotPanoramaOverlay",
    "data": {
     "label": "Imagen"
    },
    "areas": [
     {
      "displayTooltipInTouchScreens": true,
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": " DESCUBRE QU\u00c9 \u000aQUIERES ESTUDIAR"
     }
    ],
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 76,
         "width": 76,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_1_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "hfov": 25.1,
        "yaw": -59.7,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 20.08
       }
      ],
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "hfov": 25.1,
        "yaw": -59.7,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 20.08
       }
      ],
      "image": {
       "levels": [
        {
         "height": 152,
         "width": 152,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "id": "overlay_F465AE99_E827_83C7_41E2_DC2E34B52372",
    "class": "HotspotPanoramaOverlay",
    "data": {
     "label": "Imagen"
    },
    "areas": [
     {
      "displayTooltipInTouchScreens": true,
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "CONOCE NUESTRO     \u000a       CAMPUS"
     }
    ],
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 76,
         "width": 76,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "hfov": 25.26,
        "yaw": -20.52,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 19
       }
      ],
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "hfov": 25.26,
        "yaw": -20.52,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 19
       }
      ],
      "image": {
       "levels": [
        {
         "height": 153,
         "width": 153,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "id": "overlay_F2933E5A_E827_837A_41A8_EB8D1A7F829E",
    "class": "HotspotPanoramaOverlay",
    "data": {
     "label": "Imagen"
    },
    "areas": [
     {
      "displayTooltipInTouchScreens": true,
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "INSCR\u00cdBETE"
     }
    ],
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 76,
         "width": 76,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_3_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "hfov": 25.32,
        "yaw": -96.03,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 18.62
       }
      ],
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "hfov": 25.32,
        "yaw": -96.03,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 18.62
       }
      ],
      "image": {
       "levels": [
        {
         "height": 152,
         "width": 152,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_3_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "id": "overlay_F4C24B0C_E820_82DE_41E1_B61DAB236A38",
    "class": "HotspotPanoramaOverlay",
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "displayTooltipInTouchScreens": true,
      "click": "this.mainPlayList.set('selectedIndex', 3)",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "VOLVER ATR\u00c1S"
     }
    ],
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_4_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "hfov": 25.21,
        "yaw": 18.26,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 19.35
       }
      ],
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "hfov": 25.21,
        "yaw": 18.26,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "pitch": 19.35
       }
      ],
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_HS_4_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ]
   }
  ],
  "loop": false,
  "id": "media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA",
  "pitch": 0,
  "partial": false,
  "thumbnailUrl": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_t.jpg",
  "class": "Video360",
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 140,
  "label": "Clase 360"
 },
 {
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10,
  "id": "media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_camera",
  "class": "RotationalCamera",
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "hfov": 120,
   "yaw": -68.52,
   "pitch": -29.51
  }
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA",
    "class": "Video360PlayListItem",
    "camera": "this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_FACEF741_EDF5_6893_41D3_417D2B4D7F9A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FACEF741_EDF5_6893_41D3_417D2B4D7F9A, 0, this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA)"
   }
  ],
  "id": "playList_FACEF741_EDF5_6893_41D3_417D2B4D7F9A",
  "class": "PlayList"
 },
 {
  "class": "Video",
  "label": "sistemas",
  "video": {
   "height": 360,
   "mp4Url": "media/video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D.mp4",
   "width": 640,
   "class": "VideoResource"
  },
  "width": 640,
  "id": "video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE2A42F05_ECD7_5893_41D6_E29A75E3AB1AVideoPlayer)",
    "media": "this.video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D",
    "class": "VideoPlayListItem",
    "player": {
     "viewerArea": {
      "playbackBarBottom": 0,
      "paddingLeft": 0,
      "paddingRight": 0,
      "paddingBottom": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBorderColor": "#000000",
      "toolTipBorderColor": "#767676",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipTextShadowOpacity": 0,
      "paddingTop": 0,
      "transitionDuration": 500,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarBorderRadius": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontColor": "#606060",
      "transitionMode": "blending",
      "progressLeft": 0,
      "playbackBarRight": 0,
      "minWidth": 100,
      "toolTipPaddingBottom": 4,
      "toolTipFontWeight": "normal",
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingLeft": 6,
      "playbackBarBackgroundOpacity": 1,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipBorderSize": 1,
      "progressRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "width": "100%",
      "minHeight": 50,
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "progressBarBackgroundColorDirection": "vertical",
      "borderSize": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundOpacity": 1,
      "height": "100%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontFamily": "Arial",
      "toolTipPaddingTop": 4,
      "playbackBarOpacity": 1,
      "progressBarOpacity": 1,
      "progressHeight": 10,
      "progressBorderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "id": "viewer_uidFAC83741_EDF5_6893_41E3_F95DFA23C76F",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBorderRadius": 0,
      "progressBottom": 2,
      "class": "ViewerArea",
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ]
     },
     "id": "viewer_uidE2A42F05_ECD7_5893_41D6_E29A75E3AB1AVideoPlayer",
     "displayPlaybackBar": true,
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uidE2A42F05_ECD7_5893_41D6_E29A75E3AB1AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_E24CCF55_ECD7_58B3_41EB_E4A853A4E134, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_E24CCF55_ECD7_58B3_41EB_E4A853A4E134, 0, this.video_FE35B3E8_E8E7_8145_41D7_F1FE812A967D)"
   }
  ],
  "id": "PlayList_E24CCF55_ECD7_58B3_41EB_E4A853A4E134",
  "class": "PlayList"
 },
 "this.popup_F9F19B62_E827_814A_41A4_FA718755055D",
 {
  "id": "ImageResource_FAF9AFE2_E827_8145_41B7_AEBB6E75388F",
  "levels": [
   {
    "height": 1693,
    "width": 3353,
    "url": "media/popup_F9F19B62_E827_814A_41A4_FA718755055D_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1034,
    "width": 2048,
    "url": "media/popup_F9F19B62_E827_814A_41A4_FA718755055D_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 517,
    "width": 1024,
    "url": "media/popup_F9F19B62_E827_814A_41A4_FA718755055D_0_2.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 258,
    "width": 512,
    "url": "media/popup_F9F19B62_E827_814A_41A4_FA718755055D_0_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 {
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "closeButtonPaddingBottom": 5,
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBorderSize": 0,
  "backgroundColor": [],
  "bodyBackgroundOpacity": 0,
  "gap": 10,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColorDirection": "vertical",
  "modal": true,
  "titlePaddingLeft": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#888888",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonRollOverIconLineWidth": 5,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingTop": 5,
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingRight": 0,
  "backgroundColorRatios": [],
  "bodyPaddingTop": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "creationPolicy": "delayed",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerPaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "minWidth": 20,
  "closeButtonIconLineWidth": 5,
  "closeButtonBorderColor": "#000000",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "closeButtonBorderSize": 0,
  "children": [
   "this.viewer_uidFAC83741_EDF5_6893_41E3_F95DFA23C76F"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "headerPaddingLeft": 10,
  "headerBackgroundColorDirection": "vertical",
  "shadow": true,
  "shadowBlurRadius": 6,
  "footerBackgroundOpacity": 0,
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonIconColor": "#000000",
  "minHeight": 20,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarMargin": 2,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 0,
  "closeButtonIconHeight": 20,
  "shadowVerticalLength": 0,
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "close": "this.PlayList_E24CCF55_ECD7_58B3_41EB_E4A853A4E134.set('selectedIndex', -1);",
  "titlePaddingRight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_E6482AC8_ECD5_5991_41E8_58B656977BED",
  "shadowHorizontalLength": 3,
  "bodyPaddingBottom": 0,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#666666",
  "data": {
   "name": "Window449"
  },
  "scrollBarOpacity": 0.5,
  "closeButtonPaddingRight": 5,
  "titleFontSize": 14,
  "closeButtonPaddingTop": 5,
  "class": "Window",
  "closeButtonPressedBorderColor": "#000000",
  "overflow": "scroll",
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonIconWidth": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPressedIconLineWidth": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_E26EEF6C_EC95_9830_41E0_786DCDA383A6",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_FAA117DD_EDF5_57B2_41D4_33D40996F0D8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.55,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_FABAC80C_EDF5_5891_41BE_69D1A28F7608",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_FAB4C83B_EDF5_58F7_41E9_1AAFE798C8E8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.21,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_FA8BD86A_EDF5_5891_41C8_DFA5394F1E90",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -160.36,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_FA801898_EDF5_59B2_41D3_F5D0AEC4E06B",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_FA803898_EDF5_59B2_41D0_240AEF230D0D",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_FA801898_EDF5_59B2_41D3_F5D0AEC4E06B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.51,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_FA94F8C7_EDF5_599E_41E9_239C6E84206A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -124.77,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F569F8F6_EDF5_597E_41BE_583C1BCDC4A5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.82,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F57D8915_EDF5_58B2_4196_2F2873676E9E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F5716944_EDF5_5892_41E2_066D7514DC2A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -131.03,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F545D964_EDF5_5891_41E1_2C64735F1C5A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.54,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F558E983_EDF5_5B97_41ED_A31BB50E6AE3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.1,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F52DA9A2_EDF5_5B96_41C4_AA88DD3A402B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.12,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F53F79D1_EDF5_5BB3_41E8_F50AA29EB7B0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.47,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F53399E1_EDF5_5B93_41DC_47085A75B3BC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.96,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_F504CA00_EDF5_5891_41E4_BDD10D7B1023",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F504DA00_EDF5_5891_41D0_A9EABD58B058",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_F504CA00_EDF5_5891_41E4_BDD10D7B1023",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 142.71,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F517CA1F_EDF5_58AF_41E3_33858829B83E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 155.65,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_F5E8AA3E_EDF5_58EE_41E6_F5EA8E491902",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F5E8CA3E_EDF5_58EE_41A4_A5B103C4CB98",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_F5E8AA3E_EDF5_58EE_41E6_F5EA8E491902",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.83,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_F5F9EA5D_EDF5_58B2_41E1_CDE3254036E2",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F5F9FA5D_EDF5_58B2_41E1_34F25B7D3EC5",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_F5F9EA5D_EDF5_58B2_41E1_CDE3254036E2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.49,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F5CB6A7D_EDF5_5973_41E3_7F7BB821EEB4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.38,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_F5DDBA9C_EDF5_59B1_41D3_DFE77CFA5FA6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.48,
   "pitch": 0
  }
 },
 {
  "class": "Video",
  "label": "sistemas",
  "video": {
   "height": 360,
   "mp4Url": "media/video_FC18A339_E8E0_82C7_41EC_DF9088E28F31.mp4",
   "width": 640,
   "class": "VideoResource"
  },
  "width": 640,
  "id": "video_FC18A339_E8E0_82C7_41EC_DF9088E28F31",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_FC18A339_E8E0_82C7_41EC_DF9088E28F31_t.jpg",
  "scaleMode": "fit_inside"
 },
 "this.audio_FC608D83_E820_81CA_41E8_1AC13D061EEE",
 "this.audio_FE490A31_E821_82C7_41DB_F4BE4041A566",
 {
  "data": {
   "label": "musica fondo"
  },
  "id": "audio_F716C662_E821_8345_41E9_D1BF83E42A15",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_F716C662_E821_8345_41E9_D1BF83E42A15.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_F716C662_E821_8345_41E9_D1BF83E42A15.mp3"
  }
 }
], "children": [
 {
  "playbackBarBottom": 5,
  "paddingLeft": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBorderColor": "#000000",
  "toolTipBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowOpacity": 0,
  "paddingTop": 0,
  "transitionDuration": 500,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#000000",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#CCCCCC",
  "transitionMode": "blending",
  "progressLeft": 0,
  "playbackBarRight": 0,
  "minWidth": 500,
  "toolTipPaddingBottom": 4,
  "toolTipFontWeight": "normal",
  "playbackBarBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "progressRight": 0,
  "toolTipBackgroundColor": "#000000",
  "width": "100%",
  "minHeight": 500,
  "progressOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "height": "100%",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "toolTipPaddingTop": 4,
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "progressHeight": 10,
  "top": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 7,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderRadius": 0,
  "progressBottom": 0,
  "class": "ViewerArea",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "right": -0.1
 },
 {
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "gap": 10,
  "height": "16.96%",
  "minHeight": 1,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "layout": "horizontal",
  "bottom": "0%",
  "id": "Container_5CA480E9_557C_B611_41D3_0C8AE87F779F",
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "minWidth": 1,
  "overflow": "scroll",
  "left": "0%",
  "creationPolicy": "delayed",
  "data": {
   "name": "Container ButtonSet"
  },
  "right": "0%",
  "children": [
   {
    "verticalAlign": "middle",
    "maxHeight": 70,
    "paddingLeft": 0,
    "paddingRight": 0,
    "backgroundOpacity": 1,
    "backgroundColor": [
     "#353C48"
    ],
    "gap": 0,
    "height": 70,
    "width": 300,
    "minHeight": 54,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "backgroundColorRatios": [
     0
    ],
    "id": "Container_5F5AD609_557C_BA11_4192_4C163AAD16E5",
    "borderRadius": 10,
    "backgroundColorDirection": "vertical",
    "layout": "horizontal",
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "minWidth": 230,
    "overflow": "scroll",
    "maxWidth": 300,
    "creationPolicy": "delayed",
    "data": {
     "name": "ButtonSet"
    },
    "children": [
     {
      "verticalAlign": "middle",
      "maxHeight": 152,
      "paddingLeft": 0,
      "toolTipFontSize": 12,
      "transparencyActive": true,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "toolTipFontStyle": "normal",
      "mode": "push",
      "toolTipBorderSize": 1,
      "width": 60,
      "toolTipBackgroundColor": "#F6F6F6",
      "height": 70,
      "toolTipBorderColor": "#767676",
      "iconURL": "skin/IconButton_C52EF0DA_DD5E_CA90_41DB_6D0DD12B8CB0.png",
      "toolTip": "INICIO",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "minHeight": 1,
      "borderSize": 0,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "b_inicio"
      },
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "toolTipPaddingTop": 4,
      "cursor": "hand",
      "toolTipShadowBlurRadius": 3,
      "toolTipShadowSpread": 0,
      "id": "IconButton_C52EF0DA_DD5E_CA90_41DB_6D0DD12B8CB0",
      "borderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowOpacity": 1,
      "toolTipDisplayTime": 600,
      "maxWidth": 152,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "minWidth": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "toolTipFontColor": "#606060",
      "toolTipPaddingBottom": 4,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "maxHeight": 152,
      "paddingLeft": 0,
      "toolTipFontSize": 12,
      "transparencyActive": true,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "toolTipFontStyle": "normal",
      "mode": "push",
      "toolTipBorderSize": 1,
      "width": 62,
      "toolTipBackgroundColor": "#F6F6F6",
      "height": 70,
      "toolTipBorderColor": "#767676",
      "iconURL": "skin/IconButton_C502E3E9_DD2D_CEB3_41EA_3140419144C5.png",
      "toolTip": "INSCR\u00cdBETE",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "minHeight": 1,
      "borderSize": 0,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "b_inscribete"
      },
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "toolTipPaddingTop": 4,
      "cursor": "hand",
      "toolTipShadowBlurRadius": 3,
      "toolTipShadowSpread": 0,
      "id": "IconButton_C502E3E9_DD2D_CEB3_41EA_3140419144C5",
      "borderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowOpacity": 1,
      "toolTipDisplayTime": 600,
      "maxWidth": 152,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "minWidth": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "toolTipFontColor": "#606060",
      "toolTipPaddingBottom": 4,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "maxHeight": 152,
      "paddingLeft": 0,
      "toolTipFontSize": 12,
      "transparencyActive": true,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "toolTipFontStyle": "normal",
      "mode": "push",
      "toolTipBorderSize": 1,
      "width": 62,
      "toolTipBackgroundColor": "#F6F6F6",
      "height": 70,
      "toolTipBorderColor": "#767676",
      "iconURL": "skin/IconButton_C829970C_DD55_3770_41D8_89B35855282F.png",
      "toolTip": "DESCUBRE QUE QUIERES ESTUDIAR",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "minHeight": 1,
      "borderSize": 0,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "b_buscar"
      },
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "toolTipPaddingTop": 4,
      "cursor": "hand",
      "toolTipShadowBlurRadius": 3,
      "toolTipShadowSpread": 0,
      "id": "IconButton_C829970C_DD55_3770_41D8_89B35855282F",
      "borderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowOpacity": 1,
      "toolTipDisplayTime": 600,
      "maxWidth": 152,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "minWidth": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "toolTipFontColor": "#606060",
      "toolTipPaddingBottom": 4,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "maxHeight": 153,
      "paddingLeft": 0,
      "toolTipFontSize": 12,
      "transparencyActive": false,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "toolTipFontStyle": "normal",
      "mode": "push",
      "toolTipBorderSize": 1,
      "width": 57,
      "toolTipBackgroundColor": "#F6F6F6",
      "height": 65,
      "toolTipBorderColor": "#767676",
      "iconURL": "skin/IconButton_C663395B_DDF5_3B97_41D6_910195C99B04.png",
      "toolTip": "CONOCE EL CAMPUS",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "minHeight": 1,
      "borderSize": 0,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "b_campus"
      },
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "toolTipPaddingTop": 4,
      "cursor": "hand",
      "toolTipShadowBlurRadius": 3,
      "toolTipShadowSpread": 0,
      "id": "IconButton_C663395B_DDF5_3B97_41D6_910195C99B04",
      "borderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowOpacity": 1,
      "toolTipDisplayTime": 600,
      "maxWidth": 153,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "minWidth": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "toolTipFontColor": "#606060",
      "toolTipPaddingBottom": 4,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false
     },
     "this.IconButton_E37CA9B7_E983_F12E_41E9_5FA0638D4D8D"
    ],
    "paddingBottom": 0,
    "shadow": false
   }
  ],
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "children": [
   {
    "playbackBarBottom": 0,
    "paddingLeft": 0,
    "playbackBarHeadShadowHorizontalLength": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "playbackBarHeight": 10,
    "playbackBarHeadOpacity": 1,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "progressBorderColor": "#000000",
    "toolTipBorderColor": "#000000",
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "playbackBarBorderColor": "#FFFFFF",
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "toolTipTextShadowOpacity": 0,
    "paddingTop": 0,
    "transitionDuration": 500,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarProgressBorderSize": 0,
    "progressBarBorderRadius": 0,
    "playbackBarHeadBorderSize": 0,
    "playbackBarHeadBorderRadius": 0,
    "progressBackgroundColorDirection": "vertical",
    "toolTipShadowSpread": 0,
    "transitionMode": "blending",
    "toolTipShadowColor": "#000000",
    "playbackBarBorderRadius": 0,
    "playbackBarHeadWidth": 6,
    "playbackBarProgressBorderColor": "#000000",
    "toolTipDisplayTime": 600,
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontColor": "#CCCCCC",
    "progressLeft": 0,
    "playbackBarRight": 0,
    "minWidth": 1,
    "toolTipPaddingBottom": 4,
    "toolTipFontWeight": "normal",
    "playbackBarBorderSize": 0,
    "playbackBarProgressOpacity": 1,
    "toolTipPaddingLeft": 6,
    "playbackBarBackgroundOpacity": 1,
    "shadow": false,
    "toolTipFontSize": 12,
    "toolTipFontStyle": "normal",
    "playbackBarHeadShadowColor": "#000000",
    "toolTipBorderSize": 1,
    "progressRight": 0,
    "toolTipBackgroundColor": "#000000",
    "progressOpacity": 1,
    "minHeight": 1,
    "playbackBarHeadShadowOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingRight": 6,
    "progressBarBackgroundColorDirection": "vertical",
    "borderSize": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "playbackBarHeadShadow": true,
    "toolTipTextShadowColor": "#000000",
    "progressBackgroundOpacity": 1,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "toolTipFontFamily": "Arial",
    "toolTipPaddingTop": 4,
    "playbackBarOpacity": 1,
    "progressBarOpacity": 1,
    "progressHeight": 10,
    "top": "0%",
    "toolTipShadowBlurRadius": 3,
    "progressBorderSize": 0,
    "borderRadius": 0,
    "bottom": "0.22%",
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "id": "MapViewer",
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowOpacity": 1,
    "progressBarBorderSize": 0,
    "progressBackgroundColorRatios": [
     0
    ],
    "toolTipBorderRadius": 7,
    "playbackBarHeadShadowVerticalLength": 0,
    "progressBorderRadius": 0,
    "progressBottom": 2,
    "class": "ViewerArea",
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarHeadHeight": 15,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "playbackBarLeft": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "left": "0.2%",
    "playbackBarProgressBorderRadius": 0,
    "toolTipOpacity": 1,
    "progressBarBorderColor": "#000000",
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "right": "0%"
   },
   {
    "selectedPopUpBackgroundColor": "#333333",
    "popUpShadowOpacity": 0,
    "popUpBackgroundOpacity": 0.84,
    "paddingLeft": 5,
    "paddingRight": 5,
    "backgroundOpacity": 0.84,
    "fontSize": 14,
    "backgroundColor": [
     "#333333",
     "#000000"
    ],
    "gap": 0,
    "height": 25,
    "playList": "this.DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C_playlist",
    "width": 150,
    "minHeight": 20,
    "textDecoration": "none",
    "fontFamily": "Arial",
    "popUpShadowSpread": 1,
    "borderSize": 0,
    "popUpShadowColor": "#000000",
    "fontStyle": "normal",
    "rollOverPopUpFontColor": "#CCCCCC",
    "popUpShadowBlurRadius": 6,
    "paddingTop": 0,
    "popUpBorderRadius": 0,
    "rollOverPopUpBackgroundColor": "#990000",
    "arrowColor": "#FFFFFF",
    "top": "2.65%",
    "fontWeight": "normal",
    "backgroundColorRatios": [
     0,
     1
    ],
    "popUpFontColor": "#000000",
    "id": "DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C",
    "borderRadius": 4,
    "backgroundColorDirection": "vertical",
    "arrowBeforeLabel": false,
    "class": "DropDown",
    "minWidth": 150,
    "popUpBackgroundColor": "#999999",
    "data": {
     "name": "Map DropDown"
    },
    "right": "42.15%",
    "selectedPopUpFontColor": "#FFFFFF",
    "fontColor": "#FFFFFF",
    "popUpShadow": false,
    "paddingBottom": 0,
    "shadow": false
   }
  ],
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "shadowBlurRadius": 10,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "gap": 10,
  "shadowOpacity": 0.39,
  "minHeight": 1,
  "height": "82.065%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "shadowSpread": 1,
  "paddingTop": 0,
  "width": "73.564%",
  "scrollBarVisible": "rollOver",
  "top": "1.27%",
  "contentOpaque": false,
  "visible": false,
  "layout": "absolute",
  "backgroundColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 0,
  "id": "Container_82297C33_8D7F_F07D_41DC_76A3E2DBB328",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "minWidth": 1,
  "overflow": "scroll",
  "horizontalAlign": "left",
  "shadowVerticalLength": 0,
  "data": {
   "name": "Container Map"
  },
  "right": "12.38%",
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "shadow": true
 },
 {
  "verticalAlign": "middle",
  "maxHeight": 682,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "data": {
   "name": "Logo_Jave"
  },
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "width": "22.917%",
  "minHeight": 1,
  "url": "skin/Image_D215B399_DD11_2308_41B5_3990EC6FD912.png",
  "borderSize": 0,
  "horizontalAlign": "center",
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "top": "0.49%",
  "bottom": "87.99%",
  "borderRadius": 0,
  "id": "Image_D215B399_DD11_2308_41B5_3990EC6FD912",
  "class": "Image",
  "minWidth": 1,
  "maxWidth": 1757,
  "left": "0%",
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "maxHeight": 128,
  "paddingLeft": 0,
  "toolTipFontSize": 12,
  "transparencyActive": true,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "toolTipFontStyle": "normal",
  "mode": "toggle",
  "toolTipBorderSize": 1,
  "width": 42.05,
  "toolTipBackgroundColor": "#F6F6F6",
  "height": 37,
  "toolTipBorderColor": "#767676",
  "iconURL": "skin/IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87.png",
  "toolTip": "Fullscreen",
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "minHeight": 1,
  "borderSize": 0,
  "horizontalAlign": "right",
  "toolTipTextShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "data": {
   "name": "icon_pnatallaComple"
  },
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "toolTipPaddingTop": 4,
  "top": "20.72%",
  "cursor": "hand",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "id": "IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87",
  "borderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowOpacity": 1,
  "toolTipDisplayTime": 600,
  "maxWidth": 128,
  "toolTipTextShadowBlurRadius": 3,
  "class": "IconButton",
  "minWidth": 1,
  "toolTipShadowHorizontalLength": 0,
  "toolTipBorderRadius": 3,
  "toolTipOpacity": 1,
  "toolTipFontColor": "#606060",
  "toolTipPaddingBottom": 4,
  "toolTipFontWeight": "normal",
  "right": "1.63%",
  "paddingBottom": 0,
  "toolTipPaddingLeft": 6,
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "paddingLeft": 0,
  "data": {
   "name": "icon_volumen"
  },
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "mode": "toggle",
  "width": 42.01,
  "height": 43,
  "iconURL": "skin/IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27.png",
  "minHeight": 0,
  "borderSize": 0,
  "horizontalAlign": "right",
  "paddingTop": 0,
  "top": "11.19%",
  "cursor": "hand",
  "borderRadius": 0,
  "id": "IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27",
  "class": "IconButton",
  "minWidth": 0,
  "pressedIconURL": "skin/IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27_pressed.png",
  "transparencyActive": true,
  "right": "1.18%",
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "maxHeight": 42,
  "paddingLeft": 0,
  "transparencyActive": false,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "width": 42,
  "height": 42,
  "iconURL": "skin/IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB.png",
  "minHeight": 1,
  "data": {
   "name": "icon_vr"
  },
  "borderSize": 0,
  "horizontalAlign": "right",
  "paddingTop": 0,
  "top": "29.28%",
  "cursor": "hand",
  "borderRadius": 0,
  "id": "IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB",
  "maxWidth": 42,
  "class": "IconButton",
  "minWidth": 1,
  "right": "1.36%",
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "maxHeight": 60,
  "paddingLeft": 0,
  "transparencyActive": false,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "width": 60,
  "height": 60,
  "iconURL": "skin/IconButton_C20D7360_DD32_CFB0_41B2_42390703BCF4.png",
  "minHeight": 1,
  "data": {
   "name": "Menu_escritorio"
  },
  "borderSize": 0,
  "horizontalAlign": "right",
  "click": "this.setComponentVisibility(this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB, true, 0, null, null, false)",
  "paddingTop": 0,
  "top": "0.16%",
  "cursor": "hand",
  "borderRadius": 0,
  "id": "IconButton_C20D7360_DD32_CFB0_41B2_42390703BCF4",
  "maxWidth": 60,
  "class": "IconButton",
  "minWidth": 1,
  "right": "0%",
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "paddingLeft": 0,
  "data": {
   "name": "container max Menu Web"
  },
  "paddingRight": 0,
  "backgroundOpacity": 0.3,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "gap": 10,
  "minHeight": 1,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingTop": 0,
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "top": "10%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F",
  "borderRadius": 0,
  "bottom": "5%",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "minWidth": 1,
  "overflow": "scroll",
  "horizontalAlign": "left",
  "left": "5%",
  "right": "5%",
  "creationPolicy": "delayed",
  "children": [
   {
    "verticalAlign": "top",
    "paddingLeft": 0,
    "data": {
     "name": "container sub"
    },
    "paddingRight": 0,
    "backgroundOpacity": 1,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "gap": 10,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "top": "0%",
    "backgroundColorRatios": [
     0,
     1
    ],
    "bottom": "0%",
    "id": "Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "minWidth": 1,
    "overflow": "scroll",
    "left": "0%",
    "creationPolicy": "delayed",
    "right": "0%",
    "children": [
     {
      "paddingLeft": 0,
      "data": {
       "name": "form_pregrado"
      },
      "paddingRight": 0,
      "backgroundOpacity": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": "100%",
      "minHeight": 1,
      "height": "100%",
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=201",
      "borderSize": 0,
      "paddingTop": 0,
      "top": "0%",
      "visible": false,
      "backgroundColorRatios": [
       0
      ],
      "scrollEnabled": true,
      "id": "WebFrame_C2A72516_E9E3_86CA_41E2_2A69F1FE0B7F",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "minWidth": 1,
      "left": "0%",
      "insetBorder": false,
      "paddingBottom": 0,
      "shadow": false
     },
     {
      "paddingLeft": 0,
      "data": {
       "name": "fom_posgrado"
      },
      "paddingRight": 0,
      "backgroundOpacity": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": "100%",
      "minHeight": 1,
      "height": "100%",
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=221",
      "borderSize": 0,
      "paddingTop": 0,
      "top": "0%",
      "visible": false,
      "backgroundColorRatios": [
       0
      ],
      "scrollEnabled": true,
      "id": "WebFrame_C17D01D4_E9E0_814E_4199_B12238B1BA47",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "minWidth": 1,
      "left": "0%",
      "insetBorder": false,
      "paddingBottom": 0,
      "shadow": false
     },
     {
      "paddingLeft": 0,
      "data": {
       "name": "form_posgradovirtual"
      },
      "paddingRight": 0,
      "backgroundOpacity": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": "100%",
      "minHeight": 1,
      "height": "100%",
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=241",
      "borderSize": 0,
      "paddingTop": 0,
      "top": "0%",
      "visible": false,
      "backgroundColorRatios": [
       0
      ],
      "scrollEnabled": true,
      "id": "WebFrame_C2AEA78F_E9DF_81DA_41B2_8175BB466D39",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "minWidth": 1,
      "left": "0%",
      "insetBorder": false,
      "paddingBottom": 0,
      "shadow": false
     },
     {
      "paddingLeft": 0,
      "data": {
       "name": "form_ale"
      },
      "paddingRight": 0,
      "backgroundOpacity": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": "100%",
      "minHeight": 1,
      "height": "100%",
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=242",
      "borderSize": 0,
      "paddingTop": 0,
      "top": "0%",
      "visible": false,
      "backgroundColorRatios": [
       0
      ],
      "scrollEnabled": true,
      "id": "WebFrame_C7F7211D_E820_BEFF_41EA_F151FA466D6A",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "minWidth": 1,
      "left": "0%",
      "insetBorder": false,
      "paddingBottom": 0,
      "shadow": false
     },
     {
      "paddingLeft": 0,
      "data": {
       "name": "proyectos"
      },
      "paddingRight": 0,
      "backgroundOpacity": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": "100.005%",
      "minHeight": 1,
      "height": "100%",
      "url": "//www.youtube.com/embed/jWCKTGnLmTE",
      "borderSize": 0,
      "paddingTop": 0,
      "top": "0%",
      "visible": false,
      "backgroundColorRatios": [
       0
      ],
      "scrollEnabled": true,
      "id": "WebFrame_CEC0A7B0_E821_81C5_41E7_16F1658BCF3E",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "minWidth": 1,
      "left": "-0.04%",
      "insetBorder": false,
      "paddingBottom": 0,
      "shadow": false
     }
    ],
    "paddingBottom": 0,
    "shadow": false
   }
  ],
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "verticalAlign": "middle",
  "maxHeight": 24,
  "paddingLeft": 0,
  "transparencyActive": false,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "width": 24,
  "height": 24,
  "iconURL": "skin/IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E.png",
  "minHeight": 1,
  "data": {
   "name": "b_cerrar menu"
  },
  "borderSize": 0,
  "horizontalAlign": "center",
  "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, false, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C2A72516_E9E3_86CA_41E2_2A69F1FE0B7F, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C17D01D4_E9E0_814E_4199_B12238B1BA47, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C2AEA78F_E9DF_81DA_41B2_8175BB466D39, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C7F7211D_E820_BEFF_41EA_F151FA466D6A, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_CEC0A7B0_E821_81C5_41E7_16F1658BCF3E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, false, 0, null, null, false)",
  "paddingTop": 0,
  "top": "5.34%",
  "cursor": "hand",
  "visible": false,
  "borderRadius": 0,
  "id": "IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E",
  "maxWidth": 24,
  "class": "IconButton",
  "minWidth": 1,
  "right": "5.22%",
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "paddingLeft": 0,
  "data": {
   "name": "UIComponent6226"
  },
  "paddingRight": 0,
  "backgroundOpacity": 0.55,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "borderSize": 0,
  "paddingTop": 0,
  "top": 0,
  "visible": false,
  "backgroundColorRatios": [
   0
  ],
  "bottom": 0,
  "id": "veilPopupPanorama",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "UIComponent",
  "minWidth": 0,
  "left": 0,
  "right": 0,
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "paddingLeft": 0,
  "data": {
   "name": "ZoomImage6227"
  },
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "backgroundColor": [],
  "minHeight": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "paddingTop": 0,
  "top": 0,
  "visible": false,
  "backgroundColorRatios": [],
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "ZoomImage",
  "minWidth": 0,
  "left": 0,
  "right": 0,
  "paddingBottom": 0,
  "shadow": false
 },
 {
  "iconBeforeLabel": true,
  "verticalAlign": "middle",
  "paddingLeft": 5,
  "data": {
   "name": "CloseButton6228"
  },
  "paddingRight": 5,
  "backgroundOpacity": 0.3,
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconHeight": 20,
  "textDecoration": "none",
  "minHeight": 0,
  "shadowBlurRadius": 6,
  "gap": 5,
  "borderSize": 0,
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "paddingTop": 5,
  "shadowSpread": 1,
  "iconWidth": 20,
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "class": "CloseButton",
  "minWidth": 0,
  "label": "",
  "pressedIconColor": "#888888",
  "iconLineWidth": 5,
  "iconColor": "#000000",
  "rollOverIconColor": "#666666",
  "right": 10,
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "paddingBottom": 5,
  "shadow": false
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "data": {
  "name": "Player552"
 },
 "paddingRight": 0,
 "gap": 10,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "buttonToggleMute": "this.IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27",
 "height": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "id": "rootPlayer",
 "scripts": {
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "borderRadius": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "buttonToggleFullscreen": "this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87",
 "minWidth": 20,
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "creationPolicy": "delayed",
 "start": "this.playAudioList([this.audio_F716C662_E821_8345_41E9_D1BF83E42A15]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87,this.IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27,this.IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87].forEach(function(component) { component.set('visible', false); }) }",
 "paddingBottom": 0,
 "shadow": false
})