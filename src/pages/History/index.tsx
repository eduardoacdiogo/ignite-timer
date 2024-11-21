import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
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
            <tr>
              <td>Task 1</td>
              <td>1h 30m</td>
              <td>10:00</td>
              <td><Status statusColor='green'>Completed</Status></td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>1h 30m</td>
              <td>10:00</td>
              <td><Status statusColor='green'>Completed</Status></td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}