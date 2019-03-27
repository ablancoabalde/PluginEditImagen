/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Info sacada de esta Web https://github.com/NeutrinosPlatform/cordova-plugin-ml-text


var j="alert";
var app = {
    // Application Constructor
    initialize: function() { 
      
        // Añado evento para que cuando se pulse el botón Tomar Foto del index.html, llame al metodo onDeviceReady  
        document.getElementById("take-picture-button").addEventListener("click",this.onDeviceReady.bind(this),false);
    },

    onDeviceReady: function() {
  
     // Abre la camara y habilita un función de scaneo
       scan.scanDoc(1, this.onSuccess, this.onFail);
       
    },

    onSuccess: function(imageURI) { 
        
	  // Agrega unas funciones para modificar la camara
       mltext.getText(this.onSuccess, this.onFail,{imgSrc : imageData});
       
    },

    onSuccess: function(imageURI) {

        var image = document.getElementById('myImage');
        image.src = imageURI;
 
        alert(recognizedText);
    },

     onFail: function(message) {

         alert('Failed because: ' + message);
    },

    onFail: function(message) {
        
          alert('Failed because 2: ' + message);
    }
};

app.initialize();