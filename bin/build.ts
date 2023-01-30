/**
 * @athenna/build
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Path, File, Exec } from '@athenna/common'

/*
|--------------------------------------------------------------------------
| TypeScript build file path
|--------------------------------------------------------------------------
|
| Where the TypeScript build file will be saved.
*/

const path = Path.nodeModules('@athenna/tsconfig.build.json')

/*
|--------------------------------------------------------------------------
| TypeScript Config
|--------------------------------------------------------------------------
|
| The tsconfig options as JSON.
*/

const tsconfigJson = JSON.stringify({
  compilerOptions: {
    strict: false,
    rootDir: '../../src',
    outDir: '../../build',
    module: 'ESNext',
    target: 'ESNext',
    declaration: true,
    skipLibCheck: true,
    esModuleInterop: true,
    removeComments: false,
    resolveJsonModule: true,
    moduleResolution: 'NodeNext',
  },
  include: ['../../src'],
  exclude: ['../../bin', '../../node_modules', '../../tests'],
})
const tsconfig = Buffer.from(tsconfigJson)

/*
|--------------------------------------------------------------------------
| Compilation
|--------------------------------------------------------------------------
|
| Saving the file in some path, deleting old "build" folder, executing
| compilation and deleting the tsconfig file generated.
*/

const file = new File(path, tsconfig)

if (file.fileExists) {
  await file.remove()
}

await file.load()
await Exec.command(`rimraf ../build && tsc --project ${path}`)
await file.remove()
