import { useGlobalState } from "../context/GlobalState";

export function IncomeExpenses() {
    const { transactions } = useGlobalState();

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <>
            <div className="flex justify-between my-2">
                <h4 className="text-green-400">Income</h4>
                <p className="text-green-400">{income}</p>
            </div>
            <div className="flex justify-between my-2">
                <h4 className="text-red-400">Expense</h4>
                <p className="text-red-400">{expense}</p>
            </div>
        </>
    );
}