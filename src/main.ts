import type { CanvasAddonMountContext } from '../generated/mywallpaper-runtime'
import { bind } from './bindings'
import './style.css'
export function mount(context: CanvasAddonMountContext) {
  const node = document.createElement('div'); node.className = 'surface'; context.layer.root.replaceChildren(node)
  const stop = bind(context, values => { node.style.backgroundColor = String(values.color ?? '#111719') })
  return () => { stop(); node.remove() }
}
