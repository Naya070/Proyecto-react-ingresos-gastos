import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-neutral-950 text-white  flex justify-center items-center w-full">
        <div className="w-2/5 justify-center items-center sm:w-4/5 ">
        <Header />
          <div className="bg-neutral-800 justify-center p-10 rounded-md w-full">
            
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1 items-center justify-center">
                <div className="mb-20">
                  <IncomeExpenses />
                </div>
                <div className="my-20">
                  <Balance />
                </div>
                <div>
                <TransactionForm />
                </div>
              </div>
              <div className="flex-1 flex-col">
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;