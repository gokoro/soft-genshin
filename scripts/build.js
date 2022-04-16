import { build } from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'

await build({
  plugins: [pnpPlugin()],
  bundle: true,
  entryPoints: ['src/worker.ts'],
  outfile: 'dist/worker.js',
  format: 'esm',
  minify: true,
})
