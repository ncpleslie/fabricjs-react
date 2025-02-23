import { fabric } from 'fabric';
export interface FabricJSEditor {
    canvas: fabric.Canvas;
    addCircle: () => void;
    addRectangle: () => void;
    addLine: () => void;
    addText: (text: string) => void;
    updateText: (text: string) => void;
    deleteAll: () => void;
    deleteSelected: () => void;
    fillColor: string;
    strokeColor: string;
    setFillColor: (color: string) => void;
    setStrokeColor: (color: string) => void;
    zoomIn: () => void;
    zoomOut: () => void;
}
/**
 * Creates editor
 */
declare const buildEditor: (canvas: fabric.Canvas, fillColor: string, strokeColor: string, _setFillColor: (color: string) => void, _setStrokeColor: (color: string) => void, scaleStep: number) => FabricJSEditor;
interface FabricJSEditorState {
    editor?: FabricJSEditor;
}
interface FabricJSEditorHook extends FabricJSEditorState {
    selectedObjects?: fabric.Object[];
    onReady: (canvas: fabric.Canvas) => void;
}
interface FabricJSEditorHookProps {
    defaultFillColor?: string;
    defaultStrokeColor?: string;
    scaleStep?: number;
}
declare const useFabricJSEditor: (props?: FabricJSEditorHookProps) => FabricJSEditorHook;
export { buildEditor, useFabricJSEditor, FabricJSEditorHook };
