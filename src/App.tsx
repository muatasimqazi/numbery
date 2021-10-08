import React from 'react'
import * as _ from 'lodash'
import classNames from 'classnames'
import Navbar from './Navbar'
import Player from './Player'

const App = () => {
  const [totalPlayers, setTotalPlayers] = React.useState(0)
  const [btnDisabled, setBtnDisabled] = React.useState(true)
  const [players, setPlayers] = React.useState<number[]>([])
  const [error, setError] = React.useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setTotalPlayers(+event.target.value)
    setBtnDisabled(false)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (totalPlayers < 1 || totalPlayers > 26) {
      setError('Total players should be a number between 1 and 26')
    } else {
      setPlayers(_.shuffle(_.range(totalPlayers)))
      setBtnDisabled(true)
    }
  }

  return (
    <div className="p-5">
      <Navbar />
      <div className="container mx-auto px-4">
        <form className="w-full max-w-sm" onSubmit={onSubmit}>
          <div className="flex items-center border-teal-500 py-2">
            <input
              className="border w-3/4 mr-3 py-3 px-2 leading-tight focus:outline-none"
              name="totalPlayers"
              type="number"
              id="email"
              placeholder="0"
              aria-label="Number of players"
              onChange={onChange}
            />
            <button
              className={classNames(
                {
                  'disabled:opacity-50 bg-blue-100 ': btnDisabled,
                  'bg-blue-700': !btnDisabled,
                },
                'w-1/4  text-white font-bold py-2 px-4 rounded'
              )}
              type="submit"
              disabled={btnDisabled}
            >
              Roll
            </button>
          </div>
        </form>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          {error ? (
            <div className="text-red-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              {error}
            </div>
          ) : (
            players && <Player players={players} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
