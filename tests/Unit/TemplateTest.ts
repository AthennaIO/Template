/**
 * @athenna/template
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Bootstrap } from '#src'
import { test } from '@japa/runner'

test.group('TemplateTest', group => {
  group.setup(() => {})
  group.each.setup(() => {})
  group.teardown(() => {})
  group.each.teardown(() => {})

  test('should be able to create and run tests with this template', async ({ assert }) => {
    assert.equal(Bootstrap.main('Hello', 'World!'), 'Bootstrap: Hello World!')
  })
})
