import classNames from 'classnames'
import { playerLetters } from './constants'

type PlayerProps = {
  players: number[]
}

const Player = ({ players }: PlayerProps) => {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Player</th>
          <th className="w-auto px-4 py-2">Turn</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => {
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
                {playerLetters[player]}
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
                {player + 1}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Player
