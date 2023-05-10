import { Component, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ckeditor';
  ckeditorContent: string = '';
  @ViewChild(CKEditorComponent) ckeditor: CKEditorComponent;

  ngAfterViewChecked() {
    let editor = this.ckeditor.instance;
   // editor.config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';
    //editor.config.mathJaxClass = 'equation';
    editor.config.height = '400';
    editor.config.toolbarGroups = [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
      { name: 'forms', groups: ['forms'] },
      '/',
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
      { name: 'links', groups: ['links'] },
      { name: 'insert', groups: ['insert'] },
      '/',
      { name: 'styles', groups: ['styles'] },
      { name: 'colors', groups: ['colors'] },
      { name: 'tools', groups: ['tools'] },
      { name: 'others', groups: ['others', 'boton1', 'boton2', 'boton3'] },
    ];
    editor.config.removeButtons = 'Preview,PasteFromWord,Anchor,about,Language';


//boton1
    editor.ui.addButton('boton1', {
      label: 'comandoBoton1',
      command: 'comandoBoton1',
      toolbar: 'others',
      icon: 'https://img2.freepng.es/20180901/qoa/kisspng-computer-icons-hyperlink-favicon-url-shortening-po-ms-lianjie-svg-png-icon-free-download-331745-5b8ad9b3d25566.5256320315358263558615.jpg'
    });

    editor.addCommand('comandoBoton1', {
      //@ts-ignore
      exec: function (editor) {
        alert('boton1');
      }
    });
//boton2
    editor.ui.addButton('boton2', {
      label: 'comandoBoton2',
      command: 'comandoBoton2',
      toolbar: 'others',
      icon: 'https://img2.freepng.es/20180901/qoa/kisspng-computer-icons-hyperlink-favicon-url-shortening-po-ms-lianjie-svg-png-icon-free-download-331745-5b8ad9b3d25566.5256320315358263558615.jpg'
    });

    editor.addCommand('comandoBoton2', {
      //@ts-ignore
      exec: function (editor) {
        alert('boton2');
      }
    });

    editor.ui.addButton('boton3', {
      label: 'comandoBoton3',
      command: 'comandoBoton3',
      toolbar: 'others',
      icon: 'https://img2.freepng.es/20180901/qoa/kisspng-computer-icons-hyperlink-favicon-url-shortening-po-ms-lianjie-svg-png-icon-free-download-331745-5b8ad9b3d25566.5256320315358263558615.jpg'
    });

    editor.addCommand('comandoBoton3', {
      //@ts-ignore
      exec: function (editor) {
        alert('boton3');
      }
    });

    /*editor.ui.addButton('insertMathjax', {
      label: 'Insertar Fórmula',
      command: 'mathjax',
      toolbar: 'insert',
      icon: 'https://img2.freepng.es/20180901/qoa/kisspng-computer-icons-hyperlink-favicon-url-shortening-po-ms-lianjie-svg-png-icon-free-download-331745-5b8ad9b3d25566.5256320315358263558615.jpg'
    });
    
    editor.addCommand('mathjax', {
      //@ts-ignore
      exec: function(editor) {
        // Aquí puedes abrir un cuadro de diálogo personalizado para ingresar la fórmula o utilizar alguna otra forma de entrada.
        // Luego, inserta la fórmula en el editor utilizando el siguiente código:
        editor.insertHtml('<span class="mathjax-latex">Tu fórmula matemática aquí</span>');
      }
    });*/
  }
}