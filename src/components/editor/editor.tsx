import './editor.sass';
import React from 'react';
import { Document } from '../documents';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import AppleSVG from '../../assets/images/editor-elements/apple.svg';
import ClockSVG from '../../assets/images/editor-elements/clock.svg';
import DiplomaSVG from '../../assets/images/editor-elements/diploma.svg';
import FavoriteSVG from '../../assets/images/editor-elements/favorite.svg';
import FilesSVG from '../../assets/images/editor-elements/files-2.svg';
import FlaskSVG from '../../assets/images/editor-elements/flask.svg';
import FolderSVG from '../../assets/images/editor-elements/folder.svg';
import IdCardSVG from '../../assets/images/editor-elements/id-card.svg';
import MoleculeSVG from '../../assets/images/editor-elements/molecule.svg';
import NotebookSVG from '../../assets/images/editor-elements/notebook.svg';
import SetSquareSVG from '../../assets/images/editor-elements/set-square.svg';
import SettingsSVG from '../../assets/images/editor-elements/settings.svg';
import TennisSVG from '../../assets/images/editor-elements/tennis.svg';
import TestTubesSVG from '../../assets/images/editor-elements/test-tubes.svg';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
interface FroalaEditorProps {
  text: Document['text'];
  onEditorChange: (text: Document['text']) => void;
}

export const Editor = ({ text, onEditorChange }: FroalaEditorProps) => {
  const onDrag = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.innerHTML);
    e.dataTransfer.setData('type', 'html');
  };

  return (
    <div className="froala-editor">
      <div className="editor-elements">
        <figure draggable="true" onDragStart={onDrag}>
          <img src={AppleSVG} width="50" alt="Apple" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={ClockSVG} width="50" alt="Clock" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={DiplomaSVG} width="50" alt="Diploma" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={FavoriteSVG} width="50" alt="Favorite" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={FilesSVG} width="50" alt="Files" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={FlaskSVG} width="50" alt="Flask" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={FolderSVG} width="50" alt="Folder" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={IdCardSVG} width="50" alt="Card" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={MoleculeSVG} width="50" alt="Molecule" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={NotebookSVG} width="50" alt="Notebook" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={SetSquareSVG} width="50" alt="Set Square" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={SettingsSVG} width="50" alt="Settings" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={TennisSVG} width="50" alt="Tennis" />
        </figure>
        <figure draggable="true" onDragStart={onDrag}>
          <img src={TestTubesSVG} width="50" alt="Test Tubes" />
        </figure>
      </div>
      <FroalaEditorComponent
        model={text}
        config={{
          documentReady: true,
          toolbarButtons: [
            ['undo', 'redo'],
            [
              'bold',
              'italic',
              'underline',
              'strikeThrough',
              'fontFamily',
              'fontSize',
              'textColor',
              'backgroundColor',
              'clearFormatting',
            ],
            [
              'alignLeft',
              'alignCenter',
              'formatOLSimple',
              'alignRight',
              'alignJustify',
              'outdent',
              'indent',
              'quote',
            ],
            [
              'insertLink',
              'insertImage',
              'insertVideo',
              'insertTable',
              'emoticons',
              'insertFile',
              'insertHR',
            ],
          ],
          imageEditButtons: [
            'imageReplace',
            'imageAlign',
            'imageCaption',
            'imageRemove',
            '|',
            'imageLink',
            'linkOpen',
            'linkEdit',
            'linkRemove',
            '-',
            'imageDisplay',
            'imageStyle',
            'imageAlt',
            'imageSize',
          ],
          events: {
            initialized: function () {
              const editor = this as any;

              editor.events.on(
                'drop',
                function (dropEvent: any) {
                  const eventData = dropEvent.originalEvent.dataTransfer;

                  editor.markers.insertAtPoint(dropEvent.originalEvent);
                  editor.selection.restore();
                  !editor.undo.canDo() && editor.undo.saveStep();

                  if (eventData.getData('type') === 'html') {
                    editor.html.insert(eventData.getData('text'));
                    eventData.clearData();
                  }

                  editor.undo.saveStep();

                  return eventData.getData('type') !== 'html';
                },
                true
              );
            },
          },
        }}
        onModelChange={(text: string) => onEditorChange(text)}
      />
    </div>
  );
};
