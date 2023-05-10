import { Component,ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ckeditor';
  ckeditorContent:string= '';
  @ViewChild(CKEditorComponent) ckeditor:CKEditorComponent;

  ngAfterViewChecked(){
    let editor =  this.ckeditor.instance;
    editor.addCommand('yourCustomCommand', {
      // @ts-ignore
      exec: () => {
        alert("boton nuevo")
      },
      refresh: () => {},
    });


    editor.config.height = '400';
  	editor.config.toolbarGroups = [
      { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
      { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
      { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
      { name: 'forms', groups: [ 'forms' ] },
      '/',
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
      { name: 'links', groups: [ 'links' ] },
      { name: 'insert', groups: [ 'insert' ] },
      '/',
      { name: 'styles', groups: [ 'styles' ] },
      { name: 'colors', groups: [ 'colors' ] },
      { name: 'tools', groups: [ 'tools' ] },
      { name: 'others', groups: [ 'others'] },
    ];
    editor.config.removeButtons = 'Preview,PasteFromWord,Anchor,about';
    



  
  }
  }


