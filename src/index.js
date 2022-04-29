/**
 * @athennaio/template
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export * from './Test/file.js'

export class Bootstrap {
  /**
   * Executes the application.
   *
   * @param {string[]} args
   * @return {string}
   */
  static main(...args) {
    return `Bootstrap: ${args.join(' ')}`
  }
}
