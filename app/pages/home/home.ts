import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from 'ionic-native';
import { Platform } from 'ionic-angular';

declare var cordova: any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public platform: Platform) {
    
    this.platform.ready().then((readySource) => {
      console.log('Platform ready from ' + readySource);
    

      if (this.platform.is('ios')) {
        console.log("Platorm says that we are on the iOS platform.");
      }
      else {
        console.log("Platform says we are NOT on the iOS platform.");
      }

      console.log("cordova.file.applicationDirectory:" + cordova.file.applicationDirectory);

      File.listDir(cordova.file.applicationDirectory, 'www/build/meditations').then(
        (files) => {
        
          files.forEach( function( file, index ) {
            console.log(file.name);
            //console.log("index: " + index)
          } );


        }
        ).catch(
          (err) => {
            // do something
          }
       );

    }); // platform.ready()

  } // constructor

}  // class
