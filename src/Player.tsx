import classNames from 'classnames'
import * as _ from 'lodash'
import { playerLetters } from './constants'

type PlayerProps = {
  players: number[]
}

const Player = ({ players }: PlayerProps) => {
  const playersTurns = _.sortBy(
    _.map(players, (player: number, index: number) => ({
      player: playerLetters[player],
      turn: index + 1,
    })),
    (item) => item.player
  )

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Player</th>
          <th className="w-auto px-4 py-2">Turn</th>
        </tr>
      </thead>
      <tbody>
        {playersTurns.map((item, index) => {
          const odd = index % 2 === 1
          return (
            <tr key={index}>
              <td
                className={classNames(
                  {
                    'bg-blue-50': odd,
                    'bg-white': !odd,
                  },
                  'border px-4 py-2'
                )}
              >
                {item.player}
              </td>

              <td
                className={classNames(
                  {
                    'bg-blue-50': odd,
                    'bg-white': !odd,
                  },
                  'border px-4 py-2'
                )}
              >
                {item.turn}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Player
