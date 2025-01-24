/**
 * @athenna/template
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { debug } from '#src/debug'
import { Macroable } from '@athenna/common'

export class Bootstrap extends Macroable {
  /**
   * Executes the application.
   */
  public static main(...args: string[]): string {
    debug('Executing application')

    return `Bootstrap: ${args.join(' ')}`
  }
}
