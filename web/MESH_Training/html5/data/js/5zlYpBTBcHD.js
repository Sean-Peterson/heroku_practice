window.globalProvideData('slide', '{"title":"Over-the-counter sleep aids generally help you get a good night’s sleep, true or false?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xF0EAD7","alpha":100,"stop":0}]}},"id":"5zlYpBTBcHD","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6r9SOnqAv98.5vid5PXS67N.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6r9SOnqAv98.5zVRZu6DHWQ.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6WmJDbUVTKW"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6hrJc7abjZO.InvalidPromptSlide"}}]}]},"ReviewInt_6r9SOnqAv98":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6r9SOnqAv98.5vid5PXS67N"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6r9SOnqAv98.5zVRZu6DHWQ"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6r9SOnqAv98_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6r9SOnqAv98_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6r9SOnqAv98":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6r9SOnqAv98.5vid5PXS67N"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6r9SOnqAv98.5zVRZu6DHWQ.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6r9SOnqAv98.5zVRZu6DHWQ"}}]},{"kind":"adjustvar","variable":"6r9SOnqAv98.5zVRZu6DHWQ._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6r9SOnqAv98.5zVRZu6DHWQ._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6r9SOnqAv98.5zVRZu6DHWQ._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6r9SOnqAv98.5zVRZu6DHWQ.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6r9SOnqAv98.5zVRZu6DHWQ"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6r9SOnqAv98":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000111"}]}]},"DisableChoices_6r9SOnqAv98":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98.5vid5PXS67N.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6r9SOnqAv98.5zVRZu6DHWQ.ActGrpSetDisabledState"}]},"6r9SOnqAv98_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_player.6oaW2rnGJeg.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"}]},{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6ObQ2WBPW2A","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_player.6gvLBXqL1Pk.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"}]},{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5qnprQ5RSLc","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6BmygGVzmvW","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6TrS8XXSvCe.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5scg5Vk9ErY","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6X5wyvNBmMc.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6BzD3Q9AEXr","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5omcjcgL92V.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6qWAEclX64U.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]},{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6cqneQKoVha","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5jk3UbEOjOh","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5p5Ei1Vu8Dt.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WmJDbUVTKW.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WmJDbUVTKW.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6r9SOnqAv98"}]}]}]}]},"SetLayout_pxabnsnfns00000000111":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000111"}]}]},"NavigationRestrictionNextSlide_5zlYpBTBcHD":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_5zlYpBTBcHD":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"NavigationRestrictionPreviousSlideGesture_5zlYpBTBcHD":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5zlYpBTBcHD"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000111"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000111"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6hrJc7abjZO","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6hrJc7abjZO","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6ObQ2WBPW2A","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6ObQ2WBPW2A","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ObQ2WBPW2A","typea":"var","valueb":"6oaW2rnGJeg","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5qnprQ5RSLc","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5qnprQ5RSLc","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5qnprQ5RSLc","typea":"var","valueb":"6gvLBXqL1Pk","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"},{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6r9SOnqAv98"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6BmygGVzmvW","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6BmygGVzmvW","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6BmygGVzmvW","typea":"var","valueb":"6TrS8XXSvCe","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"},{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6r9SOnqAv98"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5scg5Vk9ErY","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5scg5Vk9ErY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5scg5Vk9ErY","typea":"var","valueb":"6X5wyvNBmMc","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"},{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6r9SOnqAv98"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6BzD3Q9AEXr","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6BzD3Q9AEXr","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6BzD3Q9AEXr","typea":"var","valueb":"5omcjcgL92V","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6cqneQKoVha","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6cqneQKoVha","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6cqneQKoVha","typea":"var","valueb":"6qWAEclX64U","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"},{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6r9SOnqAv98"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5jk3UbEOjOh","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5jk3UbEOjOh","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6r9SOnqAv98"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5jk3UbEOjOh","typea":"var","valueb":"5p5Ei1Vu8Dt","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000111"},{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6r9SOnqAv98"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6r9SOnqAv98_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6BzD3Q9AEXr","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"playnextdrawslide"}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5zlYpBTBcHD"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlideGesture_5zlYpBTBcHD"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6r9SOnqAv98"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6r9SOnqAv98.5zVRZu6DHWQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6r9SOnqAv98.5vid5PXS67N"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ahKwxZTW3C"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":639,"contentheight":96,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5yJfGZDOwEW_-1165153763","id":"01","linkId":"txt__default_5zVRZu6DHWQ","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":93,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":1135}}}],"shapemaskId":"","xPos":24,"yPos":48,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":307.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1110}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1110}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1116}},"html5data":{"xPos":-9,"yPos":-1,"width":624,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1110}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1111}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1111}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1117}},"html5data":{"xPos":-9,"yPos":-1,"width":624,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1111}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1112}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1112}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1112}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1113}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1113}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1113}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}}],"width":615,"height":48,"resume":true,"useHandCursor":true,"id":"5zVRZu6DHWQ","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5vid5PXS67N.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5vid5PXS67N._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5vid5PXS67N"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5evazoVxlyL_190545169","id":"01","linkId":"txt__default_5vid5PXS67N","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":85,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":1136}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":307.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1110}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1110}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1110}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1111}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1111}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1111}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1112}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1112}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1112}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1113}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1113}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":615,"bottom":48,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1113}},"html5data":{"xPos":-1,"yPos":-1,"width":616,"height":49,"strokewidth":3}}}],"width":615,"height":48,"resume":true,"useHandCursor":true,"id":"5vid5PXS67N","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5zVRZu6DHWQ.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5zVRZu6DHWQ._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5zVRZu6DHWQ"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":45,"yPos":116,"tabIndex":1,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":307.5,"rotateYPos":197,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":69,"yPos":116,"width":615,"height":394,"strokewidth":0}},"width":639,"height":394,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":639,"bottom":394,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":1134}}},"id":"6r9SOnqAv98"},{"kind":"vectorshape","rotation":0,"accType":"text","defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6ahKwxZTW3C_1395425799","id":"01","linkId":"txt__default_6ahKwxZTW3C","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":643,"bottom":79,"pngfb":false,"pr":{"l":"Lib","i":1138}}}],"shapemaskId":"","xPos":36,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":42,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":84,"altText":"Over-the-counter sleep aids generally help you get a good night’s sleep, true or false?","pngfb":false,"pr":{"l":"Lib","i":1137}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":85,"strokewidth":0}},"width":648,"height":84,"resume":true,"useHandCursor":true,"id":"6ahKwxZTW3C"},{"kind":"vectorshape","rotation":0,"accType":"text","defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6r9SOnqAv98_CorrectReview","id":"01","linkId":"6r9SOnqAv98_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":405,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":21}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6r9SOnqAv98_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6r9SOnqAv98_IncorrectReview","id":"01","linkId":"6r9SOnqAv98_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":413,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":23}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6r9SOnqAv98_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');