import type { StatementInterface } from '@/interface/statement.interface';

interface StatementCard1Props {
  data: StatementInterface;
}
export default function StatementCard1({ data }: StatementCard1Props) {
  return (
    <>
      <tr>
        <th scope="row">{data.date}</th>
        <td className="vam">
          {data.type === 1 && (
            <span className="pending-style style4">Service Purchased</span>
          )}
          {data.type === 2 && (
            <span className="pending-style style5">Wallet Topup</span>
          )}
        </td>
        <td className="vam">{data.detail}</td>
        <td className="vam">${data.price}</td>
        <td className="vam">${data.amount}</td>
      </tr>
    </>
  );
}
