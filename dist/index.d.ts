/// <reference types="react" />
import { fabric } from 'fabric';
import { useFabricJSEditor, FabricJSEditor, FabricJSEditorHook } from './editor';
export interface Props {
    className?: string;
    onReady?: (canvas: fabric.Canvas) => void;
}
/**
 * Fabric canvas as component
 */
declare const FabricJSCanvas: ({ className, onReady }: Props) => JSX.Element;
export { FabricJSEditor, FabricJSCanvas, FabricJSEditorHook, useFabricJSEditor };
