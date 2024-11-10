import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className="container">
      <h2 className="title">Transactions History</h2>
      <table className={s.table}>
        <thead>
          <tr className={s.header}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id} className={s.row}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
