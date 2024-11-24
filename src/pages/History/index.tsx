import { useContext } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { CyclesContext } from '../../contexts/CyclesContext';

import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>{formatDistanceToNow(
                  cycle.startDate,
                  { addSuffix: true, locale: ptBR }
                )}</td>
                <td>
                  {cycle.finishedDate && <Status statusColor={'green'}>Completed</Status>}
                  {cycle.interruptedDate && <Status statusColor={'red'}>Interrupted</Status>}
                  {!cycle.finishedDate && !cycle.interruptedDate && <Status statusColor={'yellow'}>Running</Status>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}