import { Play } from 'phosphor-react'

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I'm gonna work on</label>
          <TaskInput id="task" list='task-suggestions' placeholder='Give a name to your project' />

          <datalist id='task-suggestions'>
            <option value='Front-end project' />
            <option value='Back-end project' />
            <option value='Mobile project' />
          </datalist>

          <label htmlFor="task">for</label>
          <MinutesAmountInput
            type='number'
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type='submit'>
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}