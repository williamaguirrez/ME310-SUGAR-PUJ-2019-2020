TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "gyroscopeEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonCardboardView": "this.IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer"
 },
 {
  "video": [
   {
    "type": "application/x-mpegurl",
    "width": 1280,
    "url": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867.m3u8",
    "height": 720,
    "bitrate": 2004,
    "framerate": 29.97,
    "class": "Video360Resource",
    "posterURL": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867_poster.jpg"
   },
   {
    "type": "video/mp4",
    "width": 1280,
    "url": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867.mp4",
    "height": 720,
    "bitrate": 5595,
    "framerate": 29.97,
    "class": "Video360Resource",
    "posterURL": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867_poster.jpg"
   }
  ],
  "id": "media_6170EDA2_6D48_AB6A_41C3_C990EB438867",
  "partial": false,
  "adjacentPanoramas": [
   {
    "panorama": {
     "video": [
      {
       "type": "application/x-mpegurl",
       "width": 1280,
       "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA.m3u8",
       "height": 720,
       "bitrate": 1284,
       "framerate": 24,
       "class": "Video360Resource",
       "posterURL": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_poster.jpg"
      },
      {
       "type": "video/mp4",
       "width": 1280,
       "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA.mp4",
       "height": 720,
       "bitrate": 1284,
       "framerate": 24,
       "class": "Video360Resource",
       "posterURL": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_poster.jpg"
      }
     ],
     "id": "media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA",
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": "this.media_6170EDA2_6D48_AB6A_41C3_C990EB438867",
       "class": "AdjacentPanorama",
       "yaw": 18.26,
       "distance": 1,
       "backwardYaw": -147.08
      }
     ],
     "class": "Video360",
     "loop": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_t.jpg",
     "label": "Clase 360",
     "hfovMin": 60,
     "vfov": 180,
     "overlays": [
      {
       "hfov": 45,
       "class": "TripodCapPanoramaOverlay",
       "id": "media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_tcap0",
       "rotate": false,
       "inertia": false,
       "image": {
        "levels": [
         {
          "height": 850,
          "width": 850,
          "url": "media/media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_tcap0.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "angle": 0
      },
      {
       "items": [
        {
         "playbackPositions": [
          {
           "hfov": 25.21,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "yaw": 18.26,
           "roll": 0,
           "timestamp": 0,
           "pitch": 19.35
          }
         ],
         "yaw": 0,
         "class": "HotspotPanoramaOverlayImage",
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
       ],
       "enabledInCardboard": true,
       "class": "HotspotPanoramaOverlay",
       "id": "overlay_F4C24B0C_E820_82DE_41E1_B61DAB236A38",
       "areas": [
        {
         "displayTooltipInTouchScreens": true,
         "class": "HotspotPanoramaOverlayArea",
         "toolTip": "VOLVER ATR\u00c1S",
         "mapColor": "#FF0000",
         "click": "this.startPanoramaWithCamera(this.media_6170EDA2_6D48_AB6A_41C3_C990EB438867, this.camera_E88F8291_E6DF_3BA5_41E5_05CF51B8645D); this.mainPlayList.set('selectedIndex', 0); this.MainViewerPanoramaPlayer.play()"
        }
       ],
       "data": {
        "label": "Image"
       },
       "useHandCursor": true,
       "maps": [
        {
         "playbackPositions": [
          {
           "hfov": 25.21,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "yaw": 18.26,
           "roll": 0,
           "timestamp": 0,
           "pitch": 19.35
          }
         ],
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
         "pitch": 0
        }
       ],
       "rollOverDisplay": false
      }
     ],
     "hfovMax": 140
    },
    "class": "AdjacentPanorama",
    "yaw": -147.08,
    "distance": 1,
    "backwardYaw": 18.26
   }
  ],
  "class": "Video360",
  "loop": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867_t.jpg",
  "label": "PERDER EL MIEDO A VOLAR EN AVI\u00d3N - DESPEGUE EN VR 360 GRADOS",
  "hfovMin": 60,
  "vfov": 180,
  "overlays": [
   {
    "items": [
     {
      "playbackPositions": [
       {
        "hfov": 13.85,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "yaw": -147.08,
        "roll": 0,
        "timestamp": 0,
        "pitch": 65.33
       }
      ],
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "enabledInCardboard": true,
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_62D3D467_6D48_B9EA_41D4_6C9BBEDB0240",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.startPanoramaWithCamera(this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA, this.camera_E8998272_E6DF_3B66_41B0_AD9B87E96B9D); this.setMediaBehaviour(this.playList_E8F4A233_E6DF_3AE5_41E7_70554AC2ED2E, 0, this.media_6170EDA2_6D48_AB6A_41C3_C990EB438867); this.MainViewerPanoramaPlayer.play()"
     }
    ],
    "data": {
     "label": "Image"
    },
    "useHandCursor": true,
    "maps": [
     {
      "playbackPositions": [
       {
        "hfov": 13.85,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "yaw": -147.08,
        "roll": 0,
        "timestamp": 0,
        "pitch": 65.33
       }
      ],
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_6170EDA2_6D48_AB6A_41C3_C990EB438867_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "rollOverDisplay": false
   }
  ],
  "hfovMax": 140
 },
 {
  "initialPosition": {
   "hfov": 120,
   "class": "RotationalCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "class": "RotationalCamera",
  "id": "media_6170EDA2_6D48_AB6A_41C3_C990EB438867_camera",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_6170EDA2_6D48_AB6A_41C3_C990EB438867",
    "camera": "this.media_6170EDA2_6D48_AB6A_41C3_C990EB438867_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0, this.media_6170EDA2_6D48_AB6A_41C3_C990EB438867)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C_playlist"
 },
 "this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA",
 {
  "initialPosition": {
   "hfov": 120,
   "class": "RotationalCameraPosition",
   "yaw": -68.52,
   "pitch": -29.51
  },
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "class": "RotationalCamera",
  "id": "media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_camera",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "playList_E8F4A233_E6DF_3AE5_41E7_70554AC2ED2E",
  "items": [
   {
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA",
    "camera": "this.media_C8735A53_DC72_3B90_41C3_4E3DC1018FEA_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_E8F4A233_E6DF_3AE5_41E7_70554AC2ED2E, 0, '#000000')"
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 120,
   "class": "RotationalCameraPosition",
   "yaw": -161.74,
   "pitch": 0
  },
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "class": "RotationalCamera",
  "id": "camera_E8998272_E6DF_3B66_41B0_AD9B87E96B9D",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10
 },
 {
  "initialPosition": {
   "hfov": 120,
   "class": "RotationalCameraPosition",
   "yaw": 32.92,
   "pitch": 0
  },
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1,
  "class": "RotationalCamera",
  "id": "camera_E88F8291_E6DF_3BA5_41E5_05CF51B8645D",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10
 },
 {
  "data": {
   "label": "musica fondo"
  },
  "autoplay": true,
  "class": "MediaAudio",
  "id": "audio_F716C662_E821_8345_41E9_D1BF83E42A15",
  "audio": {
   "mp3Url": "media/audio_F716C662_E821_8345_41E9_D1BF83E42A15.mp3",
   "oggUrl": "media/audio_F716C662_E821_8345_41E9_D1BF83E42A15.ogg",
   "class": "AudioResource"
  }
 }
], "children": [
 {
  "paddingLeft": 0,
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadHeight": 15,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColorDirection": "vertical",
  "minWidth": 500,
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipDisplayTime": 600,
  "toolTipTextShadowOpacity": 0,
  "paddingTop": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "playbackBarHeight": 10,
  "playbackBarBottom": 5,
  "shadow": false,
  "transitionDuration": 500,
  "toolTipFontSize": 12,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "toolTipOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressHeight": 10,
  "transitionMode": "blending",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowColor": "#000000",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "toolTipFontWeight": "normal",
  "toolTipFontColor": "#CCCCCC",
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "100%",
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "width": "100%",
  "progressRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "borderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 500,
  "playbackBarProgressBorderRadius": 0,
  "top": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "id": "MainViewer",
  "progressBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "right": -0.1,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderRadius": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 7
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderSize": 1,
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingTop": 4,
      "class": "IconButton",
      "maxHeight": 152,
      "toolTip": "INICIO",
      "height": 70,
      "transparencyActive": true,
      "width": 60,
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "toolTipBorderColor": "#767676",
      "toolTipDisplayTime": 600,
      "horizontalAlign": "center",
      "toolTipTextShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 0); this.MainViewerPanoramaPlayer.play()",
      "toolTipPaddingRight": 6,
      "paddingTop": 0,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "maxWidth": 152,
      "shadow": false,
      "cursor": "hand",
      "toolTipOpacity": 1,
      "toolTipFontFamily": "Arial",
      "id": "IconButton_C52EF0DA_DD5E_CA90_41DB_6D0DD12B8CB0",
      "toolTipShadowSpread": 0,
      "data": {
       "name": "b_inicio"
      },
      "toolTipFontSize": 12,
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontStyle": "normal",
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipBorderRadius": 3,
      "toolTipPaddingLeft": 6,
      "iconURL": "skin/IconButton_C52EF0DA_DD5E_CA90_41DB_6D0DD12B8CB0.png",
      "paddingBottom": 0,
      "toolTipFontColor": "#606060"
     }
    ],
    "backgroundColor": [
     "#353C48"
    ],
    "scrollBarOpacity": 0.5,
    "backgroundColorRatios": [
     0
    ],
    "paddingRight": 0,
    "class": "Container",
    "maxHeight": 70,
    "verticalAlign": "middle",
    "height": 70,
    "width": 300,
    "minWidth": 230,
    "borderSize": 0,
    "gap": 0,
    "layout": "horizontal",
    "horizontalAlign": "center",
    "paddingTop": 0,
    "borderRadius": 10,
    "backgroundOpacity": 1,
    "minHeight": 54,
    "maxWidth": 300,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "id": "Container_5F5AD609_557C_BA11_4192_4C163AAD16E5",
    "data": {
     "name": "ButtonSet"
    },
    "scrollBarVisible": "rollOver",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "paddingBottom": 0
   }
  ],
  "layout": "horizontal",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "class": "Container",
  "gap": 10,
  "verticalAlign": "middle",
  "height": "16.96%",
  "minWidth": 1,
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "0%",
  "id": "Container_5CA480E9_557C_B611_41D3_0C8AE87F779F",
  "data": {
   "name": "Container ButtonSet"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "creationPolicy": "delayed",
  "left": "0%",
  "right": "0%",
  "paddingBottom": 0,
  "overflow": "scroll"
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "progressBorderRadius": 0,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "playbackBarHeadHeight": 15,
    "paddingRight": 0,
    "playbackBarBorderColor": "#FFFFFF",
    "playbackBarHeadShadowVerticalLength": 0,
    "progressBarBorderColor": "#000000",
    "playbackBarHeadShadowOpacity": 0.7,
    "progressBackgroundColorDirection": "vertical",
    "minWidth": 1,
    "toolTipPaddingBottom": 4,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadOpacity": 1,
    "toolTipBorderColor": "#000000",
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "toolTipDisplayTime": 600,
    "toolTipTextShadowOpacity": 0,
    "paddingTop": 0,
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "progressBottom": 2,
    "playbackBarHeight": 10,
    "playbackBarBottom": 0,
    "shadow": false,
    "toolTipOpacity": 1,
    "transitionDuration": 500,
    "toolTipShadowSpread": 0,
    "playbackBarProgressBorderSize": 0,
    "progressBarBorderRadius": 0,
    "toolTipFontSize": 12,
    "toolTipShadowHorizontalLength": 0,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "playbackBarHeadWidth": 6,
    "progressHeight": 10,
    "transitionMode": "blending",
    "playbackBarBorderRadius": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "toolTipShadowColor": "#000000",
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "progressBarBorderSize": 0,
    "playbackBarProgressBorderColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipFontWeight": "normal",
    "toolTipFontColor": "#CCCCCC",
    "toolTipTextShadowColor": "#000000",
    "playbackBarProgressOpacity": 1,
    "progressLeft": 0,
    "toolTipPaddingTop": 4,
    "class": "ViewerArea",
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "toolTipShadowVerticalLength": 0,
    "playbackBarBackgroundOpacity": 1,
    "toolTipBackgroundColor": "#000000",
    "playbackBarBorderSize": 0,
    "borderSize": 0,
    "progressRight": 0,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "toolTipShadowOpacity": 1,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarHeadBorderColor": "#000000",
    "borderRadius": 0,
    "playbackBarHeadBorderRadius": 0,
    "progressOpacity": 1,
    "toolTipPaddingRight": 6,
    "progressBarBackgroundColorDirection": "vertical",
    "playbackBarHeadShadow": true,
    "playbackBarHeadShadowColor": "#000000",
    "minHeight": 1,
    "playbackBarProgressBorderRadius": 0,
    "top": "0%",
    "playbackBarOpacity": 1,
    "progressBackgroundOpacity": 1,
    "progressBarOpacity": 1,
    "playbackBarHeadBorderSize": 0,
    "id": "MapViewer",
    "progressBorderSize": 0,
    "playbackBarRight": 0,
    "bottom": "0.22%",
    "toolTipShadowBlurRadius": 3,
    "playbackBarBackgroundColorDirection": "vertical",
    "left": "0.2%",
    "toolTipFontStyle": "normal",
    "playbackBarHeadShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "right": "0%",
    "progressBorderColor": "#000000",
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarLeft": 0,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "progressBackgroundColorRatios": [
     0
    ],
    "toolTipBorderRadius": 7
   },
   {
    "paddingLeft": 5,
    "arrowBeforeLabel": false,
    "selectedPopUpFontColor": "#FFFFFF",
    "backgroundColor": [
     "#333333",
     "#000000"
    ],
    "popUpShadow": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 5,
    "class": "DropDown",
    "fontColor": "#FFFFFF",
    "height": 25,
    "width": 150,
    "popUpFontColor": "#000000",
    "minWidth": 150,
    "borderSize": 0,
    "popUpShadowColor": "#000000",
    "fontFamily": "Arial",
    "gap": 0,
    "fontStyle": "normal",
    "playList": "this.DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C_playlist",
    "popUpShadowSpread": 1,
    "rollOverPopUpBackgroundColor": "#990000",
    "popUpBorderRadius": 0,
    "rollOverPopUpFontColor": "#CCCCCC",
    "paddingTop": 0,
    "borderRadius": 4,
    "popUpShadowBlurRadius": 6,
    "minHeight": 20,
    "top": "2.65%",
    "fontWeight": "normal",
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "fontSize": 14,
    "backgroundOpacity": 0.84,
    "popUpBackgroundColor": "#999999",
    "id": "DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C",
    "arrowColor": "#FFFFFF",
    "data": {
     "name": "Map DropDown"
    },
    "popUpShadowOpacity": 0,
    "selectedPopUpBackgroundColor": "#333333",
    "textDecoration": "none",
    "popUpBackgroundOpacity": 0.84,
    "right": "42.15%",
    "paddingBottom": 0
   }
  ],
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "class": "Container",
  "gap": 10,
  "verticalAlign": "top",
  "height": "82.065%",
  "width": "73.564%",
  "minWidth": 1,
  "borderSize": 0,
  "layout": "absolute",
  "horizontalAlign": "left",
  "paddingTop": 0,
  "borderRadius": 0,
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "top": "1.27%",
  "shadow": true,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "backgroundOpacity": 1,
  "shadowSpread": 1,
  "id": "Container_82297C33_8D7F_F07D_41DC_76A3E2DBB328",
  "data": {
   "name": "Container Map"
  },
  "shadowColor": "#000000",
  "shadowBlurRadius": 10,
  "scrollBarVisible": "rollOver",
  "shadowHorizontalLength": 0,
  "shadowOpacity": 0.39,
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "right": "12.38%",
  "paddingBottom": 0,
  "overflow": "scroll"
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "class": "Image",
  "maxHeight": 682,
  "verticalAlign": "middle",
  "width": "22.917%",
  "minWidth": 1,
  "borderSize": 0,
  "url": "skin/Image_D215B399_DD11_2308_41B5_3990EC6FD912.png",
  "horizontalAlign": "center",
  "paddingTop": 0,
  "borderRadius": 0,
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "minHeight": 1,
  "maxWidth": 1757,
  "top": "0.49%",
  "shadow": false,
  "bottom": "87.99%",
  "id": "Image_D215B399_DD11_2308_41B5_3990EC6FD912",
  "data": {
   "name": "Logo_Jave"
  },
  "left": "0%",
  "paddingBottom": 0
 },
 {
  "paddingLeft": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "mode": "toggle",
  "toolTipPaddingTop": 4,
  "class": "IconButton",
  "maxHeight": 128,
  "toolTip": "Fullscreen",
  "height": 37,
  "transparencyActive": true,
  "width": 42.05,
  "toolTipBackgroundColor": "#F6F6F6",
  "minWidth": 1,
  "borderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "toolTipShadowOpacity": 1,
  "verticalAlign": "top",
  "toolTipBorderColor": "#767676",
  "toolTipDisplayTime": 600,
  "horizontalAlign": "right",
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingRight": 6,
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "maxWidth": 128,
  "top": "20.72%",
  "shadow": false,
  "cursor": "hand",
  "toolTipOpacity": 1,
  "backgroundOpacity": 0,
  "toolTipFontFamily": "Arial",
  "id": "IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87",
  "toolTipShadowSpread": 0,
  "data": {
   "name": "icon_pnatallaComple"
  },
  "toolTipFontSize": 12,
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "right": "1.63%",
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "iconURL": "skin/IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87.png",
  "paddingBottom": 0,
  "toolTipFontColor": "#606060"
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "mode": "toggle",
  "class": "IconButton",
  "verticalAlign": "top",
  "height": 43,
  "pressedIconURL": "skin/IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27_pressed.png",
  "width": 42.01,
  "minWidth": 0,
  "borderSize": 0,
  "transparencyActive": true,
  "horizontalAlign": "right",
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "top": "11.19%",
  "shadow": false,
  "cursor": "hand",
  "backgroundOpacity": 0,
  "id": "IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27",
  "data": {
   "name": "icon_volumen"
  },
  "right": "1.18%",
  "iconURL": "skin/IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27.png",
  "paddingBottom": 0
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "mode": "push",
  "class": "IconButton",
  "maxHeight": 42,
  "verticalAlign": "top",
  "height": 42,
  "transparencyActive": false,
  "width": 42,
  "minWidth": 1,
  "borderSize": 0,
  "horizontalAlign": "right",
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "maxWidth": 42,
  "top": "29.28%",
  "shadow": false,
  "cursor": "hand",
  "backgroundOpacity": 0,
  "id": "IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB",
  "data": {
   "name": "icon_vr"
  },
  "right": "1.36%",
  "iconURL": "skin/IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB.png",
  "paddingBottom": 0
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "mode": "push",
  "class": "IconButton",
  "maxHeight": 60,
  "verticalAlign": "top",
  "height": 60,
  "transparencyActive": false,
  "width": 60,
  "minWidth": 1,
  "borderSize": 0,
  "horizontalAlign": "right",
  "click": "this.setComponentVisibility(this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB, true, 0, null, null, false)",
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "maxWidth": 60,
  "top": "0.16%",
  "shadow": false,
  "cursor": "hand",
  "backgroundOpacity": 0,
  "id": "IconButton_C20D7360_DD32_CFB0_41B2_42390703BCF4",
  "data": {
   "name": "Menu_escritorio"
  },
  "right": "0%",
  "iconURL": "skin/IconButton_C20D7360_DD32_CFB0_41B2_42390703BCF4.png",
  "paddingBottom": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0,
      "class": "WebFrame",
      "height": "100%",
      "width": "100%",
      "minWidth": 1,
      "borderSize": 0,
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=201",
      "paddingTop": 0,
      "borderRadius": 0,
      "backgroundOpacity": 1,
      "minHeight": 1,
      "top": "0%",
      "shadow": false,
      "visible": false,
      "id": "WebFrame_C2A72516_E9E3_86CA_41E2_2A69F1FE0B7F",
      "data": {
       "name": "form_pregrado"
      },
      "insetBorder": false,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "paddingBottom": 0
     },
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0,
      "class": "WebFrame",
      "height": "100%",
      "width": "100%",
      "minWidth": 1,
      "borderSize": 0,
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=221",
      "paddingTop": 0,
      "borderRadius": 0,
      "backgroundOpacity": 1,
      "minHeight": 1,
      "top": "0%",
      "shadow": false,
      "visible": false,
      "id": "WebFrame_C17D01D4_E9E0_814E_4199_B12238B1BA47",
      "data": {
       "name": "fom_posgrado"
      },
      "insetBorder": false,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "paddingBottom": 0
     },
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0,
      "class": "WebFrame",
      "height": "100%",
      "width": "100%",
      "minWidth": 1,
      "borderSize": 0,
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=241",
      "paddingTop": 0,
      "borderRadius": 0,
      "backgroundOpacity": 1,
      "minHeight": 1,
      "top": "0%",
      "shadow": false,
      "visible": false,
      "id": "WebFrame_C2AEA78F_E9DF_81DA_41B2_8175BB466D39",
      "data": {
       "name": "form_posgradovirtual"
      },
      "insetBorder": false,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "paddingBottom": 0
     },
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0,
      "class": "WebFrame",
      "height": "100%",
      "width": "100%",
      "minWidth": 1,
      "borderSize": 0,
      "url": "https://formularios.javerianacali.edu.co/solfin/admon/formulario/encabezadodinamico?idTipoInsc=242",
      "paddingTop": 0,
      "borderRadius": 0,
      "backgroundOpacity": 1,
      "minHeight": 1,
      "top": "0%",
      "shadow": false,
      "visible": false,
      "id": "WebFrame_C7F7211D_E820_BEFF_41EA_F151FA466D6A",
      "data": {
       "name": "form_ale"
      },
      "insetBorder": false,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "paddingBottom": 0
     },
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0,
      "class": "WebFrame",
      "height": "100%",
      "width": "100.005%",
      "minWidth": 1,
      "borderSize": 0,
      "url": "//www.youtube.com/embed/jWCKTGnLmTE",
      "paddingTop": 0,
      "borderRadius": 0,
      "backgroundOpacity": 1,
      "minHeight": 1,
      "top": "0%",
      "shadow": false,
      "visible": false,
      "id": "WebFrame_CEC0A7B0_E821_81C5_41E7_16F1658BCF3E",
      "data": {
       "name": "proyectos"
      },
      "insetBorder": false,
      "left": "-0.04%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "paddingBottom": 0
     }
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarOpacity": 0.5,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "class": "Container",
    "gap": 10,
    "verticalAlign": "top",
    "minWidth": 1,
    "borderSize": 0,
    "layout": "absolute",
    "horizontalAlign": "left",
    "paddingTop": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "top": "0%",
    "shadow": false,
    "scrollBarMargin": 2,
    "backgroundOpacity": 1,
    "bottom": "0%",
    "id": "Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA",
    "data": {
     "name": "container sub"
    },
    "contentOpaque": false,
    "backgroundColorDirection": "vertical",
    "scrollBarVisible": "rollOver",
    "creationPolicy": "delayed",
    "left": "0%",
    "right": "0%",
    "paddingBottom": 0,
    "overflow": "scroll"
   }
  ],
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "class": "Container",
  "gap": 10,
  "verticalAlign": "top",
  "minWidth": 1,
  "borderSize": 0,
  "layout": "absolute",
  "horizontalAlign": "left",
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "top": "10%",
  "shadow": false,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "bottom": "5%",
  "id": "Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F",
  "data": {
   "name": "container max Menu Web"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "creationPolicy": "delayed",
  "left": "5%",
  "right": "5%",
  "paddingBottom": 0,
  "overflow": "scroll"
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "mode": "push",
  "class": "IconButton",
  "maxHeight": 24,
  "verticalAlign": "middle",
  "height": 24,
  "transparencyActive": false,
  "width": 24,
  "minWidth": 1,
  "borderSize": 0,
  "horizontalAlign": "center",
  "click": "this.setComponentVisibility(this.Container_C0357EFF_E9E1_833A_41E7_4B3817637F9F, false, 0, null, null, false); this.setComponentVisibility(this.Container_C1E814ED_E9E1_875E_41C9_B31FF29186DA, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C2A72516_E9E3_86CA_41E2_2A69F1FE0B7F, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C17D01D4_E9E0_814E_4199_B12238B1BA47, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C2AEA78F_E9DF_81DA_41B2_8175BB466D39, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_C7F7211D_E820_BEFF_41EA_F151FA466D6A, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_CEC0A7B0_E821_81C5_41E7_16F1658BCF3E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E, false, 0, null, null, false)",
  "paddingTop": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "maxWidth": 24,
  "top": "5.34%",
  "shadow": false,
  "cursor": "hand",
  "visible": false,
  "backgroundOpacity": 0,
  "id": "IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E",
  "data": {
   "name": "b_cerrar menu"
  },
  "right": "5.22%",
  "iconURL": "skin/IconButton_C30CD396_E827_81CD_41BC_66612CAFBB1E.png",
  "paddingBottom": 0
 }
], 
 "start": "this.playAudioList([this.audio_F716C662_E821_8345_41E9_D1BF83E42A15]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87,this.IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27,this.IconButton_C3767C7D_DD2D_5993_41E9_62B3C335EBAB], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_82990197_8D77_5024_41DE_FC9B8D9F583C_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_C3A9D3E2_DDD5_CEB1_41E8_B7C6A9191D87",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "class": "Player",
 "gap": 10,
 "verticalAlign": "top",
 "height": "100%",
 "width": "100%",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "data": {
  "name": "Player552"
 },
 "buttonToggleMute": "this.IconButton_C23F4660_DDD3_49B0_41E2_56583F79FB27",
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "delayed",
 "overflow": "visible",
 "paddingBottom": 0,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); }
 }
})