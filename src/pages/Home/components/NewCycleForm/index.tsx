import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { CyclesContext } from '../../../../contexts/CyclesContext';

import { FormContainer, TaskInput, MinutesAmountInput } from './styles';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I'm gonna work on</label>
      <TaskInput
        id="task"
        list='task-suggestions'
        placeholder='Give a name to your project'
        disabled={!!activeCycle}
        {...register('task')}
      />

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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}